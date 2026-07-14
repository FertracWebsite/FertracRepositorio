import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { $ as $$BotonPrincipal } from './BotonesFlotantes_rhDh_o33.mjs';

const $$AsesoriaEspecialidades = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex justify-center items-center sm:p-4 sm:py-8 lg:py-24 flex-wrap lg:gap-16 bg-cover  bg-slate-800 gap-4 lg:mt-24 sm:mt-8 bg-[url(/img/trabaja-con-nosotros.jpg)]" style="background-position-x: 73%; background-position-y: center;"> <div class="2xl:w-[29%] xl:w-[48%] lg:w-[45%] sm:w-full gap-4"> <h2 class="!text-white mb-4 !text-left md:px-24 lg:px-8 ">
Envíanos un mensaje. Nuestro equipo te responderá de inmediato.
</h2> <p class="!text-white  md:px-24  lg:px-8">Estamos aquí para ayudarte con cualquier pregunta que puedas tener, brindándote respuestas claras, apoyo técnico y soluciones rápidas.</p> </div> <div class="flex flex-col lg:gap-8 sm:gap-4 lg:w-auto sm:w-full"> ${renderComponent($$result, "BotonPrincipal", $$BotonPrincipal, { "id": "btn-whatsapp-especialidades", "url": "https://api.whatsapp.com/send?phone=573124615606&text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre...", "icon": "fa-brands fa-whatsapp", "text": "Solicita una Cotizaci\xF3n ", "estilos": "bg-naranja hover:bg-white hover:text-naranja hover:border text-white mr-2 " })} </div></div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/AsesoriaEspecialidades.astro", void 0);

export { $$AsesoriaEspecialidades as $ };
