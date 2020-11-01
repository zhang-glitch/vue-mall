<template>
  <div class="detail">
    <ProductParams />
    <div class="container">
      <div class="detail-all">
        <div class="detail-left">
          <div class="swiper fl">
            <swiper :options="swiperOption">
              <swiper-slide>
                <img src="/imgs/detail/phone-1.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/detail/phone-2.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/detail/phone-3.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="/imgs/detail/phone-4.jpg" alt />
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="detail-right">
          <h2 class="item-title">{{product.name}}</h2>
          <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br />
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
          <div class="delivery">小米自营</div>
          <div class="item-price"> {{product.price}} <span class="del">3999元</span></div>
          <div class="item-line"></div>
          <div class="item-addr">
            <span></span>
            <p class="addr">北京 北京市 朝阳区 安定门街道</p>
            <div class="stock">有现货</div>
          </div>
          <div class="item-version">
            <h2>选择版本</h2>
            <div class="version">
              <div class="left" :class="{'checked': version === 1}" @click="version = 1">6GB+64GB 全网通</div>
              <div class="right" :class="{'checked': version === 2}" @click="version = 2">4GB+64GB 移动4G</div>
            </div>
          </div>
          <div class="item-color">
            <h2>选择颜色</h2>
            <div class="color" :class="{'checked': isColor}" @click="isColor = true">
              <span></span> 深空灰
            </div>
          </div>
          <div class="item-total">
            <div class="phone-info">
              <div class="left ">{{product.name}} {{version === 1 ? "6GB+64GB 移动4G 深灰色" : "4GB+64GB 移动4G 深灰色"}}</div>
              <div class="right ">{{product.price}}</div>
            </div>
            <div class="total-price">
              总计: {{product.price}}元
            </div>
          </div>
          <div class="btn btn-huge" @click="addCart">加入购物车</div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt />
        </div>
      </div>
    </div>
    <Modal 
      :showModal="isModal" 
      modalType="small" 
      modalTitle="提示" 
      btnType="1" 
      :sureTitle="sureTitle"
      @closeModal="closeModal"
      @skipCart="skipCart"
    >
      <template #body>
        商品添加成功！
      </template>
    </Modal>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ProductParams from '../components/ProductPramas'
import Modal from '../components/Modal'
export default {
  name: 'detail',
  components: {
    ProductParams,
    Swiper,
    SwiperSlide,
    Modal
  },
  data() {
    return {
      id: this.$route.params.id,
      product:{},
      // 添加时展示会话框
      isModal: false,
      sureTitle:'查看购物车',
      version: 1,//手机类型
      isColor: true,
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    }
  },
  created() {
    this.getProductInfo()
  },
  methods: {
    // 获取产品信息
    getProductInfo() {
      this.axios({
        url: `/products/${this.id}`
      }).then(res => {
        console.log(res)
        this.product = res
      })
    },
    // 添加到购物车
    addCart() {
      this.axios({
        method: "post",
        url: "/carts", 
        data: {
          productId: this.id,
          selected: true
        }
      }).then((res = {cartTotalQuantity: 0}) => {
        // console.log(res)
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity);
        this.isModal = true;
      })
    },
    closeModal() {
      this.isModal = false;
    },
    skipCart(val) {
      if(val === this.sureTitle) {
        this.$router.push("/cart")
      }
      this.isModal = false;
    }
    
  }
}
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .detail {
    .container {
      .swiper {
        @include wh(643px, 617px);
        margin-top: 5px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .detail-all {
        @include flex();
      .detail-right {
        .item-title {
          font-size: 28px;
          padding-top: 30px;
          padding-bottom: 16px;
          height: 26px;
        }
        .item-info {
          height: 36px;
          font-size: 14px;
        }
        .delivery {
          color: $colorA;
          margin-top: 26px;
          margin-bottom: 14px;
          font-size: 16px;
        }
        .item-price {
          height: 19px;
          font-size: 20px;
          color: $colorA;
          .del {
            font-size: 16px;
            color: $colorD;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
        .item-line {
          height: 0;
          margin-top: 25px;
          margin-bottom: 28px;
          border: 1px solid $colorH;
        }
        .item-addr {
          position: relative;
          border: 1px solid #e5e5e5;
          height: 108px;
          line-height: 14px;
          background-color: #fafafa;
          font-size: 14px;
          box-sizing: border-box;
          padding-top: 31px;
          padding-left: 64px;
          span {
            @include bgImg(20px, 20px, "/imgs/detail/icon-loc.png");
            vertical-align: middle;
          }
          .addr {
            display: inline-block;
            color: $colorC;
            margin-left: 5px;
          }
          .stock {
            color: $colorA;
            margin-top: 10px;
            margin-left: 25px;
          }
        }
        .item-version {
          margin-top: 30px;
          margin-bottom: 30px;
          .version {
            @include flex();
            .left, .right {
              border: 1px solid $colorH;
              width: 287px;
              height: 50px;
              line-height: 50px;
              font-size: 16px;
              color: $colorB;
              box-sizing: border-box;
              text-align: center;
              cursor: pointer;
              margin-top: 20px;
              transition: all .8s;
              &:hover {
                background: $colorA;
                color: $colorH;
              }
            }
            .left {
              margin-right:5px;
            }
            // 选中的时候样式
            .checked {
              border: 1px solid $colorA;
              color: $colorA;
            }
          }
        }
        .item-color {
          .color {
            border: 1px solid $colorH;
            width: 287px;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: $colorB;
            box-sizing: border-box;
            text-align: center;
            cursor: pointer;
            margin-top: 20px;
            transition: all .8s;
            &:hover {
              background: $colorA;
              color: $colorH;
            }
            span {
              display: inline-block;
              @include wh(14px, 14px);
              background-color: #666;
            }
          }
          .checked {
            border: 1px solid $colorA;
            color: $colorA;
          }
        }
        .item-total {
          height: 108px;
          font-size: 14px;
          background: #fafafa;
          padding: 24px 33px 29px 30px;
          margin-top: 50px;
          margin-bottom: 30px;
          box-sizing: border-box;
          .phone-info {
            @include flex();
          }
          .total-price {
            font-size: 24px;
            color: $colorA;
            margin-top: 18px;
          }
        }
      }
      }
    }
    .price-info {
      background-color: #f3f3f3;
      height: 340px;
      margin-top: 20px;
      h2 {
        font-size: $fontE;
        color: $colorB;
        padding-top: 38px;
        margin-bottom: 30px;
      }
    }
  }

</style>