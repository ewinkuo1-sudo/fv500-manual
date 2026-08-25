---
description: 'FLUOVIEW v5.0 軟體介面各區域說明：通道設定、掃描參數、PMT 與 CONFOCAL APERTURE'
---

# 第四章　FLUOVIEW v5.0 軟體介面

FLUOVIEW v5.0 執行於 Windows XP，是 FV500 唯一的控制介面。以下依畫面區域逐一說明。

## 4.1 介面總覽

<svg class="fig" viewBox="0 0 760 640" role="img" aria-label="FLUOVIEW v5.0 軟體介面標註圖（依實機畫面重繪）">
  <rect x="0" y="0" width="760" height="640" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- 視窗外框 -->
  <rect x="24" y="28" width="712" height="580" rx="8" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="2"/>
  <rect x="24" y="28" width="712" height="24" rx="8" fill="var(--fig-primary)"/>
  <rect x="24" y="44" width="712" height="8" fill="var(--fig-primary)"/>
  <text x="40" y="45" font-size="12.5" font-weight="600" fill="#ffffff">FLUOVIEW  v. 5.0</text>
  <g fill="#ffffff" opacity="0.85">
    <rect x="686" y="34" width="10" height="10" rx="2"/>
    <rect x="702" y="34" width="10" height="10" rx="2"/>
    <rect x="718" y="34" width="10" height="10" rx="2"/>
  </g>
  <!-- ① 選單列（實機順序） -->
  <rect x="32" y="58" width="696" height="22" rx="4" fill="var(--fig-primary-soft)" stroke="var(--fig-primary)" stroke-width="1.6"/>
  <g font-size="10.5" fill="var(--fig-text)">
    <text x="44" y="73">Acquire</text>
    <text x="102" y="73">File I/O</text>
    <text x="158" y="73">Display</text>
    <text x="216" y="73">Process</text>
    <text x="274" y="73">Analysis</text>
    <text x="334" y="73">Visualize</text>
    <text x="396" y="73">Tools</text>
    <text x="440" y="73">Window</text>
    <text x="498" y="73">Help</text>
  </g>
  <circle cx="700" cy="69" r="11" fill="var(--fig-danger)"/>
  <text x="700" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">1</text>
  <!-- 工具列與狀態列 -->
  <rect x="32" y="84" width="696" height="18" rx="3" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <g fill="var(--fig-line)" opacity="0.55">
    <rect x="38" y="87" width="12" height="12" rx="2"/><rect x="56" y="87" width="12" height="12" rx="2"/><rect x="74" y="87" width="12" height="12" rx="2"/><rect x="92" y="87" width="12" height="12" rx="2"/><rect x="110" y="87" width="12" height="12" rx="2"/><rect x="128" y="87" width="12" height="12" rx="2"/><rect x="146" y="87" width="12" height="12" rx="2"/><rect x="164" y="87" width="12" height="12" rx="2"/><rect x="182" y="87" width="12" height="12" rx="2"/><rect x="200" y="87" width="12" height="12" rx="2"/><rect x="218" y="87" width="12" height="12" rx="2"/><rect x="236" y="87" width="12" height="12" rx="2"/>
  </g>
  <text x="36" y="116" font-size="9.5" fill="var(--fig-muted)">Current Selected Display: FLUOVIEW (Unlocked)</text>
  <!-- [Acquire] 面板（左側控制欄） -->
  <rect x="32" y="124" width="222" height="478" rx="6" fill="var(--fig-bg)" stroke="var(--fig-primary)" stroke-width="1.8"/>
  <!-- ③ 掃描按鈕：XY Repeat / Once / Focus（Auto 為顯示縮放） -->
  <rect x="40" y="132" width="66" height="20" rx="4" fill="var(--fig-green)"/>
  <text x="73" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">XY Repeat</text>
  <rect x="110" y="132" width="50" height="20" rx="4" fill="var(--fig-primary)"/>
  <text x="135" y="146" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">Once</text>
  <rect x="164" y="132" width="50" height="20" rx="4" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.3"/>
  <text x="189" y="146" text-anchor="middle" font-size="9.5" fill="var(--fig-text)">Focus</text>
  <rect x="164" y="156" width="50" height="16" rx="4" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="189" y="168" text-anchor="middle" font-size="9" fill="var(--fig-muted)">Auto</text>
  <circle cx="236" cy="142" r="11" fill="var(--fig-danger)"/>
  <text x="236" y="147" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">3</text>
  <!-- ② 通道設定（PMT / Gain / Offset 直立滑桿，每通道一組） -->
  <rect x="40" y="178" width="206" height="96" rx="4" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-opacity="0.7"/>
  <rect x="48" y="186" width="9" height="9" rx="2" fill="var(--fig-green)"/>
  <text x="62" y="194" font-size="9.5" fill="var(--fig-text)">FITC（依通道染劑顯示）</text>
  <rect x="230" y="186" width="9" height="9" rx="2" fill="var(--fig-surface)" stroke="var(--fig-line)"/>
  <g font-size="9" fill="var(--fig-muted)" text-anchor="middle">
    <text x="78" y="210">PMT</text><text x="128" y="210">Gain</text><text x="182" y="210">Offset</text>
  </g>
  <rect x="72" y="214" width="12" height="42" rx="2" fill="var(--fig-line)" fill-opacity="0.25"/>
  <rect x="72" y="228" width="12" height="28" rx="2" fill="var(--fig-green)"/>
  <rect x="122" y="214" width="12" height="42" rx="2" fill="var(--fig-line)" fill-opacity="0.25"/>
  <rect x="122" y="240" width="12" height="16" rx="2" fill="var(--fig-green)"/>
  <rect x="176" y="214" width="12" height="42" rx="2" fill="var(--fig-line)" fill-opacity="0.25"/>
  <rect x="176" y="246" width="12" height="10" rx="2" fill="var(--fig-green)"/>
  <g font-size="9" fill="var(--fig-text)" text-anchor="middle">
    <text x="78" y="268">550v</text><text x="128" y="268">1.0x</text><text x="182" y="268">6%</text>
  </g>
  <circle cx="236" cy="222" r="11" fill="var(--fig-danger)"/>
  <text x="236" y="227" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">2</text>
  <!-- ④ Series Scans + Scan Modes -->
  <text x="40" y="288" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Series Scans</text>
  <rect x="40" y="292" width="44" height="18" rx="3" fill="var(--fig-amber)"/>
  <text x="62" y="305" text-anchor="middle" font-size="9.5" font-weight="700" fill="#ffffff">XY</text>
  <rect x="88" y="292" width="44" height="18" rx="3" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="110" y="305" text-anchor="middle" font-size="9.5" fill="var(--fig-text)">XYT</text>
  <rect x="136" y="292" width="44" height="18" rx="3" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="158" y="305" text-anchor="middle" font-size="9.5" fill="var(--fig-text)">XYZ</text>
  <rect x="184" y="292" width="44" height="18" rx="3" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="206" y="305" text-anchor="middle" font-size="9" fill="var(--fig-text)">XYZT</text>
  <text x="40" y="326" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Scan Modes</text>
  <circle cx="47" cy="336" r="4" fill="var(--fig-primary)"/>
  <text x="57" y="340" font-size="9.5" fill="var(--fig-text)">Surface　XY-Norm</text>
  <text x="57" y="354" font-size="8.5" fill="var(--fig-muted)">Normal / Fast / ZoomIn</text>
  <circle cx="47" cy="366" r="4" fill="none" stroke="var(--fig-muted)" stroke-width="1.3"/>
  <text x="57" y="370" font-size="9.5" fill="var(--fig-muted)">Line　XT-Norm</text>
  <circle cx="47" cy="380" r="4" fill="none" stroke="var(--fig-muted)" stroke-width="1.3"/>
  <text x="57" y="384" font-size="9.5" fill="var(--fig-muted)">Depth　XZ</text>
  <circle cx="47" cy="394" r="4" fill="none" stroke="var(--fig-muted)" stroke-width="1.3"/>
  <text x="57" y="398" font-size="9.5" fill="var(--fig-muted)">Point</text>
  <circle cx="241" cy="300" r="11" fill="var(--fig-danger)"/>
  <text x="241" y="305" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">4</text>
  <!-- ⑤ Scan Size / Pan / Zoom / Scan Speed -->
  <text x="40" y="416" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Scan Size</text>
  <rect x="102" y="404" width="120" height="16" rx="3" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="110" y="416" font-size="9.5" fill="var(--fig-text)">512 by 512　▾</text>
  <text x="40" y="438" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Pan</text>
  <g fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2">
    <rect x="58" y="444" width="16" height="14" rx="2"/>
    <rect x="42" y="458" width="14" height="14" rx="2"/>
    <rect x="58" y="458" width="16" height="14" rx="2"/>
    <rect x="76" y="458" width="14" height="14" rx="2"/>
    <rect x="58" y="472" width="16" height="14" rx="2"/>
  </g>
  <text x="150" y="438" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Zoom</text>
  <circle cx="172" cy="462" r="17" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.4"/>
  <line x1="172" y1="462" x2="172" y2="448" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="200" y="466" font-size="9" fill="var(--fig-text)">×1.0</text>
  <text x="40" y="500" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Scan Speed</text>
  <text x="40" y="514" font-size="8.5" fill="var(--fig-muted)">Fast</text>
  <line x1="64" y1="511" x2="190" y2="511" stroke="var(--fig-line)" stroke-width="2"/>
  <circle cx="100" cy="511" r="4.5" fill="var(--fig-primary)"/>
  <text x="196" y="514" font-size="8.5" fill="var(--fig-muted)">Slow</text>
  <text x="40" y="528" font-size="8.5" fill="var(--fig-muted)">0.44 s/Scan　0.44 s/Image</text>
  <circle cx="236" cy="410" r="11" fill="var(--fig-danger)"/>
  <text x="236" y="415" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">5</text>
  <!-- ⑦ Objective（含 Use C.A 建議段位） -->
  <text x="40" y="544" font-size="9.5" font-weight="700" fill="var(--fig-muted)">Objective</text>
  <rect x="40" y="548" width="206" height="18" rx="3" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.2"/>
  <text x="46" y="561" font-size="9.5" fill="var(--fig-text)">UPLAPO 20X　　Use C.A 1　▾</text>
  <circle cx="236" cy="540" r="11" fill="var(--fig-danger)"/>
  <text x="236" y="545" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">7</text>
  <!-- ⑥ Z 控制 -->
  <text x="40" y="581" font-size="9.5" font-weight="700" fill="var(--fig-purple)">Z</text>
  <g font-size="8.5" fill="var(--fig-text)">
    <text x="54" y="581">Stop/Start Z [Set]　Pos [Set Zero]</text>
    <text x="54" y="595">Step 50.0 μm　Ideal 1:1 : 2.762 μm</text>
  </g>
  <circle cx="238" cy="584" r="11" fill="var(--fig-danger)"/>
  <text x="238" y="589" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">6</text>
  <!-- ⑧ 影像顯示視窗（[Live] 面板） -->
  <rect x="262" y="124" width="466" height="478" rx="6" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.6"/>
  <rect x="262" y="124" width="466" height="20" rx="6" fill="var(--fig-primary)"/>
  <rect x="262" y="136" width="466" height="8" fill="var(--fig-primary)"/>
  <text x="274" y="139" font-size="10.5" font-weight="600" fill="#ffffff">FLUOVIEW (Unlocked)</text>
  <g fill="#ffffff" opacity="0.85">
    <rect x="692" y="128" width="8" height="8" rx="1.5"/>
    <rect x="704" y="128" width="8" height="8" rx="1.5"/>
    <rect x="716" y="128" width="8" height="8" rx="1.5"/>
  </g>
  <rect x="266" y="148" width="458" height="450" fill="#0b1120" stroke="var(--fig-cyan)" stroke-width="1.6"/>
  <g opacity="0.9">
    <ellipse cx="430" cy="300" rx="46" ry="32" fill="#16a34a" opacity="0.55"/>
    <circle cx="428" cy="298" r="12" fill="#4ade80"/>
    <ellipse cx="560" cy="400" rx="52" ry="36" fill="#16a34a" opacity="0.5"/>
    <circle cx="558" cy="398" r="13" fill="#4ade80"/>
    <ellipse cx="480" cy="490" rx="40" ry="28" fill="#dc2626" opacity="0.5"/>
    <circle cx="478" cy="488" r="10" fill="#f87171"/>
    <ellipse cx="600" cy="240" rx="36" ry="25" fill="#dc2626" opacity="0.45"/>
    <circle cx="598" cy="238" r="9" fill="#f87171"/>
  </g>
  <text x="278" y="170" font-size="10" fill="#94a3b8">[Live]　512 × 512　Zoom 1.0　CH1+CH2 Merge</text>
  <line x1="630" y1="574" x2="700" y2="574" stroke="#ffffff" stroke-width="3"/>
  <text x="665" y="566" text-anchor="middle" font-size="10" fill="#ffffff">20 μm</text>
  <circle cx="712" cy="168" r="11" fill="var(--fig-danger)"/>
  <text x="712" y="173" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">8</text>
  <text x="24" y="630" font-size="10.5" fill="var(--fig-muted)">※ 依實機螢幕照片與原廠手冊重繪；細部版面依安裝模組略有差異，以現場軟體為準。</text>
