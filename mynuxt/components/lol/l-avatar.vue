<!-- 英雄头像,召唤师技能和血条 -->
<template>
  <div class="hero-avatar">
    <div class="left">
      <!-- 召唤师技能 -->
      <img src alt />
      <img src alt />
      <img src alt />
    </div>
    <div class="center">
      <div class="avatar-container">
        <!-- 英雄头像 -->
        <img class="avatar" src alt=" " />
        <span class="level">2</span>
        <img class="skill-r" src alt=" " />
      </div>
      <!-- 血条 -->
      <LBar class="hp-bar" :value="20"></LBar>
      <!-- 能量条(蓝条) -->
      <LBar class="power-bar" :value="50"></LBar>
    </div>
    <div class="right">
      <div class="exp-bar"></div>
    </div>
  </div>
</template>

<script>
import LBar from "./l-bar"
export default {
  components: {
    LBar
  },

  data() {
    return {}
  },

  computed: {},

  methods: {}
}
</script>
<style lang='scss'>
$width: 50px;
.hero-avatar {
  font-size: 0;
  background: #333;
  border: 1px solid;
  display: inline-flex;
  img {
    display: block;
    background-color: #eee;
  }
  .left {
    width: $width;
    display: inline-block;
    img {
      height: $width;
    }
  }
  .center {
    width: $width * 2;
    display: inline-block;
    vertical-align: top;
    .l-bar {
      height: $width/2;
    }
    .avatar-container {
      position: relative;
      height: $width * 2;
      width: 100%;
    }
    .avatar {
      height: 100%;
    }
    .level {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: initial;
    }
    .skill-r {
      width: $width/4;
      height: $width/4;
      border-radius: 50%;
      background-color: #eee;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
