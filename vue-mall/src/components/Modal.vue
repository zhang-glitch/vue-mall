<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{modalTitle}}</span>
          <a href="javascript:;" class="icon-close" @click="closeModal"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- <a href="javascript:;" class="btn" v-if="btnType === '1' || btnType === '2'" :class="{'all-btn': btnType === '2'}" @click="skipCart">{{sureTitle}}</a>
          <a href="javascript:;" class="btn btn-cacel" v-if="btnType === '0' || btnType === '2'" @click="closeModal">{{cacelTitle}}</a> -->
          <div class="btn-group">
            <a href="javascript:;" class="btn" v-if="btnType === '1' || btnType === '2'" @click="skipCart">{{sureTitle}}</a>
            <a href="javascript:;" class="btn btn-default" v-if="btnType === '0' || btnType === '2'" @click="closeModal">{{cacelTitle}}</a> 
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
export default {
  name: "Modal",
  props: {
    // 小small, 中middle, 大large, 表单form
    modalType: {
      type: String,
      default: "from",
    },
    modalTitle: String,
    // 1: 确定， 0: 取消， 2: 取消，确定
    btnType: {
      type: String,
      default: "2"
    },
    sureTitle: {
      type: String,
      default: '确定'
    },
    cacelTitle: {
      type: String,
      default: "取消"
    },
    // 是否显示弹窗
    showModal: Boolean
  },
  data(){
    return {

    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal")
    },
    skipCart() {
      this.$emit("skipCart", this.sureTitle)
    }
  }
}
</script>

<style lang="scss" scoped>

  @import './../assets/scss/config.scss';
  // body {
  //   position: relative;
  //   z-index: 999;
  //   background: #cccccc;
  // }
  // .modal {
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   background: #cccccc;
  //   z-index: 1000;
  //   .pp {
  //     width: 200px;
  //     height: 100px;
  //   }
  // }


  // .modal {
  //   .modal-dialog {
  //     .modal-footer {
  //       .btn-cacel{
  //         background-color: #b0b0b0;
  //       }
  //     }
  //   }
  // }
</style>