</svg>

<p class="fig-caption">圖 4-1　FLUOVIEW v5.0 主畫面區域標註（依實機畫面與原廠手冊重繪）</p>

## 4.2 ① 選單列

FLUOVIEW 的「選單」實際上是**功能面板（function panel）的切換器**：點選後，對應的控制面板會顯示出來。實機順序如下：

| 選單 | 主要內容 |
| --- | --- |
| **Acquire** | 掃描擷取主面板：通道／雷射／掃描模式；右下 page tabs 的 **[Settings] 子面板**內含 Kalman 等設定 |
| **File I/O** | 影像**儲存（.oib）**、開啟、刪除——存檔在這裡，不是 File → Save As |
| **Display** | 影像顯示方式：縮放（Auto / 3:1–1:3）、通道切換、Merge |
| **Process** | 影像處理：Math、Filters（Smooth / Median 等）、Histogram、Experiment Editor |
| **Analysis** | 量化分析：Single（強度／長度／面積）、Series（時間強度變化） |
| **Visualize** | 3D 重建與投影、動畫輸出 |
| **Tools** | 其他工具與系統設定 |
| **Window / Help** | 視窗排列／線上說明 |

::: tip Hi-Lo LUT 的入口
Hi-Lo 不在選單裡，而是**畫面左下工具列的 `<LUT>` 按鈕** → [Color Tool] 對話框 → [Standard Color LUTs] → **Hi-Lo**（0 顯示藍色、最大值顯示紅色）。
:::

