import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gezhe Craft Mod Wiki",
  base: "/gcmwiki/",
  description: "GCM Wiki Gezhe Craft Mod Wiki 歌者 MINECRAFTdddddgz ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '更新纪录', link: '/updates' },
      { text: '方块', link: '/' }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    sidebar: [
      {
        text: '更新记录',
        items: [
          { text: '更新记录', link: '/updates' }
        ]
      },
      {
        text: '方块',
        items: [
          { text: '聊天方块', link: '/block/chat_block' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dddddgz05/gezhecraftmod' },
      { icon: ''}
    ]
  }
})
