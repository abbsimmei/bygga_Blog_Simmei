<template>
  <div class="wrapper lg:mx-10 mx-6 shadow-xl">
    <iframe class="lg:w-96 lg:h-52 sm:w-80 sm:h-44 w-72 h-40 object-cover" :src="embedUrl" title="YouTube video player"
      frameborder="0" allow="" allowfullscreen></iframe>

  </div>
</template>

<script setup>
const { item } = defineProps(['item'])

const videoId = ref(item.id)
const embedUrl = ref(`https://www.youtube.com/embed/${videoId.value}`)

watch(videoId, () => {
  embedUrl.value = `https://www.youtube.com/embed/${videoId.value}`
})

</script>