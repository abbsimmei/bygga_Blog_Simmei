<template>
    <div class="flex flex-row md:justify-between justify-center pb-14 pt-6">
        <div class="bg-[url('/img/home1.png')] hidden md:flex bg-left w-full lg:h-96 h-80 bg-contain bg-no-repeat">
        </div>
        <div class="relative hidden sm:flex">
            <div class="lg:w-[46rem] lg:h-[24rem] sm:w-[34rem] sm:h-[17rem] bg-cover bg-[url('/img/welcome2.png')]">
                <div class="opacity-0 hover:opacity-100">
                    <div
                        class="flex lg:w-[46rem] lg:h-[24rem] sm:w-[34rem] sm:h-[17rem] justify-end items-center bg-cover bg-[url('/img/welcome3.png')]">
                        <div
                            class="flex flex-col text-center  font-bold -rotate-6 lg:text-4xl lg:pb-32 lg:pr-4 text-2xl pb-24 pr-6">
                            <NuxtLink to="/YoutubeChannel" class="text-gray-800 hover:text-gray-600 rotate-1">Watch Videos
                            </NuxtLink>
                            <NuxtLink to="/Articles" class="text-gray-800 hover:text-gray-600 rotate-1">Read Articles
                            </NuxtLink>
                            <NuxtLink to="/About" class="text-gray-800 hover:text-gray-600 rotate-1">Meet the Team
                            </NuxtLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div class="bg-[url('/img/home2.png')] hidden md:flex bg-right w-full lg:h-96 h-80 bg-contain bg-no-repeat">
        </div>
    </div>

    <div class="flex sm:hidden items-center justify-center">
        <div class="flex flex-col items-center">
            <div class="font-TitleFont font-bold text-2xl text-center">Welcome! To the Swinceball Website</div>
            <img src="../img/Swinceball_Icon.png" class="w-56 h-56" />
            <div class="font-TitleFont font-bold text-xl text-center">
                <NuxtLink to="/YoutubeChannel" class="pr-2 text-gray-600 hover:text-gray-400">Watch Videos</NuxtLink>
                <NuxtLink to="/Articles" class="pl-2 text-gray-600 hover:text-gray-400">Read Articles</NuxtLink>
            </div>
            <div class="font-TitleFont font-bold text-xl text-center">
                <NuxtLink to="/About" class="text-gray-600 hover:text-gray-400">Meet the Team</NuxtLink>
            </div>
        </div>

    </div>
</template>

<script setup>




</script>

<style scoped>
</style>