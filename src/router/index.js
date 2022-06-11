import { createRouter, createWebHistory } from "vue-router"
import MainLayoutVue from "../layouts/MainLayout.vue"
import Login from "../views/Login.vue"
import Home from "../views/Home.vue"
import ChatRoom from "../views/ChatRoom.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "",
      component: MainLayoutVue,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
        {
          path: "/chat-room/:id",
          name: "chat-room",
          component: ChatRoom,
        },
      ],
    },
  ],
})

export default router
