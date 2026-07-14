/* empty css                                   */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTgieNbg.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DJleim-r.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_B_RlQa9x.mjs';
/* empty css                                                       */
export { renderers } from '../../renderers.mjs';

const $$SistemaDeRefrigeracin = createComponent(($$result, $$props, $$slots) => {
  const title = "Sistema de Refrigeraci\xF3n: Temperatura Controlada";
  const descripcion = "Asegura el funcionamiento \xF3ptimo de tu motor con nuestros sistemas de refrigeraci\xF3n, que previenen el sobrecalentamiento y garantizan un rendimiento constante.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-xjs4xaoa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-xjs4xaoa> <div class="bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-xjs4xaoa> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Sistema de Refrigeraci\xF3n.", "img": "/img/sistema-de-refrigeraci\xF3n.webp", "estilo": "lg:w-[min-content] lg:!text-[75px] mx-auto", "data-astro-cid-xjs4xaoa": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-xjs4xaoa> <div class="mb-12 " data-astro-cid-xjs4xaoa> <p class="text-justify animacion from-left" data-astro-cid-xjs4xaoa>
Todos los fluidos requieren una temperatura óptima para funcionar, sin este sistema no sería posible que el camión opere por largos periodos de tiempo. 
Componentes vitales para mantener todos los fluidos de tu tren motriz a una temperatura óptima y prevenir el sobrecalentamiento del motor, el turbo y la transmisión. Estos incluyen radiadores, termostatos, fluidos, bombas de agua, bombas de aceite, mangueras, entre muchos más.  
En Fertrac, ofrecemos una amplia gama de repuestos de sistema de refrigeración de las mejores marcas del mercado. Nos dedicamos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera eficiente y segura.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-xjs4xaoa> <img class="w-56" src="/img/logos-proveedores/logo-horton.png" alt="Logo Horton" data-astro-cid-xjs4xaoa> <span class="text-6xl" data-astro-cid-xjs4xaoa>Kysor</span> <img class="w-56" src="/img/logos-proveedores/logo-borgwarner.png" alt="Logo Borgwarner" data-astro-cid-xjs4xaoa> <div class="" data-astro-cid-xjs4xaoa> <h3 class="bg-azul lg:px-4 lg:py-4 sm:px-2 sm:py-2 sm:mb-4 !text-white !text-center" data-astro-cid-xjs4xaoa>MANGUERAS DE AIRE</h3> <div class="grid lg:grid-cols-1 xl:grid-cols-1 gap-8 mx-auto sm:mt-4 lg:mt-16 sm:grid-cols-1 justify-items-center" data-astro-cid-xjs4xaoa> <img src="/img/logos-proveedores/logo-flexfab.png" alt="Logo Flexfab" data-astro-cid-xjs4xaoa> </div> </div> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-xjs4xaoa": true })} </div> ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-refrigeraci\xF3n.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/sistema-de-refrigeración.astro";
const $$url = "/especialidades/sistema-de-refrigeración";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SistemaDeRefrigeracin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
