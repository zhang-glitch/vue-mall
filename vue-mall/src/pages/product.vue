<template>
  <div class="product">
    <ProductPramas :class="{'is-fixed': setIsFixed}" :name="product.name">
      <template #buy>
        <a href="javascript:;" class="btn" @click="buy">立即购买</a>
      </template>
    </ProductPramas>
    <!-- <div class="container"> -->
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p class="param">
          <a href id>全球首款双频 GP</a>
          <span>|</span>
          <a href id>骁龙845</a>
          <span>|</span>
          <a href id>AI 变焦双摄</a>
          <span>|</span>
          <a href id>红外人脸识别</a>
        </p>
        <div class="price">
          <span>
            ￥
            <em>{{product.price}}</em>
          </span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="/imgs/product/gallery-2.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-3.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-4.png" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-5.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/product/gallery-6.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showSlide = 'slideDown'"></div>
        <div class="video-box">
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <span class="icon-close"  @click="showSlide = ''"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>

import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProductPramas from './../components/ProductPramas'
export default {
  name: 'product',
  components: {
    ProductPramas,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      positionTop: 0,
      // 控制动画效果
      showSlide: '',
      product: {}, //商品信息
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  },
  created() {
    this.getProductInfo();
  },

  mounted() {
    window.addEventListener("scroll", this.getPositionTop)
  },
  
  destroyed() {
    window.removeEventListener("scroll", this.getPositionTop, false)
  },
  methods: {
    getPositionTop(){
      if(window.pageXOffset) {
        this.positionTop = pageYOffset
        // console.log(this.positionTop)
      }else {
        this.positionTop = document.body.scrollTop + document.documentElement.scrollTop
        // console.log(this.positionTop)
      }
    },
     // 获取产品信息
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`products/${id}`)
        .then((res) => {
          this.product = res;
        })
    },

    // 跳转到产品详情页
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
  computed: {
    setIsFixed() {
      if(this.positionTop >= 112) {
        return true
      }else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">

  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .product {
    .is-fixed {
      position: fixed;
      top: 0px;
      width: 100%;
      transition: all .5;
      box-shadow: 0 5px 5px $colorE;
    }
    // .container {
      .item-bg {
        @include bgh("/imgs/product/product-bg-1.png", 718px);
        text-align: center;
        h2 {
          font-size: $fontA;
          padding-top: 55px;
        }
        h3 {
          font-size: $fontE;
          letter-spacing: 10px;
        }
        .param {
          margin-top: 21px;
          margin-bottom: 40px;
          a {
            font-size: $fontI;
            color: $colorB;
          }
          span {
            margin: 0 15px;
          }
        }

        .price {
          font-size: 30px;
          color: $fontE;
        }
      }

      .item-bg-2 {
        @include bgh("/imgs/product/product-bg-2.png", 480px);
        background-size: 1226px 397px;
      }

      .item-bg-3 {
        @include bgh("/imgs/product/product-bg-3.png", 638px);
        background-size: cover;
      }

      .item-swiper {
        margin: 36px auto 52px;
        .desc {
          font-size: $fontH;
          color: $colorB;
          text-align: center;
        }
        img {
          width: 100%;
        }
      }

      .item-video {
        height: 1044px;
        background-color: #070708;
        margin-bottom: 76px;
        color: #fff;
        text-align: center;
        h2 {
          font-size: 60px;
          padding-top: 82px;
          margin-bottom: 47px;
        }
        p {
          font-size: 24px;
          margin-bottom: 58px;
        }

        .video-bg {
          @include bgh("/imgs/product/gallery-1.png");
          @include wh(1226px, 540px);
          margin: 0 auto 120px;
          background-size: cover;
          cursor: pointer;
        }
        .video-box {
          .overlay {
            @include position(fixed);
            background-color: $colorB;
            opacity: .4;
            z-index: 10;
          }
          .video {
            @include position(fixed, -50%, 50%);
            @include wh(1000px, 536px);
            transform: translate(-50%, -50%);
            z-index: 10;
            opacity: 0;
            transition: all, .6s;
          &.slideDown {
            top: 50%;
            opacity: 1;
          }
            .icon-close {
              @include positionImg(absolute, 15px, 20px, 20px, 20px, '/imgs/icon-close.png');
              z-index: 11;
              cursor: pointer;
            }
            video {
              @include wh(100%, 100%);
              object-fit: cover;
              outline: none;
            }
          }
        }
      }
    // }
  }
</style>