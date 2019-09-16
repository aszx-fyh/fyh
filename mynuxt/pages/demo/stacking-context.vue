<!--  -->
<template>
  <div>
    <div style="position:relative; z-index:auto;">
      <img src="/image/mm1.jpg" style="position:absolute; z-index:2;" />
    </div>
    <div style="position:relative; z-index:auto;">
      <img src="/image/mm2.jpg" style="position:relative; z-index:1;" />
    </div>
    <div>
      <div class="big-box pink"></div>
      <div class="small-box gold"></div>
    </div>
    <div class="order">
      <span class="inline">层叠上下文顺序-inline</span>
      <div class="inline-block">inline-block</div>
      <div class="z-index-0"></div>
      <div class="z-index-1"></div>
      <div class="small-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  computed: {},

  methods: {}
}
</script>
<style lang='scss'>
@mixin box($width) {
  width: $width + px;
  height: $width + px;
}
@mixin margin {
  margin-top: -20px;
}
.big-box {
  @include box(100);
}
.small-box {
  @include box(50);
}
.pink {
  background: pink;
  @include margin;
}
.gold {
  background: gold;
  @include margin;
  margin-left: 30px;
}
.order {
  @include box(400);
  background: lightblue;
  > * {
    position: absolute;
  }
  .inline {
  }
  .inline-block {
    display: inline-block;
    @include box(100);
    background: darkgoldenrod;
  }
  .z-index-0 {
    z-index: 0;
    @include box(150);
    background: goldenrod;
  }
  .z-index-1 {
    z-index: 1;
    @include box(200);
    background: darksalmon;
  }
}

@media print {
  @page {
    margin: 3cm;
    @bottom-left-corner {
      content: "xdfdfdf";
      display: block;
      color: #eee;
      font-size: 40px;
    }
    @right-center {
      content: "这是右页";
    }
  }
}
</style>
