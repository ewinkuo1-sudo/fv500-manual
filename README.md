# Olympus FV500 共軛焦顯微鏡使用說明書

Olympus FluoView FV500 共軛焦雷射掃描顯微鏡的**中文使用說明書**，以 [VitePress](https://vitepress.dev) 建置，含 SVG 向量圖解，支援亮／暗色模式與全文搜尋。

## 內容

| 章節 | 內容 |
| --- | --- |
| 第 1 章 | 系統概述（共軛焦原理、光路圖） |
| 第 2 章 | 系統組成（架構連接圖、背板接埠） |
| 第 3 章 | 開關機程序（流程圖、緊急處理） |
| 第 4 章 | FLUOVIEW v5.0 軟體介面 |
| 第 5 章 | 基本掃描操作（六步驟） |
| 第 6 章 | 進階掃描模式（Z-Stack / XYT / XYZT） |
| 第 7 章 | 影像處理與分析 |
| 第 8 章 | 檔案管理（.oib、FIJI、備份） |
| 第 9 章 | 常用螢光染劑（光譜對照） |
| 第 10 章 | 日常維護 |
| 第 11 章 | 故障排除 |
| 附錄 | 名詞對照表、快速參考卡 |

## 實機配置

- 顯微鏡本體：Olympus **IX71** 倒立式研究顯微鏡
- 掃描頭：Olympus FluoView（手動 CONFOCAL APERTURE 旋鈕 1–5 段）
- 偵測通道：CH1 + CH2（可抽換 barrier filter）
- 偵測分光鏡：Mirror / DM570 / DM630
- 電源供應器：Olympus **FV5-PSU**（鑰匙開關 + ON/OFF）
- 雷射：HeNe 543 nm、HeNe 633 nm（Class 3B），選配 Ar 488 nm
- 透射光源：Olympus **LG-PS2** 鹵素燈電源
- 控制軟體：**FLUOVIEW v. 5.0**（Windows XP）
- 物鏡：UPLAPO 20X 等
- 安裝環境：光學防震桌（麵包板式）

## 本地開發

```bash
npm install
npm run docs:dev      # 開發伺服器
npm run docs:build    # 產生靜態網站至 docs/.vitepress/dist
npm run docs:preview  # 預覽建置結果
```

## 部署

推送到 `main` 分支後，由 GitHub Actions 自動建置並發布到 GitHub Pages。

## 免責聲明

本說明書依實機配置編寫，供實驗室內部教學與操作參考使用。**如與現場設備或原廠文件不符，請以現場設備與 Olympus 原廠手冊為準。**
