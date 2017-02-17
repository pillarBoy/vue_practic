import App from '../App'
import NavPage from '../components/NavPage'

export default [
  {
    path: '/',
    components: {
      default: App,
      nav: NavPage
    },
    // component: App,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { auth: false },
        component: resolve => require(['../pages/HomePage'], resolve)
      },
      {
        path: '/topic/:vid', // topic detail
        name: 'name',
        meta: { auth: false },
        component: resolve => require(['../pages/topicDetail'], resolve)
      }
    ]
  }
]
