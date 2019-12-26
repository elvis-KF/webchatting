<template lang="pug">
.signUp
  el-dialog(
    title="用户注册"
    width="30%"
    :visible="active"
  )
    .signUp-content
      .user-info
        .user-info-row
          span.user-info-label 账号：
          el-input(placeholder="请输入账号" v-model="inputParam.account")
</template>

<script lang="ts">
import Component from "vue-class-component";
import loader from "../../mixins/loader/loader";
import { Watch, Mixins, Prop } from "vue-property-decorator";

interface InputParam {
  account: string;
  password: string;
  repeatPwd: string;
}

@Component({
  name: "SignUp",
  components: {}
})
class SignUp extends Mixins(loader) {
  @Prop({ default: false }) active: boolean;
  inputParam: InputParam = {
    account: "",
    password: "",
    repeatPwd: ""
  };
  onDialogClose() {
    this.$emit("update:active", false);
  }
}
export default SignUp;
</script>
