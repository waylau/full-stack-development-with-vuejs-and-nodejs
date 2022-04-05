<template>
  <div class="news-detail">
    <n-button @click="goback()">返回</n-button>
    <n-card :title="newsDetailResult.title" embedded :bordered="false">
      <p>{{ newsDetailResult.creation }}</p>

      <md-editor v-model="newsDetailResult.content" previewOnly="true" />
    </n-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard } from "naive-ui";
import { News } from "./../news";
import axios from "axios";
import MdEditor from "md-editor-v3";

@Options({
  components: {
    NButton,
    NCard,
    MdEditor,
  },
})
export default class NewsDetail extends Vue {
  // 新闻详情页面数据
  private newsDetailResult: News = new News("", "", new Date());

  // 新闻详情API地址
  private newsApiUrl: string = "/api/news/";

  // 新闻详情主键
  private newsId: string = "";

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  // 调用API数据
  getData() {
    // 从路由参数中获取要访问的URL
    this.newsId = this.$route.params.id.toString();

    console.log("receive id: " + this.newsId);

    axios
      .get<News>(this.newsApiUrl + this.newsId)
      .then((response) => {
        this.newsDetailResult = response.data;

        console.log(this.newsDetailResult);
      })
      .catch((err) =>
        //请求失败的回调函数
        console.log(err)
      );
  }

  // 返回
  goback(): void {
    // 浏览器回退浏览记录
    this.$router.go(-1);
  }
}
</script>
