<template>
  <div>
    <b-container fluid>
      <b-row style="margin-bottom: 0.5em;">
        <div class="content" style="cursor: pointer;" @click="scrolltoitems">
          <!-- Image Below -->
          <b-img-lazy
            :src="`/${$route.params.main}/${$route.params.type}.jpg`"
            class="catimg"
          ></b-img-lazy>

          <!-- Title Below -->
          <div class="title">
            <span v-if="$store.state.lang == 'en'" class="p-2">
              {{ main[$route.params.type].names.en }}
            </span>
            <span v-if="$store.state.lang == 'ar-ly'">
              {{ main[$route.params.type].names.ar }}
            </span>

            <font-awesome-icon icon="angle-down" class="box bounce" />
          </div>
        </div>
      </b-row>
    </b-container>

    <b-row no-gutters style="width: 100%;">
      <b-col>
        <VueSlickCarousel v-bind="carsettings">
          <div v-for="(cat, index) in main" v-bind:key="index" class="slickcol">
            <!-- <nuxt-link :to="'/' + $route.params.main + '/' + cat.picture"> -->
            <nuxt-link
              :to="
                localePath({
                  path: '/' + $route.params.main + '/' + cat.picture,
                })
              "
            >
              <div
                class="content"
                :class="{
                  contentactive: $route.params.type == cat.picture,
                  shadow: $route.params.type == cat.picture,
                }"
              >
                <b-img
                  :src="`/${$route.params.main}/${cat.picture}.jpg`"
                  class="carimg"
                ></b-img>

                <span class="titlegroup" v-if="$store.state.lang == 'ar-ly'">{{
                  cat.names.ar
                }}</span>
                <span class="titlegroup" v-if="$store.state.lang == 'en'">{{
                  cat.names.en
                }}</span>
              </div>
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

    <b-container fluid style="min-height: 100vh;">
      <b-row>
        <b-col class="mb-1">
          <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" class="d-none d-sm-block" v-if="windowWidth > 1050">
          <Filters
            @applyfilter="applyfilter"
            @getfilters="getfilters"
            :filteroptions="filteroptions"
            :filtershareurl="filtershareurl"
            :usedfilter="usedfilter"
            :main="main"
          />
        </b-col>
        <b-col>
          <!-- Start Sort Tabs -->
          <b-button
            v-b-toggle.collapse-1
            variant="outline-secondary"
            block
            class="d-block d-sm-none mb-3"
            size="lg"
          >
            <span>
              {{ $tc('sortitems') }}
            </span>
            <font-awesome-icon icon="sort-amount-down" class="mr-1 ml-1" />
          </b-button>
          <b-collapse
            id="collapse-1"
            class="mt-2"
            :visible="windowWidth > 1050"
          >
            <b-tabs
              content-class="mt-3"
              boundary-padding="0"
              align="center"
              fill
            >
              <b-tab @click="sortby()" active>
                <template v-slot:title>
                  <span>
                    {{ $tc('defaultsort') }}
                  </span>
                  <font-awesome-icon
                    icon="sort-amount-down"
                    class="mr-1 ml-1"
                  />
                </template>
              </b-tab>

              <b-tab @click="sortby('price_high')">
                <template v-slot:title>
                  <span>
                    {{ $tc('price_high') }}
                  </span>
                  <font-awesome-icon
                    icon="sort-numeric-down-alt"
                    class="mr-1 ml-1"
                  />
                </template>
              </b-tab>
              <b-tab @click="sortby('price_low')">
                <template v-slot:title>
                  <span>
                    {{ $tc('price_low') }}
                  </span>
                  <font-awesome-icon
                    icon="sort-numeric-down"
                    class="mr-1 ml-1"
                  />
                </template>
              </b-tab>
              <b-tab @click="sortby('newest')">
                <template v-slot:title>
                  <span>
                    {{ $tc('newest') }}
                  </span>
                  <font-awesome-icon icon="sort-alpha-down" class="mr-1 ml-1" />
                </template>
              </b-tab>
              <b-tab @click="sortby('popular_high')">
                <template v-slot:title>
                  <span>
                    {{ $tc('popular') }}
                  </span>
                  <font-awesome-icon
                    icon="sort-alpha-down-alt"
                    class="mr-1 ml-1"
                  />
                </template>
              </b-tab>
            </b-tabs>
          </b-collapse>
          <!-- End Sort Tabs -->
          <b-row>
            <b-card-group align="center" style="width: 100%;">
              <b-col
                class="col"
                cols="12"
                md="6"
                lg="4"
                v-for="item in data"
                v-bind:key="item.code + item.id"
                :id="item.id"
              >
                <!-- <router-link :to="{ path: '/', query: { c: item.code } }"> -->
                <!-- <nuxt-link :to="{ path: '/product/' + item.code }"> -->
                <nuxt-link :to="localePath({ path: '/product/' + item.code })">
                  <b-card align="center" :dir="$store.state.direction" no-body>
                    <template v-slot:header>
                      <country :item="item" />
                    </template>

                    <b-list-group class="noborder">
                      <!-- <b-list-group-item class="noborder">
                      <h6 class="mb-0" v-if="$store.state.lang == 'ar-ly'">
                        {{ item.name.ar }}
                      </h6>
                      <h6 class="mb-0" v-if="$store.state.lang == 'en'">
                        {{ item.name.en }}
                      </h6>
                    </b-list-group-item> -->
                      <b-list-group-item class="noborder">
                        <!-- <div v-resize-text="{ ratio: 2.5, minFontSize: '4px' }"> -->
                        <h6 class="mb-0" v-if="$store.state.lang == 'ar-ly'">
                          {{ item.cleanedName.ar }}
                        </h6>
                        <h6 class="mb-0" v-if="$store.state.lang == 'en'">
                          {{ item.cleanedName.en }}
                        </h6>

                        <div class="d-inline" dir="ltr">
                          <span v-if="item.dimentions.width">
                            {{ item.dimentions.width }}
                          </span>
                          <span
                            v-if="
                              item.dimentions.width && item.dimentions.height
                            "
                          >
                            x
                          </span>
                          <span v-if="item.dimentions.height">
                            {{ item.dimentions.height }}
                          </span>
                        </div>
                      </b-list-group-item>
                    </b-list-group>

                    <b-card-img-lazy
                      :src="
                        'https://cloud.zarrugh.ly/upload/medium/' + item.picture
                      "
                      :alt="item.cleanedName.en"
                      @error.native="imageUrlAlt"
                      :data-imgid="item.id"
                      class="itemimg"
                    ></b-card-img-lazy>
                    <!-- </b-list-group-item> -->
                    <!-- {{ (item.discount = 0.25) }} -->
                    <b-list-group
                      class="noborder p-1"
                      style="font-size: 0.8em;"
                    >
                      <b-list-group-item class="noborder p-0">
                        {{ item.code }}
                      </b-list-group-item>
                      <b-list-group-item class="noborder p-0">
                        <!-- {{ item.stock.available }} -->
                        <quantity :stock="item.stock" />
                      </b-list-group-item>
                    </b-list-group>

                    <!-- Start Price Footer -->
                    <template v-slot:footer>
                      <price :item="item" />
                    </template>
                  </b-card>
                </nuxt-link>
              </b-col>
            </b-card-group>
          </b-row>
          <b-row>
            <b-col cols="12" style="font-size: 3em;">
              <!-- <client-only> -->
              <!-- <no-ssr> -->
              <infinite-loading
                align="center"
                :identifier="infiniteId"
                @infinite="infiniteHandler"
              >
                <!-- spinner="spiral" -->

                <div slot="no-more" style="display: none;">
                  <!-- {{ $t("no-more") }} -->
                </div>
                <div slot="no-results" class="mt-5">
                  {{ $t('no-results') }}
                </div>
              </infinite-loading>
              <!-- </no-ssr> -->
              <!-- </client-only> -->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <FooterNav v-if="windowWidth < 1050" />
    <b-sidebar
      id="sidebar-1"
      backdrop
      shadow
      :right="$store.state.textalign == 'right'"
      @shown="sidebarshown"
      @hidden="sidebarhidden"
    >
      <div class="px-3 py-2" v-if="windowWidth < 1050">
        <Filters
          @applyfilter="applyfilter"
          @getfilters="getfilters"
          :filteroptions="filteroptions"
          :filtershareurl="filtershareurl"
          :usedfilter="usedfilter"
          :main="main"
        />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
