import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Place from 'page/place/place'
import Coach from 'page/coach/coach'
import Course from 'page/course/course'
import Order from 'page/order/order'
import Student from 'page/student/student'
import Schedule from 'page/schedule/schedule'
import Setting from 'page/setting/setting'
import ShowAllVenues from 'page/place/showAllVenues/show-all-venues'

Vue.use(Router)

const CreatePlace = (resolve) => {
  import('page/place/createPlace/create-place').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/place',
      name: 'Place',
      component: Place,
      children: [
        {
          path: '/place',
          component: ShowAllVenues
        },
        {
          path: '/place/edit/:id',
          component: CreatePlace
        },
        {
          path: '/place/create',
          component: CreatePlace
        }
      ]
    },
    {
      path: '/coach',
      name: 'Coach',
      component: Coach
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/student',
      name: 'Student',
      component: Student
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
