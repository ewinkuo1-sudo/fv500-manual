---
description: '.oib 檔案格式、命名規則、資料備份與在 ImageJ/FIJI 開啟的方法'
---

# 第八章　檔案管理

::: danger 這一章的重點只有一句話
**FV500 的 Windows XP 電腦不是儲存空間，是暫存區。** 離開前沒把資料複製走，就等於沒有資料。
:::

## 8.1 .oib 檔案格式

FV500 的原生格式是 **.oib（Olympus Image Binary）**。

<svg class="fig" viewBox="0 0 720 330" role="img" aria-label="oib 檔案結構與匯出流程">
  <defs>
    <marker id="fm-ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,1.5 L9,5 L0,8.5 z" fill="var(--fig-primary)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="330" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-text)">.oib 內含什麼？該怎麼帶走？</text>
  <!-- oib 檔 -->
  <rect x="34" y="52" width="200" height="230" rx="8" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2.4"/>
  <rect x="34" y="52" width="200" height="30" rx="8" fill="var(--fig-primary)"/>
  <rect x="34" y="72" width="200" height="10" fill="var(--fig-primary)"/>
  <text x="134" y="73" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">sample.oib</text>
  <g font-size="11" fill="var(--fig-text)">
    <rect x="48" y="94" width="172" height="30" rx="5" fill="var(--fig-cyan-soft)" stroke="var(--fig-cyan)" stroke-width="1.4"/>
    <text x="58" y="114">影像資料（全部通道）</text>
    <rect x="48" y="130" width="172" height="30" rx="5" fill="var(--fig-cyan-soft)" stroke="var(--fig-cyan)" stroke-width="1.4"/>
    <text x="58" y="150">Z 層 / 時間點序列</text>
    <rect x="48" y="166" width="172" height="30" rx="5" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="1.4"/>
    <text x="58" y="186">像素尺寸 μm / pixel</text>
    <rect x="48" y="202" width="172" height="30" rx="5" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="1.4"/>
    <text x="58" y="222">物鏡 / 雷射 / PMT / Gain</text>
    <rect x="48" y="238" width="172" height="30" rx="5" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="1.4"/>
    <text x="58" y="258">擷取時間 / Z 間距</text>
  </g>
  <text x="134" y="300" text-anchor="middle" font-size="11" fill="var(--fig-green)">影像 + 完整 metadata 打包成單一檔案</text>
  <!-- 箭頭 -->
  <line x1="248" y1="130" x2="292" y2="130" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#fm-ar)"/>
  <line x1="248" y1="216" x2="292" y2="216" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#fm-ar)"/>
  <!-- 路徑 A -->
  <rect x="300" y="72" width="188" height="112" rx="8" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="2.4"/>
  <text x="394" y="96" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--fig-text)">✓ 建議：保留 .oib</text>
  <text x="314" y="120" font-size="11" fill="var(--fig-text)">原始檔完整備份</text>
  <text x="314" y="140" font-size="11" fill="var(--fig-text)">FIJI + Bio-Formats 開啟</text>
  <text x="314" y="160" font-size="11" fill="var(--fig-text)">metadata 全部保留</text>
  <text x="314" y="176" font-size="10.5" fill="var(--fig-green)">→ 可重新分析、可查參數</text>
  <!-- 路徑 B -->
  <rect x="300" y="200" width="188" height="106" rx="8" fill="var(--fig-amber-soft)" stroke="var(--fig-amber)" stroke-width="2.4"/>
  <text x="394" y="224" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--fig-text)">△ 另存：匯出 TIFF</text>
  <text x="314" y="248" font-size="11" fill="var(--fig-text)">給不能讀 .oib 的軟體</text>
  <text x="314" y="268" font-size="11" fill="var(--fig-text)">16-bit TIFF（勿用 JPEG）</text>
  <text x="314" y="288" font-size="10.5" fill="var(--fig-danger)">→ metadata 可能遺失</text>
  <!-- 備份 -->
  <line x1="500" y1="130" x2="540" y2="130" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#fm-ar)"/>
  <rect x="548" y="62" width="146" height="216" rx="8" fill="var(--fig-surface)" stroke="var(--fig-danger)" stroke-width="2.4"/>
  <text x="621" y="88" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--fig-danger)">3-2-1 備份</text>
  <line x1="562" y1="98" x2="680" y2="98" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <text x="562" y="122" font-size="11" fill="var(--fig-text)">① XP 電腦（暫存）</text>
  <text x="562" y="152" font-size="11" fill="var(--fig-text)">② 隨身碟 / 外接碟</text>
  <text x="562" y="182" font-size="11" fill="var(--fig-text)">③ 實驗室 NAS 或雲端</text>
  <line x1="562" y1="200" x2="680" y2="200" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <text x="562" y="224" font-size="10.5" fill="var(--fig-muted)">離開儀器室前完成</text>
  <text x="562" y="244" font-size="10.5" fill="var(--fig-muted)">②，當天完成 ③</text>
  <text x="562" y="268" font-size="10.5" fill="var(--fig-danger)">XP 硬碟隨時可能故障</text>
