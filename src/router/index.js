/*
 * @Author: xiatian
 * @Date: 2020-05-25 19:46:35
 * @LastEditors: xiatian
 * @LastEditTime: 2020-05-26 20:25:29
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '主页', isAuth:true },
    redirect: '/welcome',
    component: Layout,
    hidden:true,
		children: [
			{
				path: '/welcome',
				component: () => import('../views/welcome.vue'),
				name: 'welcome',
				meta: { title: '欢迎加入PinkHUB', isAuth:true }
			},
		]
  },
  {
		path: '/picture',
		component: Layout,
    redirect: '/JapanesePic',
    meta: { title: '图片', isAuth:true },
    name: 'picture',
		children: [
			{
				path: '/JapanesePic',
				component: () => import('../views/picture/JapanesePic.vue'),
				name: 'JapanesePic',
				meta: { title: '日本图片', isAuth:true }
			},
		]
	},
  {
		path: '',
		component: Layout,
		// redirect: '/property',
		meta: { title: '外链资源', icon: 'icon-fabu' },
		children: [
			{
        waiLian:true,
				path: 'http://www.tor01.com/fhs/',
				meta: { title: '番号大全', isAuth:false}
			},
			{
        waiLian:true,
				path: 'http://www.okfanhao.com/xiqueziyuan/',
				meta: { title: '番号库', isAuth:false}
			},
			{
        waiLian:true,
				path: 'http://www.btdad.cloud/',
				meta: { title: 'BTdad', isAuth:false}
			},
			{
        waiLian:true,
				path: 'https://javleak.com/',
				meta: { title: 'japanese Porn', isAuth:false}
			},
			{
        waiLian:true,
				path: 'https://www.xiacoo.com/stype/btcili/',
				meta: { title: '虾库', isAuth:false}
			},
		]
  },
  {
		path: '/movies',
		component: Layout,
		redirect: '/movies',
		meta: { title: '电影' },
		// disabled:true,
		children: [
			{
				path: '/JapaneseMov',
				name: 'JapaneseMov',
				component: () => import('../views/movies/JapaneseMov'),
				meta: { title: '日本电影' , isAuth:false},
				hidden: true
			},
			{
				path: '/ChineseMov',
				name: 'ChineseMov',
				component: () => import('../views/movies/ChineseMov'),
				meta: { title: '国产电影',  isAuth:false},
				hidden: true
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
