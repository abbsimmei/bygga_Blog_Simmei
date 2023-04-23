<template class="overscroll-none">
    <Head>
        <Title>Swinceball | Articles</Title>
        <Meta name="description" content="Here you can browser all my great articles" />
    </Head>
    <main>
        <!--SCROLL ONLY WORKS WITH MOUSEPAD FOR SOME REASON ASK JETON!!-->
        <section class="hidden sm:flex lg:pt-12 pt-4 bg-cover bg-center bg-[url('../../img/Hoi4.png')] ">
            <scroll :name="'HOI4'" />
            <ul
                class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
                <li v-for="(item, key) in data" :key="key" class="">
                    <card :item="item" v-if="item.tag == 'Hoi4'" />
                </li>
            </ul>
        </section>
        <section class="hidden sm:flex lg:pt-12 pt-8 bg-cover bg-center bg-[url('../../img/youtube.png')]">
            <scroll :name="'YOUTUBE'" />
            <ul
                class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
                <li v-for="(item, key) in data" :key="key" class="">
                    <card :item="item" v-if="item.tag == 'Youtube'" />
                </li>
            </ul>
        </section>
        <section class="hidden sm:flex lg:pt-12 pt-8 bg-cover bg-center bg-[url('../../img/history.png')]">
            <scroll :name="'HISTORY'" />
            <ul
                class="flex flex-row overflow-x-auto overflow-y-hidden overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide py-10">
                <li v-for="(item, key) in data" :key="key" class="">
                    <card :item="item" v-if="item.tag == 'History'" />
                </li>
            </ul>
        </section>

        <section class="flex flex-col sm:hidden items-center mb-8 mt-10">
            <MobileTitle :name="'HOI4'" />
            <div class="flex items-center">
                <ul
                    class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-52 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                    <li v-for="(item, key) in data" :key="key" class="">
                        <card :item="item" v-if="item.tag == 'Hoi4'" class="" />
                    </li>
                </ul>
                <ScrollMobile />
            </div>
        </section>
        <section class="flex flex-col sm:hidden items-center mb-8 mt-10">
            <MobileTitle :name="'YOUTUBE'" />
            <div class="flex items-center">
                <ul
                    class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-52 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                    <li v-for="(item, key) in data" :key="key" class="">
                        <card :item="item" v-if="item.tag == 'Youtube'" class="" />
                    </li>
                </ul>
                <ScrollMobile />
            </div>
        </section>
        <section class="flex flex-col sm:hidden items-center mb-8 mt-10">
            <MobileTitle :name="'HISTORY'" />
            <div class="flex items-center">
                <ul
                    class="flex flex-col items-center overflow-x-hidden overflow-y-auto w-72 h-52 overscroll-none scrollbar-hide::-webkit-scrollbar scrollbar-hide">
                    <li v-for="(item, key) in data" :key="key" class="">
                        <card :item="item" v-if="item.tag == 'History'" class="" />
                    </li>
                </ul>
                <ScrollMobile />
            </div>
        </section>


    </main>
</template>

<script setup>
// set meta for page

const { data } = await useAsyncData(() => queryContent(`/articles`).find())



    

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

                                        <!-- <p>{{ article.description }}</p>
                                            <ul class="article-tags">
                                            <li class="" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                                            </ul> -->