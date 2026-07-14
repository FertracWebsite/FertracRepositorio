/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTgieNbg.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DJleim-r.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_B_RlQa9x.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$TrenDelantero = createComponent(($$result, $$props, $$slots) => {
  const title = "Tren Delantero: Manejo y Control";
  const descripcion = "Mejora el manejo y la estabilidad de tus veh\xEDculos de carga pesados con nuestros repuestos para tren delantero, garantizando un rendimiento \xF3ptimo en carretera.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-lienuifz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-lienuifz> <div class="bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-lienuifz> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Tren Delantero.", "img": "/img/tren-delantero.webp", "estilo": "lg:w-[min-content] lg:!text-[75px] mx-auto", "data-astro-cid-lienuifz": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-lienuifz> <div class="mb-12" data-astro-cid-lienuifz> <p class="text-justify animacion from-left" data-astro-cid-lienuifz>
Dirección, suspensión, seguridad, estabilidad. Las funciones principales de este sistema del tren delantero. 
Se compone principalmente de partes como king pines, rodamientos, retenedores, juntas, barras, buje, amortiguadores, y muchos más. 
Todas estas piezas están diseñadas y optimizadas para soportar el peso del camión y asegurar una conducción suave y segura.
En Fertrac, ofrecemos una amplia gama de repuestos para el tren delantero de las mejores marcas del mercado. Garantizamos calidad y durabilidad en cada producto, asegurando que tu camión funcione de manera óptima y segura.
</p> </div> <div class="animacion from-left" data-astro-cid-lienuifz> <div class=" logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-spicer.png" alt="Logo Spicer" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-spicer-select.png" alt="Logo Spicer Select" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-skf.png" alt="Logo SKF" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-elgin.png" alt="Logo Elgin" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-meritor.png" alt="Logo Meritor" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-stemco.png" alt="Logo Stemco" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-timken.png" alt="Logo Timken" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-sna.png" alt="Logo de SNA" data-astro-cid-lienuifz> <img src="/img/logos-proveedores/logo-national-oil.png" alt="Logo de logo-national-oil" data-astro-cid-lienuifz> </div> <div class="lg:text-xl sm:text-base  flex flex-col lg:gap-4 sm:gap-0 items-center sm:mt-8 lg:mt-24" data-astro-cid-lienuifz> <h3 class="bg-azul lg:px-4 lg:py-4 sm:px-2 sm:py-2 sm:mb-4 !text-white !text-center" data-astro-cid-lienuifz>EMPAQUETADURAS CAJAS DE DIRECCIÓN</h3> <img src="/img/logos-proveedores/logo-transtec.png" alt="Logo Transtec" data-astro-cid-lienuifz> </div> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-lienuifz": true })} </div> ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/tren-delantero.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/tren-delantero.astro";
const $$url = "/especialidades/tren-delantero";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TrenDelantero,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
