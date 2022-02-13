<template>
  <div class="news-detail">
    <n-button @click="goback()">返回</n-button>
    <n-card title="MIT开发新型轻质材料" embedded :bordered="false">
      <p>2022-02-10 21:00</p>
      <p>
        据MIT
        News报道，麻省理工学院（MIT）的化学工程师创造了一种新材料，它比钢铁更坚固，但比塑料更轻。据悉，麻省理工学院研究人员精心制作了一种二维聚合物--一种类似单元粘合在一起的分子结构--能够自我形成片状。
      </p>
      <p>
        据MIT
        News报道，2DPA-1改进了传统塑料，因为其片状结构比防弹玻璃强六倍。此外，打破这种聚合物所需的力量是打破钢铁所需力量的两倍。
      </p>

      <img
        src="https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0210%2Fdbe58ee5j00r72dov001uc000j100bug.jpg&thumbnail=650x2147483647&quality=80&type=jpg"
      />

      <p>
        比钢铁更坚固、但比塑料更轻。总而言之，未来的电子设备可能因此而变得更加强大。
      </p>
    </n-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NButton, NCard } from "naive-ui";

@Options({
  components: {
    NButton,
    NCard,
  },
})
export default class NewsDetail extends Vue {
  // 返回
  goback(): void {
    // 浏览器回退浏览记录
    this.$router.go(-1);
  }
}
</script>
