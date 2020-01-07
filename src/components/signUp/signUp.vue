<template lang="pug">
.signUp
  el-dialog(
    title="用户注册"
    width="345px"
    :visible="active"
    :before-close="closeModal"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  )
    .signUp-content
      .user-info
        .user-info-row
          span.user-info-label 账号：
          el-input(placeholder="请输入账号" v-model="inputParam.account")
        .user-info-row
          span.user-info-label 昵称：
          el-input(placeholder="请输入用户昵称" v-model="inputParam.nick")
        .user-info-row
          span.user-info-label 密码：
          el-input(placeholder="请输入密码" type="password" v-model="inputParam.password") 
        .user-info-row
          span.user-info-label 确认密码：
          el-input(placeholder="请再次确认密码" type="password" v-model="inputParam.password") 
    span.signUp-footer(slot="footer")
      el-button(@click="cancel") 取消
      el-button(@click="register" type="primary") 注册
</template>

<script lang="ts">
import Component from "vue-class-component";
import loader from "../../mixins/loader/loader";
// import { Watch, Mixins, Prop } from "vue-property-decorator";
import { Watch, Prop, Mixins } from "vue-property-decorator";

interface InputParam {
  account: string;
  nick: string;
  password: string;
  repeatPwd: string;
}

@Component({
  name: "SignUp",
  components: {}
})
class SignUp extends Mixins(loader) {
  @Prop({ default: false }) active!: boolean;
  inputParam: InputParam = {
    account: "",
    nick: "",
    password: "",
    repeatPwd: ""
  };
  // onDialogClose() {
  //   this.$emit("update:active", false);
  // }
  cancel() {
    this.$emit("update:active", false);
  }
  closeModal(done: any) {
    done();
    this.$emit("update:active", false);
  }
  register() {}
}
export default SignUp;
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
