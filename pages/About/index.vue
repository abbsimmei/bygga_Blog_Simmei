<template class="overscroll-none">
    <Head>
        <Title>Swinceball | Meet the Team</Title>
        <Meta name="description" content="Here you can meet the Team behind Swinceball" />
    </Head>
    <div class="flex flex-col md:mx-16 md:mb-10 mb-5 mx-10">
        <a class="md:title sm:text-3xl text-2xl font-bold text-blue-800">Meet the "Team"</a>
        <a class="md:text-xl">It is only me Swinceball who works with my videos.</a>
        <a class="md:text-xl">But still I do get some help by some people, here they are:</a>
    </div>

    <div class="flex justify-center">
        <ul
            class="flex flex-row lg:justify-around w-full overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
            <li v-for="(item, key) in data" :key="key" class="lg:mx-5 sm:mx-10 mx-6 mt-2">
                <cardWorkers :item="item" />
            </li>
        </ul>

    </div>
    <div class="flex justify-center">
        <ScrollMobileSide class="lg:hidden" />
    </div>
</template>

<script setup>
const { data } = await useAsyncData(() => queryContent(`/workers`).find())

</script>


<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none; 
}</style>