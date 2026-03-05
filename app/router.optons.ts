import { RouterConfig } from "nuxt/schema";

export default <RouterConfig> {
  routes: (_routers) => {
    let routeList = [..._routers];

    return routeList.concat([
      {
       name: "pagenaion",
       path: "/$",
       component: () => import('@/pages/index.vue'),
      }
    ])
  }
};