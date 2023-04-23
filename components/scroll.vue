<template>
    <div class="flex items-center lg:pr-4 lg:ml-10 ml-4 pr-2">
        <div class="lg:text-3xl text-2xl font-TitleFont text-gray-700 -rotate-90 lg:w-24 w-20 flex justify-center">
            {{ name }}
        </div>
        <div class="flex items-center">
            <a class="">
                scroll
            </a>
        </div>
        <div class="w-4 h-4 ml-2 mt-1">
            <img src="../img/arrow.png" class="w-4 h-4">
        </div>
    </div>
</template>

<script setup>
const { name } = defineProps(['name'])
</script>