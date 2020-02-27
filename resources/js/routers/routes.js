import Foo from '../components/Foo'
import Bar from '../components/Bar'
import Login from '../components/Login'
import HomePage from '../components/HomePage'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/login', component: Login },
  { path: '/home', component: HomePage }
]

export default routes
