module.exports = {
    title: "Katie's Bird Site",
    description: 'My world of birds.', //Website description
    lang: "en-US",
    base: "/",
    //base: '/katiebirds/dist/', //  The default path during deployment / secondary address / base can be used/
    // Lang: 'en US', / / language
    // Page header configuration, icon, css, js
    head: [
      // Change the icon of the title
//      [
    //     'link',
    //     {
    //       rel: 'icon',
    //       href: '/img/linktolink.png',//The pictures are placed in the public folder
    //     },
    //   ],
    ],
    // Theme configuration
    themeConfig: {
      repo: 'vuejs/vitepress', // Your github warehouse address will jump in the upper right corner of the page
      //   Head navigation
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Birds', link: '/birds/' },
      ],
      //   Side navigation
    //   sidebar: [
    //     { text: 'my', link: '/mine/' }
    //   ]
    }
  }