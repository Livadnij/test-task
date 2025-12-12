import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/scss/global.scss"],
  alias: {
    "@assets": resolve(__dirname, "app/assets"),
  },
  ssr: false,
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          sourceMapIncludeSources: true,
          additionalData: '@use "@assets/scss/utils.scss" as *;',
        },
      },
    },
  },
  modules: ["@pinia/nuxt"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap",
        },
      ],
    },
  },
});
