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

import kitchen0 from '@/assets/decoration-imgs/kitchen0.jpg';
import kitchen1 from '@/assets/decoration-imgs/kitchen1.jpg';
import kitchen2 from '@/assets/decoration-imgs/kitchen2.jpg';
import kitchen3 from '@/assets/decoration-imgs/kitchen3.jpg';
import kitchen4 from '@/assets/decoration-imgs/kitchen4.jpg';
import kitchen5 from '@/assets/decoration-imgs/kitchen5.jpg';

import tvwall0 from '@/assets/decoration-imgs/tvwall0.jpg';
import tvwall1 from '@/assets/decoration-imgs/tvwall1.jpg';
import tvwall2 from '@/assets/decoration-imgs/tvwall2.jpg';
import tvwall3 from '@/assets/decoration-imgs/tvwall3.jpg';
import tvwall4 from '@/assets/decoration-imgs/tvwall4.jpg';
import tvwall5 from '@/assets/decoration-imgs/tvwall5.jpg';
import tvwall6 from '@/assets/decoration-imgs/tvwall6.jpg';

import washBasin0 from '@/assets/decoration-imgs/wash-basin0.jpg';
import washBasin1 from '@/assets/decoration-imgs/wash-basin1.jpg';
import washBasin2 from '@/assets/decoration-imgs/wash-basin2.jpg';

import shoesCabinet from '@/assets/decoration-imgs/shoes-cabinet.jpg';
import shoesCabinet2 from '@/assets/decoration-imgs/shoes-cabinet2.jpg';
import shoesCabinet3 from '@/assets/decoration-imgs/shoes-cabinet3.jpg';
import shoesCabinet4 from '@/assets/decoration-imgs/shoes-cabinet4.jpg';

import masterroom0 from '@/assets/decoration-imgs/master-bedroom1.jpg';

export default defineComponent({
  name: 'Container',
  components: {
    ImgBox,
  },
  data() {
    return {
      isShowHref: '',
      lists: [
        // {
        //   title: '鞋柜',
        //   tips: '柜底悬空，有放钥匙和一些随身物品的地方，最好有抽屉',
        //   imgs: [
        //     {
        //       imgSrc: shoesCabinet,
        //       imgHref: '',
        //     },
        //     {
        //       imgSrc: shoesCabinet2,
        //       imgHref: '',
        //     },
        //     {
        //       imgSrc: shoesCabinet3,
        //       imgHref: '',
        //     },
        //     {
        //       imgSrc: shoesCabinet4,
        //       imgHref: '',
        //     },
        //   ],
        // },
        {
          title: '厨房',
          tips: '',
          imgs: [
            {
              imgSrc: kitchen0,
              imgHref: 'https://m.haohaozhu.cn/tupian/001o3i200000h6mj.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
            {
              imgSrc: kitchen2,
              imgHref: 'https://m.haohaozhu.cn/tupian/0038ayk000013nt0.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
            {
              imgSrc: kitchen4,
              imgHref: 'https://m.haohaozhu.cn/tupian/003pxjc000054zzw.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
            {
              imgSrc: kitchen5,
              imgHref: 'https://m.haohaozhu.cn/tupian/000cmqa00000xl2r.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
          ],
        },
        {
          title: '电视墙',
          tips: '',
          imgs: [
            {
              imgSrc: tvwall0,
              imgHref: 'https://m.haohaozhu.cn/tupian/00182u200002k1f5.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=TnNCd2orZzJuY0RFaEtXNDc0TFJMQT09OjhiYTcyYmMyNmQ2ZjlmY2FjOGVmZWVmNWNkNjQwNGMy',
            },
            {
              imgSrc: tvwall1,
              imgHref: 'https://m.haohaozhu.cn/tupian/0010qq4000015zlr.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=TnNCd2orZzJuY0RFaEtXNDc0TFJMQT09OjhiYTcyYmMyNmQ2ZjlmY2FjOGVmZWVmNWNkNjQwNGMy',
            },
            {
              imgSrc: tvwall2,
              imgHref: 'https://m.haohaozhu.cn/tupian/001zifb00004krn2.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=TnNCd2orZzJuY0RFaEtXNDc0TFJMQT09OjhiYTcyYmMyNmQ2ZjlmY2FjOGVmZWVmNWNkNjQwNGMy',
            },
            {
              imgSrc: tvwall3,
              imgHref: 'https://m.haohaozhu.cn/tupian/001y04s00000148u.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=TnNCd2orZzJuY0RFaEtXNDc0TFJMQT09OjhiYTcyYmMyNmQ2ZjlmY2FjOGVmZWVmNWNkNjQwNGMy',
            },
            {
              imgSrc: tvwall4,
              imgHref: 'https://m.haohaozhu.cn/tupian/003e2d6000001yxq.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=TnNCd2orZzJuY0RFaEtXNDc0TFJMQT09OjhiYTcyYmMyNmQ2ZjlmY2FjOGVmZWVmNWNkNjQwNGMy',
            },
          ],
        },
        {
          title: '洗手台',
          tips: '',
          imgs: [
            {
              imgSrc: washBasin0,
              imgHref: 'https://m.haohaozhu.cn/tupian/002affy00001jxae.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
            {
              imgSrc: washBasin1,
              imgHref: 'https://m.haohaozhu.cn/tupian/002affy00001jxae.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
            {
              imgSrc: washBasin2,
              imgHref: 'https://m.haohaozhu.cn/tupian/0013cmf000008hp2.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
          ],
        },
        {
          title: '浴室',
          tips: '',
          imgs: [
            {
              imgSrc: bathroom1,
              imgHref: '',
            },
            {
              imgSrc: bathroom2,
              imgHref: '',
            },
            {
              imgSrc: bathroom3,
              imgHref: '',
            },
            {
              imgSrc: bathroom4,
              imgHref: 'https://m.haohaozhu.cn/tupian/001tc7l000014mra.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
          ],
        },
        {
          title: '卧室',
          tips: '',
          imgs: [
            {
              imgSrc: masterroom0,
              imgHref: 'https://m.haohaozhu.cn/tupian/001o1uo000044il7.html?hz_dev=ios&hz_share_plfm=link&hz_share_uid=MFA5aXRRZHpWSGQ0K1B5SHZ1clpKQT09OjBlNjJkMjAzYTJkZTMzNmY5MTBhMmZkOWI2ZDBkMGUy',
            },
          ],
        },
      ],
    };
  },
  // methods: {
  //   onClickImg(img: string) {
  //     console.log(img);
  //     this.isShowHref = img;
  //   },
  // },
});
</script>

<style lang="scss" scoped>
.container {
    // background-color: #F5F0EB;
    .item {
      position: relative;
      padding-left: 164px;
    }
    .item:nth-child(1) {
      background-color: #E6EEE9;
    }
    .item:nth-child(2) {
      background-color: #eae5eb;
    }
    .item:nth-child(3) {
      background-color: #F5F0EB;
    }
    .item:nth-child(4) {
      background-color: #dae6e7;
    }
    .item:nth-child(5) {
      background-color: #e1e1e1;
    }
    .item:nth-child(6) {
      background-color: #dbd1d5;
    }
    .title-box {
      position: absolute;
      color: #ffffff;
      background-color: #000000;
      padding: 54px 18px 12px;
      border-radius: 0 0 3px 3px;
      font-size: 18px;
    }
    .tips {
      height: 128px;
      line-height: 128px;
    }
    .imglist {
      height: 314px;
      width: auto;
      overflow-y: hidden;
      overflow-x: auto;
      display: flex;
      justify-content: flex-start;
      padding-bottom: 32px;
    }
}
</style>
