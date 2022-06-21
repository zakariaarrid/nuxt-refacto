import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vue: {
        config: {
          productionTip: false,
          devtools: true
        }
      }  ,
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    css: [
      "~/assets/css/tailwind.css"
    ],    
})
