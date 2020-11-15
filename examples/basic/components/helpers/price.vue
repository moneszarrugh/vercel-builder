<template>
  <div>
    <!-- No discount -->
    <itemprice
      v-if="item.discount == 0"
      :price="item.price"
      :meterPrice="item.meterPrice"
      :unit="item.unit"
    />

    <!-- With Discount -->
    <div
      v-show="item.discount != 0"
      v-resize-text="{ ratio: 1.9, minFontSize: '8px' }"
    >
      <del style="color:red;" class="mr-1 ml-1">
        <itemprice
          :price="item.price"
          :meterPrice="item.meterPrice"
          :unit="item.unit"
        />
      </del>
      <span style="color:red;" class="mr-1 ml-1">
        {{ item.discount * 100 }}
        <font-awesome-icon icon="percentage" />
      </span>
      <itemprice
        :price="item.price"
        :discount="item.discount"
        :meterPrice="item.meterPrice"
        :unit="item.unit"
      />
    </div>
  </div>
</template>

<script>
import itemprice from "@/components/helpers/itemprice.vue";

export default {
  name: "price",
  data() {
    return {};
  },
  components: {
    itemprice,
  },
  computed: {},
  props: ["item"],
  methods: {},
};
</script>
<style scoped>
h6 {
  font-weight: 700;
  font-size: 1.2em;
}
</style>
