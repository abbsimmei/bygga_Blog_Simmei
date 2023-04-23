<template>
    <div class="flex items-center mb-3 mr-6">
        <div class=" text-2xl font-TitleFont text-gray-700 flex justify-center">
            {{ name }}
        </div>
    </div>
</template>

<script setup>
const { name } = defineProps(['name'])
</script>