## 4.3 ② 通道設定區

這是**影像品質的關鍵區域**。每個啟用的通道各有一組 **PMT / Gain / Offset 直立滑桿**，數值顯示在滑桿下方（如 `550v`、`1.0x`、`6%`）。

| 項目 | 說明 | 建議 |
| --- | --- | --- |
| **通道啟用** | 勾選要使用的通道（依染劑名稱顯示，如 FITC） | 只用一個通道時關掉另一個，減少雜訊與檔案大小 |
| **PMT** | 光電倍增管高壓（v），主要亮度／靈敏度控制 | **400–600 V** 起；見下方原廠建議 |
| **Gain** | 亮度的倍率放大（顯示為 ×倍率，如 1.0x） | 原廠手冊：**PMT 拉到 800 V 仍不夠亮時，才用 Gain 補**，效果通常比 PMT 超過 800 V 好 |
| **Offset** | 依比例壓暗影像（%），控制背景黑度 | 調到背景剛好變黑，勿調過頭 |
| **Laser %** | 雷射輸出百分比 | 從 **5–15 %** 起試，能低就低 |
| **DM** | 偵測分光鏡 Mirror / DM570 / DM630 | 依染劑組合選擇 |
| **Sequential** | 依序掃描開關 | 多染劑串色時開啟 |

