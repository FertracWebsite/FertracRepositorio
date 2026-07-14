/* empty css                                */
import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { $ as $$BotonPrincipal } from '../chunks/BotonesFlotantes_rhDh_o33.mjs';
import { $ as $$FormularioEstructura } from '../chunks/FormularioEstructura_F1KFsAC_.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DJleim-r.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contactanos = createComponent(($$result, $$props, $$slots) => {
  const title = "Cont\xE1ctanos \u2013 Fertrac";
  const descripcion = "Comun\xEDcate con nosotros para recibir asesor\xEDa o m\xE1s informaci\xF3n sobre repuestos para tractocamiones.";
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/scripts/firebase.js"><\/script> <script type="module" is:client>\n  import {\n    configurarEnvioFormulario,\n    configurarValidacionTelefono,\n  } from "/scripts/scriptFormulario.js";\n\n  configurarEnvioFormulario("contactoForm", "template_5903hhf");\n  configurarValidacionTelefono();\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": descripcion }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="xl:mt-48 max-w-screen-xl mx-auto sm:my-8 md:mt-36 lg:px-14 "> <div> <div class="xl:mt-48 sm:mx-4 sm:w-auto lg:w-[1000px] lg:mx-auto sm:pt-8 sm:m-4 lg:pt-0"> <h1 class="lg:!text-center !sm:text-justify mb-4 text-[36px]">
Estamos aqui para ti, Contáctanos en cualquier momento
</h1> <p class="lg:!text-center !sm:text-justify">
Si tienes alguna duda sobre nuestros servicios, no dudes en preguntarnos.
</p> </div> </div> <div id="mercadeo"> ${renderComponent($$result2, "FormularioEstructura", $$FormularioEstructura, { "idBotonForm": "btn-form-general", "id": "mercadeoForm", "tituloForm": "Env\xEDanos tu solicitud", "descripcionForm": "Comparte con nosotros tu mensaje, petici\xF3n o requerimiento. Nuestro equipo revisar\xE1 tu informaci\xF3n y la direccionar\xE1 al \xE1rea correspondiente para brindarte una respuesta clara, oportuna y acorde con tu necesidad.", "imgForm": "/img/area-mercadeo.jpg", "bg": "p-4", "mostrarBanner": true, "mostrarIdentificacion": true, "mostrarEmpresa": true, "mostrarAreaDirigida": true, "mostrarSolicitudGeneral": true, "mostrarTipoPQRS": false, "mostrarArchivo": true })} </div> <div id="loadingSpinner" class="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-[9999] hidden"> ${renderComponent($$result2, "lottie-player", "lottie-player", { "class": "w-24 ", "src": "/animaciones/gear.json", "loop": true, "autoplay": true })} </div> <div id="modalExito" class="fixed z-50 inset-0 flex items-center justify-center bg-black/50 hidden"> <div class="bg-white py-6 px-12 rounded-lg shadow-xl text-center flex flex-col justify-center gap-2"> <h3 class="text-lg !text-center">¡Formulario enviado con éxito!</h3> <p class=" !text-gray-600 !text-center">Tu información ha sido recibida correctamente. <br> Nuestro equipo la revisará y se pondrá en contacto contigo en caso necesario.</p> <div id="cerrarModal" class="mt-4"> ${renderComponent($$result2, "BotonPrincipal", $$BotonPrincipal, { "text": "Cerrar", "icon": "hidden", "estilos": "bg-naranja hover:bg-white hover:text-naranja hover:border border-naranja text-white", "estilosButton": "!w-auto" })} </div> </div> </div> </div> ` }));
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/contactanos.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/contactanos.astro";
const $$url = "/contactanos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contactanos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
