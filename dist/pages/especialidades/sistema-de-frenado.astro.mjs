/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Bx9mlvwM.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                                 */
export { renderers } from '../../renderers.mjs';

const $$SistemaDeFrenado = createComponent(($$result, $$props, $$slots) => {
  const title = "Sistema de Frenado: Seguridad Ante Todo";
  const descripcion = "Ofrecemos repuestos para sistemas de frenado que garantizan una respuesta r\xE1pida y eficiente, asegurando la seguridad de tus veh\xEDculos de carga en todo momento.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-cas6sdf7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-cas6sdf7> <div class="bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-cas6sdf7> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Sistema de Frenado.", "img": "/img/sistema-de-frenado.webp", "estilo": "lg:w-[] lg:!text-[75px] mx-auto", "data-astro-cid-cas6sdf7": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-cas6sdf7> <div class="mb-12" data-astro-cid-cas6sdf7> <p class="text-justify  animacion from-left" data-astro-cid-cas6sdf7>
Los elementos que proveen la mayor seguridad a cualquier camión, cuya calidad y desempeño determinan la seguridad en las carreteras. 
Componentes como cámaras de aire, calipers, campanas, discos de freno, pastillas y bloques de freno, entre muchos más. Diseñados para asegurar una frenada eficiente y confiable.
En Fertrac, ofrecemos una amplia gama de repuestos de sistema de frenado de las mejores marcas del mercado. Nos comprometemos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera óptima y segura.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-cas6sdf7> <img src="/img/logos-proveedores/logo-wabco.png" alt="Logo WABCO" data-astro-cid-cas6sdf7> <img src="/img/logos-proveedores/logo-vaden.png" alt="Logo VADEN" data-astro-cid-cas6sdf7> <img src="/img/logos-proveedores/logo-meritor.png" alt="Logo Meritor" data-astro-cid-cas6sdf7> <img src="/img/logos-proveedores/logo-frasle.png" alt="Logo FRASLE" data-astro-cid-cas6sdf7> <img src="/img/logos-proveedores/logo-sealco.png" alt="Logo SEALCO" data-astro-cid-cas6sdf7> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-cas6sdf7": true })} </div> ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-frenado.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-frenado.astro";
const $$url = "/especialidades/sistema-de-frenado";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemaDeFrenado,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
