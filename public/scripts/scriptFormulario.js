// --- Importaciones Firebase ---
import { db, storage } from "/src/scripts/firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// --- Inicializar EmailJS ---
(function () {
  emailjs.init("zu2IlUo6ajuBYDTzR"); // 🔑 reemplaza con tu Public Key de EmailJS
})();

// --- Subir archivo a Firebase Storage ---
async function subirArchivo(file) {
  try {
    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    console.error("Error subiendo archivo:", error);
    return null;
  }
}

// --- Configurar envío del formulario ---
export function configurarEnvioFormulario(formId, templateID) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.onsubmit = async (event) => {
    event.preventDefault();

    try {
      const coleccion = form.dataset.coleccion;
      if (!coleccion) {
        console.error("No se encontró el atributo data-coleccion");
        return;
      }

      const formData = new FormData(form);
      const datos = {};

      // 📂 Subir archivo si existe
      const file = form.querySelector("input[name=documento]")?.files[0];
      if (file) {
        const fileUrl = await subirArchivo(file);
        if (fileUrl) datos.documentoUrl = fileUrl;
      }

      // 📝 Guardar en Firestore
      formData.forEach((value, key) => {
        if (key !== "documento") datos[key] = value;
      });
      datos.fecha = serverTimestamp();

      await addDoc(collection(db, coleccion), datos);
      console.log(`📦 Formulario enviado a la colección: ${coleccion}`);

      // ⚡ EmailJS
      const btn = form.querySelector("button[type=submit]");
      if (btn) btn.textContent = "Enviando...";

      const fileInput = form.querySelector("input[name=documento]");
      if (fileInput) {
        fileInput.remove();
        if (datos.documentoUrl) {
          datos.link_archivo = datos.documentoUrl;
        }
      }

      await emailjs.sendForm("default_service", templateID, form);

      let tiempo_respuesta ="";

      if (datos.tipo_queja === "Petición") {
        tiempo_respuesta = "30 días hábiles"
      } else {
        tiempo_respuesta = "15 días hábiles"
      }

      // ⚡ Correo de confirmación (solo PQRS)
      if (formId === "pqrsForm") {
        await emailjs.send("default_service", "template_tltyr7n", {
          nombres: datos.nombres,
          apellidos: datos.apellidos,
          tipo_queja: datos.tipo_queja,
          tiempo_respuesta: tiempo_respuesta,
          email: datos.email,
          message:
            "Tu solicitud fue recibida por Fertrac. Te daremos respuesta en el tiempo establecido.",
        });
        console.log("📧 Correo de confirmación enviado al usuario");
      }

      if (btn) btn.textContent = "Enviar";
      console.log("✅ Correo enviado con EmailJS");

      // 🎉 Modal de éxito
      const modal = document.getElementById("modalExito");
      if (modal) {
        modal.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");

        document.getElementById("cerrarModal")?.addEventListener("click", () => {
          modal.classList.add("hidden");
          document.body.classList.remove("overflow-hidden");
        });
      }

      form.reset();
    } catch (error) {
      console.error("❌ Error al enviar el formulario:", error);
      alert("Ocurrió un error al enviar. Intenta de nuevo.");
    }
  };
}

// --- Validación del teléfono ---
export function configurarValidacionTelefono() {
  document.querySelectorAll("input[name=telefono]").forEach((telefonoInput) => {
    telefonoInput.addEventListener("input", (e) => {
      let valor = e.target.value.replace(/\D/g, "");
      if (valor.length > 10) valor = valor.slice(0, 10);

      let formateado = "";
      if (valor.length <= 3) {
        formateado = valor;
      } else if (valor.length <= 6) {
        formateado = valor.substring(0, 3) + " " + valor.substring(3);
      } else {
        formateado =
          valor.substring(0, 3) +
          " " +
          valor.substring(3, 6) +
          " " +
          valor.substring(6);
      }

      e.target.value = formateado;
    });
  });
}
