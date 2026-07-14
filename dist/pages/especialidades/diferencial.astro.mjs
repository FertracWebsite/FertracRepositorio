/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CeUtZtD7.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                          */
export { renderers } from '../../renderers.mjs';

const $$Diferencial = createComponent(($$result, $$props, $$slots) => {
  const title = "Diferencial: Desempe\xF1o Superior";
  const descripcion = "Ofrecemos diferenciales de alta calidad que garantizan una distribuci\xF3n adecuada de la potencia, mejorando la maniobrabilidad y el rendimiento de tus veh\xEDculos de carga pesados.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-w2rnemvj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-w2rnemvj> <div class="flex items-center justify-center flex-wrap md:flex-row sm:flex-col-reverse bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-w2rnemvj> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Diferencial.", "img": "/img/diferencial.webp", "data-astro-cid-w2rnemvj": true })}</div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-w2rnemvj> <div class="mb-12" data-astro-cid-w2rnemvj> <p class="text-justify  animacion from-left" data-astro-cid-w2rnemvj>
Un sistema que pocos reconocen, pero que presta un servicio vital para el cuidado de todos los componentes del tren motriz, la larga vida de las llantas, la transmisión constante de potencia, la seguridad en la vida y la eficiencia de los vehículos de carga. 
          Componentes esenciales como satelites, planetarios, crucetas, ejes laterales o semi-ejes, diferenciales completos, carcasas, entre muchos otros más. Todos diseñados para garantizar una distribución eficiente de la fuerza del motor a las ruedas.
          En Fertrac, ofrecemos una amplia gama de repuestos de diferencial de las mejores marcas del mercado. Nos dedicamos a proporcionar productos de alta calidad y durabilidad, asegurando que tu camión funcione de manera óptima y fiable.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-sampa.png" alt="Logo SAMPA" data-astro-cid-w2rnemvj> <img src="/img/logos-proveedores/logo-sna.png" alt="Logo de SNA" data-astro-cid-w2rnemvj> <img src="/img/logos-proveedores/logo-national-oil.png" alt="Logo de logo-national-oil" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-spicer.png" alt="Logo SPICER" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-spicer-select.png" alt="Logo SPICER SELECT" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-sys.png" alt="Logo SYS" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-transejes.png" alt="Logo TRANSEJES" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-meritor.png" alt="Logo MERITOR" data-astro-cid-w2rnemvj> <img class="w-56" src="/img/logos-proveedores/logo-pai.png" alt="Logo PAI" data-astro-cid-w2rnemvj> </div> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-w2rnemvj": true })} ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/diferencial.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/diferencial.astro";
const $$url = "/especialidades/diferencial";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diferencial,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
