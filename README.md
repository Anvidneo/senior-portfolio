# juan-botero.dev

Portfolio de Juan David Botero: Full-Stack Engineer. Next.js (App Router) exportado como sitio estático, bilingüe (ES / EN) y con estética de cómic.

## Desarrollo

Requiere Node.js 20.9 o superior.

```bash
pnpm install
pnpm dev
```

| Comando | Qué hace |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo en el puerto 3000 |
| `pnpm build` | Genera el sitio estático en `out/` |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Chequeo de tipos |
| `pnpm test` | Tests con Vitest |
| `pnpm test:coverage` | Tests con cobertura (`coverage/lcov.info`, lo lee Sonar) |

## Estructura

```
src/
  app/[lang]/     layout y página por idioma (/es, /en)
  app/(redirect)/ "/" redirige según el idioma guardado o del navegador
  components/     una sección por componente; solo LangSwitch, CopyEmail y LangRedirect son cliente
  lib/            content.ts (todos los textos, ES y EN), i18n.ts, fonts.ts
tests/            Vitest + Testing Library
```

Todo el texto vive en `src/lib/content.ts`. Cada idioma tiene su bloque y los tests verifican que ambos tengan la misma forma.

## CI/CD

`.github/workflows/ci-cd.yml` corre en cada push y PR a `main`:

1. **test**: lint, tipos, tests y build.
2. **sonarcloud**: tests con cobertura, escaneo y Quality Gate.
3. **deploy**: solo en push a `main`, si los dos anteriores pasan. Construye y despliega a Vercel con la CLI.

### Secretos necesarios en GitHub

| Secreto | Para qué |
| --- | --- |
| `SONAR_TOKEN` | Token de SonarCloud |
| `VERCEL_TOKEN` | Token de Vercel |

Los ids de equipo y proyecto de Vercel están en el workflow: no son secretos.

### Activar SonarCloud

1. En sonarcloud.io (organización `anvidneo`) importar `Anvidneo/senior-portfolio`.
2. Confirmar que el `projectKey` coincide con `sonar-project.properties`.
3. Desactivar el análisis automático de SonarCloud para que mande el escaneo del workflow.

### Vercel

`vercel.json` fija el framework en Next.js (el proyecto seguía con el preset de Vite) y apaga el deploy automático de `main` por Git, para que producción solo salga del workflow, después del Quality Gate. Las ramas y PRs siguen teniendo vista previa.

## Commits

Conventional Commits con gitmoji obligatorio, forzado por husky y commitlint en el hook `commit-msg`:

```
<type>(<scope>): :gitmoji: <descripción>
```

```bash
feat: :sparkles: agregar switch de idioma
fix: :bug: corregir enlace de Google Play
ci: :construction_worker: agregar escaneo de SonarCloud
```

Un commit sin emoji, o con uno que no corresponda al tipo, es rechazado. La lista aprobada por tipo está en [`commitlint-gitmoji.cjs`](./commitlint-gitmoji.cjs).
