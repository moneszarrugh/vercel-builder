<template>
  <footer>
    <b-container fluid class="footer">
      <b-row>
        <b-col cols="12" lg="3">
          <div class="h3 mb-0">
            {{ $t('contact') }}
            <font-awesome-icon icon="tty" class="mr-1 ml-1" />
          </div>
          <hr class="mt-1" />
          <b-list-group>
            <b-list-group-item class="lg" dir="ltr">
              <font-awesome-icon icon="mobile-alt" class="mr-1 ml-1" />
              <!-- +218-213401910 -->
              <a href="tel:+218916762445">+218-91-676-2445</a>
              <br />
              <font-awesome-icon icon="mobile-alt" class="mr-1 ml-1" />
              <a href="tel:+218914095028">+218-91-409-5028</a>
            </b-list-group-item>
            <b-list-group-item class="lg">
              <a href="mailto:info@zarrugh.ly">info@zarrugh.ly</a>

              <font-awesome-icon icon="envelope-open-text" class="mr-1 ml-1" />
            </b-list-group-item>
            <b-list-group-item class="lg" style="font-size: 3em;">
              <a href="https://www.facebook.com/zarrughcompany">
                <font-awesome-icon
                  :icon="['fab', 'facebook-square']"
                  :style="{ color: 'black' }"
                  class="mr-2 ml-2"
                />
              </a>
              <a href="https://www.twitter.com/zarrughcompany">
                <font-awesome-icon
                  :icon="['fab', 'twitter-square']"
                  :style="{ color: 'black' }"
                  class="mr-2 ml-2"
                />
              </a>
              <a href="https://www.youtube.com/user/ZarrughCompany">
                <font-awesome-icon
                  :icon="['fab', 'youtube-square']"
                  :style="{ color: 'black' }"
                  class="mr-2 ml-2"
                />
              </a>
            </b-list-group-item>
            <b-list-group-item class="lg mb-3">
              <div class="h3 mb-0 mt-1">
                {{ $t('workinghours') }}
                <font-awesome-icon icon="clock" class="mr-1 ml-1" />
              </div>
              <hr class="mt-3 mb-4" />
              <div class="mt-4">
                {{ $t('am', { time: '9:00' }) }}
                -
                {{ $t('pm', { time: '6:00' }) }}
              </div>
              <div class="mt-2">
                {{ $t('days') }}
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="12" lg="6">
          <div class="h3 mb-0">
            {{ $t('locations') }}
            <font-awesome-icon icon="map-marked-alt" class="mr-1 ml-1" />
          </div>
          <hr class="mt-1" />
          <b-row class="mb-3">
            <b-col cols="12" md="6">
              <div class="addresstitle">{{ $t('address1') }}</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14120.312792129469!2d13.121716221356335!3d32.86506910751217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8ec5681be976f%3A0x8d241777a9525349!2sZarrugh%20Showroom!5e0!3m2!1sen!2sly!4v1591214554597!5m2!1sen!2sly"
                width="100%"
                height="300"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </b-col>
            <b-col cols="12" md="6">
              <div class="addresstitle">{{ $t('address2') }}</div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13401.216063939934!2d13.20498388270035!3d32.89012938822254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a892f2a0cdc93b%3A0xaa6b723972bd9a4c!2sZarrugh%20Showroom!5e0!3m2!1sen!2sly!4v1591214480284!5m2!1sen!2sly"
                width="100%"
                height="300"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="12" lg="3">
          <div class="h3 mb-0">
            {{ $t('products') }}
            <font-awesome-icon icon="box" class="mr-1 ml-1" />
          </div>
          <hr class="mt-1" />
          <b-list-group>
            <b-list-group-item
              class="lg"
              dir="ltr"
              :to="localePath({ path: '/bathrooms/' })"
            >
              {{ $t('bathrooms') }}
            </b-list-group-item>
            <b-list-group-item
              class="lg"
              dir="ltr"
              :to="localePath({ path: '/tiles/' })"
            >
              {{ $t('tiles') }}
            </b-list-group-item>
            <b-list-group-item
              class="lg"
              dir="ltr"
              :to="localePath({ path: '/kitchens/' })"
            >
              {{ $t('kitchens') }}
            </b-list-group-item>
          </b-list-group>
          <!-- About US -->
          <div class="h3 mt-2 mb-0">
            {{ $t('aboutus') }}
            <font-awesome-icon icon="info-circle" class="mr-1 ml-1" />
          </div>
          <hr class="mt-1" />
          <b-list-group-item
            class="lg"
            dir="ltr"
            :to="localePath({ path: '/about/' })"
          >
            {{ $t('ourhistory') }}
          </b-list-group-item>
          <!-- Job Offers -->
          <div class="h3 mt-2 mb-0">
            {{ $t('joboffers') }}
            <font-awesome-icon icon="user-tie" class="mr-1 ml-1" />
          </div>
          <hr class="mt-1" />
          <b-list-group-item
            class="lg clickable list-group-item-action"
            dir="ltr"
            @click="gotojobs()"
          >
            {{ $t('jobapplication') }}
          </b-list-group-item>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({}),
  methods: {
    gotojobs() {
      window.location.href = 'https://forms.gle/dHiJtDmZgjP4qyMN8'
    },
  },
}
</script>

<style scoped>
.footer {
  color: #000;
  background: #f2f2f2 !important;
  /* padding: 80px 0px 80px 0px; */
  margin-top: 80px;
  padding-top: 40px;
  padding-bottom: 15px;
}
.lg {
  color: #000;
  background: #f2f2f2;
  border: 0px;
  font-size: 1.2em;
}
.addresstitle {
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.clickable {
  cursor: pointer;
}
</style>