::: warning PMT 電壓的正確用法
- **建議工作範圍 400–600 V**，這區間訊噪比最佳（實驗室經驗值）。
- 電壓越高顆粒狀雜訊越明顯；訊號不足時**優先提高雷射功率或放大 pinhole**。
- 原廠手冊：到 **800 V** 仍不夠亮時，改用 **Gain** 放大，通常比繼續拉高 PMT 效果好。
- 入光過強或電壓過高時，軟體會跳出 **PMT Over** 保護警告——此時請調低 PMT 電壓。
- 掃描結束、換樣品前，習慣把 PMT 降回低值，避免下一次開掃時強光打進高壓 PMT。
:::

::: danger PMT 保護
**切勿在 PMT 高壓開啟、且明視野燈全亮的狀態下掃描。** 強白光打進高壓 PMT 可能造成永久損傷。開明視野前，先把 PMT 電壓降到最低或停止掃描。
:::

### PMT / Gain / Offset 三者的分工

| 想解決的問題 | 該調的參數 |
| --- | --- |
| 整張太暗 | 先加雷射功率 → 再加 PMT |
| 整張太亮／飽和 | 降雷射功率 → 降 PMT |
| 背景灰灰的不夠黑 | 調高 Offset（一點點就好） |
| 訊號有但對比不足 | 微調 Gain，或用 Display 的 LUT |
| 影像顆粒很粗 | 降 PMT、開 Kalman 平均、放大 pinhole |

