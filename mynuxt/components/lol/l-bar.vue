<script>
export default {
  name: "LBar",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  render(h) {
    let slider = h(
      "div",
      {
        class: "l-bar-slider",
        style: {
          width: `${this.value}%`
        }
      },
      [
        h("span", {
          class: "l-bar-value"
        })
      ]
    )
    return h(
      "div",
      {
        class: ["l-bar"]
      },
      [slider]
    )
  }
}
</script>
<style lang="scss">
.l-bar {
  min-height: 10px;
  display: flex;
  .l-bar-slider {
    background-color: darkgoldenrod;
  }
}
</style>