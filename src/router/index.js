import { createRouter, createWebHashHistory } from 'vue-router'
import {
	Home,
	Login,
	Register,
	ArticleDetail,
	CreateArticle,
	EditArticle,
	Profile,
	EmptyCard
} from '@/views'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
		{
			path: '/article/:slug',
			name: 'article-detail',
			component: ArticleDetail,
		},
		{
			path: '/create-article',
			name: 'create-article',
			component: CreateArticle,
		},
		{
			path: '/edit-article/:slug',
			name: 'edit-article',
			component: EditArticle,
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
		},
		{
			path: '/empty-card',
			name: 'empty-card',
			component: EmptyCard,
		},
	]
})

export default router
