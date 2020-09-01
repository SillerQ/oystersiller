<template>
  <div class="home">
    <Nav title='这些是我喜欢的风格🎉' />
    <Container />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Nav from '@/components/Nav.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Nav,
    Container,
    Footer,
  },
});
</script>
