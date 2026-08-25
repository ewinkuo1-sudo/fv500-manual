---
layout: home

hero:
  name: Olympus FV500
  text: 共軛焦顯微鏡使用說明書
  tagline: FluoView FV500 共軛焦雷射掃描顯微鏡 · IX71 倒立式本體 · FLUOVIEW v5.0 中文操作指南
  actions:
    - theme: brand
      text: 開始閱讀
      link: /overview
    - theme: alt
      text: 快速參考卡
      link: /quick-reference

features:
  - icon: 🔬
    title: 光學切片
    details: 透過 pinhole 濾除焦平面外的雜散螢光，取得高對比、低背景的單層光學切片影像，不需物理切片即可觀察樣品內部。
  - icon: 🎨
    title: 多通道螢光
    details: CH1 / CH2 雙通道搭配 543nm、633nm HeNe 雷射（及選配 488nm Ar 雷射），可同時或依序擷取多種螢光標記。
  - icon: 🧊
    title: Z-Stack 三維重建
    details: 沿光軸逐層掃描堆疊影像，配合 3D Projection 與 Maximum Projection 重建樣品立體結構。
  - icon: ⏱️
    title: 時間序列
    details: XYT / XYZT 模式可進行縮時觀察，記錄活細胞動態、鈣離子訊號變化與分子運輸過程。
description: 'Olympus FluoView FV500 共軛焦雷射掃描顯微鏡中文使用說明書'
---

## 關於本說明書

本說明書針對 **Olympus FluoView FV500** 共軛焦雷射掃描顯微鏡系統撰寫，內容依照實驗室現場實機配置編寫：

| 項目 | 實機配置 |
| --- | --- |
| 顯微鏡本體 | Olympus **IX71** 倒立式研究顯微鏡 |
| 掃描頭 | Olympus FluoView 掃描單元（前面板含手動 CONFOCAL APERTURE 旋鈕） |
| 偵測通道 | CH1 + CH2（各含可抽換 barrier filter 插槽） |
| 偵測分光鏡 | Mirror / DM570 / DM630 |
| 電源供應器 | Olympus **FV5-PSU**（鑰匙開關 + ON/OFF） |
| 雷射光源 | HeNe 543nm（綠）、HeNe 633nm（紅）、選配 Ar 488nm |
| 透射光源 | Olympus **LG-PS2** 鹵素燈電源 |
| 控制軟體 | **FLUOVIEW v. 5.0**（Windows XP） |
| 物鏡 | UPLAPO 20X 等 |
| 安裝環境 | 光學防震桌（麵包板式） |

::: tip 第一次使用？
建議依序閱讀 [第1章 系統概述](/overview) → [第2章 系統組成](/components) → [第3章 開關機程序](/power) → [第4章 軟體介面](/software) → [第5章 基本掃描操作](/basic-scan)（第5章大量使用第4章的介面名詞，如 Channel Setting、Hi-Lo LUT、Kalman）。
熟悉之後，日常操作只要看 [快速參考卡](/quick-reference) 即可。
:::

::: danger 雷射安全警告
本系統含 **Class 3B 雷射**。切勿在雷射開啟時移除光路護罩、直視物鏡出光口，或將反光物品（手錶、戒指、金屬工具）置於光路上。
:::

::: info 參考資料
軟體操作細節已對照實機畫面與 Olympus 原廠手冊交叉驗證：[FLUOVIEW FV300 User's Manual（原廠 PDF，與 FV500 同一套 FLUOVIEW 軟體）](https://biochimie.umontreal.ca/wp-content/uploads/sites/37/2015/07/FV300UsersManual_E.pdf)、[FV500 User Manual（ManualsLib）](https://www.manualslib.com/manual/895974/Olimpus.html)。如有出入，以現場設備與原廠文件為準。
:::
