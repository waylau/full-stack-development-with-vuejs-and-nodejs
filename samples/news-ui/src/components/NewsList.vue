<template>
  <n-list>
    <n-list-item v-for="item in newsData" :key="item.title">
      <div>
        <router-link :to="'/news/' + item._id">{{ item.title }}</router-link>
      </div>
    </n-list-item>
  </n-list>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NList, NListItem } from "naive-ui";
import axios from "axios";
import { News } from "./../news";

@Options({
  components: {
    NList,
    NListItem,
  },
})
export default class NewsList extends Vue {
  // API地址
  private newsListUrl: string = "/api/news";

  private newsData: News[] = [];

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  getData() {
    axios
      .get<News[]>(this.newsListUrl)
      .then((response) => {
        this.newsData = response.data;
      })
      .catch((err) =>
        //请求失败的回调函数
        console.log(err)
      );
  }
}
</script>
