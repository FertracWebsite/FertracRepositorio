import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent } from './astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */

const $$Astro$1 = createAstro();
const $$BotonBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BotonBlog;
  const { tiempoLectura } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col  text-naranja py-2" data-astro-cid-nifawlto> <span class="lg:text-base sm:text-base text-left" data-astro-cid-nifawlto>Tiempo de lectura aproximado: ${tiempoLectura}</span> <button class="relative effect text-azul py-2 hover:text-azul font-black text-left w-fit text-lg tracking-wide" data-astro-cid-nifawlto>Seguir Leyendo</button> </div> `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/BotonBlog.astro", void 0);

const $$Astro = createAstro();
const $$CardsBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardsBlog;
  const { image, url, title, pubDate, previewText, tags, tiempoLectura } = Astro2.props;
  const formaterFecha = new Date(pubDate).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class=" transition-transform duration-300 lg:hover:scale-110  bg-white" data-astro-cid-qdqebrmc> <a${addAttribute(url, "href")} class="overflow-hidden" data-astro-cid-qdqebrmc> <div class=" h-44" data-astro-cid-qdqebrmc> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" data-astro-cid-qdqebrmc> </div> <div class="flex justify-between items-center py-4" data-astro-cid-qdqebrmc> <time${addAttribute(pubDate, "datetime")} class="text-[#6b7280] font-GTWalsheim text-sm tracking-tight" data-astro-cid-qdqebrmc>${formaterFecha}</time> <span class="text-naranja font-GTWalsheim font-black text-sm uppercase tracking-[0.1em]" data-astro-cid-qdqebrmc>${tags}</span> </div> <h3 class="titulos-blog-card" data-astro-cid-qdqebrmc>${title}</h3> <p id="previewText" class="previewText !text-justify" data-astro-cid-qdqebrmc>${previewText}</p> ${renderComponent($$result, "BotonBlog", $$BotonBlog, { "tiempoLectura": tiempoLectura, "data-astro-cid-qdqebrmc": true })} </a> </article> `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/Blog/CardsBlog.astro", void 0);

export { $$CardsBlog as $ };
