<template>
    <NuxtLink :to="`/Articles/${item.slug}`">
        <div class="wrapper">
            <header class="bg-white lg:mx-10 sm:mx-6 sm:shadow-xl my-3 sm:my-0 lg:rounded-b-lg rounded-b-md">
                <div class="title lg:w-80 lg:h-48 w-72 h-40 bg-cover text-white "
                    :style="{ backgroundImage: `url(${item.descImg})` }">
                    <div class="bg-gray-800 bg-opacity-50 lg:w-80 lg:h-48 w-72 h-40 flex justify-center items-center">
                        <div class="lg:text-3xl text-2xl">{{ item.title }} </div>
                    </div>
                </div>
                <h1 class="lg:py-2 lg:px-6 py-1 px-4 text-gray-700">{{ item.createdAt }}</h1>
            </header>
        </div>
    </NuxtLink>
</template>

<script setup>
const { item } = defineProps(['item'])
</script>