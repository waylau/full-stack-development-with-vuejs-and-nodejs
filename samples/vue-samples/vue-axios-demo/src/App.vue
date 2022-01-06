<template>
  <div>
    <!-- 使用v-for遍历数组 -->
    <h1>人员集合：</h1>
    <ul>
      <li v-for="people in peopleArray" :key="people">
        {{ people.name }} {{ people.age }} {{ people.homePage }}
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import axios from "axios";

export default class App extends Vue {
  // 人员信息列表
  private peopleArray: any[] = [];

  // API地址
  private apiUrl:string = "https://waylau.com/data/people.json";

  // 初始化时就要获取数据
  mounted() {
    this.getData();
  }

  getData() {
    axios
      .get(this.apiUrl)
      .then((response) => (this.peopleArray = response.data));
  }

}
</script>
