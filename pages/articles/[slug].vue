<template>
    <Head>
        <Title>Swinceball | Articles</Title>
        <Meta name="description" :content="data.description" />
    </Head>
    <main class="flex lg:mx-32 md:mx-16 sm:mx-10 mx-0">

        <div class="flex-row shadow-2xl">
            <div class="bg-orange-600 items-start flex flex-col">
                <div class="lg:title md:titleMd titleSm md:pt-20 pt-10 mb-2 md:ml-16 sm:ml-8 ml-4 text-white">{{ data.title1
                }}
                </div>
                <div class="lg:title md:titleMd titleSm md:ml-16 mb-2 sm:ml-8 ml-4 text-white">{{ data.title2 }}</div>
                <div class="lg:title md:titleMd titleSm md:pb-20 pb-10 md:ml-16 sm:ml-8 ml-4 text-white">{{ data.title3 }}
                </div>
            </div>
            <div class="bg-white flex py-6 sm:pl-6 pl-2 text-gray-700">
                <div>
                    {{ data.createdAt }}
                </div>
            </div>
            <div class="flex max-w-none sm:mx-6 my-10 mx-2">
                <ContentRenderer :value="data" />
            </div>
            <div class="flex items-center justify-end mb-10 pr-10">
                <div class="">
                    {{ data.author }}
                </div>
                <img :src="data.authorImg" class="w-20 rounded-xl">

            </div>
        </div>

    </main>
</template>

<script setup>

import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = await useAsyncData(() => queryContent(`articles/${route.params.slug}`).findOne())

if (!data.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true})
}

</script>

<style scoped>
:deep(h1) {
    @apply text-xl lg:text-3xl md:text-2xl py-2 font-TitleFont font-bold;
}
</style>