<template>
  <h6 class="d-inline mb-0" style="color:black">
    <div class="d-inline" v-if="$store.state.currency != 'lyd'">
      <font-awesome-icon
        icon="dollar-sign"
        v-if="$store.state.currency == 'usd'"
      />
      <font-awesome-icon
        icon="euro-sign"
        v-if="$store.state.currency == 'eur'"
      />
    </div>

    <div class="d-inline" v-if="unit != 'meter'">
      <span v-if="!discount || discount == 0">
        {{ price[$store.state.currency] | numeral(decimal) }}
      </span>
      <span v-if="discount && discount != 0">
        {{ (price[$store.state.currency] * (1 - discount)) | numeral(decimal) }}
      </span>
    </div>
    <div class="d-inline" v-if="unit == 'meter'">
      <span v-if="!discount || discount == 0">
        {{ meterPrice[$store.state.currency] | numeral(decimal) }}
      </span>
      <span v-if="discount && discount != 0">
        {{
          (meterPrice[$store.state.currency] * (1 - discount))
            | numeral(decimal)
        }}
      </span>
    </div>

    <div class="d-inline" v-if="$store.state.currency == 'lyd'">
      {{ $t($store.state.currency) }}
    </div>

    <div class="d-inline" v-if="unit == 'meter'">
      <!-- {{ $tc(unit, 1) }} -->
      <span v-if="$store.state.lang == 'ar-ly'">/متر</span>
      <span v-if="$store.state.lang == 'en'" style="text-transform: lowercase;"
        >/m</span
      >
      <sup>2</sup>
    </div>
  </h6>
</template>

<script>
export default {
  name: "ItemPrice",
  props: ["price", "discount", "meterPrice", "unit"],
  computed: {
    decimal() {
      if (this.$store.state.currency != "lyd") return "0,0.00";
      else return "0,0";
    },
  },
};
</script>
