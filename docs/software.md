---
description: 'FLUOVIEW v5.0 軟體介面各區域說明：通道設定、掃描參數、PMT 與 CONFOCAL APERTURE'
---

# 第四章　FLUOVIEW v5.0 軟體介面

FLUOVIEW v5.0 執行於 Windows XP，是 FV500 唯一的控制介面。以下依畫面區域逐一說明。

## 4.1 介面總覽

<svg class="fig" viewBox="0 0 760 540" role="img" aria-label="FLUOVIEW v5.0 軟體介面標註圖">
  <rect x="0" y="0" width="760" height="540" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- 視窗外框 -->
  <rect x="24" y="34" width="712" height="470" rx="8" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="2"/>
  <rect x="24" y="34" width="712" height="26" rx="8" fill="var(--fig-primary)"/>
  <rect x="24" y="52" width="712" height="8" fill="var(--fig-primary)"/>
  <text x="40" y="52" font-size="12.5" font-weight="600" fill="#ffffff">FLUOVIEW  v. 5.0  —  Olympus FV500</text>
  <g fill="#ffffff" opacity="0.85">
    <rect x="686" y="42" width="10" height="10" rx="2"/>
    <rect x="702" y="42" width="10" height="10" rx="2"/>
    <rect x="718" y="42" width="10" height="10" rx="2"/>
  </g>
  <!-- ① 選單列 -->
  <rect x="32" y="66" width="696" height="26" rx="4" fill="var(--fig-primary-soft)" stroke="var(--fig-primary)" stroke-width="1.6"/>
  <g font-size="11" fill="var(--fig-text)">
    <text x="46" y="83">File</text>
    <text x="90" y="83">Edit</text>
    <text x="134" y="83">Acquire</text>
    <text x="198" y="83">Display</text>
    <text x="260" y="83">Process</text>
    <text x="326" y="83">Analysis</text>
    <text x="394" y="83">Visualize</text>
    <text x="464" y="83">Window</text>
    <text x="530" y="83">Help</text>
  </g>
  <circle cx="702" cy="79" r="12" fill="var(--fig-danger)"/>
  <text x="702" y="84" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">1</text>
  <!-- ② 通道設定區 -->
  <rect x="32" y="100" width="184" height="196" rx="6" fill="var(--fig-bg)" stroke="var(--fig-primary)" stroke-width="1.8"/>
  <text x="44" y="118" font-size="11.5" font-weight="700" fill="var(--fig-primary)">Channel Setting</text>
  <line x1="42" y1="124" x2="206" y2="124" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <g font-size="10.5" fill="var(--fig-text)">
    <rect x="42" y="132" width="10" height="10" rx="2" fill="var(--fig-green)"/>
    <text x="58" y="141">CH1　FITC　BA510-540</text>
    <text x="58" y="158">PMT</text>
    <rect x="96" y="150" width="104" height="9" rx="4" fill="var(--fig-primary-soft)"/>
    <rect x="96" y="150" width="58" height="9" rx="4" fill="var(--fig-primary)"/>
    <text x="58" y="175">Gain 1.0　Offset 5%</text>
    <rect x="42" y="188" width="10" height="10" rx="2" fill="var(--fig-danger)"/>
    <text x="58" y="197">CH2　TRITC　BA575IF</text>
    <text x="58" y="214">PMT</text>
    <rect x="96" y="206" width="104" height="9" rx="4" fill="var(--fig-primary-soft)"/>
    <rect x="96" y="206" width="70" height="9" rx="4" fill="var(--fig-primary)"/>
    <text x="58" y="231">Gain 1.2　Offset 4%</text>
    <text x="42" y="253">Laser　543 nm　30%</text>
    <text x="42" y="271">DM　DM570</text>
    <text x="42" y="289">Sequential　☐ Off</text>
  </g>
  <circle cx="204" cy="112" r="12" fill="var(--fig-danger)"/>
  <text x="204" y="117" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">2</text>
  <!-- ③ 掃描按鈕 -->
  <rect x="32" y="304" width="184" height="80" rx="6" fill="var(--fig-bg)" stroke="var(--fig-green)" stroke-width="1.8"/>
  <rect x="44" y="316" width="76" height="26" rx="5" fill="var(--fig-green)"/>
  <text x="82" y="333" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">XY Repeat</text>
  <rect x="128" y="316" width="76" height="26" rx="5" fill="var(--fig-primary)"/>
  <text x="166" y="333" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">XY Once</text>
  <rect x="44" y="350" width="76" height="24" rx="5" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.4"/>
  <text x="82" y="366" text-anchor="middle" font-size="10.5" fill="var(--fig-text)">Focus x2</text>
  <rect x="128" y="350" width="76" height="24" rx="5" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.4"/>
  <text x="166" y="366" text-anchor="middle" font-size="10.5" fill="var(--fig-text)">Stop</text>
  <circle cx="204" cy="316" r="12" fill="var(--fig-danger)"/>
  <text x="204" y="321" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">3</text>
  <!-- ⑥ Z 控制區 -->
  <rect x="32" y="392" width="184" height="100" rx="6" fill="var(--fig-bg)" stroke="var(--fig-purple)" stroke-width="1.8"/>
  <text x="44" y="410" font-size="11.5" font-weight="700" fill="var(--fig-purple)">Z Section</text>
  <g font-size="10.5" fill="var(--fig-text)">
    <text x="44" y="430">Start Z　　−12.0 μm</text>
    <text x="44" y="448">Stop Z 　　+12.0 μm</text>
    <text x="44" y="466">Step Size　  1.0 μm</text>
    <text x="44" y="484">Slices 　　　　  25</text>
  </g>
  <circle cx="204" cy="404" r="12" fill="var(--fig-danger)"/>
  <text x="204" y="409" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">6</text>
  <!-- ④ 掃描模式標籤 -->
  <rect x="226" y="100" width="326" height="28" rx="5" fill="var(--fig-bg)" stroke="var(--fig-amber)" stroke-width="1.8"/>
  <rect x="234" y="105" width="52" height="18" rx="4" fill="var(--fig-amber)"/>
  <text x="260" y="118" text-anchor="middle" font-size="10.5" font-weight="700" fill="#ffffff">XY</text>
  <g font-size="10.5" fill="var(--fig-text)">
    <text x="316" y="118" text-anchor="middle">XYZ</text>
    <text x="372" y="118" text-anchor="middle">XYT</text>
    <text x="430" y="118" text-anchor="middle">XYZT</text>
    <text x="486" y="118" text-anchor="middle">XZ</text>
    <text x="532" y="118" text-anchor="middle">Line</text>
  </g>
  <circle cx="540" cy="98" r="12" fill="var(--fig-danger)"/>
  <text x="540" y="103" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">4</text>
  <!-- ⑧ 影像顯示區 -->
  <rect x="226" y="136" width="326" height="356" rx="6" fill="#0b1120" stroke="var(--fig-cyan)" stroke-width="1.8"/>
  <g opacity="0.9">
    <ellipse cx="320" cy="230" rx="42" ry="30" fill="#16a34a" opacity="0.55"/>
    <circle cx="318" cy="228" r="12" fill="#4ade80"/>
    <ellipse cx="430" cy="300" rx="50" ry="34" fill="#16a34a" opacity="0.5"/>
    <circle cx="428" cy="298" r="13" fill="#4ade80"/>
    <ellipse cx="352" cy="380" rx="38" ry="28" fill="#dc2626" opacity="0.5"/>
    <circle cx="350" cy="378" r="10" fill="#f87171"/>
    <ellipse cx="466" cy="196" rx="34" ry="24" fill="#dc2626" opacity="0.45"/>
    <circle cx="464" cy="194" r="9" fill="#f87171"/>
  </g>
  <text x="238" y="158" font-size="10.5" fill="#94a3b8">512 × 512　Zoom 1.0　CH1+CH2 Merge</text>
  <line x1="470" y1="474" x2="540" y2="474" stroke="#ffffff" stroke-width="3"/>
  <text x="505" y="466" text-anchor="middle" font-size="10" fill="#ffffff">20 μm</text>
  <circle cx="540" cy="152" r="12" fill="var(--fig-danger)"/>
  <text x="540" y="157" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">8</text>
  <!-- ⑤ 掃描參數 -->
  <rect x="562" y="100" width="166" height="196" rx="6" fill="var(--fig-bg)" stroke="var(--fig-cyan)" stroke-width="1.8"/>
  <text x="574" y="118" font-size="11.5" font-weight="700" fill="var(--fig-cyan)">Scan Setting</text>
  <line x1="572" y1="124" x2="718" y2="124" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <g font-size="10.5" fill="var(--fig-text)">
    <text x="574" y="142">Scan Size　512 × 512</text>
    <text x="574" y="162">Speed　　  4.0 μs/pix</text>
    <text x="574" y="182">Kalman　　  3 次平均</text>
    <text x="574" y="202">Zoom　　　　　1.0×</text>
    <text x="574" y="222">Rotation　　　　0°</text>
    <text x="574" y="242">Scan Dir.　　One Way</text>
    <text x="574" y="262">Pan X / Y　　  0 / 0</text>
    <text x="574" y="284">LUT　　　  Hi-Lo ☑</text>
  </g>
  <circle cx="716" cy="112" r="12" fill="var(--fig-danger)"/>
  <text x="716" y="117" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">5</text>
  <!-- ⑦ 物鏡選擇 -->
  <rect x="562" y="304" width="166" height="80" rx="6" fill="var(--fig-bg)" stroke="var(--fig-green)" stroke-width="1.8"/>
  <text x="574" y="322" font-size="11.5" font-weight="700" fill="var(--fig-green)">Objective</text>
  <rect x="574" y="330" width="142" height="24" rx="4" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.4"/>
  <text x="584" y="346" font-size="10.5" fill="var(--fig-text)">UPLAPO 20X　NA 0.70　▾</text>
  <text x="574" y="372" font-size="10" fill="var(--fig-muted)">像素大小 0.62 μm　WD 0.55 mm</text>
  <circle cx="716" cy="316" r="12" fill="var(--fig-danger)"/>
  <text x="716" y="321" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">7</text>
  <!-- 狀態列 -->
  <rect x="562" y="392" width="166" height="100" rx="6" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-width="1.4"/>
  <text x="574" y="410" font-size="11" font-weight="700" fill="var(--fig-muted)">Status</text>
  <g font-size="10" fill="var(--fig-muted)">
    <text x="574" y="430">Laser 543　Ready</text>
    <text x="574" y="448">Laser 633　Ready</text>
    <text x="574" y="466">Scanner　　Idle</text>
    <text x="574" y="484">Free disk　12.4 GB</text>
  </g>
  <text x="24" y="524" font-size="11" fill="var(--fig-muted)">※ 實際版面依安裝模組略有差異，區塊位置以現場軟體為準。</text>
