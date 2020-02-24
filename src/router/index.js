import Vue from 'vue'
import Router from 'vue-router'
import Test1 from '@/components/test1'
import homePage from '@/pages/home-pages/home-page'

Vue.use(Router)

/**
 * @author xusy
 * @creed: 这里用来设置页面的路由，以后这里要加过滤器，拦截器等等，现在先这么做
 * @date 2020/2/24 20:29
 */
/* eslint-disable */
export default new Router({
  /**
   * history —— 利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法。（需要特定浏览器支持）这两个方法应用于浏览器的历史记录栈，
   * 在当前已有的 back、forward、go 的基础之上，它们提供了对历史记录进行修改的功能。只是当它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
   * */
  // mode: 'history', // 不适用hash模式（无#号）
  mode: 'hash', // hash模式
  /**
   * hash —— 即地址栏 URL 中的 # 符号。比如这个 URL：http://www.abc.com/#/hello hash 的值为 #/hello。它的特点在于：hash 虽然出现在 URL 中，
   * 但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。
   */
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: homePage
    },
    {
      path: '/test1',
      name: 'test1',
      component: Test1
    },
    {
      path: '/home-page',
      name: 'home-page',
      component: homePage
    }
  ]
})
