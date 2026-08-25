# 第七章　影像處理與分析

FLUOVIEW v5.0 內建基本的顯示、處理、分析與立體重建功能。本章依 **Display / Process / Analysis / Visualize** 四個選單說明。

::: warning 處理前先存原始檔
**任何處理都必須在原始 .oib 存檔之後才做。** 濾波、背景扣除、對比拉伸都會改變像素值；用於發表的定量分析一律以未經處理的原始資料為準，並在論文方法中誠實描述所有處理步驟。
:::

## 7.1 Display 選單（顯示，不改變資料）

Display 只改變「怎麼看」，**不改變存下來的像素值**。

| 功能 | 說明 | 用途 |
| --- | --- | --- |
| **LUT / 偽色** | 把灰階映射成顏色（Green、Red、Fire、Rainbow…） | 多通道各給一色，或用彩虹色凸顯強度差異 |
| **Hi-Lo** | 飽和像素顯示紅色、零值顯示藍色 | 調參數時檢查過曝與截波 |
| **Brightness / Contrast** | 調整顯示範圍 | 讓弱訊號在螢幕上看得見 |
| **Merge / Overlay** | 多通道疊圖 | 共定位的視覺呈現（黃＝綠紅重疊） |
| **Split View** | 各通道分開並列 | 檢視單一通道細節 |
| **Scale Bar** | 加入比例尺 | **務必確認軟體物鏡設定正確** |

::: tip 顯示 ≠ 資料
把 Brightness 拉高只是「螢幕上看起來比較亮」，並不會讓原本飽和的像素恢復，也不會增加真實訊號。定量請一律看數值，不要看螢幕亮度。
:::

## 7.2 Process 選單（處理，會改變資料）

| 功能 | 作用 | 注意 |
| --- | --- | --- |
| **Smooth（平滑）** | 3×3 均值濾波，降低雜訊 | 會犧牲解析度，勿重複套用 |
| **Median（中值）** | 去除孤立亮點（宇宙射線、熱像素） | 對點狀雜訊最有效，保邊性佳 |
| **Sharpen（銳化）** | 強化邊緣 | **會製造假訊號**，定量分析禁用 |
| **Background Subtract** | 扣除背景基準 | 需記錄扣除方式與數值 |
| **Arithmetic** | 影像加減乘除 | 用於比值成像（ratio imaging） |
| **Deconvolution** | 去卷積（若安裝模組） | 需正確的 PSF 與物鏡參數 |

::: danger 定量分析禁用的處理
以下處理會讓螢光強度失去物理意義，**做定量（強度比較、共定位係數）時一律不可使用**：
- Sharpen 銳化
- 非線性對比調整（Gamma）
- 過度的 Smooth
- 對不同樣品套用不同的處理參數
:::

## 7.3 Visualize 選單（三維重建）

