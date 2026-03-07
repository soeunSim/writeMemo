import type { RouterConfig } from "nuxt/schema";

export default <RouterConfig> {
  routes: (_routers) => {
    let routeList = [..._routers];

    return routeList.concat([
      {
        name: "pagenaion",
        path: "/memo/:page",
        component: () => import('@/pages/memo/index.vue'),
      }
    ])
  }
};