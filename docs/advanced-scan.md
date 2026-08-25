---
description: 'FV500 進階掃描模式：Z-Stack、時間序列、XZ 切面與 Sequential Scan'
---

# 第六章　進階掃描模式

除了單張 XY 影像，FV500 還能沿 Z 軸堆疊（XYZ）、沿時間軸重複（XYT），或兩者兼具（XYZT）。

## 6.1 Z-Stack（XYZ）概念

Z-Stack 就是**在同一個 X-Y 位置，沿光軸一層一層地掃描**，把每層的光學切片堆起來，得到樣品的三維資料。

<svg class="fig" viewBox="0 0 720 450" role="img" aria-label="Z-Stack 概念圖">
  <defs>
    <marker id="zs-ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-primary)"/>
    </marker>
    <marker id="zs-ar2" markerWidth="9" markerHeight="9" refX="2" refY="4.5" orient="auto">
      <path d="M8,1 L0,4.5 L8,8 z" fill="var(--fig-primary)"/>
    </marker>
    <marker id="zs-arm" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
      <path d="M0,1 L7,4 L0,7 z" fill="var(--fig-amber)"/>
    </marker>
    <marker id="zs-arm2" markerWidth="8" markerHeight="8" refX="1.5" refY="4" orient="auto">
      <path d="M7,1 L0,4 L7,7 z" fill="var(--fig-amber)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="450" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- ===== 左：樣品側視圖 ===== -->
  <text x="128" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--fig-text)">① 樣品側視圖</text>
  <ellipse cx="128" cy="230" rx="62" ry="96" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="2"/>
  <circle cx="120" cy="200" r="16" fill="var(--fig-green)" opacity="0.6"/>
  <circle cx="146" cy="268" r="12" fill="var(--fig-green)" opacity="0.5"/>
  <g stroke="var(--fig-primary)" stroke-width="1.3" stroke-dasharray="5 4" opacity="0.9">
    <line x1="52" y1="146" x2="204" y2="146"/>
    <line x1="52" y1="174" x2="204" y2="174"/>
    <line x1="52" y1="202" x2="204" y2="202"/>
    <line x1="52" y1="230" x2="204" y2="230"/>
    <line x1="52" y1="258" x2="204" y2="258"/>
    <line x1="52" y1="286" x2="204" y2="286"/>
    <line x1="52" y1="314" x2="204" y2="314"/>
  </g>
  <!-- Start / Stop 標示 -->
  <line x1="46" y1="150" x2="46" y2="310" stroke="var(--fig-primary)" stroke-width="2" marker-start="url(#zs-ar2)" marker-end="url(#zs-ar)"/>
  <text x="46" y="140" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--fig-primary)">Stop Z</text>
  <text x="46" y="330" text-anchor="middle" font-size="11.5" font-weight="600" fill="var(--fig-primary)">Start Z</text>
  <!-- Step -->
  <line x1="212" y1="230" x2="212" y2="258" stroke="var(--fig-amber)" stroke-width="2" marker-start="url(#zs-arm2)" marker-end="url(#zs-arm)"/>
  <text x="220" y="250" font-size="11.5" font-weight="600" fill="var(--fig-amber)">Step Size</text>
  <!-- 物鏡 -->
  <path d="M110 356 L146 356 L156 396 L100 396 Z" fill="var(--fig-primary-soft)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="128" y="418" text-anchor="middle" font-size="11" fill="var(--fig-muted)">物鏡沿 Z 逐層對焦</text>
  <!-- 箭頭 -->
  <line x1="246" y1="230" x2="282" y2="230" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#zs-ar)"/>
  <text x="264" y="220" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">逐層掃描</text>
  <!-- ===== 中：切片堆疊 ===== -->
  <text x="378" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--fig-text)">② 光學切片堆疊</text>
  <g stroke="var(--fig-primary)" stroke-width="1.8">
    <polygon points="308,350 378,330 448,350 378,370" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,320 378,300 448,320 378,340" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,290 378,270 448,290 378,310" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,260 378,240 448,260 378,280" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,230 378,210 448,230 378,250" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,200 378,180 448,200 378,220" fill="var(--fig-primary-soft)" opacity="0.95"/>
    <polygon points="308,170 378,150 448,170 378,190" fill="var(--fig-primary-soft)" opacity="0.95"/>
  </g>
  <g fill="var(--fig-green)" opacity="0.75">
    <ellipse cx="378" cy="350" rx="10" ry="4"/>
    <ellipse cx="374" cy="320" rx="18" ry="6"/>
    <ellipse cx="380" cy="290" rx="26" ry="8"/>
    <ellipse cx="376" cy="260" rx="30" ry="9"/>
    <ellipse cx="380" cy="230" rx="25" ry="8"/>
    <ellipse cx="374" cy="200" rx="16" ry="5"/>
    <ellipse cx="378" cy="170" rx="8" ry="3"/>
  </g>
  <line x1="466" y1="350" x2="466" y2="320" stroke="var(--fig-amber)" stroke-width="2" marker-start="url(#zs-arm2)" marker-end="url(#zs-arm)"/>
  <text x="474" y="340" font-size="11" fill="var(--fig-amber)">Step</text>
  <text x="378" y="392" text-anchor="middle" font-size="11" fill="var(--fig-muted)">每層一張影像（Slice 1…N）</text>
  <text x="378" y="410" text-anchor="middle" font-size="11" fill="var(--fig-muted)">層數 = (Stop − Start) ÷ Step + 1</text>
  <!-- 箭頭 -->
  <line x1="500" y1="230" x2="536" y2="230" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#zs-ar)"/>
  <text x="518" y="220" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">重建</text>
  <!-- ===== 右：3D 重建 ===== -->
  <text x="612" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="var(--fig-text)">③ 三維重建</text>
  <g stroke="var(--fig-primary)" stroke-width="1" opacity="0.85">
    <polygon points="552,300 612,283 672,300 612,317" fill="var(--fig-primary-soft)"/>
    <polygon points="552,292 612,275 672,292 612,309" fill="var(--fig-primary-soft)"/>
    <polygon points="552,284 612,267 672,284 612,301" fill="var(--fig-primary-soft)"/>
    <polygon points="552,276 612,259 672,276 612,293" fill="var(--fig-primary-soft)"/>
    <polygon points="552,268 612,251 672,268 612,285" fill="var(--fig-primary-soft)"/>
    <polygon points="552,260 612,243 672,260 612,277" fill="var(--fig-primary-soft)"/>
    <polygon points="552,252 612,235 672,252 612,269" fill="var(--fig-primary-soft)"/>
    <polygon points="552,244 612,227 672,244 612,261" fill="var(--fig-primary-soft)"/>
    <polygon points="552,236 612,219 672,236 612,253" fill="var(--fig-primary-soft)"/>
    <polygon points="552,228 612,211 672,228 612,245" fill="var(--fig-primary-soft)"/>
  </g>
  <polygon points="552,228 612,211 672,228 672,300 612,317 552,300" fill="none" stroke="var(--fig-primary)" stroke-width="2.2"/>
  <ellipse cx="608" cy="262" rx="30" ry="30" fill="var(--fig-green)" opacity="0.45"/>
  <ellipse cx="608" cy="262" rx="15" ry="15" fill="var(--fig-green)" opacity="0.85"/>
  <text x="612" y="348" text-anchor="middle" font-size="11" fill="var(--fig-muted)">3D Projection</text>
  <text x="612" y="366" text-anchor="middle" font-size="11" fill="var(--fig-muted)">Maximum Projection</text>
  <text x="612" y="384" text-anchor="middle" font-size="11" fill="var(--fig-muted)">任意角度旋轉動畫</text>
