const birdSidebar = [
    { text: "Anhinga", link: "/birds/anhinga"},
    { text: "Black-chinned Hummingbird", link: "/birds/blackchinnedhummingbird"},
    { text: "Blue Jays", link: "/birds/bluejay"},
    { text: "Anhinga", link: "/birds/anhinga"},
    { text: "Cliff Swallow", link: "/birds/cliffswallow"},
    { text: "Redhead", link: "/birds/redhead"},
    { text: "White-breasted Nuthatch", link: "/birds/whitebreastednuthatch"},
];

module.exports = {
    title: "Katie's Bird Site",
    description: 'My world of birds.', //Website description
    lang: "en-US",
    //base: "/",
    base: '/katiebirds/', //  The default path during deployment / secondary address / base can be used/
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
      repo: 'boothr/katiebirds/', // Your github warehouse address will jump in the upper right corner of the page
      //   Head navigation
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Birds', link: '/birds/' },
      ],
      sidebar: {
          "/birds/": birdSidebar,
      },
      //   Side navigation
    //   sidebar: [
    //     { text: 'my', link: '/mine/' }
    //   ]
    }
  }