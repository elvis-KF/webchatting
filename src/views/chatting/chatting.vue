<template lang="pug">
.chatting-wrapper
  .chatting-content-box
    .chatting-user-box
      .chatting-user-info-box
        .chatting-user-avatar-box
        .chatting-user-detail-box
          .chatting-user-name
            | 丘小峰
          .chatting-user-signature
            | 少时诵诗书舒舒
      .chatting-user-friends-box
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
.signUp {
  .user-info {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .user-info-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .user-info-label {
      display: inline-block;
      width: 70px;
      margin-right: 10px;
      text-align: right;
      font-size: 14px;
    }
    .el-input {
      width: 210px;
    }
  }
  .el-dialog__footer {
    text-align: center;
    button:last-child {
      margin-left: 20px;
    }
  }
}
</style>