</svg>

<p class="fig-caption">圖 6-1　Z-Stack 從逐層掃描到三維重建</p>

## 6.2 Z-Stack 操作步驟

1. 切到 **XYZ** 模式標籤。
2. 用 **XY Repeat / Focus** 邊看邊轉焦，找到樣品的**最下緣**（影像剛要消失處），按 **Set Start Z**。
3. 繼續往上轉焦到樣品的**最上緣**，按 **Set Stop Z**。
4. 設定 **Step Size**（見下表）。軟體會自動算出 Slices 層數。
5. 確認總層數合理（一般 20–60 層；超過 100 層請重新檢視範圍是否過大）。
6. 設定 Kalman（Z-Stack 建議 **1–2 次**即可，層數多時光漂白會累加）。
7. 按 **Start / XYZ Once** 開始擷取。
8. 完成後存檔，再用 **Visualize → 3D Projection** 檢視。

::: tip 上下多留一點
Start / Stop 各往外多留 2–3 層，避免重建時樣品被切平。多掃幾層的成本遠低於重拍。
:::

## 6.3 建議 Z 間距（Step Size）

Z 間距太大 → 三維重建會出現階梯狀失真；太小 → 光漂白嚴重、檔案巨大。經驗法則是取**光學切片厚度的一半**。

