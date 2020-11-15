<template>
  <b-container fluid v-if="item">
    <!-- {{ releated }} -->
    <!-- {{ this.$store.state.lang }} -->
    <!-- :src="'https://cloud.zarrugh.ly/Dropbox/Images/' + item.picture" -->
    <b-row>
      <b-col class="mb-1 mt-2">
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
      </b-col>
    </b-row>

    <b-row class="pt-4">
      <b-col cols="12" md="6">
        <country :item="item" class="mb-4" />
        <h2 class="mt-4 mb-4 title">
          {{ item.cleanedName[this.$store.state.language] }}
        </h2>

        <price :item="item" class="mt-3 mb-3" />
        <!-- <hr /> -->
        <!-- Code -->
        <!-- <div :align="$store.state.textalign" class="p-4">
          <h5 class="mt-3 mb-3 title">
            {{ $t("code") }}
          </h5>
          <h5 class="mt-3 mb-3 ">
            {{ item.code }}
          </h5>
        </div> -->
        <!-- <b-table stacked :items="itemtable" class="rtl"></b-table> -->
        <b-row
          class="itemtable"
          v-for="(item, key) in itemtable[0]"
          v-bind:key="key"
        >
          <b-col class="title">{{ key }}</b-col>
          <b-col class="mt-2 mb-2">{{ item }}</b-col>
        </b-row>
        <quantity :stock="item.stock" class="mt-2 mb-2" />
        <div class="m-2">
          <social
            :url="url"
            :title="item.cleanedName[this.$store.state.language]"
            :description="description"
            quote=""
            hashtags="Libya"
          />
        </div>
      </b-col>
      <b-col cols="12" md="6">
        <b-img
          :src="$store.state.variables.mainimg_big + item.picture"
          :alt="item.cleanedName.en"
          @error="imageUrlAlt"
          :data-imgid="item.id"
          class="itemimg"
          v-img="{ group: 'itemimg', thumbnails: true }"
        />
        <!-- <vue-preview :slides="images"></vue-preview> -->
        <div class="d-flex justify-content-end flex-wrap mt-2">
          <div
            v-for="(pic, index) in item.pictures"
            v-bind:key="index"
            class="additionalimgs"
          >
            <b-img
              thumbnail
              fluid
              :src="$store.state.variables.sideimg_big + pic"
              :alt="pic"
              v-img="{ group: 'itemimg', thumbnails: true }"
            ></b-img>
          </div>
        </div>
      </b-col>
    </b-row>
    <h2 class="mt-5">
      {{ $t('relateditems') }}
    </h2>
    <b-row v-if="releated" no-gutters class="mt-5" style="width: 100%;">
      <b-col>
        <VueSlickCarousel v-bind="carsettings">
          <div v-for="(re, index) in releated" v-bind:key="index">
            <!-- <router-link :to="{ path: '/', query: { c: re.code } }"> -->
            <!-- <router-link :to="{ path: '/product/' + re.code }"> -->
            <nuxt-link :to="localePath({ path: '/product/' + re.code })">
              <div class="content">
                <b-img
                  :src="$store.state.variables.mainimg_small + re.picture"
                  class="carimg"
                ></b-img>
                <span class="titlegroup">
                  {{ re.name[$store.state.language] }}
                </span>
              </div>
              <!-- </router-link> -->
            </nuxt-link>
          </div>

          <template #customPaging>
            <ol class="carousel-indicators">
              <li style="background-color: black;"></li>
            </ol>
          </template>
        </VueSlickCarousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import country from '@/components/helpers/country.vue'
