# Bieberhoff Ferienwohnung

Website für die Ferienwohnungen Bieberhoff in Aurich. SvelteKit + Tailwind, deployed auf Vercel.

## Entwicklung

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Environment

Für das Kontaktformular werden zwei Variablen benötigt (lokal in `.env`, in Vercel als Project Environment Variables):

- `SENDGRID_API_KEY`
- `SENDGRID_TEMPLATE_ID`
