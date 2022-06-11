import { createRouter, createWebHistory } from "vue-router"
import MainLayoutVue from "../layouts/MainLayout.vue"
import ChatRoom from "../views/ChatRoom.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: MainLayoutVue,
      children: [
        {
          path: "",
          name: "chat-room",
          component: ChatRoom,
        },
      ],
    },
  ],
})

export default router
