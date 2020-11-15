<template>
  <div>
    <Item />
  </div>
</template>

<script>
// import axios from 'axios'
import Item from '@/components/Item.vue'
// import axios from 'axios'
export default {
  name: 'itempage',

  middleware({ app, store, params }) {
    return app.$axios.$get(`/items/?code=${params.code}`).then((response) => {
      store.commit('setItem', response)
    })
  },

  head() {
    return {
      title: this.itemresult.cleanedName[this.$store.state.language],
      htmlAttrs: {
        lang: this.$store.state.lang,
      },
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.itemresult.cleanedName[this.$store.state.language],
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            this.$store.state.variables.mainimg_big + this.itemresult.picture,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: this.$store.state.url + this.$route.fullPath,
        },
      ],
    }
  },

  components: {
    Item,
  },
  computed: {
    itemresult() {
      return this.$store.state.itemresult
    },
    description() {
      if (
        this.itemresult.main &&
        this.itemresult.main.name &&
        this.itemresult.main.name[this.$store.state.language]
      ) {
        var d = this.itemresult.main.name[this.$store.state.language]
        d = d + ' '
      }
      if (
        this.itemresult.type &&
        this.itemresult.type.name &&
        this.itemresult.type.name[this.$store.state.language]
      ) {
        d = d + this.itemresult.type.name[this.$store.state.language]
        d = d + ' '
      }
      if (
        this.itemresult.company &&
        this.itemresult.company.country &&
        this.itemresult.company.country.name &&
        this.itemresult.company.country.name[this.$store.state.language]
      ) {
        d = d + this.itemresult.company.country.name[this.$store.state.language]
        d = d + ' '
      }
      if (
        this.itemresult.company &&
        this.itemresult.company.name &&
        this.itemresult.company.name[this.$store.state.language]
      ) {
        d = d + this.$t('fromcompany')
        d = d + ' '
        d = d + this.itemresult.company.name
        d = d + ' '
      }

      if (
        this.itemresult.category.name &&
        this.itemresult.category.name[this.$store.state.language]
      ) {
        d = d + this.itemresult.category.name[this.$store.state.language]
        d = d + ' '
      }
      d = d + this.$t('code')
      d = d + ' '
      d = d + this.itemresult.code
      return d
    },
  },
}
</script>
