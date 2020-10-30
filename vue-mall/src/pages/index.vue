<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="menu">
          <ul class="swiper-menu">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul class="children-menu" v-for="(item, index) in menuList" :key="index">
                  <li v-for="element in item" :key="element.id">
                     <a :href="`${element ? `/product/${element.id}` : 'javascript:;'}`">
                      <img :src="`${element ? element.img : 'imgs/item-box-1.png'}`" alt />
                      {{`${element ? element.name : '小米'}`}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <Swiper :options="swiperOption">
          <SwiperSlide v-for="item in slideList" :key="item.id">
            <a :href="`/product/${item.id}`"><img v-lazy="item.img" alt=""></a>
          </SwiperSlide>
          <!-- 分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </Swiper>
      </div>
      <div class="ads-box">
        <ul>
          <li v-for="item in adsList" :key="item.id">
            <a :href="`/product/${item.id}`">
              <img v-lazy="item.img" alt="">
            </a>
          </li>
        </ul>
      </div>
      <div class="banner">
        <a href="/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/product/35">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
              </a>
            </div>
            <div class="list-box">
              <ul class="list" v-for="(item, index) in phoneList" :key="index">
                <li v-for="element in item" :key="element.id">
                  <span class="new-pro skill-pro">新品</span>
                  <div class="item-img">
                    <img v-lazy="element.mainImage" alt="">
                  </div>
                  <div class="item-info">
                    <h3 class="product-name">{{element.name}}</h3>
                    <p>{{element.subtitle}}</p>
                    <p class="price" @click="openModal(element.id)">{{element.price}}元</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal 
          modalType="middle" 
          modalTitle="提示"
          btnType="1"
          :sureTitle="sureTitle"
          :showModal="isModal"
          @closeModal="closeModal"
          @skipCart="skipCart"
        >
          <template #body>
            <div>商品添加成功！</div>
          </template>
        </Modal>
      </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Modal from '../components/Modal'
export default {
  name: 'index',
  components: {
    Swiper,
    SwiperSlide,
    Modal
  },
  data() {
    return {
      sureTitle: "查看购物车",
      isModal: false,
      swiperOption: {
        // 自动播放
        autoplay: true,
        loop: true,
        effect : 'cube',
        cubeEffect: { 
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "44",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "43",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "41",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
       menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [
          {
            id: 34,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 35,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 36,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 37,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: []
    }
  },
  created() {
    this.getPhoneList()
  },
  methods: {
    getPhoneList() {
      this.axios({
        url: "/products",
         params: {
          categoryId: 100012,
          pageSize: 14
        }
      }).then(res => {
        console.log(res)
        res.list = res.list.slice(6, 14);
        this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
      })
    },
    openModal(id) {
      // this.$router.push("cart")
      // this.axios({
      //   url: "/carts",
      //   data: {
      //     productId: id,
      //     selected: true
      //   }
      // })
      this.isModal = true;
    },
    closeModal() {
      this.isModal = false
    },
    skipCart(val) {
      if(val === this.sureTitle) {
        this.$router.push("/cart")
      }
      this.isModal = false
    }
  }
}
</script>

<style lang="scss" scaped>

  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";
  .index {
    .swiper-box {
      position: relative;
      .menu {
        background-color: rgba(85,88,90,.48);
        position: absolute;
        top: 0;
        left: 0;
        height: 451px;
        width: 264px;
        z-index: 9;
        text-align: center;
        background-color: rgba(85,88,90,.48);
        padding: 26px 0;
        box-sizing: border-box;
        .swiper-menu {
          .menu-item {
            height: 50px;
            line-height: 50px;
            a {
              // 让a填满整个li
              display: block;
              position: relative;
              font-size: 16px;
              color: #fff;
              &:after {
                content: "";
                @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
                vertical-align: middle;
                // 这里只能用定位来移动图标，不能用margin.
                position: absolute;
                right: 30px;
                top: 17.5px;
              }
            }
            &:hover {
              background: $colorA;
              .children {
                display: block;
              }
            }

            .children {
              display: none;
              width: 962px;
              height: 451px;
              background-color: $colorG;
              position: absolute;
              top: 0;
              left: 264px;
              // 为什么right:0不行哩。
              // right: 0;
              border: 1px solid $colorH;
              transition: all 0.5s;
              .children-menu {
                height: 75px;
                display:flex;
                li {
                  position: relative;
                  z-index: 10;
                  height: 75px;
                  line-height: 75px;
                  flex:1;
                  padding-left:23px;
                  a {
                    display: block;
                    font-size: $fontJ;
                    color: $colorB;
                    padding-left: 30px;
                    img {
                      width: 42px;
                      height: 35px;
                      margin-right: 15px;
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
            
        }
      }
      }
      // 内部组件的class
      .swiper-container {
        height: 451px;
        img {
          width:100%;
          height: 100%;
        }
        .swiper-button-prev {
          margin-left: 264px;
        }
      }
      
    }
    .ads-box {
      margin-top: 14px;
      margin-bottom: 31px;
      ul {
        @include flex();
        li {
          a {
            display: inline-block;
            width: 296px;
            height: 167px;
          }
        }
      }
    }
    .banner {
      width: 100%;
      margin-bottom: 50px;
      a {
        display: inline-block;
        width: 100%;
        img {
          width:100%;
        }
      }
    }
    .product-box {
      background: $colorJ;
      padding: 30px 0 50px;
      h2 {
        font-size: $fontF;
        height: 21px;
        line-height: 21px;
        color: #333;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        .banner-left {
          a {
            display: inline-block;
            width: 224px;
            height: 619px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .list-box {
          .list {
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            li {
              span {
                display: inline-block;
                width: 67px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
                &.new-pro {
                  background-color: #7ecf68;
                }
                // &.skill-pro {
                //   background-color: #e82626;
                // }
              }
              width: 236px;
              height: 302px;
              background-color: #fff;
              text-align: center;
              .item-img {
                img {
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info {
                p {
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .price {
                  color: #f20a0a;
                  font-size: 14px;
                  font-weight: 700;
                  cursor: pointer;
                  &:after {
                    content: "";
                    @include bgImg(22px, 22px,"/imgs/icon-cart-hover.png");
                    vertical-align: middle;
                    margin-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>