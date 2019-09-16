<!-- 故事 -->
<template>
  <div class="story">
    <b-button variant="outline-primary" @click="fetch">来点什么</b-button>
    <vue-lazy-component
      v-for="(item, index) in story"
      :key="item.app_id"
      @init="init"
      @beforeInit="beforeInit"
    >
      <!-- real component-->
      <story v-bind="item" />
      <!-- skeleton component -->
      <story-skeleton slot="skeleton" />
    </vue-lazy-component>
  </div>
</template>

<script>
import { component as VueLazyComponent } from "@xunlei/vue-lazy-component"
import { Story, StorySkeleton } from "@/components/story/"
export default {
  head() {
    return {
      meta: {
        hid: "description",
        name: "description",
        content: "这是一个关于奶油和面包的奇妙旅程"
      }
    }
  },
  components: {
    "vue-lazy-component": VueLazyComponent,
    Story,
    StorySkeleton
  },

  data() {
    return {
      story: []
    }
  },
  computed: {},

  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {},

  methods: {
    init() {},
    beforeInit() {},
    async fetch() {
      const res = await this.$axios.post("qq/irs/rcd", null, {
        params: {
          cid: 56,
          ext: "games",
          token: "c786875b8e04da17b24ea5e332745e0f",
          num: 20,
          expIds: "20190106A13PFT%7C20190108A04MLS",
          page: 1
        }
      })
      this.story = res.data.data
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index.scss";
</style>
