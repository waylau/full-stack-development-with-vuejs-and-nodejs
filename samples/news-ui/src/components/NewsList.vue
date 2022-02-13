<template>
  <n-list>
    <n-list-item v-for="item in newsData" :key="item.title">
      <div>
        <router-link :to="'/news/' + item.id">{{ item.title }}</router-link>
      </div>
    </n-list-item>
  </n-list>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NList, NListItem } from "naive-ui";

@Options({
  components: {
    NList,
    NListItem,
  },
})
export default class NewsList extends Vue {
  private newsData: any[] = [
    { id: "1", title: "这张冬奥大合影弥足珍贵" },
    { id: "2", title: "人类应该和衷共济和合共生" },
    { id: "3", title: "中国队3朵金花携手晋级决赛" },
    { id: "4", title: "骗子也来蹭冰墩墩的热度了" },
    { id: "5", title: "猎豹摄像机跑得比运动员还快" },
    { id: "6", title: "劳斯莱斯欢庆女神迎来重新设计" },
    { id: "7", title: "Android开始全面转向64位运算" },
    { id: "8", title: "英伟达GPU采用5nm工艺" }
  ];
}
</script>
