import { c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, a as createAstro } from './astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$BotonPrincipal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BotonPrincipal;
  const { estilos } = Astro2.props;
  const { estilosButton } = Astro2.props;
  const { text } = Astro2.props;
  const { icon } = Astro2.props;
  const { url } = Astro2.props;
  const { enlace } = Astro2.props;
  const { download } = Astro2.props;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`w-full  ${estilosButton} `, "class")}> <a${addAttribute(id, "id")}${addAttribute(download, "download")}${addAttribute(url, "href")}${addAttribute(`font-GTWalsheim inline-flex sm:w-full  lg:w-full sm:justify-center items-center text-center rounded-lg lg:px-8 lg:py-2 leading-[2] sm:px-6 sm:py-1.5 lg:text-[16px] sm:text-[1rem] ${estilos}`, "class")}>${text} <i${addAttribute(`ml-2 ${icon}`, "class")}></i></a> </button>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/BotonPrincipal.astro", void 0);

export { $$BotonPrincipal as $ };
