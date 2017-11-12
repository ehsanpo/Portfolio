import React from 'react'
import axios from 'axios'
import { Html, Head, Body, children } from 'react-static'


export default {
  siteRoot:"http://ehsan-pourhadi.com",
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
      <title>Ehsan Pourhadi - E.P. - Web Developer / Music Producer / Problem Solver</title>
      <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
      <meta name="description" content="I’m Ehsan Pourhadi, A web developer, Graphic designer and Producer from Iran providing digital solutions. I'm Based In Malmö, Sweden."/>
      <meta name="keywords" content="Ehsan, Ehsan Pourhadi,next generation design,skapar hemsidor, gör hemsida,Front-End Design,Mobile development,freelancer from Malmö"/>
      <meta name="author" content="Ehsan Pourhadi"/>
      <meta name="Robots" content="INDEX,FOLLOW" />
      <meta name="Revisit-after" content="31 Days" />
      <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteProps: () => ({
    title: 'Ehsan Pourhadi - E.P. - Web Developer / Music Producer / Problem Solver',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://oco54fa0od.execute-api.eu-central-1.amazonaws.com/stage/work/')
    const { data: skills } = await axios.get('https://oco54fa0od.execute-api.eu-central-1.amazonaws.com/stage/skills/')
    const { data: pages } = await axios.get('https://oco54fa0od.execute-api.eu-central-1.amazonaws.com/stage/pages/')
    const AboutPage = pages.find(c => c.slug === 'about');
    const HomePage =  pages.find(c => c.slug === 'home');
    const MusicPage =  pages.find(c => c.slug === 'music');
    const SkillsPage =  pages.find(c => c.slug === 'skills');

    return [
      {
        path: '/',
        component: 'src/pages/Home',
        getProps: () => ({
          HomePage,
        }),
      },
      {
        path: '/about',
        component: 'src/pages/About',
        getProps: () => ({
          AboutPage,
        }),
      },
      {
        path: '/skills',
        component: 'src/pages/Skills',
        getProps: () => ({
          skills,
          SkillsPage,
        }),
      },
      {
        path: '/music',
        component: 'src/pages/Music',
        getProps: () => ({
          MusicPage,
        }),
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
