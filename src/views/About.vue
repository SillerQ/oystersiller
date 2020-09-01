<template>
  <div class="about">
    <Nav title='家具尺寸图👻'/>
    <h1>家具尺寸图</h1>
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