## 4.4 ③ 掃描按鈕

| 按鈕 | 作用 | 何時用 |
| --- | --- | --- |
| **XY Repeat**（F2） | 連續重複掃描，即時預覽 | 對焦、找視野、調參數 |
| **Once**（F3，Scan Once） | 依目前掃描模式正式掃描一次（含 Kalman 平均） | 正式取像 |
| **Focus**（F4） | 低解析度快速掃描 | 快速對焦，減少光漂白 |
| **Stop Scan**（F7） | 停止掃描 | 隨時可按 |
| **Auto** | 顯示縮放（Auto / 3:1–1:3），屬影像顯示功能 | 調整 Live 影像顯示大小 |

::: tip 減少光漂白的習慣
調參數時用 **Focus** 或 **XY Repeat 搭配低雷射功率**，確定構圖後再把功率調到正式值、按 **Once** 拍一張。長時間掛著 XY Repeat 會把樣品照到褪色。
:::

## 4.5 ④ 掃描模式（Series Scans 與 Scan Modes）

面板上分成兩層設定：

**Series Scans**（掃描維度）：

| 按鈕 | 全名 | 產出 |
| --- | --- | --- |
| **XY** | 單張平面掃描 | 一張二維影像 |
| **XYT** | 時間序列 | 同一平面的縮時影像 |
| **XYZ** | Z-Stack | 沿光軸的一疊切片 |
| **XYZT** | 四維 | 每個時間點一整疊 Z |

**Scan Modes**（掃描方式）：

| 選項 | 說明 |
| --- | --- |
| **Surface XY-Norm** | 一般平面掃描；下方可再選 Normal / Fast / ZoomIn |
| **Line XT-Norm** | 沿一條線的高速時間掃描（Line scan） |
| **Depth XZ** | 垂直切面掃描（XZ） |
| **Point** | 定點強度隨時間變化 |

詳見 [第6章 進階掃描模式](/advanced-scan)。

## 4.6 ⑤ 掃描參數區

| 參數 | 位置／形式 | 說明 |
| --- | --- | --- |
| **Scan Size** | 下拉選單（256 by 256 / 512 by 512 / 1024 by 1024） | 512 為常用值；1024 適合出圖但慢 4 倍 |
| **Scan Speed** | Fast ↔ Slow 滑桿，下方顯示 s/Scan、s/Image | 越慢訊號越強、雜訊越低，但光漂白越多 |
| **Zoom** | 旋鈕（×1 起） | 光學放大掃描區域，同時提升像素解析度 |
| **Pan** | 十字方向鍵 | Zoom 後移動取樣位置，不必移動載物台 |
| **Kalman** | Acquire 面板右下 page tabs → **[Settings] 子面板** → [Filter Mode] | 選 Kalman（或 Accumulate To Peak）並輸入平均次數；3 次為常用值 |

其餘細項（掃描方向、旋轉等）以現場軟體為準。

## 4.7 ⑥ Z 控制區

| 欄位 | 說明 |
| --- | --- |
| **Start Z / Stop Z**（各有 Set 鈕） | Z-Stack 的起點與終點，以目前焦點位置按 Set 設定 |
| **Current Pos / Set Zero** | 目前 Z 位置；Set Zero 可歸零 |
| **Step Size** | 每層間距（μm） |
| **Slices** | 自動換算的層數（Start↔Stop 與 Step 三者連動） |
| **Ideal 1:1** | 軟體依物鏡與 aperture 建議的取樣間距（如 2.762 μm），設定 Step 時可參考 |

## 4.8 ⑦ 物鏡選擇

軟體中選的物鏡**必須與實際轉盤上的物鏡一致**，否則：

