import Vue from 'vue'
import Router from 'vue-router'
import vue002 from '@/components/vue002'
import vue001 from '@/components/vue001'
import vue003 from '@/components/vue003'
import vue004 from '@/components/vue004'
import vue005 from '@/components/vue005'
import daochuexcel from '@/components/daochuexcel'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'vue001', component: vue001},
    {path: '/vue002', name: 'vue002', component: vue002},
    {path: '/vue004', name: 'vue004', component: vue004},
    {path: '/vue003', name: 'vue003', component: vue003},
    {path: '/vue005', name: 'vue005', component: vue005},
    {path: '/daochuexcel', name: 'daochuexcel', component: daochuexcel}
  ]
})
