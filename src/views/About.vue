<template>
  <div class="about">
    <Nav title='家具尺寸图👻'/>
    <div class="main">
        <img src="../assets/fire.png" />
        <img src="../assets/foreg.png" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'About',
  components: {
    Nav,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.about {
  background-color: #fff;
}
 .main {
   height: calc(100vh - 246px);
   padding-left: 164px;
 }
</style>
