<template lang="pug">
.chatting-wrapper
  .chatting-content-box
    .chatting-user-box
      .chatting-user-info-box
        .chatting-user-avatar-box
          img(src="../../assets/default.jpg")
        //- div(style="display: flex; justify-content: space-between; align-items: center;")
        .chatting-user-detail-box
          .chatting-user-name
            span 丘小峰
            img(src="../../assets/active.png")
          //- .chatting-user-signature
          //-   | 少时诵诗书舒舒
      .chatting-user-friends-box
        .chatting-user-friends-item-box(v-for="(item, index) in friendList" :class="{ gray: index === currentClickIndex }" @click="openChatWindow(index)")
          .chatting-friend-avatar-box
            template(v-if="item.avatar")
              img(:src="item.avatar")
            template(v-else)
              img(src="../../assets/default.jpg")
          .chatting-friend-detail-box
            .chatting-friend-info-box
              .chatting-friend-name
                span {{item.name}}
              .chatting-friend-signature
                | {{item.sign}}
            img.status-img(src="../../assets/active.png")
    .chatting-window-box
      .chatting-window-title-box
        | 聊天窗口
      .chatting-window-chat-box
        .chatting-window-self-box
          img(src="../../assets/default.jpg")
          .chatting-window-self-message 你好呀
        .chatting-window-friend-box
          img(src="../../assets/default.jpg")
          .chatting-window-friend-message 你好呀
      .chatting-window-emoji-box
        img(src="../../assets/emoji.png")
      .chatting-window-send-box(contenteditable="true")
      .chatting-window-button-box 
        span 发送(S)
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
  currentClickIndex: string | number = "";

  friendList: Array<Object> = [
    {
      avatar: "",
      name: "朋友1",
      sign: "个性签名1",
      status: 1 //0离线 1在线
    }
  ];
  openChatWindow(index: number) {
    this.currentClickIndex = index;
  }
}
export default Chatting;
</script>
<style lang="scss">
.chatting-wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url(../../assets/background1.png);
  .middle {
    align-items: center;
  }
  .chatting-content-box {
    display: flex;
    width: 1000px;
    height: 700px;
    margin: 0 auto;
    background: #ffffff;
    opacity: 0.9;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    .chatting-user-box {
      box-sizing: border-box;
      width: 320px;
      background: #d0d0d0;
      .chatting-user-info-box {
        width: 290px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        height: 55px;
        padding: 10px 0;
        border-bottom: 1px solid #979ba7;
        .chatting-option-box {
          img {
            width: 23px;
            height: 23px;
          }
        }
      }
      .chatting-user-avatar-box {
        width: 50px;
        height: 50px;
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .chatting-user-detail-box {
        width: 230px;
        margin-left: 10px;
        text-align: left;
        .chatting-user-name {
          width: 100%;
          display: flex;
          justify-content: space-between;
          span,
          img {
            display: inline-block;
            vertical-align: middle;
          }
          img {
            width: 25px;
            height: 25px;
            cursor: pointer;
          }
          span {
            width: 80%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
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
      .chatting-user-friends-item-box {
        display: flex;
        padding: 15px;
        font-size: 15px;
        &:hover {
          background: #e5e6e6;
        }
        .chatting-friend-detail-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .status-img {
            width: 25px;
            height: 25px;
          }
        }
        .chatting-friend-info-box {
          width: 210px;
          text-align: left;
          padding-left: 10px;
        }
        .chatting-friend-avatar-box {
          width: 44px;
          height: 44px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .chatting-friend-name {
          margin-bottom: 5px;
        }
      }
    }
    .chatting-window-box {
      width: 680px;
      .chatting-window-title-box {
        padding: 12px;
        text-align: center;
        border-bottom: 1px solid #e5e6e6;
      }
      .chatting-window-chat-box {
        height: 450px;
        padding: 15px;
        .chatting-window-self-box {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          margin-top: 10px;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
          .chatting-window-self-message {
            max-width: 350px;
            background: #e9eaee;
            text-align: left;
            margin-right: 10px;
            border-radius: 8px;
            padding: 10px;
            font-size: 14px;
          }
        }
        .chatting-window-friend-box {
          display: flex;
          align-items: center;
          margin-top: 10px;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }
          .chatting-window-friend-message {
            max-width: 350px;
            background: #ffffff;
            text-align: left;
            margin-left: 10px;
            border: 1px solid #e9e9e9;
            border-radius: 8px;
            padding: 10px;
            font-size: 14px;
          }
        }
      }
      .chatting-window-emoji-box {
        height: 20px;
        padding: 10px 15px;
        text-align: left;
        background: #d0d0d0;
        img {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
      .chatting-window-send-box {
        padding: 10px 15px;
        height: 80px;
        text-align: left;
        font-size: 14px;
        &:focus {
          outline: 0;
        }
      }
      .chatting-window-button-box {
        padding: 0 15px;
        text-align: right;
        font-size: 15px;
        cursor: pointer;
        span:hover {
          color: #188AFD;
        }
      }
    }
  }
  .gray {
    background: #e5e6e6;
  }
}
</style>
