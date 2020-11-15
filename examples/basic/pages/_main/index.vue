<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col class="mt-4">
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12" md="6" v-for="(cat, index) in main" v-bind:key="index">
        <!-- <nuxt-link :to="'/' + $route.params.main + '/' + cat.picture"> -->
        <nuxt-link
          :to="
            localePath({ path: '/' + $route.params.main + '/' + cat.picture })
          "
        >
          <div class="content">
            <b-img-lazy
              :src="`/${$route.params.main}/${cat.picture}.jpg`"
              class="catimg"
              rounded
            ></b-img-lazy>

            <span class="title" v-if="$store.state.lang == 'ar-ly'">
              {{ cat.names.ar }}
            </span>
            <span class="title" v-if="$store.state.lang == 'en'">
              {{ cat.names.en }}
            </span>
          </div>
        </nuxt-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  computed: {
    main() {
      return this.$store.state.main.filter(
        (m) => m.main === this.$route.params.main
      )
    },
    breadcrumb() {
      var b = [
        {
          text: this.$t('homepage'),
          to: { path: '/' },
        },
        {
          text: this.$t(this.$route.params.main),
          active: true,
        },
      ]
      return b
    },
  },
  props: {
    msg: String,
  },
  methods: {},
  created() {
    //console.log(this.$store.state.main)
  },
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .catimg {
    width: 100%;
    height: 72vw;
  }
  .title {
    font-size: 2em;
    margin-bottom: -15px;
  }
}
@media only screen and (min-width: 600px) {
  .catimg {
    width: 48vw;
    height: 36vw;
  }
  .title {
    font-size: 3em;
    margin-bottom: -25px;
  }
}
.breadcrumb {
  font-size: 1.5em;
}
.catimg {
  margin-top: 10px;
  object-fit: cover;
}
.title {
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  font-weight: 900;
}
.content {
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.content:after {
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(43, 43, 43, 0.3) 30%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
