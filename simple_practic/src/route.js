import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import TodoList from './views/TodoList.vue'

const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/list', component: TodoList }
]

export default routes
