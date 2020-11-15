<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
    <!-- <b-navbar-brand href="#">Zarrugh</b-navbar-brand> -->
    <b-navbar-brand :to="localePath({ path: '/' })">
      <b-img src="/logo.svg" height="40px" />
      <!-- <img src="/img/icons/apple-touch-icon-60x60.png" /> -->
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            >Search</b-button
          >
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <!-- 
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
         -->

        <!-- Currency
        <b-navbar-nav>
          <b-nav-item
            v-if="$store.state.currency == 'lyd'"
            @click="$store.state.currency = 'eur'"
          >
            {{ $t('eur') }}
          </b-nav-item>
          <b-nav-item
            v-if="$store.state.currency == 'eur'"
            @click="$store.state.currency = 'lyd'"
          >
            {{ $t('lyd') }}
          </b-nav-item>
        </b-navbar-nav>
         -->

        <!-- Language -->
        <!--  :to="switchLocalePath('en')" -->
        <!-- :to="switchLocalePath('ar-ly')" -->
        <b-navbar-nav>
          <b-nav-item
            v-if="$store.state.lang == 'ar-ly'"
            @click="setLanguage('en')"
          >
            English</b-nav-item
          >
          <b-nav-item
            v-if="$store.state.lang == 'en'"
            @click="setLanguage('ar-ly')"
          >
            عربي
          </b-nav-item>
          <div>
            {{ $i18n.locale }}
          </div>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    lang: '',
  }),

  methods: {
    setLanguage(lang) {
      // this.$i18n.locale = lang
      // this.switchLocalePath(lang)
      this.$store.commit('setLanguage', lang)

      // this.$store.commit('i18n/i18nSetLocale', lang)

      import(`../lang/${lang}`).then((module) => {
        // update i18n's locale instance
        this.$i18n.locale = lang
        // set new messages from new locale file
        this.$i18n.setLocaleMessage(lang, module.default)
        // update url to point to new path, without reloading the page
        window.history.replaceState('', '', this.switchLocalePath(lang))
      })
    },
  },
  created() {
    // console.log(this.$i18n.locale)
    //this.$store.commit('setLanguage', this.$i18n.locale)
    // this.setLanguage(this.$i18n.locale)
    if (this.$i18n.locale != this.$store.state.lang) {
      this.setLanguage(this.$i18n.locale)
    }
  },
}
</script>

<style scoped>
.navbar {
  /* position: absolute;

  width: 100%;
  z-index: 1; */
  /* height: 40px; */
  padding: 5px;
}
.nav-link {
  padding: 10px;
  font-size: 1.2em;
  margin-right: 10px;
}
</style>
