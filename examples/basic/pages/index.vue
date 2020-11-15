<template>
  <div v-if="!$route.query.c">
    <b-container fluid>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000;"
        fade
        indicators
        :interval="4000"
      >
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_3995.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_4026.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_4056.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_4057.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_4079.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          class="cropimg"
          img-src="/showroom/IMG_4081.jpg"
        ></b-carousel-slide>
      </b-carousel>

      <div class="quote">
        {{ $t('quote1') }}
      </div>
      <!-- <nuxt-link to="/bathrooms"> -->
      <nuxt-link :to="localePath({ path: '/bathrooms' })">
        <div class="content">
          <b-img-lazy src="/bathrooms.jpg" fluid></b-img-lazy>
          <span class="title">{{ $t('bathrooms') }}</span>
        </div>
      </nuxt-link>

      <div class="quote">
        {{ $t('quote2') }}
      </div>

      <!-- <nuxt-link to="/tiles"> -->
      <nuxt-link :to="localePath({ path: '/tiles' })">
        <div class="content">
          <b-img-lazy src="/tiles.jpg" fluid-grow></b-img-lazy>
          <span class="title">{{ $t('tiles') }}</span>
        </div>
      </nuxt-link>
      <div class="quote">
        {{ $t('quote3') }}
      </div>

      <!-- <nuxt-link to="/kitchens"> -->
      <nuxt-link :to="localePath({ path: '/kitchens' })">
        <div class="content">
          <b-img-lazy src="/kitchens.jpg" fluid-grow></b-img-lazy>
          <span class="title">{{ $t('kitchens') }}</span>
        </div>
      </nuxt-link>

      <div class="quote">
        {{ $t('quote4') }}
      </div>
    </b-container>
  </div>
  <Item v-else :query="$route.query.c" />
</template>

<script>
// var url = require('url')
// var urlParts = url.parse(req.url, true, true)
// var url = this.req.headers.host + '/' + req.url
// console.log(urlParts)

var r = /(https?:\/\/)?([^ \/]+)/
var getHost = function (url, headers) {
  return headers.host || r.exec(url)[2]
}
//console.log(this.window.location.href)

import Item from '@/components/Item.vue'
// import showroom from '@/static/showroom/IMG_3995.jpg'
export default {
  name: 'Home',

  // head() {
  //   return {
  //     meta: [
  //       {
  //         hid: 'main_title',
  //         name: 'og:title',
  //         content: 'Best Quality Products for your building in Libya',
  //       },
  //       {
  //         hid: 'main_description',
  //         name: 'og:description',
  //         content:
  //           'Zarrugh is the leading retailer of tiles, sanitary ware, and building materials.',
  //       },
  //       {
  //         hid: 'main_image',
  //         name: 'og:image',
  //         content: this.$store.state.url + '/showroom/IMG_3995.jpg',
  //       },
  //       { hid: 'main_url', name: 'og:url', content: 'www.zarrugh.com' },
  //     ],
  //   }
  // },
  // props: {
  //   query: String,
  // },

  methods: {},
  components: {
    Item,
  },
  created() {},
}
</script>
<style scoped>
@media only screen and (min-width: 600px) {
  .cropimg {
    width: 100vw !important;
    margin-top: -150px;
    margin-bottom: -75px;
  }
}
</style>
<style scoped>
.catimg {
  /* height: 12em; */
  /* width: 100٪; */
  /* width: 40em;
  height: 30em; */
  /* width: 700px;
  height: 600px; */
  /* width: 100vw;
  height: 75vw; */
  /* width: auto;
  height: 400px; */
  object-fit: cover;
}
.title {
  color: white;
  font-size: 1.1em;
  position: absolute;
  width: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 3em;
  margin-bottom: -25px;
  font-weight: 900;
}

@media only screen and (min-width: 600px) {
  /* .title {
    font-size: 3em;
  } */
  /* #carousel-fade {
    margin-right: 250px;
    margin-left: 250px;
  } */
  .quote {
    margin: 75px;
    font-size: 3em;
  }
}
@media only screen and (max-width: 600px) {
  .title {
    font-size: 1.7em;
    margin-bottom: -15px;
  }
  .quote {
    margin: 25px;
    font-size: 1.3em;
  }
}
.content {
  position: relative;
  /* margin: 10px; */
  /* display: inline-block; */
  /* height: 100%;
  width: 100%; */
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