</svg>

<p class="fig-caption">圖 4-1　FLUOVIEW v5.0 主畫面區域標註</p>

## 4.2 ① 選單列

| 選單 | 主要內容 |
| --- | --- |
| **File** | 開新檔、開啟、儲存（.oib）、匯出 TIFF、列印、離開 |
| **Edit** | 複製影像、貼上、影像屬性、參數複製 |
| **Acquire** | 掃描設定、雷射控制、通道設定、Sequential Scan、Time Course |
| **Display** | LUT／偽色、Hi-Lo、亮度對比、疊圖（Merge）、分割顯示 |
| **Process** | 濾波（Smooth / Median / Sharpen）、背景扣除、去雜訊 |
| **Analysis** | Line Profile、ROI 統計、Histogram、共定位、時間強度曲線 |
| **Visualize** | 3D Projection、Maximum Projection、動畫輸出、切面重組 |
| **Window** | 影像視窗排列與切換 |
| **Help** | 版本資訊與說明 |

## 4.3 ② 通道設定區

這是**影像品質的關鍵區域**。

| 項目 | 說明 | 建議 |
| --- | --- | --- |
| **通道啟用** | 勾選 CH1 / CH2 | 只用一個通道時關掉另一個，減少雜訊與檔案大小 |
| **染劑／濾片** | 顯示目前 barrier filter | 需與實際插入的濾片一致 |
| **PMT（HV）** | 光電倍增管高壓，主要亮度控制 | **400–600 V**；上限勿超過 **800 V** |
| **Gain** | 訊號電子放大倍率 | 從 1.0 起，盡量少動 |
| **Offset** | 背景基準值（黑階） | 調到背景剛好變黑，勿調過頭 |
| **Laser %** | 雷射輸出百分比 | 從 **5–15 %** 起試，能低就低 |
| **DM** | 偵測分光鏡 Mirror / DM570 / DM630 | 依染劑組合選擇 |
| **Sequential** | 依序掃描開關 | 多染劑串色時開啟 |

