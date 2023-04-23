<template class="overscroll-none">
    <div>
        <div class="flex justify-between md:mb-14 mb-6">
            <div class="flex sm:mt-8 mt-4">
                <NuxtLink to="/" class="flex">
                    <img src="../img/Swinceball_Icon.png" class="sm:w-16 sm:h-16 sm:ml-16 w-14 h-14 ml-8">
                    <div class="font-bold font-serif mt-4 ml-2 text-xl hover:text-gray-700">Swinceball</div>
                </NuxtLink>
            </div>
            <div class="sm:flex sm:items-center sm:gap-10 sm:mt-8 hidden sm:mr-8">
                <div aria-label="Site Nav" class="sm:block">
                    <ul class="flex items-center gap-6 text-md right-20">
                        <li>
                            <a class="text-gray-500 transition hover:text-gray-500/75">
                                <NuxtLink to="/YoutubeChannel" class="btn2">Videos</NuxtLink>
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-gray-500/75">
                                <NuxtLink to="/Articles" class="btn2">Articles</NuxtLink>
                            </a>
                        </li>

                        <li>
                            <a class="text-gray-500 transition hover:text-gray-500/75">
                                <NuxtLink to="/About" class="btn2">Meet the Team</NuxtLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="block pt-6 pr-6 sm:hidden  " @click="dropPrint">
                <button @click="toggleDropdown" class="rounded p-2 text-gray-600  hover:text-gray-600/75 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div v-show="isDropdownOpen"
                    class="absolute right-8 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <a class="block">
                        <NuxtLink to="/YoutubeChannel" class=" text-gray-700 block px-4 py-2 text-sm"
                            @click="toggleDropdown">Videos</NuxtLink>
                    </a>
                    <a class="block">
                        <NuxtLink to="/Articles" class=" text-gray-700 block  py-2 text-sm" @click="toggleDropdown">Articles
                        </NuxtLink>
                    </a>
                    <a class="block">
                        <NuxtLink to="/About" class=" text-gray-700 block px-4 py-2 text-sm" @click="toggleDropdown">About
                        </NuxtLink>
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div>
        <slot />
    </div>
    <div>
        <footer class="flex justify-between pt-10 pb-10">
            <div class="flex md:gap-6 ">
                <button @click="toggleLink" class="hidden md:flex">
                    <img src="../img/share.png" class="w-6 h-6 sm:ml-10 ml-4">
                </button>
                <ul class="md:flex md:gap-16 hidden md:visible" v-show="isLink">
                    <li class="linkText">
                        <NuxtLink to="https://www.youtube.com/@SwinceBall" target="_blank" rel="noopener noreferrer">Youtube
                        </NuxtLink>
                    </li>
                    <li class="linkText">
                        <NuxtLink to="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer">Twitter
                        </NuxtLink>
                    </li>
                    <li class="linkText">
                        <NuxtLink to="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit</NuxtLink>
                    </li>
                    <li class="linkText">
                        <NuxtLink to="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord</NuxtLink>
                    </li>
                </ul>
                <div class="flex items-end md:hidden">
                    <button @click="toggleLinksSmall">
                        <img src="../img/share.png" class="w-6 h-6 sm:ml-10 ml-4">
                    </button>
                    <ul class="absolute sm:left-20 left-12 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        v-show="isLinkSmall">
                        <div>
                            <li class=" text-gray-700 block px-4 py-2 text-sm">
                                <NuxtLink to="https://www.youtube.com/@SwinceBall" target="_blank"
                                    rel="noopener noreferrer">
                                    Youtube
                                </NuxtLink>
                            </li>
                            <li class=" text-gray-700 block px-4 py-2 text-sm">
                                <NuxtLink to="https://twitter.com/?lang=sv" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </NuxtLink>
                            </li>
                        </div>
                        <div class="">
                            <li class=" text-gray-700 block px-4 py-2 text-sm">
                                <NuxtLink to="https://www.reddit.com/" target="_blank" rel="noopener noreferrer">Reddit
                                </NuxtLink>
                            </li>
                            <li class=" text-gray-700 block px-4 py-2 text-sm">
                                <NuxtLink to="https://discord.com/" target="_blank" rel="noopener noreferrer">Discord
                                </NuxtLink>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div>
                <div class="font-bold sm:mr-10 mr-4">
                    Copyright @2023, Swinceball
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

const isLink = ref(true)
const isDropdownOpen = ref(false)
const isLinkSmall = ref(false)

function toggleDropdown () {
    isDropdownOpen.value = !isDropdownOpen.value
}

function toggleLink () {
    isLink.value = !isLink.value
}

function toggleLinksSmall () {
    isLinkSmall.value = !isLinkSmall.value
}



</script>
