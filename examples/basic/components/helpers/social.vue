<template>
  <div class="mt-5 mb-5">
    <!-- <div>
      {{ url }}
      <br />
      {{ title }}
      <br />
      {{ description }}
      <br />
      {{ quote }}
      <br />
      {{ hashtags }}
      <br />
    </div> -->

    <hr />
    <div class="bold">
      {{ $t("shareto") }}
      <font-awesome-icon icon="share-square" class="mr-1 ml-1" />
    </div>
    <ShareNetwork
      network="facebook"
      :url="url"
      :title="title"
      :description="description"
      :quote="quote"
      :hashtags="hashtags"
    >
      <b-btn variant="white">
        <span class="text">Facebook</span>
        <font-awesome-icon
          :icon="['fab', 'facebook-square']"
          :style="{ color: '#3b5998' }"
          class="icon mr-2 ml-2"
        />
      </b-btn>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="url"
      :title="title"
      :twitter-user="twitteruser"
    >
      <b-btn variant="white">
        <span class="text">Twitter</span>
        <font-awesome-icon
          :icon="['fab', 'twitter-square']"
          :style="{ color: '#1DA1F2' }"
          class="icon mr-2 ml-2"
        />
      </b-btn>
    </ShareNetwork>
    <ShareNetwork
      network="WhatsApp"
      :url="url"
      :title="title"
      :description="description"
    >
      <b-btn variant="white">
        <span class="text">WhatsApp</span>
        <font-awesome-icon
          :icon="['fab', 'whatsapp']"
          :style="{ color: '#25D366' }"
          class="icon mr-2 ml-2"
        />
      </b-btn>
    </ShareNetwork>
    <ShareNetwork
      network="viber"
      :url="url"
      :title="title"
      :description="description"
    >
      <b-btn variant="white">
        <span class="text">Viber</span>
        <font-awesome-icon
          :icon="['fab', 'viber']"
          :style="{ color: '#665CAC' }"
          class="icon mr-2 ml-2"
        />
      </b-btn>
    </ShareNetwork>

    <b-btn
      block
      :variant="copyvariant"
      v-clipboard:copy="url"
      v-clipboard:success="onCopySuccess"
      v-clipboard:error="onCopyError"
    >
      <span class="text">{{ $tc("copylink") }}</span>
      <font-awesome-icon icon="link" class=" mr-2 ml-2" />
    </b-btn>
  </div>
</template>

<script>
export default {
  name: "social",
  data() {
    return {
      copyvariant: "outline-dark",
    };
  },
  computed: {
    twitteruser() {
      return process.env.VUE_APP_TWITTER;
    },
  },
  props: ["url", "title", "description", "quote", "hashtags"],
  methods: {
    onCopySuccess() {
      this.copyvariant = "outline-success";
    },
    onCopyError() {
      this.copyvariant = "outline-danger";
    },
  },
};
</script>
<style></style>
<style scoped>
@media only screen and (max-width: 600px) {
}
@media only screen and (min-width: 600px) {
}
.text {
  font-size: 1.2em;
  margin-bottom: 35px;
}
.icon {
  font-size: 2em;
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
