/*
 * File: config.js
 * Project: router
 * File Created: Monday, 2nd July 2018 3:15:56 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Sunday, 8th July 2018 2:06:58 am
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 */
export default {
  name: "kamino",
  job: "*",
  address: "CN",
  rss: "https://blog.aikamino.cn/feed",
  email: "kamino@imea.me",
  contact: {
    qq: 1019728153,
    telegram: "aikamino",
    email: "kamino@imea.me"
  },
  pixivId: 16126035, //pixiv id
  pixivProxy: "https://api.pixiv.moe/v2/image/?url={url}", // pixiv 图片代理地址, 如果没有代理服务器请填写 `https://api.pixiv.moe/v2/image/`
  pixivSanityLevel: 5, // 分级, 默认为5
  blogUrl: "https://blog.aikamino.cn", // 博客链接
  defaultCover: "https://blog.aikamino.cn/wp-content/uploads/2018/05/pnf.jpg", // 文章默认头图
  blogSearchUrl: "https://blog.aikamino.cn/?s={keyword}", // 博客搜索链接, {keyword} 为关键字
  navLinks: [
    // 导航链接, 建议放 5 个
    {
      name: "主页",
      link: "./"
    },
    {
      name: "官网",
      link: "https://www.aikamino.cn"
    },
    {
      name: "博客",
      link: "https://blog.aikamino.cn"
    },
    {
      name: "云服务",
      link: "https://cloud.aikamino.cn"
    },
    {
      name: "研究所",
      link: "https://www.isdut.cn"
    },
    {
      name: "GitHub",
      link: "https://github.com/kamino-space"
    }
  ],
  wyyyyId: 497107364, // 网易云音乐用户 ID
  playlistId: 746315839, // 播放的歌单 ID
  linksData: "https://blog.aikamino.cn/wp-json/wp/v2/links", // 友情链接数据接口
  linksUrl: "https://blog.aikamino.cn/links", // 友情链接页面地址
  bilibiliId: 16011372, // bilibili 用户ID
  bilibiliProxy: "https://api.isdut.cn/proxy/cn?url={url}", // bilibili 图片代理地址
  githubUserName: "kamino-space",
  twitterId: 'aikamino',
  modules: {
    // 功能开关
    posts: true,
    pixiv: false,
    bangumi: true,
    music: true,
    friends: true,
    twitter: false
  },
  home: "posts", // 首页默认模块, 请务必选择已开启的模块
  catchTime: 86400000 // 数据缓存的时间(毫秒)
};
