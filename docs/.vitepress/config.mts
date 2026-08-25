import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-lists'

export default defineConfig({
  title: 'Olympus FV500 使用說明書',
  description: 'FluoView FV500 共軛焦雷射掃描顯微鏡操作指南',
  lang: 'zh-TW',
  base: '/fv500-manual/',
  head: [
    ['link', { rel: 'icon', href: '/fv500-manual/favicon.svg' }]
  ],
  markdown: {
    config: (md) => {
      md.use(taskLists, { enabled: true, label: true })
    }
  },
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '快速參考', link: '/quick-reference' }
    ],
    sidebar: [
      {
        text: '使用說明書',
        items: [
          { text: '第1章 系統概述', link: '/overview' },
          { text: '第2章 系統組成', link: '/components' },
          { text: '第3章 開關機程序', link: '/power' },
          { text: '第4章 軟體介面', link: '/software' },
          { text: '第5章 基本掃描操作', link: '/basic-scan' },
          { text: '第6章 進階掃描模式', link: '/advanced-scan' },
          { text: '第7章 影像處理與分析', link: '/image-processing' },
          { text: '第8章 檔案管理', link: '/file-management' },
          { text: '第9章 常用螢光染劑', link: '/fluorophores' },
          { text: '第10章 日常維護', link: '/maintenance' },
          { text: '第11章 故障排除', link: '/troubleshooting' },
        ]
      },
      {
        text: '附錄',
        items: [
          { text: '名詞對照表', link: '/glossary' },
          { text: '快速參考卡', link: '/quick-reference' },
        ]
      }
    ],
    outline: {
      label: '本頁目錄',
      level: [2, 3]
    },
    search: {
      provider: 'local',
      options: {
        // 讓中文可以被正確斷詞（預設只依空白切分，中文會搜不到）
        miniSearch: {
          options: {
            tokenize: (text: string) =>
              Array.from(
                new Intl.Segmenter('zh-TW', { granularity: 'word' }).segment(text),
                (s: any) => s.segment
              ).filter((t: string) => t.trim().length > 0),
            processTerm: (term: string) => term.toLowerCase()
          },
          searchOptions: {
            combineWith: 'AND',
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: { buttonText: '搜尋文件', buttonAriaLabel: '搜尋文件' },
          modal: {
            noResultsText: '找不到相關結果',
            resetButtonTitle: '清除搜尋條件',
            displayDetails: '顯示詳細內容',
            footer: { selectText: '選擇', navigateText: '切換', closeText: '關閉' }
          }
        }
      }
    },
    docFooter: {
      prev: '上一頁',
      next: '下一頁'
    },
    darkModeSwitchLabel: '外觀',
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    lastUpdatedText: '最後更新',
    footer: {
      message: '本說明書根據實機配置編寫，如有不符請依現場設備為準',
    }
  }
})
