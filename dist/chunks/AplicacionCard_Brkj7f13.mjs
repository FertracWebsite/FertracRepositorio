import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro } from './astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';

const $$Astro$1 = createAstro();
const $$SubcategoriaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SubcategoriaCard;
  const { subcategoria } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"> <div class="flex items-center gap-4"> <div${addAttribute(`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 duration-300`, "class")}> <img${addAttribute(subcategoria.icon, "src")}${addAttribute(subcategoria.name, "alt")} class="w-12 h-12 object-contain"> </div> <div class="flex-1"> <p class="font-light text-left text-slate-800 text-lg group-hover:text-[#04297e] transition-colors leading-none!"> ${subcategoria.name} </p> </div> </div> </div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/Especialidades/SubcategoriaCard.astro", void 0);

const $$Astro = createAstro();
const $$AplicacionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AplicacionCard;
  const { aplicacion, imageSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 group flex flex-col hover:-translate-y-1"> <div class="p-5 flex flex-col flex-1"> <h4 class="font-bold text-slate-800 text-lg mb-1 line-clamp-1 group-hover:text-[#04297e] transition-colors"> ${aplicacion.brand} </h4> <p class="text-sm text-slate-500 line-clamp-5 leading-relaxed flex-1"> ${aplicacion.models} </p> </div> </div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/Especialidades/AplicacionCard.astro", void 0);

export { $$SubcategoriaCard as $, $$AplicacionCard as a };
