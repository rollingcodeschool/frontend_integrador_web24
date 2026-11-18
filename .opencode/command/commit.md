---
description: Revisa el diff actual y genera commits semánticos siguiendo las convenciones
del proyecto
agent: build
---

Revisa los cambios pendientes del repositorio antes de proponer o crear el commit.
Pasos a seguir:

1. Ejecuta `git status` y revisa el diff en staging (`git diff --staged`) y sin staging
   (`git diff`).
2. Consulta los últimos commits con `git log -n 10 --oneline` para respetar el estilo de
   mensajes del proyecto.
3. Verifica que no se estén por incluir tokens, claves ni archivos con variables de entorno.
4. Si hay cambios mezclados de distintas tareas, propón agruparlos en commits semánticos
   separados.
5. Muestra un resumen de los archivos afectados, el mensaje propuesto y solicita
   confirmación antes de ejecutar `git commit`.
   Contexto adicional del usuario (si aplica): $ARGUMENTS
