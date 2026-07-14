/* empty css                                   */
import { c as createComponent, b as addAttribute, e as renderHead, d as renderComponent, f as renderSlot, r as renderTemplate, a as createAstro, m as maybeRenderHead, g as renderScript } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_C5CQq_dh.mjs';
import { $ as $$MegaMenu } from '../../chunks/MegaMenu_CybcZAZ_.mjs';
/* empty css                                                                        */
/* empty css                                     */
import { $ as $$SubcategoriaCard, a as $$AplicacionCard } from '../../chunks/AplicacionCard_Brkj7f13.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro();
const $$EspecialidadDashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$EspecialidadDashboardLayout;
  const { title = "Especialidad", descripcion } = Astro2.props;
  Astro2.url.pathname;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descripcion"${addAttribute(descripcion || "Especialidad en Fertrac", "content")}><title>${title} | Fertrac Especialidades</title><link rel="icon" href="/img/favicon.png" type="image/x-icon"><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Light.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Black.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">${renderHead()}</head> <body class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden min-h-screen w-full flex lg:px-32 sm:px-4 gap-8 lg:mt-48 sm:mt-32"> ${renderComponent($$result, "MegaMenu", $$MegaMenu, { "positionNav": "fixed top-0 left-0 w-full z-50", "bgNav": "white" })} <!-- Contenido Principal --> <div class="flex-1 flex flex-col min-h-screen relative overflow-hidden"> <!-- Main Slot --> <main class="flex-1 overflow-y-auto custom-scrollbar relative"> ${renderSlot($$result, $$slots["default"])} </main> </div> <!-- Sidebar Derecho --> <aside class="w-[25rem] bg-white border-l border-slate-200 hidden lg:flex flex-col h-screen sticky top-0"> <div class="soporte w-full space-y-6 px-6 py-10 overflow-y-auto custom-scrollbar"> <!-- Card Estilo Perfil / Contacto ("Weekly Streak" style) con fondo naranja premium --> <div class="relative overflow-hidden bg-gradient-to-br from-naranja to-[#d66503] rounded-[28px] p-6 shadow-xl shadow-naranja/20 border border-naranja/20 flex flex-col items-center text-center group"> <!-- Decoraciones de fondo (blobs glassmorphic) --> <div class="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none"></div> <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div> <div class="w-full flex justify-between items-center mb-6 text-white/80 relative z-10"> <span class="text-xs font-black uppercase tracking-widest text-white/95">Soporte Especializado</span> <i class="fa-solid fa-circle-info cursor-pointer hover:text-white transition-colors"></i> </div> <div class="relative mb-5 group/avatar relative z-10"> <div class="w-20 h-20 bg-white rounded-full flex items-center justify-center text-naranja text-3xl shadow-lg border-4 border-white/20 relative z-10 group-hover/avatar:scale-105 transition-transform duration-300"> <i class="fa-solid fa-headset"></i> </div> <!-- Animación de onda (ping) en color blanco --> <div class="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-60"></div> </div> <h3 class="!text-white font-black text-2xl mb-2 tracking-tight relative z-10">
Equipo Fertrac
</h3> <p class="text-sm font-light text-white/90 mb-6 px-2 leading-relaxed relative z-10">
Expertos en repuestos para tractocamión a tu disposición.
</p> <div class="w-full flex items-center justify-center gap-8 mb-6 bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl relative z-10"> <div class="text-center"> <span class="flex items-center justify-center gap-1.5 text-lg font-black text-white"> <i class="fa-solid fa-fire text-amber-300 text-sm"></i> 24/7
</span> <span class="text-[10px] text-white/70 font-bold uppercase tracking-wider block mt-0.5">Atención</span> </div> <div class="w-px h-10 bg-white/20"></div> <div class="text-center"> <span class="flex items-center justify-center gap-1.5 text-lg font-black text-white"> <i class="fa-solid fa-tags text-white/80 text-sm"></i> +15
</span> <span class="text-[10px] text-white/70 font-bold uppercase tracking-wider block mt-0.5">Marcas</span> </div> </div> <button class="w-full bg-white hover:bg-orange-50 text-azul font-black py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2.5 text-sm relative z-10"> <i class="fa-brands fa-whatsapp text-emerald-600 text-xl"></i> Chatear
            ahora
</button> </div> </div> </aside>  </body> </html>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/EspecialidadDashboardLayout.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { image, name, aplication } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="swiper-slide group w-[50px] overflow-hidden rounded-[28px] bg-[#f2790c] p-[8px] shadow-[0_10px_30px_rgba(0,0,0,0.18)]"> <div class="relative flex h-[275px] items-center justify-center rounded-[22px] bg-[#f2f2f2]"> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} class="h-auto w-[250px] object-cover"> </div> <div class="py-3"> <p class="my-1 text-base text-white/80 text-center"> ${name} </p> <h3 class="text-base font-semibold leading-none text-white text-center"> ${aplication} </h3> </div> </div>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/ProductCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProductsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductsCarousel;
  const { products } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full min-w-0" data-astro-cid-6ly44mgg> <div class="swiper products-swiper w-full overflow-hidden" data-astro-cid-6ly44mgg> <div class="swiper-wrapper" data-astro-cid-6ly44mgg> ${products.map(
    (product) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { ...product, "data-astro-cid-6ly44mgg": true })}`
  )} </div> </div> <div class="swiper-button-next products-next" data-astro-cid-6ly44mgg></div> <div class="swiper-button-prev products-prev" data-astro-cid-6ly44mgg></div> </div>  ${renderScript($$result, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/ProductsCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/components/ProductsCarousel.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const especialidadesEntries = await getCollection("especialidades");
  return especialidadesEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { data } = entry;
  const {
    title,
    subtitle,
    description,
    brands,
    applications,
    subcategories,
    heroImage,
    featuredProducts
  } = data;
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$EspecialidadDashboardLayout, { "title": title, "descripcion": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8 lg:space-y-10"> <!-- Hero Section (Title + Description) --> <section> <div class="bg-white rounded-[24px] p-6 md:p-8 lg:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 lg:gap-2 items-center relative overflow-hidden group"> <div class="flex-1 relative z-10 space-y-4"> <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight bg-naranja p-8 border-4 border-amber-700"> ${title} </h1> <p class="text-azul font-black text-xl leading-snug"> ${subtitle} </p> <p class="text-slate-600 leading-relaxed text-lg md:text-lg max-w-xl"> ${description} </p> <div class="pt-2"> <button class="bg-[#04297e] hover:bg-[#031d59] text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-[#04297e]/20 active:scale-95 flex items-center gap-2 text-sm">
Descargar Catálogo <i class="fa-solid fa-download"></i> </button> </div> </div> ${heroImage && renderTemplate`<div class="w-full md:w-5/12 relative z-10 bg-naranja  border-amber-700 rounded-2xl"> <div class="rounded-2xl overflow-hidden shadow-md  border-amber-700 aspect-video md:aspect-[4/3] border-4 "> <img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"> </div> </div>`} </div> </section> <!-- Contenedor Unificado de 3 Columnas --> <div class="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-slate-100"> <div class="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:divide-x divide-slate-200"> <!-- Subcategorías (Simulando "Continue Learning" Cards) --> <section class="flex-1 pb-8 lg:pb-0 lg:pr-8 border-r"> <div class="flex items-center gap-2 mb-6"> <div class="w-1 h-6 bg-[#f2790c] rounded-full"></div> <h2 class="text-lg font-bold text-slate-800 tracking-tight m-0 leading-none">
Subcategorías Destacadas
</h2> </div> <div class="grid grid-cols- sm:grid-cols-3 lg:grid-cols-2 gap-2"> ${subcategories.map((subcat) => renderTemplate`${renderComponent($$result2, "SubcategoriaCard", $$SubcategoriaCard, { "subcategoria": subcat })}`)} </div> </section> <!-- Marcas --> <section class="flex-1 py-8 lg:py-0 lg:px-8 border-t border-b border-slate-100 lg:border-none"> <div class="flex items-center gap-2 mb-6"> <div class="w-1 h-6 bg-[#f2790c] rounded-full"></div> <h2 class="text-lg font-bold text-slate-800 tracking-tight m-0 leading-none">
Marcas Compatibles
</h2> </div> <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3"> ${brands.slice(0, 17).map((marca) => renderTemplate`<div class="flex items-center justify-center h-16 w-full p-4 text-center bg-slate-50/50 hover:bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-[16px] transition-all cursor-pointer group hover:-translate-y-1"> ${marca.logo ? renderTemplate`<img${addAttribute(marca.logo, "src")}${addAttribute(marca.name, "alt")} class="max-w-full max-h-10 object-contain group-hover:scale-110 transition-transform">` : renderTemplate`<span class="font-black text-[#04297e] text-sm bg-[#04297e]/5 w-full h-full rounded flex items-center justify-center py-2"> ${marca.name.substring(0, 2).toUpperCase()} </span>`} </div>`)} </div> </section> <!-- Aplicaciones (Simulando "Recommended Courses") --> <section class="flex-1 pt-8 lg:pt-0 lg:pl-8"> <div class="flex items-center justify-between mb-6"> <div class="flex items-center gap-2"> <div class="w-1 h-6 bg-[#f2790c] rounded-full"></div> <h2 class="text-lg font-bold text-slate-800 tracking-tight m-0 leading-none">
Aplicaciones por Marca
</h2> </div> <a href="#" class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-500 hover:bg-[#04297e] hover:text-white transition-colors border border-slate-100"></a> </div> <div class="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-2 gap-5"> ${applications.slice(0, 17).map((app) => renderTemplate`${renderComponent($$result2, "AplicacionCard", $$AplicacionCard, { "aplicacion": app, "imageSrc": app.image || heroImage })}`)} </div> </section> </div> </div> <!-- Productos Recomendados Carousel Section --> <section class="bg-white rounded-[24px] p-6 lg:p-8 shadow-sm border border-slate-100"> <div class="flex items-center gap-2 mb-6"> <div class="w-1 h-6 bg-[#f2790c] rounded-full"></div> <h2 class="text-lg font-bold text-slate-800 tracking-tight m-0 leading-none">
Productos Recomendados
</h2> </div> <div class="w-full min-w-0"> ${renderComponent($$result2, "ProductsCarousel", $$ProductsCarousel, { "products": featuredProducts })} </div> </section> </div> ` })}`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades-visual/[slug].astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades-visual/[slug].astro";
const $$url = "/especialidades-visual/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
