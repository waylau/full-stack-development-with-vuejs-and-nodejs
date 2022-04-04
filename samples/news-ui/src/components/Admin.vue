<template>
  <p>Get data from admin: {{ adminData }}</p>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

export default class Admin extends Vue {
  // 后台管理数据
  private adminData: string = "";

  // API地址
  private apiUrl: string = "/api/admins/hi";

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  getData() {
    axios
      .get(this.apiUrl)
      .then((response) => (this.adminData = response.data))
      .catch((err) =>
        //请求失败的回调函数
        console.log(err)
      );
  }
}
</script>
