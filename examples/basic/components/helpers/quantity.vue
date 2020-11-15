<template>
  <div>
    <b-row v-if="detailed">
      <b-col>
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text class="bold">
              {{ $t("available") }}
            </b-input-group-text>
          </template>
          <b-form-input
            readonly
            v-model="stock.available"
            size="lg"
            class="bold"
          >
          </b-form-input>
          <template v-slot:append>
            <b-input-group-text>
              <font-awesome-icon icon="warehouse" class="mr-1 ml-1" />
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-col>
      <b-col>
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text class="bold">
              {{ $t("reserved") }}
            </b-input-group-text>
          </template>
          <b-form-input
            readonly
            v-model="stock.reserved"
            size="lg"
            class="bold"
          >
          </b-form-input>
          <template v-slot:append>
            <b-input-group-text>
              <font-awesome-icon icon="hands" class="mr-1 ml-1" />
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-col>
      <b-col>
        <b-input-group>
          <template v-slot:prepend>
            <b-input-group-text class="bold">
              {{ $t("sold") }}
            </b-input-group-text>
          </template>
          <b-form-input readonly v-model="stock.sold" size="lg" class="bold">
          </b-form-input>
          <template v-slot:append>
            <b-input-group-text>
              <font-awesome-icon icon="user-lock" class="mr-1 ml-1" />
            </b-input-group-text>
          </template>
        </b-input-group>
      </b-col>
    </b-row>
    <div v-else>
      <b-badge variant="success" class="availble" v-if="stock.available > 50">
        {{ $t("available") }}
      </b-badge>

      <b-badge
        variant="warning"
        class="availble"
        v-if="stock.available > 0 && stock.available < 50"
      >
        {{ $t("available") }}
        <b-badge variant="light" class="available_number"
          >{{ stock.available }}
        </b-badge>
      </b-badge>
      <b-badge variant="danger" class="availble" v-if="stock.available < 1">
        {{ $t("not") + " " + $t("available") }}
      </b-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "quantity",
  data() {
    return {};
  },
  computed: {},
  props: ["stock", "detailed"],
  methods: {},
};
</script>
<style></style>
<style scoped>
@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 600px) {
}
.bold {
  font-weight: 700;
}
.availble {
  font-size: 1.3em;
}
.available_number {
  font-size: 0.7em;
}
input {
  background-color: white !important;
  text-align: center !important;
}
</style>
