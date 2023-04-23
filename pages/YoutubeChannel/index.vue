<template class="overscroll-none">
    <Head>
        <Title>Swinceball | Videos</Title>
        <Meta name="description" content="Here you can browser all my great videos" />
    </Head>
    <section class="hidden sm:flex lg:pt-12 pt-4 lg:pb-10 bg-cover bg-center bg-[url('../../img/kaiser.png')]">
        <scroll :name="'KAISERREICH'" />
        <ul
            class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
            <li v-for="(item, key) in data" :key="key" class="">
                <videoCard :item="item" v-if="item.mod == 'Kaiserreich'" />
            </li>
        </ul>
    </section>
    <section class="hidden sm:flex lg:pt-12 pt-4 lg:pb-10 bg-cover bg-center bg-[url('../../img/TNO.png')]">
        <scroll :name="'TNO'" />
        <ul
            class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
            <li v-for="(item, key) in data" :key="key" class="">
                <videoCard :item="item" v-if="item.mod == 'TNO'" />
            </li>
        </ul>
    </section>
    <section class="hidden sm:flex lg:pt-12 pt-4 lg:pb-10 bg-cover bg-center bg-[url('../../img/popular.png')]">
        <scroll :name="'POPULAR'" />
        <ul
            class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
            <li v-for="(item, key) in data" :key="key" class="">
                <videoCard :item="item" v-if="item.mod == 'Popular'" />
            </li>
        </ul>
    </section>


    <section class="flex flex-col sm:hidden items-center mb-8 mt-10">
        <MobileTitle :name="'KAISERREICH'" />
        <div class="flex items-center">
            <ul
                class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-48 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                <li v-for="(item, key) in data" :key="key" class="">
                    <videoCard :item="item" v-if="item.mod == 'Kaiserreich'" class="mb-4 mt-2 shadow-none" />
                </li>
            </ul>
            <ScrollMobile />
        </div>
    </section>
    <section class="flex flex-col sm:hidden items-center mb-8">
        <MobileTitle :name="'TNO'" />
        <div class="flex items-center">
            <ul
                class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-48 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                <li v-for="(item, key) in data" :key="key" class="">
                    <videoCard :item="item" v-if="item.mod == 'TNO'" class="mb-4 mt-2 shadow-none" />
                </li>
            </ul>
            <ScrollMobile />
        </div>
    </section>
    <section class="flex flex-col sm:hidden items-center mb-8">
        <MobileTitle :name="'POPULAR'" />
        <div class="flex items-center">
            <ul
                class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-48 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                <li v-for="(item, key) in data" :key="key" class="">
                    <videoCard :item="item" v-if="item.mod == 'Popular'" class="mb-4 mt-2 shadow-none" />
                </li>
            </ul>
            <ScrollMobile />
        </div>
    </section>
</template>

<script setup>
const { data } = await useAsyncData(() => queryContent(`/videos`).find())

</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none; 
}


</style>