| 物鏡 | NA | 建議 Step Size | 備註 |
| --- | --- | --- | --- |
| 4X | 0.13 | 10–20 μm | 只適合大範圍概觀 |
| 10X | 0.40 | 4–5 μm | 組織切片概觀 |
| **20X（UPLAPO）** | **0.70** | **1.0–1.5 μm** | **本機常用** |
| 40X 乾式 | 0.85 | 0.7–1.0 μm | |
| 40X 油鏡 | 1.30 | 0.4–0.5 μm | |
| 60X 油鏡 | 1.40 | 0.3–0.4 μm | 次細胞結構 |
| 100X 油鏡 | 1.40 | 0.2–0.3 μm | 最高解析，光漂白最嚴重 |

::: warning pinhole 會改變切片厚度
上表以 pinhole 在 **中段（3）**為前提。若把 CONFOCAL APERTURE 轉到 4 或 5，光學切片變厚，Z 間距可以放大一些；轉到 1 則需要更密的間距才不會漏掉資訊。
:::

### 檔案大小估算

單通道 12-bit、512×512、每層約 0.5 MB：

| 設定 | 約略大小 |
| --- | --- |
| 512×512 × 30 層 × 1 通道 | 約 15 MB |
| 512×512 × 30 層 × 2 通道 | 約 30 MB |
| 1024×1024 × 50 層 × 2 通道 | 約 200 MB |
| 1024×1024 × 50 層 × 2 通道 × 20 時間點 | 約 4 GB ⚠ |

::: danger XP 電腦的容量限制
Windows XP 電腦硬碟空間有限，且單一檔案過大時軟體可能不穩。**單一 XYZT 檔案建議控制在 2 GB 以內**，長時間實驗請分段擷取。
:::

## 6.4 時間序列（XYT）

用於觀察**同一平面隨時間的變化**：鈣離子訊號、囊泡運輸、細胞遷移、藥物反應。

### 設定項目

| 參數 | 說明 | 建議 |
| --- | --- | --- |
| **Interval** | 每次掃描的間隔時間 | 不可短於單張掃描時間 |
| **Number of frames** | 總幀數 | 由總時長 ÷ Interval 決定 |
| **Total duration** | 總時長 | 與上兩者連動 |

### 操作步驟

1. 切到 **XYT** 標籤。
2. 先用 XY 模式把訊號調到**比平常略暗**（時間序列會累積光漂白，一開始就拉滿後面會越拍越暗）。
3. 設定 Interval 與總幀數。
4. 建議把 **Kalman 關閉或設 2**，並用 512×512 以縮短單張時間。
5. 確認樣品不會漂移（活細胞需注意培養液蒸發與溫度變化）。
6. 開始擷取，**過程中絕對不要碰載物台或調焦鈕**。

::: tip 減少時間序列的光漂白
- 雷射功率降到能看清楚的最低值。
- 拉長 Interval（能接受的前提下）。
- pinhole 開大一段（3 → 4）換取亮度，就能降低雷射功率。
- 使用抗褪色封片劑（固定樣品）或 ROS 清除劑（活細胞）。
:::

### 焦點漂移（Focus Drift）

長時間拍攝時，溫度變化會讓焦平面緩慢偏移。FV500 沒有自動對焦補償，因此：

