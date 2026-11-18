# MEMORY.md — fontend-web24

## Estado real

- SPA presentacional de resultados de pago Mercado Pago: `/` = éxito, `/fallo` = fallo.
- Cero red hoy: no hay fetch, .env, import.meta.env ni server.proxy. No "completar" sin pedirlo.
- Backend hermano e independiente: `../api_rest_web24` (Express 5 + Mongo, puerto 4500).

## Verificación (ejecutado, no supuesto)

- `pnpm build` pasa limpio → es el gate real de cambios.
- `pnpm lint` FALLA siempre: typescript-eslint@8 no soporta TS 7.0 (exit 2). No reescribir eslint.config.js.
- No existen tests en el repo.

## Entrada y estructura

- Flujo: index.html → src/main.tsx → src/App.tsx (BrowserRouter, solo 2 rutas).
- ExitoViews.tsx y FalloViews.tsx son casi idénticas: el layout se cambia en ambas.
- Ambas vistas son estáticas: ignoran los query params de Mercado Pago.

## Toolchain (no "simplificar")

- Tailwind 4 sin tailwind.config ni postcss.config: solo `@import "tailwindcss"` en src/index.css.
- React Compiler activo en vite.config.ts (pasada de Babel extra): no quitarlo.
- src/App.css y src/assets/vite.svg, react.svg no se usan. `dist/` está gitignorado.

## Backend: fricción conocida al integrar

- CORS está abierto sin `credentials`, pero la auth es por cookie JWT → habrá que fijar origin+credentials.
- `back_urls` hardcodeadas a Vercel prod; `pending` apunta a `/pendiente`, ruta que NO existe aquí.
- `notification_url` es un ngrok efímero (muere al reiniciar el túnel).
- Copias divergentes del backend en el padre (`api_rest_web24 (Copiar)`, `develop/`): el canónico es `api_rest_web24/`.

## Convenciones

- No renombrar el typo `fontend-web24` sin pedirlo explícitamente.
- Remoto: `rollingcodeschool/frontend_integrador_web24.git`; rama única `main`, commits en español.
- README.md es fiel al código y trae checklist de pendientes: leerlo antes de proponer mejoras.

## Forma de trabajar (Memoria)

- Al empezar cualquier tarea, lee `MEMORY.md` para conocer el estado actual del proyecto y
  las decisiones tomadas.

## Límites

- Actualiza siempre `MEMORY.md` al terminar cada tarea.
