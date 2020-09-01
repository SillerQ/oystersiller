<template>
    <div class="container">
        <div class="item" v-for="(item, index) in lists" :key="index">
            <h7 class="title-box">{{ item.title }}</h7>
            <p class="tips">{{ item.tips }}</p>
            <div class="imglist">
                <div v-for="(img, index) in item.imgs" :key="index">
                    <ImgBox :img="img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImgBox from '@/components/ImgBox.vue';

import bathroom1 from '@/assets/decoration-imgs/bathroom1.jpg';
import bathroom2 from '@/assets/decoration-imgs/bathroom2.jpg';
import bathroom3 from '@/assets/decoration-imgs/bathroom3.jpg';
import bathroom4 from '@/assets/decoration-imgs/bathroom4.jpg';

import shoesCabinet from '@/assets/decoration-imgs/shoes-cabinet.jpg';
import shoesCabinet2 from '@/assets/decoration-imgs/shoes-cabinet2.jpg';
import shoesCabinet3 from '@/assets/decoration-imgs/shoes-cabinet3.jpg';
import shoesCabinet4 from '@/assets/decoration-imgs/shoes-cabinet4.jpg';

export default defineComponent({
  name: 'Container',
  components: {
    ImgBox,
  },
  data() {
    return {
      lists: [
        {
          title: '鞋柜',
          tips: '柜底悬空，有放钥匙和一些随身物品的地方，最好有抽屉',
          imgs: [
            {
              imgSrc: shoesCabinet,
              imgHref: '好好住',
            },
            {
              imgSrc: shoesCabinet2,
              imgHref: '好好住',
            },
            {
              imgSrc: shoesCabinet3,
              imgHref: '好好住',
            },
            {
              imgSrc: shoesCabinet4,
              imgHref: '好好住',
            },
          ],
        },
        {
          title: '厨房',
          tips: '',
          imgs: [
            {
              imgSrc: bathroom2,
              imgHref: '好好住',
            },
          ],
        },
        {
          title: '电视墙',
          tips: '',
          imgs: [
            {
              imgSrc: 'www.google.com',
              imgHref: '好好住',
            },
          ],
        },
        {
          title: '洗手台',
          tips: '',
          imgs: [
            {
              imgSrc: 'www.google.com',
              imgHref: '好好住',
            },
          ],
        },
        {
          title: '浴室',
          tips: '',
          imgs: [
            {
              imgSrc: 'www.google.com',
              imgHref: '好好住',
            },
          ],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
    background-color: #F5F0EB;
    padding-left: 164px;
    .item {
        padding-bottom: 32px;
    }
    .title-box {
        color: #ffffff;
        background-color: #000000;
        padding: 10px 18px;
        border-radius: 0 0 3px 3px;
        font-size: 18px;
        line-height: 41px;
    }
    .tips {
        margin-top: 18px;
        margin-bottom: 84px;
    }
    .imglist {
        height: 314px;
        width:100%;
        overflow: auto;
    }
}
</style>
