import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gezhe Craft Mod Wiki",
  base: "/gcmwiki/",
  description: "模组Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更新纪录: ', link: '/updates' }
    ],

    sidebar: [
      {
        text: '更新记录',
        items: [
          { text: '更新记录', link: '/updates' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dddddgz05/gcmwiki' }
    ]
  }
})
