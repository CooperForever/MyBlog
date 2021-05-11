
module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.jpg",
    nav: [
      { text: "Js", link: "/js/" },
      { text: "计算机基础", link: "/computer/" },
      { text: "Vue", link: "/vue/" },
      { text: "React", link: "/react/" },
      { text: "工程化", link: "/webpack/" },
      { text: "leetcode", link: "/algorithm/" },
      { text: "Github", link: "https://github.com/CooperForever" },
    ],
    sidebar: {
      "/computer/": ["", "DNS"],
      "/webpack/": ["", "webpack"],
      "/vue/": [""],
      "/react/": [""],
      "/js/": [""],
      "/algorithm/": [""],

    },
    lastUpdated: '上次更新：', 
  },
};
