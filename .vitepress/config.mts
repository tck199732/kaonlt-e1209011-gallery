import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "KaonLT E1209011 Gallery",
  description: "gallery of applied cuts on kaon LT data for e12-09-011 campaign at jlab",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PID', link: '/src/pid' },
    ],

    sidebar: [
      {
        text: 'PID',
        items: [
            {
                text : 'Q4p4_W2p74',
                items : [
                    { text: 'Q4p4_W2p74_left_lowe', link: '/src/pid/Q4p4_W2p74_left_lowe' },
                    { text: 'Q4p4_W2p74_center_lowe', link: '/src/pid/Q4p4_W2p74_center_lowe' },
                    { text: 'Q4p4_W2p74_left_highe', link: '/src/pid/Q4p4_W2p74_left_highe' },
                    { text: 'Q4p4_W2p74_center_highe', link: '/src/pid/Q4p4_W2p74_center_highe' },
                    { text: 'Q4p4_W2p74_right_highe', link: '/src/pid/Q4p4_W2p74_right_highe' }
                ]
            },
            {
                text : 'Q3p0_W2p32',
                items : [
                    { text: 'Q3p0_W2p32_left_lowe', link: '/src/pid/Q3p0_W2p32_left_lowe' },
                    { text: 'Q3p0_W2p32_center_lowe', link: '/src/pid/Q3p0_W2p32_center_lowe' },
                    { text: 'Q3p0_W2p32_left_highe', link: '/src/pid/Q3p0_W2p32_left_highe' },
                    { text: 'Q3p0_W2p32_center_highe', link: '/src/pid/Q3p0_W2p32_center_highe' },
                    { text: 'Q3p0_W2p32_right_highe', link: '/src/pid/Q3p0_W2p32_right_highe' }
                ]
            },
            {
                text : 'Q3p0_W3p14',
                items : [
                    { text: 'Q3p0_W3p14_left_lowe', link: '/src/pid/Q3p0_W3p14_left_lowe' },
                    { text: 'Q3p0_W3p14_center_lowe', link: '/src/pid/Q3p0_W3p14_center_lowe' },
                    { text: 'Q3p0_W3p14_left_highe', link: '/src/pid/Q3p0_W3p14_left_highe' },
                    { text: 'Q3p0_W3p14_center_highe', link: '/src/pid/Q3p0_W3p14_center_highe' },
                    { text: 'Q3p0_W3p14_right_highe', link: '/src/pid/Q3p0_W3p14_right_highe' }
                ]
            }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://https://github.com/tck199732/kaonlt-e1209011-gallery' }
    ]
  },

  markdown: {
    math: true
  }
})

