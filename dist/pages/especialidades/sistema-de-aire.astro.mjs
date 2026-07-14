/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Bx9mlvwM.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$SistemaDeAire = createComponent(($$result, $$props, $$slots) => {
  const title = "Sistema de Aire: Eficiencia en el Rendimiento";
  const descripcion = "Mant\xE9n el rendimiento de tu cami\xF3n con nuestros sistemas de aire de calidad, que mejoran la eficiencia y reducen el consumo de combustible.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-c3ipgwki": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-c3ipgwki> <div class="bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-c3ipgwki> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Sistema de Aire.", "img": "/img/sistema-de-aire.webp", "data-astro-cid-c3ipgwki": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-c3ipgwki> <div class="mb-12" data-astro-cid-c3ipgwki> <p class="text-justify  animacion from-left" data-astro-cid-c3ipgwki>
Como el aceite al motor, el aire comprimido es el componente esencial del sistema de frenado y de suspensión de la mayoría de vehículos de carga de carga pesada. 
Componentes como compresores de aire, válvulas de levantamiento, cámaras de aire, calipers, racks, campanas, discos de freno, pastillas de freno, entre muchos más. Diseñados para asegurar una frenada eficiente y confiable.
En Fertrac, ofrecemos una amplia gama de repuestos de sistema de aire y frenado de las mejores marcas del mercado. Nos comprometemos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera óptima y segura.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-c3ipgwki> <img src="/img/logos-proveedores/logo-wabco.png" alt="Logo WABCO" data-astro-cid-c3ipgwki> <img src="/img/logos-proveedores/logo-vaden.png" alt="Logo VADEN" data-astro-cid-c3ipgwki> <img src="/img/logos-proveedores/logo-meritor.png" alt="Logo MERITOR" data-astro-cid-c3ipgwki> <img src="/img/logos-proveedores/logo-frasle.png" alt="Logo FRASLE" data-astro-cid-c3ipgwki> <img src="/img/logos-proveedores/logo-sealco.png" alt="Logo SEALCO" data-astro-cid-c3ipgwki> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-c3ipgwki": true })} </div> ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-aire.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-aire.astro";
const $$url = "/especialidades/sistema-de-aire";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemaDeAire,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
