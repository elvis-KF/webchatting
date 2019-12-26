<template lang="pug">
  el-container(class="container")
    .main
      .content
        .info
          el-header(class="text-style") WebChatting
          el-input(placeholder="请输入账号" style="margin-top:30px;" prefix-icon="el-icon-user-solid" v-model="account")
          el-input(placeholder="请输入密码" style="margin-top:20px;" type="password" prefix-icon="el-icon-lock" v-model="password")
          .footer
            el-button(type="success" size="medium" @click="login") Sign In
            el-button(type="primary" size="medium" @click="signUp") Sing Up

    sign-up(:active.sync="signUpActive")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import signUp from "../components/signUp/signUp.vue";
import loader from "../mixins/loader/loader";
import { Watch, Mixins, Prop } from "vue-property-decorator";

@Component({
  name: "Login",
  components: {
    signUp
  }
})
export default class Login extends Mixins(loader) {
  account: string = "";
  password: string = "";
  signUpActive: boolean = false;

  login() {
    // this.axios().post();
  }
  signUp() {
    this.signUpActive = true;
  }
}

// export default {
//   data() {
//     return {
//       account: "",
//       password: ""
//     };
//   },
//   methods: {
//     saveAcount(e) {
//       this.account = e.target.value;
//     },
//     savePassword(e) {
//       this.password = e.target.value;
//     },
//     login() {
//       this.axios
//         .post("http://localhost:9999/api/user/login", {
//           account: this.account,
//           password: this.password
//         })
//         .then(res => {
//           if (res.data.code == 200 && res.data.msg == "success") {
//             this.$alert("登录成功", "提示", {
//               confirmButtonText: "确定",
//               callback: () => {}
//             });
//             that.dptName = "";
//             that.peopleNum = "";
//           } else {
//             this.$alert(res.data.msg, "提示", {
//               confirmButtonText: "确定"
//             });
//           }
//         });
//     },
//     signUp() {
//       this.$router.push({
//         name: "signup"
//       });
//     }
//   }
// };
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url(../assets/background.jpg);
  /* background-size: 100% 100%; */
  background-repeat: no-repeat;
  overflow: hidden;
  align-items: center;
}
.main {
  width: 100%;
  height: 400px;
}
.footer {
  margin: 20px auto;
}
.info {
  width: 500px;
}
.content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.text-style {
  font-size: 28px;
  font-weight: bold;
  color: aliceblue;
  text-align: left;
}
input::-webkit-input-placeholder {
  color: #000;
}
input:-moz-input-placeholder {
  color: #000;
}
input::-ms-input-placeholder {
  color: #000;
}
</style>
