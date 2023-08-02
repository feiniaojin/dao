export default {
  title: "大道之行",
  description: "读书笔记",
  base: "/dao/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/feiniaojin/dao" },
    ],
    footer: {
      copyright: "Copyright © 2020-present Qin Yujie",
    },
    nav: [
      {
        text: "大道之行",
        link: "/0/0.0.md",
        activeMatch: "/",
      },
      {
        text: "悟道DDD",
        link: "http://ddd.feiniaojin.com/",
      }
    ],
    sidebar: [
      {
        items: [
          {
            text: "README",
            link: "/0/0.0",
          },
        ],
      },
      {
        text: "前言",
        collapsible: true,
        items: [
          {
            text: "作者简介",
            link: "/0/author",
          },
          {
            text: "全文导读",
            link: "/0/0.3",
          },
        ],
      },
      {
        text: "楞严经",
        collapsible: true,
        items: [
          {
            text: "卷一",
            link: "/LengYanJing/卷一",
          },
          {
            text: "卷二",
            link: "/LengYanJing/卷二",
          },
        ],
      },
      {
        text: "药师经",
        collapsible: true,
        items: [
          {
            text: "药师经",
            link: "/2/2.1",
          }
        ],
      },
      {
        text: "金刚经",
        collapsible: true,
        items: [
          {
            text: "金刚经",
            link: "/3/3.1",
          }
        ],
      },
      {
        text: "地藏经",
        collapsible: true,
        items: [
          {
            text: "金刚经",
            link: "/4/4.1",
          }
        ],
      },
      {
        text: "易经",
        collapsible: true,
        items: [
          {
            text: "易经",
            link: "/5/5.1",
          }
        ],
      },
      {
        text: "道德经",
        collapsible: true,
        items: [
          {
            text: "道德经",
            link: "/6/6.1",
          }
        ],
      }
    ],
  },
};
