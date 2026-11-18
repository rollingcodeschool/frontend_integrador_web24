# AGENTS.md — fontend-web24

## Qué es

SPA React que muestra pantallas de **resultado de pago Mercado Pago** (`/` = aprobado, `/fallo` = rechazado). Es **puramente presentacional**: no hay `fetch`, no hay `.env`, no hay `import.meta.env`, no hay `server.proxy` en `vite.config.ts`. El backend vive en un repo hermano: `../api_rest_web24`.

## Comandos

```bash
pnpm install      # lockfile pnpm v9, no usar npm/yarn
pnpm dev          # Vite dev server, puerto 5173 (HMR)
pnpm build        # tsc -b && vite build  → dist/
pnpm preview      # sirve dist/
pnpm lint         # ⚠️ FALLA hoy (ver abajo)
```

- **`pnpm lint` está roto por un problema upstream, no por el código:** `typescript-eslint@8` no soporta TypeScript 7.0 y aborta con `Error: typescript-eslint does not support TS 7.0` (exit 2). No reescribas `eslint.config.js` ni "arregles" el lint hasta que haya una versión compatible; usa `pnpm build` (que incluye `tsc -b`) como verificación real. Verificado: `pnpm build` pasa limpio.
- **No hay tests.** No existen suites, fixtures ni runner de testing en este repo.
- `tsc -b` usa los project references (`tsconfig.json` → `tsconfig.app.json` para `src/`, `tsconfig.node.json` para `vite.config.ts`).

## Punto de entrada y flujo

`index.html` → `src/main.tsx` (`createRoot` + `StrictMode`) → `src/App.tsx` (define `BrowserRouter` y las únicas dos rutas).

- Las vistas son componentes sin estado: `src/views/ExitoViews.tsx` y `src/views/FalloViews.tsx`. Son casi idénticas (misma estructura, distinta paleta/contenido) — **cambios de layout conviene aplicarlos en ambos**.
- No leen `useSearchParams()` ni muestran el estado real del pago: el contenido "aprobado"/"rechazado" es estático aunque la URL diga otra cosa.

## Toolchain con particularidades (no "simplificar")

- **Tailwind CSS 4 sin config:** no hay `tailwind.config.js` ni `postcss.config`; todo el setup es `@import "tailwindcss";` en `src/index.css` + plugin `@tailwindcss/vite`. Los estilos son clases utilitarias inline en las vistas.
- **React Compiler activo:** `vite.config.ts` encadena `react()` → `babel({ presets: [reactCompilerPreset()] })` → `tailwindcss()`. Añade una pasada de Babel en dev y build (arranque/build más lentos). No quitarlo pensando que es redundante con `@vitejs/plugin-react`.
- `src/App.css` **no está importado en ningún lado** (resto de plantilla). `src/assets/vite.svg` y `react.svg` tampoco se usan.
- `dist/` está en `.gitignore`; no commitear builds.

## Integración con el backend (`../api_rest_web24`) — estado real

Hoy **no hay ninguna conexión**. Si se agrega, estos son los puntos que ya generan fricción y que un agente no ve leyendo solo este repo:

- Backend en **puerto 4500** (`PORT` no está en su `.env`; fallback hardcodeado). Sin `server.proxy` en Vite, cualquier llamada desde `localhost:5173` es cross-origin.
- `app.use(cors())` está **abierto y sin `credentials`**, pero la autenticación del backend es por **cookie JWT**. Llamar con `credentials: "include"` fallará hasta que el servidor fije `origin` + `credentials: true`.
- `back_urls` de Mercado Pago están hardcodeadas en `../api_rest_web24/src/controllers/mercado.controller.js` apuntando a `https://frontendintegradorweb24.vercel.app` (producción), **no** a localhost.
- Ese mismo archivo redirige `pending` a **`/pendiente`, ruta que no existe en este frontend** (solo `/` y `/fallo`): hoy devuelve 404 o el fallback SPA.
- `notification_url` es un túnel **ngrok hardcodeado y efímero**; al reiniciar el túnel el webhook muere.
- Ojo con las **copias del backend**: en el directorio padre hay `api_rest_web24 (Copiar)/` y `develop/api_rest_web24/` con URLs de ngrok distintas. El canónico es `api_rest_web24/`.

## Convenciones y avisos

- **No renombrar `fontend-web24`** (typo: falta la "e") en carpeta/`package.json`/`<title>` salvo que se pida explícitamente: el typo está en el README como pendiente, pero cambiarlo rompería la coincidencia con lo ya desplegado. El remoto git es `rollingcodeschool/frontend_integrador_web24.git`.
- Branch única `main`; commits cortos en español.
- `README.md` es bastante fiel al código y tiene un checklist de pendientes al final — leerlo antes de proponer mejoras ya propuestas.
- El deploy en hosting estático necesita **fallback SPA** (`/* → /index.html`), si no `/fallo` da 404 al recargar.