<svg class="fig" viewBox="0 0 720 330" role="img" aria-label="Maximum Projection 原理圖">
  <defs>
    <marker id="ip-ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,1.5 L9,5 L0,8.5 z" fill="var(--fig-primary)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="330" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="30" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-text)">Maximum Projection（最大值投影）原理</text>
  <!-- 左：Z-Stack -->
  <g stroke="var(--fig-primary)" stroke-width="1.6">
    <polygon points="60,280 130,262 200,280 130,298" fill="var(--fig-primary-soft)"/>
    <polygon points="60,246 130,228 200,246 130,264" fill="var(--fig-primary-soft)"/>
    <polygon points="60,212 130,194 200,212 130,230" fill="var(--fig-primary-soft)"/>
    <polygon points="60,178 130,160 200,178 130,196" fill="var(--fig-primary-soft)"/>
    <polygon points="60,144 130,126 200,144 130,162" fill="var(--fig-primary-soft)"/>
  </g>
  <g fill="var(--fig-green)">
    <ellipse cx="112" cy="280" rx="9" ry="4" opacity="0.45"/>
    <ellipse cx="146" cy="246" rx="11" ry="5" opacity="0.9"/>
    <ellipse cx="118" cy="212" rx="13" ry="5" opacity="0.7"/>
    <ellipse cx="150" cy="178" rx="9" ry="4" opacity="0.95"/>
    <ellipse cx="120" cy="144" rx="8" ry="3.5" opacity="0.5"/>
  </g>
  <text x="130" y="320" text-anchor="middle" font-size="11.5" fill="var(--fig-muted)">Z-Stack（N 層切片）</text>
  <!-- 中：運算說明 -->
  <line x1="216" y1="212" x2="266" y2="212" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#ip-ar)"/>
  <rect x="274" y="120" width="184" height="180" rx="8" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="366" y="146" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--fig-primary)">逐像素取最大值</text>
  <text x="288" y="172" font-size="11" fill="var(--fig-text)">對每個 (x, y) 位置：</text>
  <text x="288" y="196" font-size="11.5" fill="var(--fig-text)">輸出 = max(I₁, I₂, …, Iₙ)</text>
  <line x1="288" y1="212" x2="444" y2="212" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <text x="288" y="234" font-size="11" fill="var(--fig-muted)">· 保留每層最亮的訊號</text>
  <text x="288" y="254" font-size="11" fill="var(--fig-muted)">· 一張圖看完整個立體結構</text>
  <text x="288" y="274" font-size="11" fill="var(--fig-danger)">· 失去 Z 軸資訊，不可用於</text>
  <text x="288" y="292" font-size="11" fill="var(--fig-danger)">　判斷「是否真的重疊」</text>
  <line x1="474" y1="212" x2="524" y2="212" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#ip-ar)"/>
  <!-- 右：結果 -->
  <rect x="532" y="132" width="150" height="150" rx="6" fill="#0b1120" stroke="var(--fig-cyan)" stroke-width="2"/>
  <g fill="#4ade80">
    <ellipse cx="576" cy="248" rx="11" ry="9" opacity="0.5"/>
    <ellipse cx="616" cy="216" rx="13" ry="11" opacity="0.95"/>
    <ellipse cx="582" cy="198" rx="15" ry="12" opacity="0.75"/>
    <ellipse cx="622" cy="172" rx="11" ry="9" opacity="1"/>
    <ellipse cx="584" cy="160" rx="10" ry="8" opacity="0.55"/>
  </g>
  <text x="607" y="320" text-anchor="middle" font-size="11.5" fill="var(--fig-muted)">一張二維投影影像</text>
</svg>

<p class="fig-caption">圖 7-1　最大值投影：把整疊 Z 壓成一張圖</p>

| 功能 | 說明 | 適用 |
| --- | --- | --- |
| **Maximum Projection** | 沿 Z 取每個像素的最大值 | 呈現整體形態、細長結構（軸突、微管） |
| **Average Projection** | 沿 Z 取平均值 | 降低雜訊，但弱化細節 |
| **3D Projection** | 以任意角度重建並可輸出旋轉動畫 | 立體結構展示 |
| **Cross Section（XZ / YZ）** | 從 Z-Stack 重組垂直剖面 | 判斷樣品厚度、細胞極性 |
| **Animation** | 輸出逐層播放或旋轉動畫 | 簡報用 |

### 3D Projection 操作

1. 開啟已擷取的 Z-Stack。
2. **Visualize → 3D Projection**。
3. 設定旋轉軸（X / Y）、旋轉角度範圍與角度間隔（例如每 10° 一張，共 36 張）。
4. 設定投影方式（Maximum / Alpha blending）。
5. 執行後可存成影像序列或動畫。

::: warning 投影的常見誤用
兩個訊號在 Maximum Projection 上「看起來重疊」，很可能只是**在不同 Z 層剛好位在同一 X-Y 位置**。判斷共定位必須回到**單層原始切片**，或使用 XZ / YZ 剖面確認。
:::

## 7.4 Analysis 選單（量化分析）

### Line Profile（線掃描強度曲線）

