<template>
  <input v-model="markdownTitle" type="text" placeholder="输入标题" />

  <md-editor v-model="markdownContent" @onSave="submitData" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { News } from "./../news";

@Options({
  components: {
    MdEditor,
  },
})
export default class Admin extends Vue {
  // 后台管理数据
  private adminData: string = "";

  // 编辑器标题
  private markdownTitle: string = "";

  // 编辑器内容
  private markdownContent: string = "";

  // API地址
  private apiUrl: string = "/api/admins/hi";

  // 创建新闻
  private createNewsUrl: string = "/api/admins/news";

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

  // 提交新闻内容到后台
  submitData() {
    axios
      .post(
        this.createNewsUrl,
        new News(this.markdownTitle, this.markdownContent, new Date())
      )
      .then(function (response) {
        console.log(response);
        alert("已经成功提交");
      })
      .catch(function (error) {
        console.log(error);
        alert("提交失败");
      });
  }
}
</script>
