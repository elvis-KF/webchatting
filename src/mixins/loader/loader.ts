import axios, { AxiosResponse } from "axios"
import { Component, Vue } from "vue-property-decorator";
import qs from "qs";
import { result } from "lodash";
export const interfaces = {

}

@Component({
  name: "loader"
})
class Loader extends Vue {
  get(type: string, param: object): Promise<AxiosResponse> {
    const path = this.getInterface(type) as string;

    return new Promise((resolve, reject) => {
      axios
        .get(path, {
          params: {
            ...param
          }
        })
        .then((response: any) => {
          resolve(response);
        })
        .catch((error: Error) => {
          this.$alert("网络异常，请稍后再试", "系统提示", {
            confirmButtonText: "知道了"
          })
          reject(error);
        });
    });
  }

  postForm(
    type: string,
    formData: FormData,
    config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  ) {
    const path = this.getInterface(type) as string;

    return new Promise((resolve, reject) => {
      axios
        .post(path, formData, config)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  post(type: string, param: object, config = {}) {
    const path = this.getInterface(type) as string;
    const data = qs.stringify(param);

    return new Promise((resolve, reject) => {
      axios
        .post(path, data, config)
        .then(response => {
          resolve(response);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  }

  errorHandler(opt: any) {
    if (typeof opt === "object" && this.$alert) {
      this.$message({
        message: opt.msg || "接口异常，请稍候再试!",
        duration: opt.duration || 3000
      });
    } else {
      window.console.error("Interface Error!");
    }
  }

  getInterface (type: string) {
    let res = result(interfaces, type)
    if (!res) {
        throw new Error(
            `type:${type}错误，找不到类型为${type}的interface,请check接口是否存在。`
        )
    }
    return res
  }
}
export default Loader