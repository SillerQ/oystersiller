<template>
    <div class="imgbox">
        <img :src="img.imgSrc" />
        <a :href="img.imgHref">{{ img.imgHref }}</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImgBox',
  props: {
    img: Object,
  },
});
</script>

<style lang="scss" scoped>
.imgbox {
    float: left;
    img {
        display: block;
        width: 288px;
        height: auto;
        border-radius: 3px;
        margin-right: 30px;
    }
}
</style>
