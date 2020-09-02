<template>
    <div class="imgbox" >
        <a :href="img.imgHref" target="_blank">
          <img :src="img.imgSrc" />
          <!-- <div class="messageBox"> -->
            <!-- <p>链接地址：<br/>{{ img.imgHref }}</p> -->
          <!-- </div> -->
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImgBox',
  props: {
    img: Object,
    isShowHref: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.imgbox {
    a {
      display: block;
      position: relative;
      margin-right: 32px;
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      .messageBox {
      opacity: 0;
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #000000;
      border-radius: 3px;
      color: #ffffff;
      text-align: left;
      line-height: 24px;
      cursor: pointer;
      p{
        flex: 1 1 auto;
        margin-top: 8px;
        margin-left: 8px;
      }
    }
      &:hover {
        .messageBox {
          opacity: 1;
        }
      }
    }
    img {
        display: block;
        width: 220px;
        height: auto;
        border-radius: 3px;
    }
}
</style>
