import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
		meta: {
			title: '破破',
		},
	},
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

// 路由守卫 - 只保留基础的标题设置
router.beforeEach(to => {
	// 设置页面标题
	if (to.meta.title) {
		document.title = `${to.meta.title}`
	}
})

export default router
