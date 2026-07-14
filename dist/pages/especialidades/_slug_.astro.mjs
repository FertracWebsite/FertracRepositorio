/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as createAstro } from '../../chunks/astro/server_Bu4Wz2YO.mjs';
import 'piccolore';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content_C5CQq_dh.mjs';
export { renderers } from '../../renderers.mjs';

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
  const { title, subtitle, description, brands, applications, subcategories } = data;
  return renderTemplate``;
}, "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/[slug].astro", void 0);

const $$file = "C:/Users/eroberto/Desktop/FertracRepositorio/src/pages/especialidades/[slug].astro";
const $$url = "/especialidades/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
