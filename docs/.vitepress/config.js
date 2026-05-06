import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/claude-code-verilog/',
  lang: 'zh-CN',
  title: 'Claude Code × Verilog',
  description: '使用 Claude Code 进行 Verilog 开发的完全指南',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: '心得笔记', link: '/notes/' },
      { text: 'Clock Gate 演示', link: 'https://wangxiayuan.github.io/claude-code-verilog/clock_gate_demo.html' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '使用指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '基础工作流', link: '/guide/basic-workflow' },
            { text: 'Verilog 提示词技巧', link: '/guide/verilog-prompting' },
            { text: '高级技巧', link: '/guide/advanced' },
          ]
        }
      ],
      '/notes/': [
        {
          text: '心得笔记',
          items: [
            { text: '所有笔记', link: '/notes/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'CC BY-SA 4.0'
    }
  }
})
