import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, g as renderScript, f as renderSlot, e as renderHead, d as addAttribute } from './astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { $ as $$MegaMenu } from './MegaMenu_6c349kcb.mjs';
import { $ as $$BotonPrincipal, a as $$Footer, b as $$BotonesFlotantes } from './BotonesFlotantes_rhDh_o33.mjs';
import { $ as $$CardsBlog } from './CardsBlog_DRI-drwV.mjs';
/* empty css                                                             */

const $$Astro$1 = createAstro();
const $$UltimosPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UltimosPost;
  const postList = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/posts/Daños frecuentes en las camisas del motor.md": () => import('./Daños frecuentes en las camisas del motor_AOYCoCYF.mjs').then(n => n._),"/src/pages/posts/Daños frecuentes en los pistones del motor.md": () => import('./Daños frecuentes en los pistones del motor_B6NgRLBl.mjs').then(n => n._),"/src/pages/posts/El Fan Clutch.md": () => import('./El Fan Clutch_CRupLW2m.mjs').then(n => n._),"/src/pages/posts/Fatiga en los rodamientos, El enemigo silencioso que amenaza la productividad de su operación.md": () => import('./Fatiga en los rodamientos_ El enemigo silencioso que amenaza la productividad de su operación_DfN_WQcK.mjs').then(n => n._),"/src/pages/posts/Filtros Fleetguard, La primera línea de defensa para su flota.md": () => import('./Filtros Fleetguard_ La primera línea de defensa para su flota_wkbZqpGx.mjs').then(n => n._),"/src/pages/posts/Guías de Válvulas en Perfecto Estado.md": () => import('./Guías de Válvulas en Perfecto Estado_B6P9ThJf.mjs').then(n => n._),"/src/pages/posts/La Revolución en el Sistema de Cardan.md": () => import('./La Revolución en el Sistema de Cardan_3XjtaMNg.mjs').then(n => n._),"/src/pages/posts/La evolución de los pistones.md": () => import('./La evolución de los pistones_DrAUuvC0.mjs').then(n => n._),"/src/pages/posts/Los multiples del Motor.md": () => import('./Los multiples del Motor_Dc6Mlvcu.mjs').then(n => n._),"/src/pages/posts/Por qué tu sistema de frenos necesita un secador de aire.md": () => import('./Por qué tu sistema de frenos necesita un secador de aire_VNULX5Dd.mjs').then(n => n._),"/src/pages/posts/Tipos de Suspensión en Tractocamiones y Camiones.md": () => import('./Tipos de Suspensión en Tractocamiones y Camiones_BlNNebFF.mjs').then(n => n._),"/src/pages/posts/por que la electrovalvula del fanclutch presenta problemas.md": () => import('./por que la electrovalvula del fanclutch presenta problemas_B_VCLA5A.mjs').then(n => n._)}), () => "/src/pages/posts/*.md");
  const postsArray = Object.values(postList).map((post) => ({
    title: post.frontmatter.title,
    previewText: post.frontmatter.previewText,
    image: post.frontmatter.image,
    pubDate: new Date(post.frontmatter.pubDate),
    // Convertir a objeto Date
    tags: post.frontmatter.tags,
    url: post.url,
    tiempoLectura: post.frontmatter.tiempoLectura
  })).sort((a, b) => b.pubDate - a.pubDate);
  const latestPosts = postsArray.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl 2xl:max-w-[1500px] xl:max-w-[1300px] mx-auto sm:my-8 md:my-16 2xl:px-0 lg:px-4"> <div class=" md:mb-4 sm:p-4"> <div class="flex mb-4 items-center !md:justify-left lg:justify-start gap-4"> <h2>Blog</h2> ${renderComponent($$result, "BotonPrincipal", $$BotonPrincipal, { "url": "/blog/", "text": "Visitar", "id": "seccion-blog-boton", "estilos": "bg-naranja hover:bg-transparent hover:text-naranja hover:border border-naranja text-white !text-base ", "estilosButton": "!w-auto", "icon": "fa-solid fa-book" })} </div> <p class="md:w-[600px] sm:w-auto text-azul">Visita nuestro blog y mantente al día con consejos, novedades y tendencias que harán que tu camión siempre esté en su mejor forma. ¡No te lo pierdas!</p> <hr class="mt-4 h-1 bg-naranja"> <ul class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 2xl:gap-8 md:gap-8 pt-4"> ${latestPosts.map((post) => renderTemplate`<li>${renderComponent($$result, "CardsBlog", $$CardsBlog, { "title": post.title, "image": post.image, "url": post.url, "previewText": post.previewText, "pubDate": post.pubDate, "tags": post.tags, "tiempoLectura": post.tiempoLectura })}</li>`)} </ul> </div> </div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/Blog/UltimosPost.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  const { descripcion } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descripcion"', '><meta name="generator"', "><title>", '</title><link rel="icon" href="/img/favicon.png" type="image/x-icon"><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Light.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Black.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><!-- Google Tag Manager --><script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "GTM-WCS7HB46");\n    <\/script><!-- End Google Tag Manager --><script src="https://static.elfsight.com/platform/platform.js" async><\/script>', '</head> <body class="overflow-x-hidden"> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCS7HB46" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <header class=""> ', ' </header> <main class="sm:mt-[90px] md:mt-[120px] lg:mt-0"> ', " ", " ", " </main> <footer> ", " </footer> ", ' <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"><\/script> ', " ", " </body></html>"])), addAttribute(descripcion, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "MegaMenu", $$MegaMenu, { "positionNav": "fixed top-0 left-0 w-full z-50", "bgNav": "white" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "BotonesFlotantes", $$BotonesFlotantes, {}), renderComponent($$result, "UltimosPost", $$UltimosPost, {}), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/MainLayout.astro?astro&type=script&index=1&lang.ts"), renderScript($$result, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/MainLayout.astro?astro&type=script&index=2&lang.ts"));
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