::: warning PMT 電壓的正確用法
- **建議工作範圍 400–600 V**，這區間訊噪比最佳。
- **超過 700 V** 影像會出現明顯顆粒狀雜訊。
- **絕對不要超過 800 V**，長期高壓會加速 PMT 老化甚至損壞。
- 若 600 V 仍太暗，**優先提高雷射功率或放大 pinhole**，而不是硬拉 PMT。
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
| **XY Repeat** | 連續重複掃描，即時預覽 | 對焦、找視野、調參數 |
| **XY Once** | 單張正式掃描（含 Kalman 平均） | 正式取像 |
| **Focus x2 / x4** | 低解析度快速掃描 | 快速對焦，減少光漂白 |
| **Stop** | 停止掃描 | 隨時可按 |

::: tip 減少光漂白的習慣
調參數時用 **Focus** 或 **XY Repeat 搭配低雷射功率**，確定構圖後再把功率調到正式值、按 **XY Once** 拍一張。長時間掛著 XY Repeat 會把樣品照到褪色。
:::

## 4.5 ④ 掃描模式標籤

| 模式 | 全名 | 產出 |
| --- | --- | --- |
| **XY** | 單張平面掃描 | 一張二維影像 |
| **XYZ** | Z-Stack | 沿光軸的一疊切片 |
| **XYT** | 時間序列 | 同一平面的縮時影像 |
| **XYZT** | 四維 | 每個時間點一整疊 Z |
| **XZ** | 垂直切面 | 直接取得側視剖面 |
| **Line** | 線掃描 | 沿一條線的高速時間變化 |

