/*
 * @Description:
 * @Author: chengyuming
 * @Date: 2019-06-09 22:10:12
 * @LastEditors: chengyuming
 * @LastEditTime: 2019-11-09 17:20:32
 */
export default {
  path: '/daily',
  redirect: '/daily/list',
  meta: { title: '消费管理', icon: 'expend' },
  children: [
    {
      path: 'list',
      name: 'daily-list',
      meta: { title: '消费记录', icon: 'daily', showParent: true }
    },
    // {
    //   path: 'details-old',
    //   name: 'daily-details-old',
    //   component: () => import(/* webpackChunkName: "daily-details-old" */ '@/views/daily/details-old.vue'),
    //   meta: { title: '消费详情', hidden: true }
    // },
    {
      path: 'details',
      name: 'daily-details',
      meta: { title: '消费详情', hidden: true }
    },
    {
      path: 'monthly',
      name: 'monthly-statistics',
      meta: { title: '按月统计', icon: 'daily', roles: [2] }
    }
    // monthly-statistics
  ]
}
