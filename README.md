# Plan de trabajo CDE

Sitio estático en Astro para publicar informes del plan de trabajo CDE, con Hypothes.is embebido para anotación colaborativa.

## Requisitos

- Node.js 20+
- pnpm 10+

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

La salida de producción se genera en `dist/`.

## Contenido

- Informes: `src/content/reports/*.mdx`
- Esquemas: `src/content.config.ts`

## Hypothes.is

Variables en `.env`:

```env
PUBLIC_HYPOTHESIS_ENABLED=true
# PUBLIC_HYPOTHESIS_GROUP=your-group-id
```

## Cloudflare Pages

Configurar el proyecto con:

- Build command: `pnpm build`
- Dev command: `pnpm dev`
- Build output directory: `dist`
- Install command: `pnpm install`
- Environment variable (si aplica): `PUBLIC_HYPOTHESIS_GROUP`
