<template>
  <div>
    <Header />
    <Nuxt class="mt6" :dir="$store.state.direction" />
    <Footer :dir="$store.state.direction" />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return this.$nuxtI18nSeo()
  },
  middleware: ['main'],
}
</script>
<style>
.mt6 {
  margin-top: 60px;
}
</style>