- 開機後讓系統與樣品在室溫下**平衡 20–30 分鐘**再開始。
- 拍攝超過 30 分鐘時，改用 **XYZT** 抓一個較厚的 Z 範圍，事後再挑出對焦正確的層。

## 6.5 XYZT（四維）

每個時間點擷取一整疊 Z，用於**追蹤三維空間中隨時間變化的結構**。

1. 先分別把 **XYZ** 與 **XYT** 的參數都設定好。
2. 切到 **XYZT** 標籤。
3. 特別注意：`總時間 ≈ 時間點數 × 層數 × 單張掃描時間`。務必先估算：

   > 例：30 層 × 20 時間點 × 每張 1.5 秒 ≈ 15 分鐘（不含 Interval 等待）。

4. 確認 **Interval 大於單一 Z-Stack 的擷取時間**，否則軟體會排不進去。
5. 確認硬碟剩餘空間足夠（狀態列可看）。

::: warning 光劑量會相乘
XYZT 的總光劑量是 XY 的「層數 × 時間點數」倍。務必把雷射功率壓到最低、Kalman 關閉、層數精簡，否則樣品在實驗結束前就會被漂白殆盡。
:::

## 6.6 Zoom 與 Pan

- **Zoom**　縮小振鏡的掃描角度，讓同樣的像素數涵蓋更小的實際區域 → **像素變小、解析度真的提高**（與數位放大不同）。
- **Pan**　在不移動載物台的情況下，把掃描區域移到視野中的其他位置。

| Zoom | 20X 物鏡實際視野（約） | 說明 |
| --- | --- | --- |
| 1× | 約 640 μm | 全視野概觀 |
| 2× | 約 320 μm | 單顆細胞群 |
| 4× | 約 160 μm | 單一細胞 |
| 8× | 約 80 μm | 次細胞結構 |

::: danger 高倍 Zoom 的過採樣風險
Zoom 越大，同一塊面積接受的雷射劑量越高，**光漂白與光毒性急遽增加**。超過物鏡光學解析極限的 Zoom（過採樣）只是把同樣的資訊放大，並不會看到更多細節。20X 物鏡建議 Zoom 不超過 **4–5×**；要更高倍率請換物鏡。
:::

## 6.7 Sequential Scan（依序掃描） {#sequential-scan}

多重染色時，某個染劑的發射光可能被另一個通道收到（bleed-through／串色）。Sequential Scan 讓**每次只開一種雷射**，從根本消除串色。

### 兩種模式

| 模式 | 切換單位 | 速度 | 串色抑制 | 適用 |
| --- | --- | --- | --- | --- |
| **Line Sequential** | 每一掃描線切換 | 快 | 良好 | 活細胞、會移動的樣品 |
| **Frame Sequential** | 每一整張切換 | 慢 | 最佳 | 固定樣品、嚴重串色 |

### 操作步驟

1. 在 Acquire 選單中開啟 **Sequential Scan**。
2. 建立第一組設定：雷射 543 nm + CH1（TRITC）。
3. 建立第二組設定：雷射 633 nm + CH2（Cy5）。
4. 選擇 Line 或 Frame 模式。
5. 執行掃描，軟體會自動交替。

::: tip 怎麼判斷有沒有串色？
準備**單染對照片**（只染 FITC、只染 TRITC 各一片）。把單染 FITC 的樣品放上去，用紅色通道掃描——如果紅通道還看得到訊號，就是串色，必須改用 Sequential Scan。
:::

## 6.8 XZ 與 Line 掃描

| 模式 | 說明 | 用途 |
| --- | --- | --- |
| **XZ** | 沿一條 X 線做 Z 方向掃描，直接得到垂直剖面 | 快速確認樣品厚度、上皮細胞極性、貼壁位置 |
| **Line** | 沿一條線高速重複掃描 | 毫秒級動態（鈣波、離子通道），時間解析度遠優於 XYT |

XZ 掃描比「拍一整疊再重組」快得多，很適合在正式 Z-Stack 前**先確認樣品的 Z 範圍**。
