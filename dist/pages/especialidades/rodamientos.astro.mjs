/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Bx9mlvwM.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Rodamientos = createComponent(($$result, $$props, $$slots) => {
  const title = "Rodamientos: Durabilidad y Fiabilidad";
  const descripcion = "Nuestros rodamientos est\xE1n dise\xF1ados para soportar condiciones extremas, asegurando un funcionamiento suave y duradero de tus veh\xEDculos de carga pesados.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-ardsp2ot": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-ardsp2ot> <div class="bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-ardsp2ot> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Rodamiento.", "img": "/img/rodamientos.webp", "data-astro-cid-ardsp2ot": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-ardsp2ot> <div class="mb-12" data-astro-cid-ardsp2ot> <p class="text-justify animacion from-left" data-astro-cid-ardsp2ot>
Cualquier parte que dé vueltas y que lleve una carga debe llevar algún tipo de rodamiento para asegurar su durabilidad, estabilidad y eficiencia. 
Componentes como rodamientos de bolas, rodamientos cónicos, rodamientos de agujas, rodillos pilotos, diseñados para soportar cargas y mejorar el rendimiento general del camión. 
También conocidos como rodillos, balineras, cojinetes, casquillo, entre otros. 
No todos los rodamientos tienen elementos que rotan, pueden tener materiales de muy baja fricción o una capa de fluido lubricante que actúa como rodamiento. 
En Fertrac, ofrecemos una amplia gama de repuestos de rodamientos de las mejores marcas del mercado. Nos comprometemos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera óptima y fiable.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-ardsp2ot> <img class="w-56" src="/img/logos-proveedores/logo-timken.png" alt="Logo Timken" data-astro-cid-ardsp2ot> <img class="w-56" src="/img/logos-proveedores/logo-fersa.png" alt="Logo Fersa" data-astro-cid-ardsp2ot> <img class="w-56" src="/img/logos-proveedores/logo-meritor.png" alt="Logo Meritor" data-astro-cid-ardsp2ot> <img class="w-56" src="/img/logos-proveedores/logo-link-belt.png" alt="Logo Link-Belt" data-astro-cid-ardsp2ot> <img class="w-56" src="/img/logos-proveedores/logo-skf.png" alt="Logo SKF" data-astro-cid-ardsp2ot> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-ardsp2ot": true })} </div> ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/rodamientos.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/rodamientos.astro";
const $$url = "/especialidades/rodamientos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rodamientos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
