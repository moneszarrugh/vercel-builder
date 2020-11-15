<template>
  <div class="d-flex justify-content-around" v-if="item.company.country.code">
    <div>
      <img :src="`/flags/${item.company.country.code}.svg`" class="flag" />

      <span style="margin-right: 5px;" v-if="$store.state.lang == 'ar-ly'">
        {{ item.company.country.name.ar }}
      </span>
      <span style="margin-left: 5px;" v-if="$store.state.lang == 'en'">
        {{ item.company.country.name.en }}
      </span>
    </div>
    <div>
      <b-img-lazy
        :src="'/logos/' + item.company.name.toLowerCase() + '.svg'"
        :alt="item.company.name"
        @error.native="nologo"
        :id="'logoid' + item.id"
        :data-spanid="'logotxt' + item.id"
        height="20"
        class="logo"
      ></b-img-lazy>
      <span :id="'logotxt' + item.id" style="display: none;" class="logotxt">
        {{ item.company.name.toLowerCase() }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'country',
  data() {
    return {}
  },
  computed: {},
  props: ['item'],
  methods: {
    nologo(event) {
      event.target.src = '/img/No_image.svg'
      var logoid = event.target.id
      var spanid = event.target.dataset.spanid
      document.getElementById(logoid).style = 'display:none;'
      document.getElementById(spanid).style = 'display:block;'
    },
  },
}
</script>
<style></style>
<style scoped>
@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 600px) {
}
.flag {
  border: solid;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 40px;
  height: 25px;
}
.logo {
  max-width: 140px;
}
.logotxt {
  text-transform: capitalize;
  font-size: 1em;
}
</style>
