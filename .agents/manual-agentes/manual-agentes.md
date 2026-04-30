# Identidad Visual y Diseño: Fertrac

Este documento define los recursos visuales oficiales de la marca Fertrac. Como diseñador UI/UX, tienes **total libertad creativa** para utilizar, combinar y aplicar estos colores y tipografías en componentes, fondos, botones, textos y estructuras gráficas como mejor consideres. 

Tu único objetivo es crear una interfaz moderna, profesional, con excelente contraste (accesibilidad) y una experiencia de usuario (UX) impecable.

## 1. Tipografía Oficial
- **Fuente Principal:** `GT Walsheim` (Clase en Tailwind: `font-GTWalsheim`)
- **Uso:** Esta es la única familia tipográfica de la web. Úsala en todos los niveles (títulos, párrafos, botones, etiquetas). 
- **Libertad:** Tienes libertad para jugar con todos sus pesos (`font-light`, `font-normal`, `font-bold`, `font-black`) y tamaños para crear la mejor jerarquía visual posible. 

## 2. Paleta de Colores
Estos son los colores oficiales de la marca. Eres libre de usarlos en fondos, textos, bordes, gradientes sutiles o acentos visuales según el diseño lo requiera.

- **Color Naranja (Acento vibrante):** `#f2790c`
- **Color Azul (Tono profundo corporativo):** `#04297e`
- **Colores Neutros:** - **Blanco:** `#ffffff`
  - **Negro / Grises:** Tienes libertad para usar la escala de grises de Tailwind (`gray-50` a `gray-900`) o negro puro para textos, sombras y fondos según necesites para mantener una lectura limpia.

## 3. Principios de Diseño Requeridos
Aunque tienes libertad creativa con los colores, tus propuestas deben cumplir con lo siguiente:
- **Legibilidad:** Asegura un contraste óptimo (WCAG). Si usas fondo azul, el texto debe ser legible; si usas naranja, evalúa si el texto va en blanco o azul oscuro.
- **Mobile-First:** El diseño debe verse impecable en pantallas de celular (alineación adecuada, espacios respirables, y alturas de línea cómodas para la lectura).
- **Estética "Premium":** Inspírate en blogs y webs técnicas de alto nivel. Evita la saturación visual; usa el espacio en blanco (White space) de forma inteligente.

## 4. Pila Tecnológica (Tech Stack)
- **Framework:** Astro (usar componentes `.astro` y layouts). Priorizar el modo estático (SSG) a menos que se requiera interactividad específica.
- **Estilos:** Tailwind CSS. Usar clases de utilidad.
- **Contenido:** Markdown/MDX con Frontmatter YAML. Para el blog, usar el plugin `@tailwindcss/typography` (clase `prose`).
- **Imágenes:** SIEMPRE en formato `.webp` por rendimiento.
- **Backend y Base de Datos (BaaS):** Firebase. Usar el SDK web modular (`firebase/app`, `firebase/firestore`, etc.) para manejar bases de datos, analíticas o autenticación desde el cliente.
- **Comunicaciones / Formularios:** Email.js. Todos los formularios de contacto o cotización de repuestos deben procesarse en el lado del cliente usando Email.js, evitando la creación de un backend propio.
- **Interactividad en el Cliente:** Si un componente de Astro necesita JS en el cliente (como el formulario de Email.js o llamadas a Firebase), usar etiquetas `<script>` estándar de Astro o componentes de un framework ligero si ya está configurado (ej. React/Preact), priorizando el rendimiento.