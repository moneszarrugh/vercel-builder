<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="light"
      fixed="bottom"
      dir="ltr"
    >
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->

      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
      <b-navbar-toggle target="" v-b-toggle.sidebar-1 class="bnav">
        <template v-slot:default>
          <div>
            <font-awesome-icon icon="filter" class="mr-1 ml-1" />
            {{ $t('filters') }}
          </div>
        </template>
      </b-navbar-toggle>

      <!-- <b-navbar-toggle target="navbar-toggle-collapse" class="bnav">
        <template v-slot:default>
          
          <font-awesome-icon
            :icon="['fab', 'facebook-messenger']"
            class="mr-2 ml-2"
          />
        </template>
      </b-navbar-toggle> -->

      <!-- <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
  <!-- 

    <div id="fb-root"></div>
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v7.0'
        });
      };

      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/ar_AR/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    
    <div class="fb-customerchat"
      attribution=install_email
      page_id="161833142990"
      theme_color="#1A417E"
      logged_in_greeting="مرحباً بك في شركة الزروق، كيف يمكننا مساعدتك؟"
      logged_out_greeting="مرحباً بك في شركة الزروق، كيف يمكننا مساعدتك؟">
    </div>
   -->
</template>

<script>
export default {
  name: 'FooterNav',
  data: () => ({}),
  methods: {},
}
</script>

<style scoped>
.bnav {
  font-size: 1.5em;
}
</style>
