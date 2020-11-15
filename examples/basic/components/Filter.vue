<template>
  <div class="mb-5">
    <!-- Mainn Title -->
    <h4 class="m-0 mb-3">
      {{ $t('filters') }}
      <font-awesome-icon icon="filter" class="mr-1 ml-1" />
    </h4>

    <!-- Name Filter -->
    <b-card align="center" :dir="$store.state.direction" no-body>
      <template v-slot:header>
        <h5 class="mb-0">
          {{ $t('search') }}
          <font-awesome-icon icon="search" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0">
        <b-list-group-item class="m-0 p-2" :align="$store.state.textalign">
          <b-form-input
            size="lg"
            v-model="namesearch"
            :placeholder="$t('namecodesearch')"
            class="pr-4 pl-4"
            :debounce="800"
            type="search"
          ></b-form-input>
          <!-- :style="$store.state.opalign + ':20px;'" -->
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Type Filter -->
    <b-card
      align="center"
      :dir="$store.state.direction"
      no-body
      v-if="
        (filteroptions.types && Object.keys(filteroptions.types).length > 0) ||
        types.length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('type') }}
          <font-awesome-icon icon="tools" class="mr-1 ml-1" />
        </h5>
      </template>

      <b-list-group class="noborder m-0 p-0">
        <b-list-group-item
          v-for="(type, index) in filteroptions.types"
          v-bind:key="index"
          class="m-0 p-0"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="types"
            :value="type.id"
            style="width: 100%;"
          >
            <div v-if="$route.params.main != 'tiles'">
              <span v-if="$store.state.direction == 'rtl'" class="p-2">
                <!-- {{ $tc($route.params.type, 2) + " " + type.name.ar }} -->
                {{ main[$route.params.type].names.ar + ' ' + type.name.ar }}
              </span>
              <span v-if="$store.state.direction == 'ltr'">
                <!-- {{ type.name.en + " " + $tc($route.params.type, 2) }} -->
                {{ type.name.en + ' ' + main[$route.params.type].names.en }}
              </span>
            </div>
            <div v-if="$route.params.main == 'tiles'">
              <span v-if="$store.state.direction == 'ltr'" class="p-2">
                {{ main[$route.params.type].names.en + ' ' + type.name.en }}
              </span>
              <span v-if="$store.state.direction == 'rtl'">
                {{ type.name.ar + ' ' + main[$route.params.type].names.ar }}
              </span>
            </div>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Color Filter -->
    <b-card
      align="center"
      :dir="$store.state.direction"
      no-body
      v-if="
        filteroptions && filteroptions.colors && filteroptions.colors.length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('thecolor') }}
          <font-awesome-icon icon="swatchbook" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0">
        <b-list-group-item
          v-for="(color, index) in filteroptions.colors"
          v-bind:key="index"
          class="m-0 p-0"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="colors"
            :value="color.id"
            style="width: 100%;"
          >
            <div class="d-inline" v-if="$route.params.main != 'tiles'">
              <span v-if="$store.state.direction == 'rtl'" class="p-2">
                {{ main[$route.params.type].names.ar + ' ' + color.colors }}
              </span>
            </div>
            <div class="d-inline" v-if="$route.params.main == 'tiles'">
              <span v-if="$store.state.direction == 'rtl'" class="p-2">
                {{ color.name.ar }}
              </span>
            </div>

            <span v-if="$store.state.direction == 'ltr'">
              {{ color.name.en + ' ' + main[$route.params.type].names.en }}
            </span>

            <b-img
              :blank-color="color.code"
              blank
              class="colorbox shadow-sm ml-2 mr-2"
              width="30"
              height="30"
              :style="$store.state.opalign + ':0px;'"
            ></b-img>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Finish Filter -->
    <b-card
      align="center"
      :dir="$store.state.direction"
      no-body
      v-if="
        filteroptions &&
        filteroptions.finishes &&
        filteroptions.finishes.length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('finish') }}
          <font-awesome-icon icon="hand-pointer" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0">
        <b-list-group-item
          v-for="(finish, index) in filteroptions.finishes"
          v-bind:key="index"
          class="m-0 p-0"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="finishes"
            :value="finish.id"
            style="width: 100%;"
          >
            <span v-if="$store.state.direction == 'rtl'" class="p-2">
              {{ main[$route.params.type].names.ar + ' ' + finish.name.ar }}
            </span>
            <span v-if="$store.state.direction == 'ltr'">
              {{ finish.name.en + ' ' + main[$route.params.type].names.en }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Brand Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.companies &&
        Object.keys(filteroptions.companies).length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0">
          {{ $t('brand') }}
          <font-awesome-icon icon="globe-europe" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <b-list-group-item
          v-for="(company, index) in filteroptions.companies"
          v-bind:key="index"
          class="m-0 p-2 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="companies"
            :value="company"
            style="width: 100%; heigh: 100%; margin: 0px;"
          >
            <b-img-lazy
              :src="'/logos/' + company.toLowerCase() + '.svg'"
              @error.native="nologo"
              :id="'logoid' + index"
              :data-spanid="'logotxt' + index"
              class="center-block logoimg"
              height="30"
            ></b-img-lazy>
            <span
              :id="'logotxt' + index"
              style="display: none;"
              class="logotxt"
            >
              {{ company.toLowerCase() }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Categories Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.categories &&
        Object.keys(filteroptions.categories).length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('category') }}
          <font-awesome-icon icon="dolly-flatbed" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <b-list-group-item
          v-for="(category, index) in filteroptions.categories"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="categories"
            :value="category.name.ar"
            style="width: 100%; heigh: 100%;"
          >
            <span
              class="p-2"
              v-if="$store.state.lang == 'en' && category.name.en != ''"
            >
              {{ category.name.en }}
            </span>
            <span
              class="p-2"
              v-if="$store.state.lang == 'ar-ly' || category.name.en == ''"
            >
              {{ category.name.ar }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Choice Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.choices && Object.keys(filteroptions.choices).length > 1
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('choice') }}
          <font-awesome-icon icon="layer-group" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <b-list-group-item
          v-for="(choice, index) in filteroptions.choices"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="choices"
            :value="choice"
            style="width: 100%; heigh: 100%;"
          >
            <span v-if="choice == 'C'" class="p-2">
              {{ $t('choice') + ' ' + $t('commercial') }}
            </span>
            <span v-if="choice != 'C'" class="p-2">
              {{ $t('choice') + ' ' + $t('c' + choice) }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Price Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.prices && Object.keys(filteroptions.prices).length > 1
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $tc('price', 2) }}
          <font-awesome-icon icon="money-bill" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <!-- <b-form-group> -->

        <b-list-group-item
          v-for="(price, index) in filteroptions.prices"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="prices"
            :value="price.min + '-' + price.max"
            style="width: 100%; heigh: 100%;"
          >
            <span class="p-2">
              {{
                price.max + '-' + price.min + ' ' + $tc($store.state.currency)
              }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <!-- Quantity Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.quantities &&
        Object.keys(filteroptions.quantities).length > 1
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('quantity') }}
          <font-awesome-icon icon="boxes" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <!-- <b-form-group> -->

        <b-list-group-item
          v-for="(quantity, index) in filteroptions.quantities"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="quantities"
            :value="quantity.min + '-' + quantity.max"
            style="width: 100%; heigh: 100%;"
          >
            <span class="p-2">
              {{ quantity.max + '-' + quantity.min + ' ' + $tc('box') }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Warehouses Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.warehouses &&
        Object.keys(filteroptions.warehouses).length > 1
      "
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $tc('warehouse', 2) }}
          <font-awesome-icon icon="warehouse" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <!-- <b-form-group> -->

        <b-list-group-item
          v-for="(warehouse, index) in filteroptions.warehouses"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="warehouses"
            :value="warehouse.number"
            style="width: 100%; heigh: 100%;"
          >
            <span v-if="$store.state.direction == 'rtl'" class="p-2">
              {{ $tc('warehouse', 1) + ' ' + warehouse.name.ar }}
            </span>
            <span v-if="$store.state.direction == 'ltr'">
              {{ warehouse.name.en + ' ' + $tc('warehouse', 1) }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <!-- End warehouse filter -->
    <div v-if="$route.params.main != 'tiles'">
      <!-- Widths Filter -->
      <b-card
        align="center"
        no-body
        v-if="allwidths && Object.keys(allwidths).length > 0"
      >
        <template v-slot:header>
          <h5 class="mb-0 p-0">
            {{ $t('filter') + ' ' + $t('widths') }}
            <font-awesome-icon icon="ruler-horizontal" class="mr-1 ml-1" />
          </h5>
        </template>
        <b-list-group class="noborder m-0 p-0">
          <!-- <b-form-group> -->

          <b-list-group-item
            v-for="(width, index) in allwidths"
            v-bind:key="index"
            class="m-0 p-0 companybox"
            :align="$store.state.textalign"
          >
            <b-form-checkbox
              size="lg"
              class="m-0 p-0"
              inline
              plain
              v-model="widths"
              :value="width"
              style="width: 100%; heigh: 100%;"
            >
              <span class="p-2">
                {{ width + ' ' + $t('cm') }}
              </span>
            </b-form-checkbox>
          </b-list-group-item>
        </b-list-group>
      </b-card>

      <!-- Heights Filter -->
      <b-card
        align="center"
        no-body
        v-if="allheights && Object.keys(allheights).length > 0"
      >
        <template v-slot:header>
          <h5 class="mb-0 p-0">
            {{ $t('filter') + ' ' + $t('heights') }}
            <font-awesome-icon icon="ruler" class="mr-1 ml-1" />
          </h5>
        </template>
        <b-list-group class="noborder m-0 p-0">
          <!-- <b-form-group> -->

          <b-list-group-item
            v-for="(height, index) in allheights"
            v-bind:key="index"
            class="m-0 p-0 companybox"
            :align="$store.state.textalign"
          >
            <b-form-checkbox
              size="lg"
              class="m-0 p-0"
              inline
              plain
              v-model="heights"
              :value="height"
              style="width: 100%; heigh: 100%;"
            >
              <span class="p-2">
                {{ height + ' ' + $t('cm') }}
              </span>
            </b-form-checkbox>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div v-else>
      <!-- Dimentions Filter -->
      <b-card
        align="center"
        no-body
        v-if="
          filteroptions.dimentions &&
          Object.keys(filteroptions.dimentions).length > 0
        "
      >
        <template v-slot:header>
          <h5 class="mb-0 p-0">
            {{ $tc('dimentions', 2) }}
            <font-awesome-icon icon="tape" class="mr-1 ml-1" />
          </h5>
        </template>
        <b-list-group class="noborder m-0 p-0">
          <!-- <b-form-group> -->

          <b-list-group-item
            v-for="(dimention, index) in filteroptions.dimentions"
            v-bind:key="index"
            class="m-0 p-0 companybox"
            :align="$store.state.textalign"
          >
            <b-form-checkbox
              size="lg"
              class="m-0 p-0"
              inline
              plain
              v-model="dimentions"
              :value="dimention.width + 'x' + dimention.height"
              style="width: 100%; heigh: 100%;"
            >
              <span class="p-2">
                {{ dimention.width + 'x' + dimention.height + ' ' + $t('cm') }}
              </span>
            </b-form-checkbox>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <!-- Depths Filter -->
    <b-card
      align="center"
      no-body
      v-if="alldepths && Object.keys(alldepths).length > 0"
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0" v-if="$route.params.main != 'tiles'">
          {{ $t('filter') + ' ' + $t('depths') }}
          <font-awesome-icon icon="ruler-vertical" class="mr-1 ml-1" />
        </h5>
        <h5 class="mb-0 p-0" v-else>
          {{ $t('filter') + ' ' + $t('thickness') }}
          <font-awesome-icon icon="ruler-vertical" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <!-- <b-form-group> -->

        <b-list-group-item
          v-for="(depth, index) in alldepths"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="depths"
            :value="depth"
            style="width: 100%; heigh: 100%;"
          >
            <span class="p-2">
              {{ depth + ' ' + $t('cm') }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Weights Filter -->
    <b-card
      align="center"
      no-body
      v-if="allweights && Object.keys(allweights).length > 0"
    >
      <template v-slot:header>
        <h5 class="mb-0 p-0">
          {{ $t('filter') + ' ' + $t('weights') }}
          <font-awesome-icon icon="weight" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <!-- <b-form-group> -->

        <b-list-group-item
          v-for="(weight, index) in allweights"
          v-bind:key="index"
          class="m-0 p-0 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="weights"
            :value="weight"
            style="width: 100%; heigh: 100%;"
          >
            <span class="p-2">
              {{ weight + ' ' + $t('kg') }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>

    <!-- Country Filter -->
    <b-card
      align="center"
      no-body
      v-if="
        filteroptions.countries &&
        Object.keys(filteroptions.countries).length > 0
      "
    >
      <template v-slot:header>
        <h5 class="mb-0">
          {{ $t('country') }}
          <font-awesome-icon icon="globe-europe" class="mr-1 ml-1" />
        </h5>
      </template>
      <b-list-group class="noborder m-0 p-0">
        <b-list-group-item
          v-for="(country, index) in filteroptions.countries"
          v-bind:key="index"
          class="m-0 p-2 companybox"
          :align="$store.state.textalign"
        >
          <b-form-checkbox
            size="lg"
            class="m-0 p-0"
            inline
            plain
            v-model="countries"
            :value="country.code"
            style="width: 100%; heigh: 100%; margin: 0px;"
          >
            <!-- <b-img-lazy
              :src="'/img/logos/' + company.toLowerCase() + '.svg'"
              @error.native="nologo"
              :id="'logoid' + index"
              :data-spanid="'logotxt' + index"
              class="center-block"
              height="30"
            ></b-img-lazy> -->
            <!-- 
              height="25"
              class="flag"
               -->
            <img
              :src="`/flags/${country.code}.svg`"
              class="flag ml-2 mr-2"
              :style="$store.state.opalign + ':0px;'"
            />
            <!-- <span :id="'logotxt' + index" style="display:none;" class="logotxt">
              {{ company.toLowerCase() }}
            </span> -->
            <span v-if="$store.state.direction == 'rtl'" class="p-2">
              {{ country.name.ar }}
            </span>
            <span v-if="$store.state.direction == 'ltr'">
              {{ country.name.en }}
            </span>
          </b-form-checkbox>
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <!-- END FILTER -->
    <b-button
      block
      variant="outline-dark"
      size="lg"
      class="mb-3"
      @click="cleardata()"
      v-if="showclearfilter"
    >
      {{ $tc('clearfilter') }}
      <font-awesome-icon icon="filter" class="mr-1 ml-1" />
    </b-button>
    <!-- Share Filter -->
    <!-- v-clipboard:copy="filtershareurl"
      v-clipboard:success="onCopySuccess"
      v-clipboard:error="onCopyError" -->
    <b-btn
      block
      :variant="copyvariant"
      size="lg"
      @click="copyurl(filtershareurl)"
      v-if="showclearfilter"
    >
      {{ $tc('copyfilter') }}
      <font-awesome-icon icon="share-square" class="mr-1 ml-1" />
    </b-btn>
  </div>
</template>

<script>
function getDefaultData(usedfilter) {
  if (usedfilter.type) {
    var type = usedfilter.type.split(',')
  } else {
    type = []
  }
  if (usedfilter.color) {
    var color = usedfilter.color.split(',')
  } else {
    color = []
  }
  if (usedfilter.finish) {
    var finish = usedfilter.finish.split(',')
  } else {
    finish = []
  }
  if (usedfilter.company) {
    var company = usedfilter.company.split(',')
  } else {
    company = []
  }
  if (usedfilter.category) {
    var category = usedfilter.category.split(',')
  } else {
    category = []
  }
  if (usedfilter.search) {
    var search = usedfilter.search
  } else {
    search = null
  }
  if (usedfilter.width) {
    var width = usedfilter.width.split(',')
  } else {
    width = []
  }
  if (usedfilter.height) {
    var height = usedfilter.height.split(',')
  } else {
    height = []
  }
  if (usedfilter.country) {
    var country = usedfilter.country.split(',')
  } else {
    country = []
  }
  if (usedfilter.choice) {
    var choice = usedfilter.choice.split(',')
  } else {
    choice = []
  }
  if (usedfilter.quantity) {
    var quantity = usedfilter.quantity.split(',')
  } else {
    quantity = []
  }
  if (usedfilter.price) {
    var price = usedfilter.price.split(',')
  } else {
    price = []
  }
  if (usedfilter.warehouse) {
    var warehouse = usedfilter.warehouse.split(',')
  } else {
    warehouse = []
  }
  return {
    types: type,
    colors: color,
    finishes: finish,
    companies: company,
    categories: category,
    namesearch: search,
    dimentions: [],
    widths: width,
    heights: height,
    depths: [],
    weights: [],
    countries: country,
    choices: choice,
    quantities: quantity,
    prices: price,
    warehouses: warehouse,
    copyvariant: 'outline-dark',
  }
}
export default {
  name: 'Filters',
  data() {
    return getDefaultData(this.usedfilter)
  },
  computed: {
    showclearfilter() {
      var filtersizes = 0
      filtersizes = filtersizes + this.types.length
      filtersizes = filtersizes + this.colors.length
      filtersizes = filtersizes + this.finishes.length
      filtersizes = filtersizes + this.companies.length
      filtersizes = filtersizes + this.categories.length
      if (this.namesearch && this.namesearch.length != null) {
        filtersizes = filtersizes + this.namesearch.length
      }
      filtersizes = filtersizes + this.dimentions.length
      filtersizes = filtersizes + this.widths.length
      filtersizes = filtersizes + this.heights.length
      filtersizes = filtersizes + this.depths.length
      filtersizes = filtersizes + this.weights.length
      filtersizes = filtersizes + this.countries.length
      filtersizes = filtersizes + this.choices.length
      filtersizes = filtersizes + this.quantities.length
      filtersizes = filtersizes + this.prices.length
      filtersizes = filtersizes + this.warehouses.length
      if (filtersizes == 0) return false
      else return true
    },
    allwidths() {
      return this.getdimentinon('width')
    },
    allheights() {
      return this.getdimentinon('height')
    },
    alldepths() {
      return this.getdimentinon('depth')
    },
    allweights() {
      return this.getdimentinon('weight')
    },
  },
  props: ['filteroptions', 'main', 'filtershareurl', 'usedfilter'],
  watch: {
    namesearch: function () {
      //if (this.namesearch && this.namesearch.length != null) {
      var name = this.namesearch.split(' ')
      this.$emit('applyfilter', 'search', name)
      //}
    },
    types: function () {
      this.$emit('getfilters', 'types', this.types)
      this.$emit('applyfilter', 'type', this.types)
    },

    companies: function () {
      this.$emit('getfilters', 'companies', this.companies)
      this.$emit('applyfilter', 'company', this.companies)
    },
    categories: function () {
      this.$emit('getfilters', 'categories', this.categories)
      this.$emit('applyfilter', 'category', this.categories)
    },
    choices: function () {
      this.$emit('getfilters', 'choices', this.choices)
      this.$emit('applyfilter', 'choice', this.choices)
    },
    dimentions: function () {
      this.$emit('getfilters', 'dimentions', this.dimentions)
      this.$emit('applyfilter', 'dimentions', this.dimentions)
    },
    widths: function () {
      this.$emit('getfilters', 'dimentions', this.widths)
      this.$emit('applyfilter', 'width', this.widths)
    },
    heights: function () {
      this.$emit('getfilters', 'dimentions', this.heights)
      this.$emit('applyfilter', 'height', this.heights)
    },
    depths: function () {
      this.$emit('getfilters', 'dimentions', this.depths)
      this.$emit('applyfilter', 'depth', this.depths)
    },
    weights: function () {
      this.$emit('getfilters', 'dimentions', this.weights)
      this.$emit('applyfilter', 'weight', this.weights)
    },
    colors: function () {
      this.$emit('getfilters', 'colors', this.colors)
      this.$emit('applyfilter', 'color', this.colors)
      // console.log("color watch", this.colors);
    },
    finishes: function () {
      this.$emit('getfilters', 'finishes', this.finishes)
      this.$emit('applyfilter', 'finish', this.finishes)
    },
    countries: function () {
      this.$emit('getfilters', 'countries', this.countries)
      this.$emit('applyfilter', 'country', this.countries)
    },
    quantities: function () {
      this.$emit('getfilters', 'quantities', this.quantities)
      this.$emit('applyfilter', 'quantity', this.quantities)
    },
    prices: function () {
      this.$emit('getfilters', 'prices', this.prices)
      this.$emit('applyfilter', 'price', this.prices)
    },
    warehouses: function () {
      this.$emit('getfilters', 'warehouses', this.warehouses)
      this.$emit('applyfilter', 'warehouse', this.warehouses)
    },
    $route() {
      if (this.$route.params.main == 'tiles') {
        //var colors = this.colors;
        //var types = this.types;
        //var finishes = this.finishes;
        //var dimentions = this.dimentions;
        //var choices = this.choices;
      }
      //console.log("filteroptions before clear", this.filteroptions);
      this.cleardata()
      //console.log("filteroptions after clear", this.filteroptions);
      if (this.$route.params.main == 'tiles') {
        //this.colors = colors;
        //this.types = types;
        //this.finishes = finishes;
        //this.dimentions = dimentions;
        //this.choices = choices;
      }
    },
  },
  methods: {
    getdimentinon(dim) {
      if (this.filteroptions.dimentions) {
        let d = this.filteroptions.dimentions.map((d) => d[dim])
        return [...new Set(d)].filter((d) => !!d).sort((a, b) => a - b)
      } else return null
    },
    cleardata() {
      var def = getDefaultData({})
      Object.assign(this.$data, def)
    },
    async copyurl(url) {
      try {
        await this.$copyText(url)
      } catch (e) {
        console.error(e)
      }
    },
    onCopySuccess() {
      this.copyvariant = 'outline-success'
    },
    onCopyError() {
      this.copyvariant = 'outline-danger'
    },
    nologo(event) {
      event.target.src = '/img/No_image.svg'
      var logoid = event.target.id
      var spanid = event.target.dataset.spanid
      //   console.log("logoid", logoid);
      //   console.log("spanid", spanid);
      document.getElementById(logoid).style = 'display:none;'
      document.getElementById(spanid).style = 'display:block;'
    },
  },
  created() {
    // if (this.usedfilter.type) {
    //   var url1 = this.usedfilter.type.split(",");
    //   url1.forEach((element) => {
    //     this.types.push(Number(element));
    //   });
    // }
    // if (this.usedfilter.color) {
    //   var url2 = this.usedfilter.color.split(",");
    //   url2.forEach((element) => {
    //     this.colors.push(Number(element));
    //   });
    // }
    // if (this.usedfilter.company) {
    //   var url3 = this.usedfilter.company.split(",");
    //   url3.forEach((element) => {
    //     this.companies.push(element);
    //   });
    // }
    // setTimeout(() => {
    //   this.createdcompleted = true;
    // }, 500);
  },
}
</script>
<style>
label.form-check-label {
  width: 100%;
  height: 100%;
}

.form-check.b-custom-control-lg > input {
  top: 0.8rem;
  width: 1.4rem;
  height: 1.4rem;
}
.form-check-input {
  margin: 1rem !important;
  cursor: pointer;
}
.form-check-label {
  padding: 1rem 0rem 1rem 1rem;
  cursor: pointer;
  font-size: 1.1rem;
}
</style>
<style scoped>
.reverse.rtl {
  /* display: flex; */
  /* -webkit-flex-direction: row-reverse; */
  /* flex-direction: row-reverse; */
  display: inline-block;
  direction: rtl;
  text-align: left;
  /* padding: 0px; */
}
.card {
  margin-bottom: 30px;
}

.colorbox {
  border: solid;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  position: absolute;
}
.box {
  border: solid;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  /* background-color: rgba(0, 0, 0, 0.03); */
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.logotxt {
  text-transform: capitalize;
  text-align: center;
  font-size: 1.5em;
  font-weight: 900;
}
.flag {
  /* border: solid;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem; */
  position: absolute;
  width: 40px;
  height: 25px;
}
.logoimg {
  max-width: 200px;
}
</style>