<svg class="fig" viewBox="0 0 720 300" role="img" aria-label="Line Profile 分析示意圖">
  <rect x="0" y="0" width="720" height="300" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="28" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-text)">Line Profile：沿一條線取出強度分布</text>
  <!-- 左：影像與線 -->
  <rect x="40" y="52" width="220" height="200" rx="6" fill="#0b1120" stroke="var(--fig-cyan)" stroke-width="2"/>
  <ellipse cx="110" cy="130" rx="34" ry="28" fill="#16a34a" opacity="0.55"/>
  <circle cx="110" cy="130" r="12" fill="#4ade80"/>
  <ellipse cx="196" cy="196" rx="30" ry="24" fill="#16a34a" opacity="0.5"/>
  <circle cx="196" cy="196" r="10" fill="#4ade80"/>
  <line x1="58" y1="86" x2="244" y2="230" stroke="#facc15" stroke-width="2.4"/>
  <circle cx="58" cy="86" r="4" fill="#facc15"/>
  <circle cx="244" cy="230" r="4" fill="#facc15"/>
  <text x="150" y="274" text-anchor="middle" font-size="11.5" fill="var(--fig-muted)">在影像上畫一條線</text>
  <!-- 右：曲線 -->
  <rect x="320" y="52" width="360" height="200" rx="6" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="1.6"/>
  <line x1="356" y1="224" x2="656" y2="224" stroke="var(--fig-line)" stroke-width="1.6"/>
  <line x1="356" y1="224" x2="356" y2="76" stroke="var(--fig-line)" stroke-width="1.6"/>
  <text x="506" y="246" text-anchor="middle" font-size="11" fill="var(--fig-muted)">沿線位置（μm）</text>
  <text x="336" y="150" text-anchor="middle" font-size="11" fill="var(--fig-muted)" transform="rotate(-90 336 150)">強度</text>
  <path d="M356 214 L392 210 L420 176 L444 100 L468 172 L500 208 L540 212 L568 190 L592 118 L616 186 L644 212"
        fill="none" stroke="var(--fig-green)" stroke-width="2.6"/>
  <line x1="356" y1="212" x2="656" y2="212" stroke="var(--fig-danger)" stroke-width="1.4" stroke-dasharray="6 4"/>
  <text x="652" y="206" text-anchor="end" font-size="10.5" fill="var(--fig-danger)">背景</text>
  <text x="444" y="92" text-anchor="middle" font-size="10.5" fill="var(--fig-text)">峰 1</text>
  <text x="592" y="110" text-anchor="middle" font-size="10.5" fill="var(--fig-text)">峰 2</text>
  <text x="500" y="278" text-anchor="middle" font-size="11.5" fill="var(--fig-muted)">可讀出峰值、半高寬（FWHM）、峰間距離</text>
</svg>

<p class="fig-caption">圖 7-2　Line Profile 分析</p>

**操作：** Analysis → Line Profile → 在影像上拖出一條線 → 讀出曲線 → 可匯出數值（CSV／文字）。

**常見用途：**
- 量測結構寬度（以半高寬 FWHM 表示）。
- 比較兩個通道沿同一條線的強度分布，檢查共定位。
- 判斷細胞膜／細胞質的強度比。

### ROI 量化

1. 在影像上框選 ROI（矩形、橢圓或自由曲線）。
2. **Analysis → ROI Statistics**，取得該區域的：

| 統計量 | 意義 |
| --- | --- |
| Area | 面積（μm²，依物鏡換算） |
| Mean | 平均強度 |
| Max / Min | 最大／最小強度 |
| SD | 標準差 |
| Sum / Integrated Density | 總強度（面積 × 平均） |

3. 另外框一個**沒有細胞的背景 ROI**，用來扣背景。

::: tip 正確的強度量化流程
1. 量測目標 ROI 的 Mean。
2. 量測背景 ROI 的 Mean。
3. 校正後強度 = 目標 Mean − 背景 Mean。
4. 同一組實驗的**所有影像必須用完全相同的擷取參數**（雷射功率、PMT、Gain、Offset、pinhole、掃描速度），否則強度不可比較。
:::

### Histogram（強度直方圖）

- 檢查影像的動態範圍利用情況。
- 右端貼牆（堆在最大值）＝ 飽和，該影像不可用於定量。
- 左端堆在 0 ＝ Offset 調過頭，弱訊號被截掉。

### Time Course（時間強度曲線）

XYT / XYZT 影像可框選 ROI，輸出**強度對時間的曲線**，用於鈣訊號、螢光回復（FRAP）等分析。

## 7.5 建議：把分析搬到 ImageJ / FIJI

FLUOVIEW v5.0 的分析功能有限，且執行在 XP 上。**建議只用 FV500 做擷取，分析在別台電腦用 FIJI 完成：**

| 需求 | FIJI 對應工具 |
| --- | --- |
| 開啟 .oib | Bio-Formats Importer |
| 最大值投影 | Image → Stacks → Z Project |
| 三維檢視 | 3D Viewer、Volume Viewer |
| 共定位分析 | Coloc 2、JACoP |
| 細胞計數／分割 | Analyze Particles、StarDist、Cellpose |
| 批次處理 | Macro / Script |
| 強度量化 | ROI Manager + Measure |

詳見 [第8章 檔案管理](/file-management)。
