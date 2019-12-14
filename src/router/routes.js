function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  { path: '/', name: 'welcome', component: page('Home.vue') },
  { path: '/about', name: 'about', component: page('About.vue') },


  { path: '*', component: page('errors/404.vue') }
]