// import InfiniteLoading from 'vue-infinite-loading'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Filters from '@/components/Filter.vue'
import country from '@/components/helpers/country.vue'
import price from '@/components/helpers/price.vue'
import quantity from '@/components/helpers/quantity.vue'
import FooterNav from '@/components/FooterNav.vue'

export default {
  name: 'Products',
  components: {
    // InfiniteLoading,
    VueSlickCarousel,
    Filters,
    price,
    country,
    quantity,
    FooterNav,
  },
  props: [],
  data() {
    return {
      data: [],
      filteroptions: {},
      originalfilteroptions: {},
      queryString: null,
      infiniteId: +new Date(),
      filter: {
        pageSize: 30,
        pageNumber: 1,
      },
      usedfilter: {},
    }
  },

  methods: {
    addHashToLocation(params) {
      if (params) {
        var q = '?'
      } else {
        q = ''
      }
      history.pushState({}, null, this.$route.path + q + params)
    },
    imageUrlAlt(event) {
      event.target.src = '/logo.svg'
      // var x = document.getElementById(event.target.dataset.imgid);
      // x.style.display = "none";
    },
    // nologo(event) {
    //   event.target.src = "/img/No_image.svg";
    //   var logoid = event.target.id;
    //   var spanid = event.target.dataset.spanid;
    //   document.getElementById(logoid).style = "display:none;";
    //   document.getElementById(spanid).style = "display:block;";
    // },

    getproducts() {
      if (this.$route.params.type != 'all') {
        return {
          main: this.main[this.$route.params.type].id,
          // main: this.main[this.$route.params.type], //temp for nuxt
        }
      } else {
        return null
      }
    },

    infiniteHandler($state) {
      var items = '/items/' + this.$route.params.main
      //console.log('api', items)
      //console.log('usedfilter', this.usedfilter)
      this.$axios.$get(items, { params: this.usedfilter }).then((response) => {
        //console.log('infiniteHandler', response)
        if (Object.keys(response).length) {
          // this.filter.pageNumber += 1;
          this.usedfilter.pageNumber += 1
          this.data = this.data.concat(response)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },

    getfilters(filterby, filterdata) {
      // console.log("filterby", filterby);
      // console.log("filterdata", filterdata);
      //Save last filteroptions before getting the new one from db
      var filteroptions = this.filteroptions

      //Get query string to prevent calling it again if it is the same one
      var queryString = Object.keys(this.usedfilter)
        .filter((key) => this.usedfilter[key] !== null)
        .map((key) => key + '=' + this.usedfilter[key])
        .join('&')

      if (queryString !== this.queryString) {
        //Save query string in data
        //this.queryString = queryString;

        // this.$router.push({
        //   path: "/" + this.$route.params.main + "/" + this.$route.params.type,
        //   query: this.usedfilter,
        // });

        //filters api link
        var filters = '/filters/' + this.$route.params.main

        this.$axios
          .$get(filters, { params: this.usedfilter })
          .then((response) => {
            this.filteroptions = response
            if (filterby && filterdata && filterdata.length != 0) {
              //Dont filter the options of the currently selected filter
              //console.log("put back", filterby);
              this.filteroptions[filterby] = filteroptions[filterby]

              // if (filteroptions[filterby] && this.filteroptions[filterby]) {
              //   console.log(
              //     "filteroptions[filterby].length",
              //     filteroptions[filterby].length
              //   );
              //   console.log(
              //     "this.filteroptions[filterby].length",
              //     this.filteroptions[filterby].length
              //   );
              //   if (
              //     filteroptions[filterby].length >
              //     this.filteroptions[filterby].length
              //   ) {
              //     console.log("old filter is bigger than old filter");
              //   }
              // }
            }
          })
      }
    },
    sortby(order) {
      //console.log("sort ", order);
      this.filter.sort = order
      this.usedfilter.sort = order
      this.filter.pageNumber = 1
      this.usedfilter.pageNumber = 1
      this.data = []
      this.infiniteId += 1
      if (this.windowWidth < 1050) {
        this.$root.$emit('bv::toggle::collapse', 'collapse-1')
      }
    },
    changetype() {
      //console.log("changetype called");
      // var pathto = "/bathrooms/" + cat;
      // this.$router.push({ path: pathto });
      var filter = this.getproducts()
      this.usedfilter = { ...filter, ...this.filter }

      this.filter.pageNumber = 1
      this.usedfilter.pageNumber = 1
      this.data = []
      this.infiniteId += 1
      this.getfilters()
    },
    applyfilter(filterby, filterdata) {
      //No filters added
      if (Object.keys(filterdata).length == 0) {
        this.usedfilter[filterby] = null
      } else {
        this.usedfilter[filterby] = [filterdata].join(',')
        setTimeout(() => {
          this.scrolltoitems()
        }, 800)
      }

      this.filter.pageNumber = 1
      this.usedfilter.pageNumber = 1
      this.data = []
      this.infiniteId += 1

      var queryString = Object.keys(this.usedfilter)
        .filter((key) => this.usedfilter[key] !== null)
        .map((key) => key + '=' + this.usedfilter[key])
        .join('&')

      this.queryString = queryString

      var queryURL = Object.keys(this.usedfilter)
        .filter((key) => this.usedfilter[key] !== null)
        .filter((key) => key !== 'main')
        .filter((key) => key !== 'pageNumber')
        .filter((key) => key !== 'pageSize')
        .filter((key) => key !== 'currency')
        .map((key) => key + '=' + this.usedfilter[key])
        .join('&')

      this.addHashToLocation(queryURL)
      /*
      console.log("currentquery", queryString);

      if (queryString != this.queryString) {
        this.$router.push({
          path: "/" + this.$route.params.main + "/" + this.$route.params.type,
          query: { q: queryString },
        });
      }
*/
    },
    scrolltoitems() {
      var elmnt = document.querySelector('.breadcrumb')
      elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    sidebarshown() {
      document.body.style.overflow = 'hidden'
    },
    sidebarhidden() {
      document.body.style.removeProperty('overflow')
    },
  },
  watch: {
    $route() {
      this.changetype()
    },
    currencywatch() {
      //console.log("currency change to ", this.currency);

      this.usedfilter.currency = this.currencywatch
      this.getfilters()
    },
  },
  computed: {
    filtershareurl() {
      var path =
        this.$store.state.url +
        '/' +
        this.$route.params.main +
        '/' +
        this.$route.params.type
      if (this.queryString) {
        path = path + '?' + encodeURI(this.queryString)
      }
      return path
    },
    currencywatch() {
      return this.$store.state.currency
    },
    main() {
      const main = {}
      this.$store.state.main
        .filter((m) => m.main === this.$route.params.main)
        .forEach((m) => {
          main[m.picture] = m
        })
      main.all = {
        id: 0,
        main: this.$route.params.main,
        name: {
          ar: ' جميع ' + this.$tc(this.$route.params.main, 'ar-ly'),
          en: 'All ' + this.$tc(this.$route.params.main, 'en'),
        },
        names: {
          ar: ' جميع ' + this.$tc(this.$route.params.main, 'ar-ly'),
          en: 'All ' + this.$tc(this.$route.params.main, 'en'),
        },
        picture: 'all',
      }

      return main
    },
    breadcrumb() {
      var b = [
        {
          text: this.$t('homepage'),
          to: { name: 'index___' + this.$store.state.lang },
        },
        {
          text: this.$t(this.$route.params.main),
          to: { name: 'main___' + this.$store.state.lang },
        },
        {
          text: this.openmain,
          active: true,
        },
      ]
      return b
    },
    openmain() {
      if (this.$route.params.type == 'all') {
        return this.$t(this.$route.params.type)
      } else {
        if (this.$store.state.lang == 'ar-ly') {
          return this.main[this.$route.params.type].names.ar
        }
        if (this.$store.state.lang == 'en') {
          return this.main[this.$route.params.type].names.en
        }
      }

      return null
    },

    carsettings: function () {
      return {
        dots: true,
        //dotsClass: "dotsClass",
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 4000,
        rtl: this.$store.state.isrtl,
        infinite: true,
        arrows: false,
        speed: 500,
        // slidesPerRow: 3,
        slidesToShow: 4,
        slidesToScroll: 2,
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
  created() {
    var filter = this.getproducts()
    this.filter.currency = this.currencywatch
    var urlqueries = [
      'search',
      'type',
      'company',
      'category',
      'color',
      'finish',
      'choice',
      'width',
      'height',
      'country',
      'quantity',
      'price',
      'warehouse',
    ]
    var sharedquery = {}
    urlqueries.forEach((q) => {
      if (this.$route.query[q]) {
        sharedquery[q] = this.$route.query[q]
      }
    })

    this.usedfilter = { ...filter, ...this.filter, ...sharedquery }
    this.getfilters()
  },
  mounted() {},
}
</script>
<style scoped>
/* Use a more specific selector so you don't target all cols and cards. */
.overflow {
  position: absolute !important;
}

.noborder {
  border: 0px !important;
  /* border-top: initial;
  border-bottom: initial; */
}
.catimg {
  width: 100vw;
  object-fit: cover;
}

.carimg {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.title,
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
.contentactive:after {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(43, 43, 43, 0.8) 10%,
    rgba(43, 43, 43, 0.5) 20%,
    rgba(43, 43, 43, 0.2) 30%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.2) 60%,
    rgba(255, 255, 255, 0.3) 70%,
    rgba(255, 255, 255, 0.4) 80%,
    rgba(255, 255, 255, 0.5) 100%
  );
}
/* ************************************ */
.breadcrumb {
  font-size: 1.3em;
}
.col {
  margin-bottom: 30px;
}

.card {
  text-transform: capitalize;
  min-height: 400px;
  height: 100%;
  width: 100%;
}
.card-header {
  /* background-color: white; */
  border: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
.card-footer {
  /* background-color: white; */
  border: 0px;
}
h6 {
  font-weight: 700;
  font-size: 1.2em;
}
.card-body {
  padding: 0px;
}
.imgcont {
  display: -ms-flexbox !important;
  display: flex !important;
  height: 100%;
  width: 100%;
}
.itemimg {
  width: 250px; /* image width */
  max-height: 300px;
  margin: auto;
  padding: 0px;
  object-fit: contain;
  -ms-flex-align: center !important;
  align-items: center !important;
}
@media only screen and (min-width: 600px) {
  .catimg {
    /* margin-top: -300px;
    margin-bottom: -300px; */
    height: 500px;
  }
  .title {
    font-size: 3em;
    margin-bottom: -25px;
  }
  .titlegroup {
    font-size: 2em;
    margin-bottom: -20px;
  }
}

@media only screen and (max-width: 600px) {
  .carimg {
    height: 150px;
  }
  .title {
    font-size: 2em;
    margin-bottom: -15px;
  }
  .titlegroup {
    font-size: 1em;
    margin-bottom: -15px;
  }
}
.dotsClass {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 20px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slickcol {
  outline: none;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
}

.box {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto 0 auto;
  transform-origin: bottom;
  vertical-align: bottom;
  font-size: 1.3em;
}
.bounce {
  animation-name: bounce;
  animation-timing-function: ease;
}
@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.1, 0.9) translateY(0);
  }
  30% {
    transform: scale(0.9, 1.1) translateY(-20px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(-7px);
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
a:hover {
  text-decoration: none;
  color: #000;
}
</style>
