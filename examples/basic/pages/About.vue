<template>
  <div class="about" :align="$store.state.textalign">
    <div class="mt-3  mb-3">
      <p>{{ $t("about[0]") }}</p>
      <p>{{ $t("about[1]") }}</p>
      <p>{{ $t("about[2]") }}</p>
    </div>
    <div class="mt-3  mb-3">
      <h3>{{ $t("mission[0]") }}</h3>
      <h4>{{ $t("mission[1]") }}</h4>
    </div>
    <div class="mt-3 mb-3">
      <h3>{{ $t("vision[0]") }}</h3>
      <h4>{{ $t("vision[1]") }}</h4>
    </div>
    <div class="mt-3 mb-3">
      <h3>{{ $t("strength") }}</h3>
      <li v-for="(s, index) in strenths" v-bind:key="index">
        {{ s }}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    strenths() {
      return this.$t("strengths");
    },
  },
};
</script>
<style scoped>
.about {
  padding: 50px;
  font-size: 1.2em;
}
</style>
