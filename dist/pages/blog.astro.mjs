/* empty css                                */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, d as renderComponent } from '../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                */
import { $ as $$BlogLayout } from '../chunks/BlogLayout_DiXLzBXC.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$BotonBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BotonBlog;
  const { tiempoLectura } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col  text-naranja py-2" data-astro-cid-nifawlto> <span class="lg:text-base sm:text-base text-left" data-astro-cid-nifawlto>Tiempo de lectura aproximado: ${tiempoLectura}</span> <button class="relative effect text-azul py-2 hover:text-azul font-black text-left w-fit text-lg tracking-wide" data-astro-cid-nifawlto>Seguir Leyendo</button> </div> `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/BotonBlog.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardsBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardsBlog;
  const { image, url, title, pubDate, previewText, tags, tiempoLectura } = Astro2.props;
  const formaterFecha = new Date(pubDate).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class=" transition-transform duration-300 lg:hover:scale-110  bg-white" data-astro-cid-qdqebrmc> <a${addAttribute(url, "href")} class="overflow-hidden" data-astro-cid-qdqebrmc> <div class=" h-44" data-astro-cid-qdqebrmc> <img${addAttribute(image.url, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" data-astro-cid-qdqebrmc> </div> <div class="flex justify-between items-center py-4" data-astro-cid-qdqebrmc> <time${addAttribute(pubDate, "datetime")} class="text-[#6b7280] font-GTWalsheim text-sm tracking-tight" data-astro-cid-qdqebrmc>${formaterFecha}</time> <span class="text-naranja font-GTWalsheim font-black text-sm uppercase tracking-[0.1em]" data-astro-cid-qdqebrmc>${tags}</span> </div> <h3 class="titulos-blog-card" data-astro-cid-qdqebrmc>${title}</h3> <p id="previewText" class="previewText !text-justify" data-astro-cid-qdqebrmc>${previewText}</p> ${renderComponent($$result, "BotonBlog", $$BotonBlog, { "tiempoLectura": tiempoLectura, "data-astro-cid-qdqebrmc": true })} </a> </article> `;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/Blog/CardsBlog.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const postList = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/posts/Daños frecuentes en las camisas del motor.md": () => import('../chunks/Daños frecuentes en las camisas del motor_Ge1jPAIO.mjs').then(n => n._),"/src/pages/posts/Daños frecuentes en los pistones del motor.md": () => import('../chunks/Daños frecuentes en los pistones del motor_-9TQuuZA.mjs').then(n => n._),"/src/pages/posts/El Fan Clutch.md": () => import('../chunks/El Fan Clutch_CwCXriRr.mjs').then(n => n._),"/src/pages/posts/Fatiga en los rodamientos, El enemigo silencioso que amenaza la productividad de su operación.md": () => import('../chunks/Fatiga en los rodamientos_ El enemigo silencioso que amenaza la productividad de su operación_B7EUV-f9.mjs').then(n => n._),"/src/pages/posts/Filtros Fleetguard, La primera línea de defensa para su flota.md": () => import('../chunks/Filtros Fleetguard_ La primera línea de defensa para su flota_Ctg4uoWZ.mjs').then(n => n._),"/src/pages/posts/Guías de Válvulas en Perfecto Estado.md": () => import('../chunks/Guías de Válvulas en Perfecto Estado_CXReWbMo.mjs').then(n => n._),"/src/pages/posts/La Revolución en el Sistema de Cardan.md": () => import('../chunks/La Revolución en el Sistema de Cardan_B_zutMNQ.mjs').then(n => n._),"/src/pages/posts/La evolución de los pistones.md": () => import('../chunks/La evolución de los pistones_DI_zoTMR.mjs').then(n => n._),"/src/pages/posts/Los multiples del Motor.md": () => import('../chunks/Los multiples del Motor_Df4pNlqd.mjs').then(n => n._),"/src/pages/posts/Por qué tu sistema de frenos necesita un secador de aire.md": () => import('../chunks/Por qué tu sistema de frenos necesita un secador de aire_B6G5f8UE.mjs').then(n => n._),"/src/pages/posts/Tipos de Suspensión en Tractocamiones y Camiones.md": () => import('../chunks/Tipos de Suspensión en Tractocamiones y Camiones_B5b5mG58.mjs').then(n => n._),"/src/pages/posts/por que la electrovalvula del fanclutch presenta problemas.md": () => import('../chunks/por que la electrovalvula del fanclutch presenta problemas_aAzXx0RJ.mjs').then(n => n._)}), () => "/src/pages/posts/*.md");
  const postsArray = Object.values(postList).map((post) => ({
    title: post.frontmatter.title,
    previewText: post.frontmatter.previewText,
    image: post.frontmatter.image,
    pubDate: new Date(post.frontmatter.pubDate),
    tags: post.frontmatter.tags,
    url: post.url,
    tiempoLectura: post.frontmatter.tiempoLectura
  })).sort((a, b) => b.pubDate - a.pubDate);
  const allPosts = postsArray;
  [
    ...new Set(postsArray.flatMap((post) => post.tags || []))
  ].filter(Boolean);
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-screen-xl mx-auto sm:mt-24 md:mt-32"> <div class="2xl:max-w-full mx-auto md:pb-8 2xl:py-16 px-0 lg:gap-12 sm:gap-4 lg:py-12 sm:p-4 sm:pt-8 items-center"> <div class="z-20 flex flex-col items-center justify-center max-w-4xl mx-auto lg:pb-12"> <h1 class="2xl:text-6xl xl:text-5xl lg:text-7xl sm:text-3xl md:text-[48px] md:text-center sm:text-left !leading-[1]">
Descubre el <span class="text-naranja">corazón</span> de cada <span class="text-naranja">tractocamión</span> </h1> <p class="mt-4 lg:!text-center !sm:text-left">
Explora artículos detallados sobre los repuestos esenciales que
          mantienen a los tractocamiones en movimiento. <br> Desde motores hasta
          sistemas de frenos, aquí encuentras la información que impulsa tu ruta
</p> </div> <!--       <CategoryFilter
        categories={categories}
        activeCategory="Todos"
        title="Todos los artículos"
      /> --> <hr class="bg-naranja my-8"> <div class="md:px-4 lg:px-8 xl:px-24 2xl:px-0"> <ul class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-8"> ${allPosts.map((post) => renderTemplate`<li class="blog-post-item transition-opacity duration-300"${addAttribute(post.tags ? post.tags.join(",") : "", "data-tags")}> ${renderComponent($$result2, "CardsBlog", $$CardsBlog, { "title": post.title, "image": post.image, "url": post.url, "previewText": post.previewText, "pubDate": post.pubDate, "tags": post.tags, "tiempoLectura": post.tiempoLectura })} </li>`)} </ul> </div> </div> </div> ` })}`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/blog.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
