/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { $ as $$HeaderEspecialidades } from '../../chunks/HeaderEspecialidades_BTspf75u.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_Bx9mlvwM.mjs';
import { $ as $$AsesoriaEspecialidades } from '../../chunks/AsesoriaEspecialidades_CVW4Xdk7.mjs';
/* empty css                                                   */
export { renderers } from '../../renderers.mjs';

const $$OtrasEspecialidades = createComponent(($$result, $$props, $$slots) => {
  const title = "Repuestos Complementarios para Tractocamiones - Fertrac";
  const descripcion = "Contamos con repuestos originales y de alta calidad para motores, garantizando un rendimiento excepcional y una larga vida \xFAtil para tus veh\xEDculos de carga.";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "descripci\xF3n": descripcion, "data-astro-cid-6r76yvhf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="" data-astro-cid-6r76yvhf> <div class="flex items-center justify-center flex-wrap sm:p-8 md:flex-row sm:flex-col-reverse bg-cover content-center" style="background-image: url(/img/banner-especialidades.jpg);" data-astro-cid-6r76yvhf> ${renderComponent($$result2, "HeaderEspecialidades", $$HeaderEspecialidades, { "especialidad": "Otras Especialidades", "img": "/img/productos-fertrac.png", "data-astro-cid-6r76yvhf": true })} </div> <div class="flex justify-center flex-col text-center lg:w-[1000px] sm:w-auto lg:mx-auto sm:mx-4 lg:my-12 sm:my-4" data-astro-cid-6r76yvhf> <div class="mb-12" data-astro-cid-6r76yvhf> <p class="text-justify animacion from-left" data-astro-cid-6r76yvhf>
En Fertrac entendemos que cada detalle importa cuando se trata del rendimiento y la seguridad de tu vehículo. Por eso, en nuestra sección de Otras Especialidades reunimos una selección de repuestos y componentes que complementan integralmente tu sistema.
</p> </div> <div class="animacion from-left logos flex flex-wrap justify-center items-center lg:gap-28 sm:gap-8 mx-auto" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-frasle.png" alt="Logo FRASLE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-freightliner.png" alt="Logo FREIGHTLINER" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-international.png" alt="Logo INTERNATIONAL" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-sys.png" alt="Logo NEWSTAR" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-torctite.png" alt="Logo TORCTITE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-bosch.png" alt="Logo BOSCH" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-williams-controls.png" alt="Logo WILLIAMS CONTROLS" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-barksdale.png" alt="Logo BARKSDALE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-alliance.png" alt="Logo ALLIANCE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-fontaine.png" alt="Logo FONTAINE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-sap.png" alt="Logo SAP" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-sprague.png" alt="Logo SPRAGUE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-loctite.png" alt="Logo LOCTITE" data-astro-cid-6r76yvhf> <img src="/img/logos-proveedores/logo-trw.png" alt="Logo TRW" data-astro-cid-6r76yvhf> </div> </div> </div> ${renderComponent($$result2, "AsesoriaEspecialidades", $$AsesoriaEspecialidades, { "data-astro-cid-6r76yvhf": true })} ` })} `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/otras-especialidades.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/otras-especialidades.astro";
const $$url = "/especialidades/otras-especialidades";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OtrasEspecialidades,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
