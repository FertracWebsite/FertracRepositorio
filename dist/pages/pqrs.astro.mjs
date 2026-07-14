/* empty css                                */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$BotonPrincipal } from '../chunks/BotonPrincipal_DSjP3Lbw.mjs';
import { $ as $$FormularioEstructura } from '../chunks/FormularioEstructura_CJfxnaw4.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_Bx9mlvwM.mjs';
export { renderers } from '../renderers.mjs';

const $$Pqrs = createComponent(($$result, $$props, $$slots) => {
  const title = "PQRS \u2013 Peticiones, Quejas, Reclamos y Sugerencias";
  const descripcion = "Env\xEDanos tus Peticiones, Quejas, Reclamos o Sugerencias.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripcion": descripcion }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="xl:mt-48 max-w-screen-xl mx-auto sm:my-8 md:mt-36 lg:px-14"> <div> <div class="xl:mt-48 sm:mx-4 sm:w-auto lg:mx-auto sm:pt-8 sm:m-4 lg:pt-0"> <h1 class="sm:pb-4 lg:!text-center mx-auto">
Envíanos tus Peticiones, Quejas, Reclamos o Sugerencias.
</h1> <p class="sm:pb-4 lg:!text-center">
Tu opinión es clave para mejorar nuestros servicios, fortalecer la
          confianza y construir juntos un camino de calidad en cada
          experienciaa.
</p> </div> </div> <!-- 🧾 Formulario --> <div id="pqrs"> ${renderComponent($$result2, "FormularioEstructura", $$FormularioEstructura, { "idBotonForm": "btn-form-pqrs", "id": "pqrsForm", "bg": "p-4", "dataColeccion": "formulario_pqrs", "tituloForm": "PQRS", "descripcionForm": "En este espacio podr\xE1s registrar tus Peticiones, Quejas, Reclamos o Sugerencias (PQRS). Nuestro compromiso es escucharte y brindarte una respuesta clara y oportuna.", "imgForm": "/img/pqrs-imagen.jpg", "mostrarBanner": true, "mostrarIdentificacion": true, "mostrarAreaDirigida": false, "mostrarEmpresa": true, "mostrarTipoPQRS": true, "mostrarArchivo": true })} </div> <!-- LOADING SPINNER GLOBAL --> <div id="loadingSpinner" class="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999] hidden"> ${renderComponent($$result2, "lottie-player", "lottie-player", { "class": "w-24", "src": "/animaciones/gear.json", "loop": true, "autoplay": true })} </div> <!-- 🟢 Modal de éxito --> <div id="modalExito" class="fixed z-50 inset-0 flex items-center justify-center bg-white/70 hidden"> <div class="bg-white py-6 px-12 rounded-lg shadow-xl text-center flex flex-col justify-center gap-2"> <h3 class="text-lg !text-center">¡Formulario enviado con éxito!</h3> <p class="!text-gray-600 !text-center">
Tu información ha sido recibida correctamente. <br>
Nuestro equipo la revisará y se pondrá en contacto contigo.
</p> <div id="cerrarModal" class="mt-4"> ${renderComponent($$result2, "BotonPrincipal", $$BotonPrincipal, { "text": "Cerrar", "icon": "hidden", "estilos": "bg-naranja hover:bg-white hover:text-naranja hover:border border-naranja text-white", "estilosButton": "!w-auto" })} </div> </div> </div> </div> ` })}`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/pqrs.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/pqrs.astro";
const $$url = "/pqrs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pqrs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
