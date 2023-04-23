// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    app: {
        head: {
            title: 'Swinceball',
            meta: [
                { name: 'description', content: 'This is the website of Swinceball, a Hoi4 youtuber' }
            ],
            link: [
                { rel: 'preconnect', href: "https://fonts.googleapis.com" },
                { rel: 'preconnect', href: "https://fonts.gstatic.com" },
                { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap" }
            ]
        }
    }

})