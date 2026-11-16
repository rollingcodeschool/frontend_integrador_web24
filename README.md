# Frontend Web24 — Páginas de resultado de pago

Frontend SPA que muestra las pantallas de **resultado de un pago procesado con Mercado Pago**: una vista de pago aprobado y otra de pago rechazado.

Actualmente es una aplicación **puramente presentacional**: no consume APIs, no lee el estado real de la transacción y no se conecta al backend. Las vistas están maquetadas con Tailwind CSS y son totalmente responsive.

## Rutas

| Ruta | Vista | Descripción |
| --- | --- | --- |
| `/` | `ExitoViews` | Pago aprobado. Confirmación y próximos pasos. |
| `/fallo` | `FalloViews` | Pago no aprobado. Motivos y opciones para reintentar. |

Ambas pantallas enlazan a la ayuda oficial de Mercado Pago (`mercadopago.com.ar/ayuda`) en una pestaña nueva.

## Stack

- **React 19** + **React DOM 19** — UI basada en componentes.
- **TypeScript 7** — tipado estricto (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`).
- **Vite 8** (motor **Rolldown**) — dev server con HMR y build de producción.
- **React Router 8** — enrutamiento del lado del cliente con `BrowserRouter`.
- **Tailwind CSS 4** — estilos por utilidades, integrado vía `@tailwindcss/vite` (sin archivo `postcss.config`).
- **React Compiler 1.0** — memoización automática, habilitado con `@rolldown/plugin-babel` + `babel-plugin-react-compiler`.
- **ESLint 10** + **typescript-eslint** + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`.

## Requisitos

- **Node.js 20+** (recomendado 22 o superior).
- **pnpm** (el proyecto incluye `pnpm-lock.yaml`, lockfile v9).

## Instalación

```bash
pnpm install
```

## Scripts

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Levanta el servidor de desarrollo con HMR. |
| `pnpm build` | Chequeo de tipos (`tsc -b`) y build de producción en `dist/`. |
| `pnpm preview` | Sirve localmente el build de `dist/`. |
| `pnpm lint` | Ejecuta ESLint sobre todo el proyecto. |

## Estructura del proyecto

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/            # Imágenes de la plantilla (hero, logos)
│   ├── views/
│   │   ├── ExitoViews.tsx # Pantalla de pago aprobado
│   │   └── FalloViews.tsx # Pantalla de pago rechazado
│   ├── App.tsx            # Definición de rutas
│   ├── App.css            # CSS heredado de la plantilla (sin uso)
│   ├── index.css          # Import de Tailwind
│   └── main.tsx           # Punto de entrada
├── eslint.config.js
├── vite.config.ts
└── tsconfig.app.json / tsconfig.node.json
```

## Configuración destacada

**React Compiler** está activo en `vite.config.ts`:

```ts
plugins: [
  react(),
  babel({ presets: [reactCompilerPreset()] }),
  tailwindcss(),
]
```

Esto añade una pasada de Babel en dev y build, por lo que el arranque y la compilación son algo más lentos que en una configuración estándar.

**Tailwind CSS 4** se carga directamente desde `src/index.css`:

```css
@import "tailwindcss";
```

No hay `tailwind.config.js`; la configuración se hace en CSS si se necesita.

## Despliegue

Al usar `BrowserRouter`, el hosting debe redirigir todas las rutas a `index.html` (fallback SPA), de lo contrario `/fallo` devolverá 404 al recargar la página.

Ejemplo en Netlify/Vercel: rewrite de `/*` → `/index.html`.

## Estado del proyecto / pendientes

- [ ] Integrar el estado real del pago (query params o llamada al backend) en lugar de contenido estático.
- [ ] Agregar tests (Vitest + Testing Library o Playwright).
- [ ] Eliminar `src/App.css` y los assets de la plantilla que no se usan.
- [ ] Corregir el nombre del paquete: `fontend-web24` → `frontend-web24` (en `package.json` e `index.html`).
- [ ] Centralizar los textos y colores de marca en componentes reutilizables (hoy `ExitoViews` y `FalloViews` duplican estructura).

## Licencia

Sin licencia definida.