import price from '@/components/helpers/price.vue'
import quantity from '@/components/helpers/quantity.vue'
import social from '@/components/helpers/social.vue'
export default {
  name: 'Item',
  data() {
    return {
      item: null,
      releated: null,
    }
  },
  components: {
    VueSlickCarousel,
    country,
    price,
    quantity,
    social,
  },
  computed: {
    url() {
      return this.$store.state.url + this.$route.fullPath
    },
    description() {
      var d = this.item.category.name[this.$store.state.language]
      d = d + ' '
      d = d + this.item.company.country.name[this.$store.state.language]
      return d
    },
    // computedmeta() {
    //   if (this.item) {
    //     return [
    //       this.item.cleanedName[this.$store.state.language],
    //       this.description,
    //       this.$store.state.variables.mainimg_big + this.item.picture,
    //       this.url,
    //     ]
    //   } else {
    //     return []
    //   }
    // },
    itemtable() {
      const {
        code: c,
        category: cat,
        type: t,
        finish: f,
        dimentions: d,
        choice: choice,
      } = this.item
      const dim = d.width + 'x' + d.height
      if (d.depth > 10) {
        var depth = 'depths'
      } else {
        depth = 'thickness'
      }
      const returntable = new Object()
      returntable[this.$t('code')] = c
      if (cat && cat.name && cat.name[this.$store.state.language]) {
        returntable[this.$t('category')] = cat.name[this.$store.state.language]
      }
      if (t && t.name && t.name[this.$store.state.language]) {
        returntable[this.$t('type')] = t.name[this.$store.state.language]
      }
      if (f && f.name && f.name[this.$store.state.language]) {
        returntable[this.$t('finish')] = f.name[this.$store.state.language]
      }
      if (dim && dim != '0x0') {
        returntable[this.$tc('dimentions', 1)] = dim
      }
      if (d.depth) {
        returntable[this.$tc(depth)] = d.depth + ' ' + this.$t('cm')
      }
      if (d.weight) {
        returntable[this.$tc('weights')] = d.weight + ' ' + this.$t('kg')
      }
      if (choice) {
        returntable[this.$t('choice')] = choice
      }
      return [returntable]
    },

    breadcrumb() {
      var breadc = []
      breadc.push({
        text: this.$t('homepage'),
        to: { name: 'index___' + this.$store.state.lang },
      })
      if (this.item.main && this.item.main.main) {
        breadc.push({
          text: this.$t(this.item.main.main),
          to: { path: '/' + this.item.main.main },
        })
      }

      if (this.item.main && this.item.main.names) {
        breadc.push({
          text: this.item.main.names[this.$store.state.language],
          to: {
            path: '/' + this.item.main.main + '/' + this.item.main.picture,
          },
        })
      }
      breadc.push({
        text: this.item.cleanedName[this.$store.state.language],
        active: true,
      })

      return breadc
    },
    carsettings: function () {
      if (this.releated && this.releated.length > 8) {
        var rows = 2
      } else {
        rows = 1
      }
      if (this.releated && this.releated.length < 4) {
        var toshow = this.releated.length
      } else {
        toshow = 4
      }

      return {
        dots: true,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: this.$store.state.isrtl,
        infinite: true,
        arrows: false,
        speed: 500,
        rows: rows,
        slidesToShow: toshow,
        slidesToScroll: toshow,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      }
    },
  },
  filters: {
    pretty: function (value) {
      return JSON.stringify(JSON.parse(value), null, 2)
    },
  },
  props: ['query', 'title'],
  methods: {
    imageUrlAlt(event) {
      event.target.src = '/img/logo.svg'
    },
    getrelated(code) {
      const items = `/items/${code}/related`
      this.$axios.$get(items).then((response) => {
        this.releated = response
      })
    },
    getitem() {
      var items = '/items/'
      if (this.$route.params.code) {
        var params = {
          code: this.$route.params.code,
        }
      } else {
        params = {
          code: this.query,
        }
      }

      this.$axios.$get(items, { params: params }).then((response) => {
        this.item = response
        this.getrelated(params.code)
        return response
      })
    },
    scrolltoitems() {
      var elmnt = document.querySelector('.breadcrumb')
      elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
  created() {
    this.getitem()
  },
  watch: {
    $route() {
      this.getitem()
      this.scrolltoitems()
    },
    currencywatch() {
      //console.log("currency change to ", this.currency);
      //   this.currency = this.currencywatch;
      //   this.getfilters();
    },
  },
}
</script>
<style>
.header-v-img {
  /* height: 60px !important; */
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
<style scoped>
@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 600px) {
  .itemimg {
    height: 55vh;
  }
}
.itemtable {
  font-size: 1.3em;
}
.title {
  font-weight: 700;
}
.itemimg {
  width: 100%;
  margin: auto;
  padding: 0px;
  object-fit: contain;
  -ms-flex-align: center !important;
  align-items: center !important;
}
.additionalimgs {
  width: 33.333%;
  /* height: auto;
  object-fit: cover; */
}
.additionalimgs img {
  height: 150px;
  object-fit: cover;
}
.slickcol {
  outline: none;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.carimg {
  height: 200px;
  object-fit: cover;
}
.titlegroup {
  color: white;
  position: absolute;
  width: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-weight: 500;
  /* text-align: right;
  padding-right: 0.8em; */
}
.content {
  position: relative;
  overflow: hidden;
  margin: 0px;
  /* margin-right: 15px; */
  border: solid;
  border-width: 2px;
  border-color: white;
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
