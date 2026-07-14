/* empty css                                   */
import { c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, b as createAstro, r as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_Bz_GtvD-.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_7UCREDR0.mjs';
import 'clsx';
/* empty css                                                                        */
/* empty css                                     */
import { $ as $$SubcategoriaCard, a as $$AplicacionCard } from '../../chunks/AplicacionCard_CqGOgYVk.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$EspecialidadDashboardLayoutEjemplo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EspecialidadDashboardLayoutEjemplo;
  const { title, descripcion } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descripcion"${addAttribute(descripcion || "Especialidad en Fertrac", "content")}><title>${title} | Fertrac Especialidades</title><link rel="icon" href="/img/favicon.png" type="image/x-icon"><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Light.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Black.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">${renderHead()}</head> <body class="bg-slate-50 text-slate-800 antialiased overflow-x-hidden min-h-screen flex"> <!-- Sidebar Izquierdo --> <aside class="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col h-screen sticky top-0"> <div class="p-6"> <a href="/" class="text-2xl font-black text-[#04297e] flex items-center gap-2 hover:opacity-80 transition-opacity"> <i class="fa-solid fa-truck-fast text-[#f2790c]"></i>
Fertrac
</a> </div> <nav class="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar"> <p class="text-xs font-bold text-slate-400 mb-4 px-2 tracking-wider">MENÚ PRINCIPAL</p> <a href="#" class="flex items-center gap-3 px-4 py-3 bg-orange-50 text-[#f2790c] rounded-xl font-bold transition-colors"> <i class="fa-solid fa-border-all"></i>
Resumen
</a> <a href="/especialidades-visual/motor" class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#04297e] hover:bg-slate-50 rounded-xl font-medium transition-colors"> <i class="fa-solid fa-cogs"></i>
Motor
</a> <a href="/especialidades-visual/transmision" class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#04297e] hover:bg-slate-50 rounded-xl font-medium transition-colors"> <i class="fa-solid fa-gear"></i>
Transmisión
</a> <a href="#" class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#04297e] hover:bg-slate-50 rounded-xl font-medium transition-colors"> <i class="fa-solid fa-shield-halved"></i>
Frenos
</a> <a href="#" class="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-[#04297e] hover:bg-slate-50 rounded-xl font-medium transition-colors"> <i class="fa-solid fa-truck-front"></i>
Suspensión
</a> </nav> <!-- Banner Inferior (Promo) --> <div class="p-4 mt-auto"> <div class="bg-gradient-to-br from-[#f2790c] to-orange-400 rounded-2xl p-5 text-white relative overflow-hidden shadow-lg shadow-orange-200"> <div class="relative z-10"> <h4 class="font-bold mb-1">¿Necesitas Asesoría?</h4> <p class="text-sm text-orange-50 mb-3">Contacta a un experto en repuestos.</p> <button class="bg-white text-[#f2790c] text-sm font-bold py-2 px-4 rounded-xl w-full hover:bg-slate-50 transition-colors">Contactar</button> </div> <!-- Decorative shapes --> <div class="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div> </div> </div> </aside> <!-- Contenido Principal --> <div class="flex-1 flex flex-col min-h-screen relative overflow-hidden"> <!-- Topbar --> <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-20"> <div class="flex items-center gap-4"> <button class="lg:hidden text-slate-500 hover:text-[#04297e]"> <i class="fa-solid fa-bars text-xl"></i> </button> <h2 class="text-xl font-bold text-[#04297e] hidden sm:block">${title}</h2> </div> <div class="flex items-center gap-6"> <div class="relative hidden md:block group"> <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#f2790c] transition-colors"></i> <input type="text" placeholder="Buscar repuestos, marcas..." class="pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#f2790c]/20 focus:border-[#f2790c] w-72 transition-all"> </div> <div class="flex items-center gap-4"> <button class="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-[#04297e] hover:bg-slate-100 flex items-center justify-center transition-colors relative"> <i class="fa-regular fa-bell"></i> <span class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span> </button> <div class="w-10 h-10 rounded-full bg-[#04297e] border-2 border-white shadow-sm text-white flex items-center justify-center font-bold cursor-pointer hover:bg-[#031d59] transition-colors">
FT
</div> </div> </div> </header> <!-- Main Slot --> <main class="flex-1 p-6 lg:p-8 overflow-y-auto custom-scrollbar relative"> ${renderSlot($$result, $$slots["default"])} </main> </div>  </body> </html>`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/layouts/EspecialidadDashboardLayoutEjemplo.astro", void 0);

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
    gallery
  } = data;
  return renderTemplate`${renderComponent($$result, "DashboardLayoutEjemplo", $$EspecialidadDashboardLayoutEjemplo, { "title": title, "descripcion": description }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-col xl:flex-row gap-8"> <!-- Columna Izquierda (Main Content) --> <div class="flex-1 space-y-10"> <!-- Hero Section (Title + Description) --> <section> <div class="mb-6"> <h1 class="text-3xl font-black text-[#04297e] mb-2">${title}</h1> <p class="text-lg text-slate-500 font-medium">${subtitle}</p> </div> <div class="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group"> <div class="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply opacity-50 group-hover:scale-110 transition-transform duration-700"></div> <div class="flex-1 relative z-10"> <h3 class="text-xl font-bold text-slate-800 mb-4">
Información General
</h3> <p class="text-slate-600 leading-relaxed mb-8">${description}</p> <button class="bg-[#04297e] hover:bg-[#031d59] text-white font-bold py-3.5 px-8 rounded-xl transition-all hover:shadow-lg hover:shadow-[#04297e]/20 active:scale-95 flex items-center gap-2">
Descargar Catálogo <i class="fa-solid fa-download"></i> </button> </div> ${heroImage && renderTemplate`<div class="w-full md:w-5/12 relative z-10"> <div class="rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-slate-100"> <img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="w-full object-cover aspect-video md:aspect-[4/3] group-hover:scale-105 transition-transform duration-700"> </div> </div>`} </div> </section> <!-- Subcategorías (Simulando "Continue Learning" Cards) --> <section> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold text-slate-800">
Subcategorías Destacadas
</h2> <a href="#" class="text-[#f2790c] font-bold text-sm hover:underline hover:text-[#d1680a] flex items-center gap-1">
Ver todas <i class="fa-solid fa-angle-right"></i> </a> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${subcategories.slice(0, 12).map((subcat, index) => renderTemplate`${renderComponent($$result2, "SubcategoriaCard", $$SubcategoriaCard, { "subcategoria": subcat, "index": index })}`)} </div> </section> <!-- Aplicaciones (Simulando "Recommended Courses") --> <section> <div class="flex items-center justify-between mb-6"> <h2 class="text-2xl font-bold text-slate-800">
Aplicaciones por Marca
</h2> <a href="#" class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#04297e] hover:text-white transition-colors"> <i class="fa-solid fa-arrow-right"></i> </a> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${applications.map((app, index) => {
    const img = gallery && gallery.length > index ? gallery[index].src : gallery && gallery.length > 0 ? gallery[0].src : heroImage;
    return renderTemplate`${renderComponent($$result2, "AplicacionCard", $$AplicacionCard, { "aplicacion": app, "imageSrc": img })}`;
  })} </div> </section> </div> <!-- Columna Derecha (Right Sidebar del Dashboard) --> <div class="w-full xl:w-[340px] space-y-6"> <!-- Card Estilo Perfil / Contacto ("Weekly Streak" style) --> <div class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center"> <div class="w-full flex justify-between items-center mb-4 text-slate-500"> <span class="text-sm font-bold">Soporte Especializado</span> <i class="fa-solid fa-circle-info cursor-pointer hover:text-[#04297e] transition-colors"></i> </div> <div class="relative mb-4 group"> <div class="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-[#f2790c] text-3xl shadow-inner border-4 border-white relative z-10 group-hover:scale-110 transition-transform"> <i class="fa-solid fa-headset"></i> </div> <!-- Ping animation --> <div class="absolute inset-0 bg-orange-100 rounded-full animate-ping opacity-75"></div> </div> <h3 class="font-bold text-lg text-slate-800 mb-1">Equipo Fertrac</h3> <p class="text-xs text-slate-500 mb-6 px-4">
Expertos en repuestos para tractocamión a tu disposición.
</p> <div class="w-full flex items-center justify-center gap-8 mb-6 bg-slate-50 p-4 rounded-2xl"> <div class="text-center"> <span class="flex items-center gap-1 text-xl font-black text-[#f2790c]"> <i class="fa-solid fa-fire text-sm"></i> 24/7
</span> <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Atención</span> </div> <div class="w-px h-10 bg-slate-200"></div> <div class="text-center"> <span class="flex items-center justify-center gap-1 text-xl font-black text-[#04297e]"> <i class="fa-solid fa-award text-sm"></i> ${brands.length} </span> <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Marcas</span> </div> </div> <button class="w-full bg-slate-50 hover:bg-slate-100 text-[#04297e] font-bold py-3 rounded-xl transition-colors border border-slate-200 flex items-center justify-center gap-2"> <i class="fa-brands fa-whatsapp text-green-500 text-lg"></i> Chatear ahora
</button> </div> <!-- Marcas (Simulando "3 Courses / 17 Courses" o Listas) --> <div class="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100"> <h3 class="font-bold text-slate-800 mb-4 flex items-center justify-between text-lg">
Marcas Compatibles
<div class="flex gap-1"> <button class="w-6 h-6 rounded-md bg-slate-50 text-slate-400 flex items-center justify-center hover:text-[#04297e] transition-colors"><i class="fa-solid fa-angle-left text-xs"></i></button> <button class="w-6 h-6 rounded-md bg-orange-50 text-[#f2790c] flex items-center justify-center hover:bg-orange-100 transition-colors"><i class="fa-solid fa-angle-right text-xs"></i></button> </div> </h3> <div class="space-y-3 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar"> ${brands.map((marca) => renderTemplate`<div class="flex items-center gap-4 p-2.5 bg-slate-50/50 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-2xl transition-all cursor-pointer group"> <div class="w-12 h-12 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center justify-center overflow-hidden p-2 group-hover:shadow-md transition-shadow"> ${marca.logo ? renderTemplate`<img${addAttribute(marca.logo, "src")}${addAttribute(marca.name, "alt")} class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform">` : renderTemplate`<span class="font-black text-[#04297e] text-sm bg-[#04297e]/5 w-full h-full rounded flex items-center justify-center"> ${marca.name.substring(0, 2).toUpperCase()} </span>`} </div> <div class="flex-1"> <span class="block font-bold text-slate-700 text-sm group-hover:text-[#04297e] transition-colors"> ${marca.name} </span> <span class="text-[10px] text-slate-400 font-medium">
Repuestos originales
</span> </div> </div>`)} </div> </div> <!-- Widget Promocional (Simulando Upgrade Card en sidebar izquierdo del dashboard) --> <div class="bg-gradient-to-br from-[#04297e] to-[#0a38a3] rounded-[24px] p-6 shadow-lg shadow-[#04297e]/20 relative overflow-hidden text-white"> <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full mix-blend-overlay"></div> <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-[#f2790c]/20 rounded-full blur-2xl"></div> <div class="relative z-10"> <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl mb-4 border border-white/20"> <i class="fa-solid fa-shield-halved text-[#f2790c]"></i> </div> <h3 class="font-bold text-xl mb-2">Garantía Total</h3> <p class="text-sm text-blue-100 mb-6 leading-relaxed">
Aseguramos la durabilidad y desempeño de tu ${title.toLowerCase()} con
            piezas de la más alta calidad.
</p> <button class="bg-[#f2790c] hover:bg-[#d1680a] text-white font-bold py-3 px-4 rounded-xl text-sm w-full transition-colors shadow-md">
Solicitar Cotización
</button> </div> </div> </div> </div> ` })}`;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/dashboard-visual-ejemplo/[slug].astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/dashboard-visual-ejemplo/[slug].astro";
const $$url = "/dashboard-visual-ejemplo/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
