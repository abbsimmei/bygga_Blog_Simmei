<template>
    <div class="flex items-center justify-center">
        <div
            class="mt-20 rounded-xl shadow-xl w-[24rem] h-[24rem] bg-cover bg-[url('/img/SwinceError.png')] flex flex-col items-center">
            <p class="text-6xl font-bold">{{ error.statusCode }}</p>
            <p class="text-3xl text-center">{{ error.message }}</p>
            <button class="btn2 text-xl mt-12" @click="handleClearError">Go home...</button>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>
</style>