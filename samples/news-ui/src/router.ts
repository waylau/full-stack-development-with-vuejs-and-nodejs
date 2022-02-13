import { createRouter, createWebHashHistory } from "vue-router";

import NewsList from "./components/NewsList.vue";
import NewsDetail from "./components/NewsDetail.vue";

const routes: Array<any> = [
    {
        path: "/",
        name: "NewsList",
        component: NewsList,
    },
    {
        path: "/news/:id",
        name: "NewsDetail",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/NewsDetail.vue"),
    },

];

const router = createRouter({
    history: createWebHashHistory(), // Hash模式
    routes,
});

export default router;