詳見 [第6章 進階掃描模式](/advanced-scan)。

## 4.6 ⑤ 掃描參數區

| 參數 | 選項／範圍 | 說明 |
| --- | --- | --- |
| **Scan Size** | 256×256 / 512×512 / 1024×1024 | 512 為預設；1024 適合出圖但慢 4 倍 |
| **Speed** | 每像素停留時間（μs） | 越慢訊號越強、雜訊越低，但光漂白越多 |
| **Kalman** | Off / 2 / 3 / 4… | 多次掃描平均，降雜訊；3 次為常用值 |
| **Zoom** | 1×–10× | 光學放大掃描區域，同時提升像素解析度 |
| **Rotation** | 0–360° | 旋轉掃描方向，讓細長樣品填滿畫面 |
| **Scan Dir.** | One Way / Round Trip | Round Trip 較快，但需正確對位 |
| **Pan X / Y** | 位移掃描中心 | Zoom 後用來移動取樣位置，不必移動載物台 |
| **LUT** | Normal / Hi-Lo / 偽色 | Hi-Lo 用於檢查飽和與背景 |

## 4.7 ⑥ Z 控制區

| 欄位 | 說明 |
| --- | --- |
| **Start Z / Stop Z** | Z-Stack 的起點與終點，由目前焦點位置設定 |
| **Step Size** | 每層間距（μm） |
| **Slices** | 自動換算的層數（Start↔Stop 與 Step 三者連動） |
| **Z Position** | 目前 Z 馬達位置 |

## 4.8 ⑦ 物鏡選擇

軟體中選的物鏡**必須與實際轉盤上的物鏡一致**，否則：

- 比例尺（scale bar）會標錯。
- 建議 Z 間距與最佳 pinhole 值會算錯。
- 影像的像素尺寸（μm/pixel）記錄錯誤，後續量化全部失準。

::: warning 換物鏡的兩個動作
1. 轉盤實體切換到定位。
2. 軟體下拉選單同步改成同一顆物鏡。

**兩件事都要做。**
:::

## 4.9 ⑧ 影像顯示區

- 顯示即時或已擷取的影像，可切換單通道／Merge 疊圖。
- 滑鼠移動時通常會顯示該點的座標與灰階值，可用來判斷是否飽和（8-bit 上限 255、12-bit 上限 4095）。
- 支援 ROI 框選，供後續 Analysis 使用。

## 4.10 CONFOCAL APERTURE 旋鈕（硬體） {#confocal-aperture}

pinhole 在 FV500 上是**掃描頭前面板的手動旋鈕**，不在軟體裡。

<div class="tip custom-block">

**操作要點**

1. 起始建議轉到 **3**。
2. 訊號足夠時，往 **2 → 1** 轉，可得到更薄的光學切片與更好的 Z 解析度。
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

## 4.12 常用鍵盤／滑鼠操作

| 操作 | 效果 |
| --- | --- |
| 在影像上拖曳 | 畫出 ROI |
| 雙擊影像視窗標題 | 最大化／還原 |
| Ctrl + S | 儲存目前影像 |
| Esc / Stop | 中止掃描 |
| 滑鼠停在像素上 | 顯示座標與強度值 |

::: tip 存檔紀律
FLUOVIEW v5.0 執行於 Windows XP，**當機不算罕見**。養成「拍一張存一張」的習慣，不要累積十幾張才存。
:::
