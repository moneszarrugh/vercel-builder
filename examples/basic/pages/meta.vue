<template>
  <h1>Meta Page</h1>
</template>

<script>
export default {
  head() {
    return {
      title: 'Hello World!',
      htmlAttrs: {
        lang: this.$store.state.lang,
      },
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>
