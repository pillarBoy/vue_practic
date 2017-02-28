import App from '../App'
import NavPage from '../components/navComponent/NavComponent'
import HomePage from '../pages/homePage/HomePage'
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
        component: HomePage,
        // component: resolve => require(['../pages/HomePage'], resolve),
        children: [
          {
            path: 'all',
            component: resolve => require(['../components/TopicAll'], resolve)
          },
          {
            path: 'good',
            component: resolve => require(['../components/TopicGood'], resolve)
          },
          {
            path: 'share',
            component: resolve => require(['../components/TopicShare'], resolve)
          },
          {
            path: 'ask',
            component: resolve => require(['../components/TopicAsk'], resolve)
          },
          {
            path: 'job',
            component: resolve => require(['../components/TopicJob'], resolve)
          }
        ]
      },
      {
        path: '/topic/:vid', // topic detail
        name: 'name',
        meta: { auth: false },
        component: resolve => require(['../pages/topicDetail/TopicDetail'], resolve)
      }
    ]
  }
]
