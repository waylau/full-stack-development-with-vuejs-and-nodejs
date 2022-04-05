import { createRouter, createWebHashHistory } from "vue-router";

import NewsList from "./components/NewsList.vue";

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
    {
        path: "/admin",
        name: "Admin",
        // 当访问路由时，它是懒加载的
        component: () =>
            import("./components/Admin.vue"),// 后台管理
    },
];

const router = createRouter({
    history: createWebHashHistory(), // Hash模式
    routes,
});

export default router;