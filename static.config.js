import axios from 'axios'

export default {
  getSiteProps: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://oco54fa0od.execute-api.eu-central-1.amazonaws.com/stage/work/')
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        path: '/about',
        component: 'src/pages/About',
      },
      {
        path: '/skills',
        component: 'src/pages/Skills',
      },
      {
        path: '/music',
        component: 'src/pages/Music',
      },
      {
        path: '/work',
        component: 'src/pages/Works',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/${post.slug}`,
          component: 'src/pages/Work',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  }
}
