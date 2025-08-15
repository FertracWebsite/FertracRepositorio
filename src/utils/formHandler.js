// formHandler.js
import Swal from "sweetalert2";
import { db, collection, addDoc, serverTimestamp } from "../firebase.js"; // ruta según tu proyecto

export async function enviarFormulario(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita recargar la página

    try {
      const coleccion = form.dataset.coleccion;
      if (!coleccion) throw new Error("No se encontró el atributo data-coleccion");

      const formData = new FormData(form);
      const datos = {};

      // Ignoramos el archivo
      formData.forEach((value, key) => {
        if (key !== "documento") datos[key] = value;
      });

      datos.fecha = serverTimestamp();

      // Guardar en Firestore
      await addDoc(collection(db, coleccion), datos);

      // Mensaje de éxito
      Swal.fire({
        title: "¡Formulario enviado con éxito! 🎉",
        text: "Pronto nos pondremos en contacto.",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3085d6"
      });

      form.reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el formulario. Intenta de nuevo.",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#d33"
      });
    }
  });
}
