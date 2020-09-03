<template>
    <div id="nav">
         <h4 class="title">{{ title }}</h4>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
  props: {
    title: String,
  },
});
</script>

<style lang="scss">
#nav {
  background-color: #000000;
  .title {
    color: #ffffff;
    font-size: 36px;
    margin-left: 164px;
    padding-bottom: 24px;
  }
}

@media (max-width: 1024PX) {
  #nav {
    .title {
      font-size: 24px;
      margin-left: 4rem;
    }
  }
 }
</style>
