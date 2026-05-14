export const routes = [
  {
    path: "/",
    name: "Startseite",
    placement: ["nav"],
    seo: {
      priority: 1.0,
      changefreq: "weekly"
    }
  },
  {
    path: "/wohnungen",
    name: "Wohnungsoptionen",
    placement: ["nav"],
    seo: {
      priority: 0.9
    }
  },
  {
    path: "/preise-optionen",
    name: "Preise und Optionen",
    placement: ["nav"],
    seo: {
      priority: 0.8
    }
  },
  {
    path: "/umgebung",
    name: "Umgebung und Freizeit",
    placement: ["nav"],
    seo: {
      priority: 0.7
    }
  },
  {
    path: "/fotos",
    name: "Fotos",
    placement: ["nav"],
    seo: {
      priority: 0.7
    }
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    placement: ["nav", "footer"],
    seo: {
      priority: 0.6
    }
  },
  {
    path: "/datenschutz",
    name: "Datenschutz",
    placement: ["footer"],
    seo: {
      priority: 0.3,
      changefreq: "yearly"
    }
  },
  {
    path: "/impressum",
    name: "Impressum",
    placement: ["footer"],
    seo: {
      priority: 0.3,
      changefreq: "yearly"
    }
  },
  {
    path: "https://bieberhoff.de",
    name: "Reittherapie",
    placement: ["nav"],
    external: true
  }
];
