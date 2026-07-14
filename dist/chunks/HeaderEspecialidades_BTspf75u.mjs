import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro } from './astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$HeaderEspecialidades = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderEspecialidades;
  const { especialidad } = Astro2.props;
  const { img } = Astro2.props;
  const { estilo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center sm:flex-col-reverse md:flex-row sm:mt-[30px] lg:mt-[150px] lg:gap-12 lg:mb-12 sm:gap-0 sm:mb-0"> <img class="animacion from-left md:w-[250px] lg:w-[440px] xl:w-[400px] 2xl:w-[500px]  h-auto "${addAttribute(img, "src")} alt="asd"> <div class="animacion from-left !text-center"> <h1${addAttribute(`!text-white !text-center xl:text-[75px] lg:text-[50px] sm:text-[40px] bg-naranja px-8 py-4 uppercase lg:leading-[75px] [text-shadow:_0_1px_1px_rgb(00_00_00_/1)] ${estilo}`, "class")}>${especialidad} </h1> </div> <!--     <h1 class="animacion from-left !text-white !text-center xl:text-[100px] lg:text-[75px] sm:text-[40px] slide-main--heading lg:!leading-[120px] sm:!leading-normal titulos uppercase w-auto"> <span class={\`text-naranja xl:text-[100px] lg:text-[75px] sm:text-[40px] bg-white px-8\` }> ESPECIALIDAD </span> <br> {especialidad} </h1> --> </div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/HeaderEspecialidades.astro", void 0);

export { $$HeaderEspecialidades as $ };
