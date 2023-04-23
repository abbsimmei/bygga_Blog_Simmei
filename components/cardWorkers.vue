<template>
    <div class="wrapper">
        <header @click="toggleInfo" v-show="!info" class="w-52 h-80">
            <div class="relative">
                <div class="w-52 h-64 bg-center bg-cover" :style="{ backgroundImage: `url(${item.workerImgNo})` }">
                    <div class="opacity-0 hover:opacity-100" style="top: -10px; left: -10px;">
                        <div class="flex bg-blue-800 w-52 h-64">
                            <div class="absolute inset-0 w-52 h-64 bg-center bg-cover" style="top: -10px; left: -10px;"
                                :style="{ backgroundImage: `url(${item.workerImg})` }">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ml-2">
                <div class="text-xl font-bold font-TitleFont">{{ item.title }} </div>
            </div>
            <div class="ml-2">
                <div class="text-md text-blue-800">{{ item.job }} </div>
            </div>
        </header>
        <header @click="toggleInfo" v-show="info" class="w-52 h-80">
            <div class="w-52 h-72 shadow-xl rounded-xl">
                <div class=" inset-0 w-52 h-28 bg-center bg-cover" :style="{ backgroundImage: `url(${item.workerImg})` }">
                </div>
                <div class="text-md font-bold font-TitleFont ml-1 mt-1">{{ item.title }}</div>
                <div class="text-md text-blue-800 ml-1">{{ item.job }}</div>
                <div class="mx-1">{{ item.description }}</div>

            </div>

        </header>

    </div>
</template>

<script setup>
const { item } = defineProps(['item'])


const info = ref(false)

function toggleInfo () {
    info.value = !info.value
}

</script>