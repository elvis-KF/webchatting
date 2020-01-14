<template lang="pug">
.chatting-wrapper
  .chatting-content-box
    .chatting-user-box
      .chatting-user-info-box
        .chatting-user-avatar-box
          img(src="../../assets/default.jpg")
        .chatting-user-detail-box
          .chatting-user-name
            span 丘小峰
            img(src="../../assets/active.png")
          .chatting-user-signature
            | 少时诵诗书舒舒
      .chatting-user-friends-box
        .chatting-user-friends-item-box
          .chatting-user-avatar-box
            img(src="../../assets/default.jpg")
          .chatting-user-detail-box
            .chatting-user-name
              span 丘小峰
              img(src="../../assets/active.png")
            .chatting-user-signature
              | 少时诵诗书舒舒
        .chatting-user-friends-item-box
          .chatting-user-avatar-box
            img(src="../../assets/default.jpg")
          .chatting-user-detail-box
            .chatting-user-name
              span 丘小峰
              img(src="../../assets/active.png")
            .chatting-user-signature
              | 少时诵诗书舒舒
    .chatting-window-box
</template>
<script lang="ts">
import Component from "vue-class-component";
import loader from "../../mixins/loader/loader";
import { Watch, Prop, Mixins } from "vue-property-decorator";

@Component({
  name: "Chatting",
  components: {}
})
class Chatting extends Mixins(loader) {
}
export default Chatting;
</script>
<style lang="scss">
.chatting-wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/background1.png);
  // opacity: .7;
  .chatting-content-box {
    display: flex;
    width: 1000px;
    height: 700px;
    margin: 0 auto;
    background: #FFFEEE;
    opacity: .6;
    position: relative;
    top: 50%;
    margin-top: 350;
    transform: translateY(-50%);
    // border-radius: 10px;
    .chatting-user-box {
      box-sizing: border-box;
      width: 320px;
      // padding: 20px;
      border-right: 1px solid #ced0d6;
      .chatting-user-info-box {
        display: flex;
        align-items: center;
        height: 60px;
        padding: 15px;
        border-bottom: 1px solid #ced0d6;
      }
      .chatting-user-avatar-box {
        width: 50px;
        height: 50px;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      .chatting-user-detail-box {
        width: 220px;
        margin-left: 10px;
        text-align: left;
        & > div {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .chatting-user-name {
          width: 70%;
          span, img {
            display: inline-block;
            vertical-align: middle;
          } 
          img {
            width: 18px;
            height: 18px;
            margin-left: 8px;
            cursor: pointer;
          }
        }
        .chatting-user-signature {
          margin-top: 5px;
        }
      }
      .chatting-user-friends-box {
        height: 600px;
        overflow-y: auto;
      }
      .chatting-user-friends-item-box{
        display: flex;
        padding: 15px;
        &:hover {
          background: #e5e6e6;
        }
      }
    }
    .chatting-window-box {
      width: 680px;
    }
  }
}
</style>