</svg>

<p class="fig-caption">圖 8-1　.oib 內容與資料帶走的路徑</p>

### .oib 的優點

- **單一檔案**包含所有通道、所有 Z 層、所有時間點。
- 完整保留 **metadata**：物鏡、像素尺寸、雷射功率、PMT 電壓、Gain、Offset、Z 間距、時間戳記。
- 是無損格式，像素值就是原始擷取值。

### .oib 的限制

- 只有 Olympus 軟體與支援 Bio-Formats 的程式能開。
- Photoshop、小畫家、一般看圖軟體**打不開**。
- 檔案可能很大（XYZT 動輒數 GB）。

::: tip 也可能看到 .oif
有些設定會存成 **.oif**：一個 `.oif` 描述檔加上一個同名資料夾裝著一堆 TIFF。**複製時務必連同資料夾一起複製**，只拷 .oif 檔會開不起來。
:::

## 8.2 匯出 TIFF

當需要把影像交給不支援 .oib 的軟體時：

1. 開啟要匯出的影像。
2. **File → Export**（或 Save As，格式選 TIFF）。
3. 選項設定：

| 選項 | 建議 |
| --- | --- |
| 位元深度 | **16-bit**（保留完整動態範圍） |
| 通道 | 分開存各通道（single channel），不要只存 Merge |
| Z-Stack | 存成 **multi-page TIFF** 或影像序列 |
| 壓縮 | **無壓縮**或 LZW（無損） |
| 燒錄比例尺 | 定量用途請**不要**燒進影像 |

4. 確認匯出後的檔案能正常開啟。

::: danger 絕對不要用 JPEG
JPEG 是**破壞性壓縮**，會產生方塊狀假影並改變像素值。用於定量分析或發表的影像**永遠不要存成 JPEG**。簡報用的截圖另存一份即可，但原始資料一定要保留 .oib 或 16-bit TIFF。
:::

## 8.3 用 ImageJ / FIJI 開啟 .oib

**FIJI**（Fiji Is Just ImageJ）已內建 Bio-Formats，是開啟 .oib 最方便的免費工具。

### 安裝

