<template>
  <div>
    <b-media>
      <img slot="aside" src="/cream.jpg" width="64" alt="奶油" />
      <h5>奶油</h5>
      <p>奶油（Cream）或称淇淋、克林姆、激凌，它是由未均质化之前的生牛乳顶层的牛奶脂肪含量较高的一层制得的乳制品，是从牛奶、羊奶中提取的黄色或白色脂肪性半固体食品。</p>
    </b-media>
    <b-media>
      <img slot="aside" src="/bread.jpg" width="64" alt="面包" />
      <h5>面包</h5>
      <p>面包也写作麺包，一种用五谷（一般是麦类）磨粉制作并加热而制成的食品。以小麦粉为主要原料，以酵母、鸡蛋、油脂、糖、盐等为辅料，加水调制成面团，经过分割、成形、醒发、焙烤、冷却等过程加工而成的焙烤食品。</p>
    </b-media>
    <b-form-input v-model="content" placeholder="随便写点什么吧~"></b-form-input>
    <b-form-radio v-model="creamAndBread" name="creamAndBread" value="A">奶油</b-form-radio>
    <b-form-radio v-model="creamAndBread" name="creamAndBread" value="B">面包</b-form-radio>
    <b-list-group>
      <b-list-group-item v-for="(comment, index) in comments" :key="index">
        {{
        comment.content
        }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: {
        hid: "description",
        name: "description",
        content: "奶油和面包好好吃的!"
      }
    }
  },
  components: {},
  data() {
    return {
      creamAndBread: "",
      content: "",
      comments: []
    }
  },

  async asyncData({ app }) {
    const res = await app.$axios.get("/getComments")
    return {
      comments: res.data
    }
  },

  created() {},
  mounted() {}
}
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
</style>
