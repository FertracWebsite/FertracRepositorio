/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CeUtZtD7.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Filtracin = createComponent(($$result, $$props, $$slots) => {
  const title = "Filtraci\xF3n: Protecci\xF3n y Limpieza";
  const descripcion = "Aseg\xFArate de que tu motor funcione sin problemas con nuestros sistemas de filtraci\xF3n de alta eficiencia, que eliminan impurezas y prolongan la vida \xFAtil de los componentes.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-qjlm5ovx": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-qjlm5ovx> <div class=" bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-qjlm5ovx> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Filtraci\xF3n.", "img": "/img/filtraci\xF3n.webp", "data-astro-cid-qjlm5ovx": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-qjlm5ovx> <div class="mb-12" data-astro-cid-qjlm5ovx> <p class="text-justify animacion from-left" data-astro-cid-qjlm5ovx>
Los fluidos vitales de un camión son el aceite, agua, aire y combustible. <br data-astro-cid-qjlm5ovx>
Componentes esenciales para mantener el motor y otros sistemas de tu camión libres de impurezas. Incluyen filtros de aire, aceite, combustible y cabina, diseñados para atrapar partículas dañinas y garantizar un rendimiento óptimo del camión. <br data-astro-cid-qjlm5ovx>
En Fertrac, ofrecemos una amplia gama de repuestos de filtración de las mejores marcas del mercado. Nos comprometemos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera eficiente y segura.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-qjlm5ovx> <img class="w-56" src="/img/logos-proveedores/logo-fleetguard.png" alt="logo Fleetguard" data-astro-cid-qjlm5ovx> </div> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-qjlm5ovx": true })} ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/filtraci\xF3n.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/filtración.astro";
const $$url = "/especialidades/filtración";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Filtracin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
