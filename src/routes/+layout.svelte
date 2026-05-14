<script>
import Link from "$lib/Link.svelte";
import Menuitem from "$lib/Menuitem.svelte";

import logo from "$lib/images/logo_white_text.webp?enhanced";

import "../app.css";

import "@fontsource-variable/roboto-slab";
import "@fontsource/courgette";

let { children } = $props();

import {routes} from "$lib/routes";
const navRoutes = routes.filter(r => r.placement?.includes("nav"))
const footerRoutes = routes.filter(r => r.placement?.includes("footer"))

/** @type {import('./$types').PageProps} */
import { page } from "$app/state";

const SITE_NAME = "Ferienwohnungen Bieberhoff";
const ogImage = $derived(`${page.url.origin}/og.webp`);
const fullTitle = $derived(`${page.data.title} – ${SITE_NAME}`);
const description = $derived(page.data.description);
const canonicalUrl = $derived(page.url.href);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:locale" content="de_DE" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="flex flex-col min-h-screen">
  <header class="flex flex-col md:flex-row items-center md:justify-between gap-4 px-4 py-3 md:px-8 bg-bieber shadow-md">
    <a href="/" class="shrink-0" aria-label="Startseite">
      <enhanced:img src={logo} alt="Bieberhoff Logo" class="w-44 md:w-52" />
    </a>
    <nav
      class="flex flex-wrap gap-1 justify-center md:justify-end"
      aria-label="Hauptnavigation"
    >
      {#each navRoutes as route}
        <Menuitem path={route.path}>{route.name}</Menuitem>
      {/each}
    </nav>
  </header>

  <main class="flex flex-col items-center flex-1 w-full">
    {@render children()}
  </main>

  <footer class="flex flex-wrap items-center justify-center md:justify-between gap-4 px-4 py-5 md:px-8 bg-bieber text-white text-sm mt-10">
    {#each footerRoutes as route}
      <Link path={route.path}>{route.name}</Link>
    {/each}
  </footer>
</div>
