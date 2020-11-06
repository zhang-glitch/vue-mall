<template>
  <div class="scan-pay-code">
    <div class="wechat-box">
      <div class="phone-img" v-show="isModal"></div>
      <div class="zh-code-box">
        <Modal
          modalType="small"
          modalTitle="微信支付"
          btnType="1"
          sureTitle="
          请使用微信扫一扫
          二维码完成支付"
          :showModal="isModal"
          @closeModal="closeModal"
        >
          <template #body>
            <img src="/imgs/pay/wechat.png" alt="" class="zh-code-img">
          </template>
        </Modal>
      </div>
    </div>
    <Modal
      modalType="middle"
      modalTitle="支付确认"
      :sureTitle="sureTitle"
      :cacelTitle="cacelTitle"
      btnType="2"
      @closeModal="closeModal"
      v-show="isShow"
      @skipCart="skipOrderList"
    >
      <template #body>
        <div>您确认是否完成支付？</div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: "ScanPayCode",
  components: {
    Modal
  },
  data() {
    return {
      isModal: true,
      sureTitle: "查看订单",
      // 控制确认订单的会话框
      isShow: false,
      cacelTitle: '取消支付'
    }
  },
  methods: {
    closeModal(title) {
      // 支付框关闭
      this.isModal = false;
      // 确认框打开
      this.isShow = true;
      // 当取消订单的时候，设置确认会话框关闭
      if(title === this.cacelTitle) {
        this.isShow = false;
      }
    },
    // 跳转到订单列表
    skipOrderList(title) {
      if(title === this.sureTitle) {
        this.$router.push("/order/list")
      }
    }
  }
}
</script>

<style lang="scss">

  @import "../assets/scss/base.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/mixin.scss";

  .scan-pay-code {
    .wechat-box {
      position: relative;
      .phone-img {
        @include position(fixed, 95px, 26%);
        @include bgImg(296px, 485px, "/imgs/pay/icon-scan.png");
        z-index: 100;
      }
      .zh-code-box {
        width: 440px ;
        .modal {
          @include position(fixed, 14px, 126px);
          .modal-dialog {
            width: 26% !important;
            height: 324px;
            .modal-body {
              padding: 10px 30px;
              text-align: center;
              .zh-code-img {
                width: 237px;
                height: 240px;
              }
            }
            .modal-footer {
              .btn {
               background-color: $colorJ !important;
               color: $colorI !important;
               font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>