1. 到 [fiji.sc](https://fiji.sc) 下載 FIJI（Windows / macOS / Linux 皆可）。
2. 解壓縮即可執行，不需安裝。
3. Bio-Formats 已預先包含；若使用純 ImageJ，需另外安裝 Bio-Formats plugin。

### 開啟步驟

1. **Plugins → Bio-Formats → Bio-Formats Importer**。
2. 選擇 .oib 檔案。
3. 匯入選項建議：

| 選項 | 建議設定 | 原因 |
| --- | --- | --- |
| View stack with | **Hyperstack** | 通道／Z／時間分軸管理 |
| Color mode | **Composite** | 多通道彩色疊圖 |
| Autoscale | 視需要 | 定量時建議**關閉** |
| Split channels | 依需求 | 要分別處理時勾選 |
| Display metadata | 勾選 | 可查看擷取參數 |

4. 匯入後可用 **Image → Properties** 確認像素尺寸（μm/pixel）與 Z 間距是否正確帶入。

### 常用後續操作

| 需求 | 路徑 |
| --- | --- |
| 最大值投影 | Image → Stacks → Z Project → Max Intensity |
| 分割通道 | Image → Color → Split Channels |
| 合併通道 | Image → Color → Merge Channels |
| 加比例尺 | Analyze → Tools → Scale Bar |
| 量測 ROI | Analyze → Set Measurements → Measure |
| 共定位分析 | Analyze → Colocalization（或 Coloc 2） |
| 3D 檢視 | Plugins → 3D Viewer |
| 批次轉檔 | Plugins → Bio-Formats → Batch Convert |

::: tip 檢查像素尺寸
用 FIJI 量測前，先看 **Image → Properties** 的 Pixel width / height / Voxel depth。若顯示為 1 pixel 而非 μm，代表 metadata 沒帶進來，此時所有以 μm 為單位的量測都會錯。
:::

## 8.4 檔案命名建議

好的檔名可以在半年後救你一命。建議格式：

```
YYYYMMDD_樣品_標記_物鏡_條件_序號.oib
```

**範例：**

```
20260825_HeLa_Tubulin-FITC_20X_control_01.oib
20260825_HeLa_Tubulin-FITC_20X_taxol10uM_03.oib
20260825_MouseBrain_GFAP-Cy3_60Xoil_zstack_01.oib
```

> 檔名中的標記請只寫**實際以共軛焦通道擷取**的染劑。DAPI 在本機僅限目視觀察、不會出現在 .oib 資料中，寫進檔名反而誤導（見[第9章](/fluorophores)）。

### 原則

| 原則 | 說明 |
| --- | --- |
| 日期在最前面 | 用 `YYYYMMDD`，排序自然正確 |
| **只用英數字、底線、連字號** | XP 對中文與特殊字元支援不佳，跨系統易亂碼 |
| 不要有空格 | 空格在批次腳本中容易出問題 |
| 不要用 `/ \ : * ? " < > |` | 這些是非法檔名字元 |
| 序號補零 | `01, 02, …, 10`，避免 `1, 10, 2` 的排序錯亂 |
| 檔名不要超過約 60 字 | 過長的路徑在 XP 上會出錯 |

### 資料夾結構建議

```
2026-08-25_實驗名稱/
├── raw/                    ← 原始 .oib，只讀不改
│   ├── 20260825_HeLa_..._01.oib
│   └── 20260825_HeLa_..._02.oib
├── export/                 ← 匯出的 TIFF
├── analysis/               ← 分析結果、ROI、統計
└── README.txt              ← 實驗條件、擷取參數、備註
```

::: tip README.txt 該寫什麼
- 實驗日期、操作者
- 樣品來源與處理條件
- 物鏡、雷射波長與功率、PMT / Gain / Offset
- **CONFOCAL APERTURE 段位**（軟體不會記錄手動旋鈕！）
- 使用的 barrier filter 與 DM
- 任何異常狀況

**pinhole 旋鈕是手動的，metadata 裡查不到。不寫下來就永遠不知道。**
:::

## 8.5 備份策略

::: danger Windows XP 電腦的風險
- 這台電腦的硬碟已使用多年，**隨時可能故障**。
- XP 已無安全更新，若曾連網可能已有惡意程式。
- 系統當機造成檔案損毀並不罕見。
- 硬碟空間有限，管理者可能定期清空。

**永遠假設這台電腦上的資料明天就會消失。**
:::

### 3-2-1 原則

| 層級 | 內容 | 時機 |
| --- | --- | --- |
| **3 份副本** | XP 電腦 + 隨身碟 + NAS／雲端 | — |
| **2 種媒體** | 硬碟 + 網路儲存 | — |
| **1 份異地** | 實驗室外的雲端或另一棟樓的伺服器 | 當天完成 |

### 實務流程

1. **拍攝當下**：拍一張存一張到 XP 電腦的指定資料夾。
2. **離開前**：整個資料夾複製到自己的隨身碟或外接硬碟，**並實際開啟其中一個檔案確認可讀**。
3. **回到實驗室**：上傳到 NAS／雲端，確認上傳完成。
4. **一週內**：確認備份可正常開啟後，才可考慮清理 XP 電腦上的舊資料（依實驗室規定）。

::: warning 隨身碟的兩個風險
1. **病毒**：XP 電腦可能帶有隨身碟病毒。插入自己電腦前建議先掃毒，或使用唯讀模式。
2. **拔除**：務必「安全地移除硬體」再拔，直接拔可能損壞檔案。
:::

### 容量規劃參考

| 影像類型 | 單檔約略大小 | 一次實驗（30 檔） |
| --- | --- | --- |
| 512×512 單張雙通道 | 1 MB | 30 MB |
| 512×512 × 30 層雙通道 | 30 MB | 900 MB |
| 1024×1024 × 50 層雙通道 | 200 MB | 6 GB |
| XYZT（50 層 × 20 點） | 2–4 GB | 不建議一次拍 30 組 |

準備隨身碟時，建議容量至少為預估資料量的 **3 倍**。

## 8.6 資料保存年限

- 論文相關的**原始資料**建議保存 **至少 5–10 年**（依機構與期刊規定）。
- 保存的必須是**原始 .oib**，不是處理過的 JPEG。
- 一併保存 README 中的擷取參數，否則資料無法被重新驗證。
