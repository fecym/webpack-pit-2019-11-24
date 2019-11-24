/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-06-08 13:23:30
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-06-08 13:23:30
 */
export default {
  path: '/user',
  // component: Layout,
  redirect: '/user/info',
  meta: { title: '用户管理', icon: 'user-mgt' },
  children: [
    {
      path: 'user-info',
      name: 'userInfo',
      // component: () => import(/* webpackChunkName: "userInfo" */ '@/views/user/userInfo.vue'),
      meta: { title: '个人设置', icon: 'settings', showParent: true }
    },
    {
      path: 'account-mgt',
      name: 'account-mgt',
      // component: () => import(/* webpackChunkName: "account-mgt" */ '@/views/user/account-mgt.vue'),
      meta: { title: '账户管理', icon: 'user', roles: [2] }
    }
  ]
}