- 比例尺（scale bar）會標錯。
- 建議 Z 間距與最佳 pinhole 值會算錯。
- 影像的像素尺寸（μm/pixel）記錄錯誤，後續量化全部失準。

Objective 下拉選單旁會顯示「**Use C.A n**」——這是軟體依所選物鏡建議的 CONFOCAL APERTURE 段位，請把掃描頭旋鈕轉到該數字（見 [4.10 節](#confocal-aperture)）。

::: warning 換物鏡的兩個動作
1. 轉盤實體切換到定位。
2. 軟體下拉選單同步改成同一顆物鏡。

**兩件事都要做。**
:::

## 4.9 ⑧ 影像顯示區

- 即時影像顯示在 **[Live] 面板**（視窗標題顯示 FLUOVIEW (Unlocked)），可切換單通道／Merge 疊圖。
- 滑鼠移動時通常會顯示該點的座標與灰階值，可用來判斷是否飽和（本機 PMT 為 12-bit，上限 **4095**）。
- 支援 ROI 框選，供後續 Analysis 使用。

## 4.10 CONFOCAL APERTURE 旋鈕（硬體） {#confocal-aperture}

pinhole 在 FV500 上是**掃描頭前面板的手動旋鈕**；軟體不直接控制它，但會在 Objective 旁以「**Use C.A n**」顯示目前物鏡的建議段位——原廠的標準流程就是**把旋鈕轉到軟體顯示的數字**。

<div class="tip custom-block">

**操作要點**

1. 起始請轉到軟體顯示的建議值（Use C.A n）；不確定時轉 **3**。
2. 原廠手冊提示：若 [Live] 完全沒有影像，可先**把段位加大 1** 換取亮度來找訊號，找到後再轉回。
3. 訊號足夠時，往 **2 → 1** 轉，可得到更薄的光學切片與更好的 Z 解析度。
3. 訊號太弱時，往 **4 → 5** 轉，犧牲切片厚度換取亮度。
4. **同一組實驗（尤其是要互相比較的樣品）中途不可更動 pinhole**，否則無法比較強度。
5. 每次掃描前確認旋鈕確實卡在段位上，不要停在兩段中間。

</div>

| 段位 | Pinhole 大小 | 光學切片 | 訊號 | 適用 |
| --- | --- | --- | --- | --- |
| 1 | 最小 | 最薄 | 最弱 | 強訊號、追求解析度 |
| 2 | 小 | 薄 | 較弱 | 高品質影像 |
| 3 | 中 | 中 | 中 | **建議起始值** |
| 4 | 大 | 厚 | 強 | 訊號偏弱 |
| 5 | 最大 | 最厚 | 最強 | 極弱訊號、快速定位 |

## 4.11 透射光 / DIC 通道

FV500 配有**透射光偵測器（TD, Transmitted light Detector）**，可與螢光通道同步擷取明視野或 DIC 影像，把螢光訊號疊在細胞形態上。

1. 開啟 **LG-PS2 鹵素燈電源**（亮度旋鈕由 MIN 逐步調亮）。
2. 在 FLUOVIEW 的通道設定區啟用 **TD 通道**。
3. TD 通道可與 CH1 / CH2 **同時擷取**，不佔用螢光通道。

::: warning 與 PMT 保護原則並用
開啟明視野光源時，請遵守上方「PMT 保護」注意事項：先降低螢光通道 PMT 電壓或停止掃描，再調亮鹵素燈，避免強白光直射高壓 PMT。
:::

## 4.12 常用快捷鍵（原廠手冊 Hot Keys）

| 按鍵 | 效果 |
| --- | --- |
| **F1** | 線上說明 |
| **F2** | XY Repeat（連續掃描） |
| **F3** | Once（Scan Once，單次掃描） |
| **F4** | Focus（快速對焦掃描） |
| **F7** | Stop Scan（停止掃描） |
| F6 | Append Next（系列擷取後追加下一張） |
| Ctrl + M / Ctrl + O | 降低／提高掃描速度 |
| 在影像上拖曳 | 畫出 ROI |
| 滑鼠停在像素上 | 顯示座標與強度值 |

::: tip 存檔紀律
FLUOVIEW v5.0 執行於 Windows XP，**當機不算罕見**。養成「拍一張存一張」的習慣，不要累積十幾張才存。
:::
