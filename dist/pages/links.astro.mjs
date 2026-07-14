/* empty css                                */
import { c as createComponent, r as renderTemplate, b as addAttribute, e as renderHead } from '../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                                                     */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Links = createComponent(($$result, $$props, $$slots) => {
  const title = "Fertrac | Enlaces";
  const descripcion = "Todo lo que tu veh\xEDculo de carga pesada necesita, lo encuentras aqu\xED.";
  const links = [
    {
      text: "P\xE1gina Web",
      url: "http://fertrac.com/?utm_source=instagram&utm_medium=social&gtm_debug=1777563297608",
      imgIcon: "/img/favicon.png",
      imgBg: "bg-black",
      hasLeftIcon: true,
      id: ""
    },
    {
      text: "Whatsapp",
      url: "https://wa.me/573100000000",
      // TODO: Update with real number
      icon: "fa-brands fa-whatsapp",
      hasLeftIcon: true
    },
    {
      text: "Instagram @fertrac.col",
      url: "https://www.instagram.com/fertrac.col/",
      icon: "fa-brands fa-instagram",
      hasLeftIcon: true,
      id: "btn-link-instagram"
    },
    {
      text: "Facebook fertrac.col",
      url: "https://www.facebook.com/fertac.col",
      icon: "fa-brands fa-facebook-f",
      hasLeftIcon: true,
      id: "btn-link-facebook"
    },
    {
      text: "Fertrac | LinkedIn",
      url: "https://www.linkedin.com/company/fertracsas/",
      icon: "fa-brands fa-linkedin-in",
      hasLeftIcon: true,
      id: "btn-link-linkedin"
    },
    {
      text: "Registro nuevos clientes",
      url: "/registro",
      // TODO: Update with actual route
      icon: "fa-solid fa-pen-to-square",
      hasLeftIcon: true,
      id: ""
    },
    {
      text: "Pol\xEDtica de Garant\xEDa y Devoluciones",
      url: "/politica-garantia",
      // TODO: Update
      hasLeftIcon: false,
      id: ""
    },
    {
      text: "Pol\xEDtica de Tratamiento y Protecci\xF3n de Datos",
      url: "/politica-datos",
      // TODO: Update
      hasLeftIcon: false,
      id: ""
    }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="descripcion"', "><title>", '</title><link rel="icon" href="/img/favicon.png" type="image/x-icon"><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Light.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fuentes/gt-walsheim/GT-Walsheim-Black.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"><!-- Google Tag Manager --><script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != "dataLayer" ? "&l=" + l : "";\n        j.async = true;\n        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, "script", "dataLayer", "GTM-WCS7HB46");\n    <\/script><!-- End Google Tag Manager -->', '</head> <body class="font-GTWalsheim bg-gradient-to-b from-[#fcebd5] via-orange-50 to-white min-h-screen text-gray-900 selection:bg-naranja selection:text-white"> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCS7HB46" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <div class="max-w-[480px] mx-auto px-6 py-8 min-h-screen flex flex-col relative"> <!-- Controles Superiores --> <div class="flex justify-between items-center w-full mb-8 z-10"> <button class="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors duration-300 text-gray-700 hover:text-naranja" aria-label="Cambiar tema"> <i class="fa-solid fa-sun"></i> </button> <button class="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors duration-300 text-gray-700 hover:text-naranja" aria-label="Compartir perfil"> <i class="fa-solid fa-arrow-up-from-bracket"></i> </button> </div> <!-- Perfil --> <div class="flex flex-col items-center mb-8"> <div class="w-24 h-24 bg-white rounded-full p-1 shadow-md mb-4 relative overflow-hidden"> <div class="w-full h-full bg-naranja rounded-full flex items-center justify-center"> <!-- Reemplazar con el logo F exacto de la marca, aqu\xED uso una imagen o icono temporal --> <img src="/img/favicon.png" alt="Fertrac Logo" class="w-[70%] h-[70%] object-contain filter brightness-0 invert"> </div> </div> <h1 class="text-2xl font-black text-gray-900 mb-2 tracking-tight">\n@fertrac.col\n</h1> <p class="text-[15px] font-light text-center text-gray-800 leading-snug px-4">\nTodo lo que tu veh\xEDculo de carga pesada necesita, lo encuentras aqu\xED.\n</p> </div> <!-- Links --> <div class="flex flex-col gap-3 w-full pb-10"> ', ' </div> <!-- Marca de agua Footer opcional --> <div class="mt-auto pt-8 pb-4 text-center"> <p class="text-sm font-light text-gray-500">\nDise\xF1ado por <span class="font-black text-azul">Fertrac</span> </p> </div> </div> </body></html>'])), addAttribute(descripcion, "content"), title, renderHead(), links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")}${addAttribute(link.id, "id")} class="group relative w-full bg-white/95 backdrop-blur-sm rounded-[14px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_15px_rgba(242,121,12,0.15)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center border border-transparent hover:border-naranja/20"> ${link.hasLeftIcon && renderTemplate`<div class="absolute left-5 text-[1.4rem] text-gray-800 group-hover:text-naranja transition-colors duration-300 flex items-center justify-center"> ${link.imgIcon ? renderTemplate`<div${addAttribute(`w-7 h-7 rounded-full flex items-center justify-center ${link.imgBg || ""}`, "class")}> <img${addAttribute(link.imgIcon, "src")}${addAttribute(link.text, "alt")} class="w-[60%] h-[60%] object-contain filter brightness-0 invert"> </div>` : renderTemplate`<i${addAttribute(link.icon, "class")}></i>`} </div>`} <span class="text-[15px] font-bold text-gray-800 group-hover:text-naranja transition-colors duration-300 text-center px-10"> ${link.text} </span> <div class="absolute right-5 text-gray-400 group-hover:text-naranja transition-colors duration-300"> <i class="fa-solid fa-ellipsis-vertical"></i> </div> </a>`));
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/links.astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/links.astro";
const $$url = "/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
