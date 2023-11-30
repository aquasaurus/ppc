import * as Constants from "./data/Constants.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: `${Constants.Name}`,
      titleTemplate: `%s - ${Constants.Name}`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", hid: "theme-color", content: Constants.ThemeColor },
        {
          name: "description",
          hid: "description",
          content: Constants.Description,
        },
        { name: "og:image", hid: "og-image", content: "/icon.png" },
        { name: "og:thumbnail", hid: "og-thumbnail", content: "/icon.png" },
      ],
      link: [
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
    },
  },
  css: ["@/assets/transition.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-schema-org",
  ],
});
