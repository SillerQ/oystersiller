/* eslint-disable max-len */
<template>
  <div id="app">
    <div id="header-bar">
      <router-link to="/" :title="'📱3⃣️'">装修风格</router-link>
      <router-link to="/about" :title="'sfasfadsf'">家具尺寸</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    title: String,
  },
});
</script>

<style lang="scss" scoped>
#header-bar {
  background-color: #000000;
  padding: 24px 0 96px 164px;
}
a {
  font-weight: bold;
  color: #ffffff;
  margin-right: 18px;

  &.router-link-exact-active {
    color: #03A87F;
  }
}
</style>
