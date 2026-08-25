---
description: '共軛焦顯微鏡中英名詞對照表：光學原理、螢光、硬體與軟體術語'
---

# 附錄A　名詞對照表

## A.1 光路上的名詞

<svg class="fig" viewBox="0 0 720 200" role="img" aria-label="光路元件英中名詞對照">
  <defs>
    <marker id="gl-ar" markerWidth="8" markerHeight="8" refX="6.5" refY="4" orient="auto">
      <path d="M0,1 L7,4 L0,7 z" fill="var(--fig-line)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="200" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="28" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--fig-text)">光路上的元件：英文 ↔ 中文</text>
  <g font-size="10.5">
    <rect x="16" y="52" width="86" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="1.8"/>
    <text x="59" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Laser</text>
    <text x="59" y="92" text-anchor="middle" fill="var(--fig-muted)">雷射光源</text>
    <rect x="118" y="52" width="94" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="1.8"/>
    <text x="165" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Dichroic</text>
    <text x="165" y="92" text-anchor="middle" fill="var(--fig-muted)">分光鏡 DM</text>
    <rect x="228" y="52" width="94" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="1.8"/>
    <text x="275" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Galvo</text>
    <text x="275" y="92" text-anchor="middle" fill="var(--fig-muted)">振鏡掃描器</text>
    <rect x="338" y="52" width="94" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="1.8"/>
    <text x="385" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Objective</text>
    <text x="385" y="92" text-anchor="middle" fill="var(--fig-muted)">物鏡</text>
    <rect x="448" y="52" width="94" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-green)" stroke-width="1.8"/>
    <text x="495" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Specimen</text>
    <text x="495" y="92" text-anchor="middle" fill="var(--fig-muted)">樣品</text>
    <rect x="558" y="52" width="70" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-amber)" stroke-width="1.8"/>
    <text x="593" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">Pinhole</text>
    <text x="593" y="92" text-anchor="middle" fill="var(--fig-muted)">針孔</text>
    <rect x="644" y="52" width="60" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-danger)" stroke-width="1.8"/>
    <text x="674" y="74" text-anchor="middle" font-weight="700" fill="var(--fig-text)">PMT</text>
    <text x="674" y="92" text-anchor="middle" fill="var(--fig-muted)">偵測器</text>
  </g>
  <g stroke="var(--fig-line)" stroke-width="1.8">
    <line x1="102" y1="78" x2="114" y2="78" marker-end="url(#gl-ar)"/>
    <line x1="212" y1="78" x2="224" y2="78" marker-end="url(#gl-ar)"/>
    <line x1="322" y1="78" x2="334" y2="78" marker-end="url(#gl-ar)"/>
    <line x1="432" y1="78" x2="444" y2="78" marker-end="url(#gl-ar)"/>
    <line x1="542" y1="78" x2="554" y2="78" marker-end="url(#gl-ar)"/>
    <line x1="628" y1="78" x2="640" y2="78" marker-end="url(#gl-ar)"/>
  </g>
  <path d="M59 112 L59 140 L495 140" fill="none" stroke="var(--fig-primary)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="240" y="134" font-size="10.5" fill="var(--fig-primary)">激發路徑 Excitation Path</text>
  <path d="M495 152 L674 152 L674 112" fill="none" stroke="var(--fig-green)" stroke-width="1.6" stroke-dasharray="6 4"/>
  <text x="540" y="170" font-size="10.5" fill="var(--fig-green)">發射路徑 Emission Path</text>
  <text x="16" y="190" font-size="10.5" fill="var(--fig-muted)">※ 完整光路請見第 1 章圖 1-1。</text>
</svg>

<p class="fig-caption">圖 A-1　光路元件名詞對照</p>

## A.2 光學與成像原理

| 英文 | 中文 | 說明 |
| --- | --- | --- |
| **Confocal** | 共軛焦 | 照明點與偵測針孔位在光學共軛的焦點上，故能濾除焦外光 |
| **CLSM** | 共軛焦雷射掃描顯微鏡 | Confocal Laser Scanning Microscope |
| **Wide-field** | 廣視野（傳統螢光） | 全視野同時照明，影像含焦外雜光 |
| **Optical Section** | 光學切片 | 不用實體切片，靠光學方式取得的單層影像 |
| **Pinhole** | 針孔（共軛焦光圈） | 濾除焦外光的關鍵孔徑；本機為前面板 1–5 段手動旋鈕 |
| **Airy Unit (AU)** | 艾里單位 | pinhole 大小的標準單位，1 AU 為解析度與訊號的常見折衷。本機 CONFOCAL APERTURE 段位約略對應：段位 1 ≈ 1 AU、段位 5 ≈ 5–8 AU（概念參考值，非原廠校準） |
| **NA (Numerical Aperture)** | 數值孔徑 | 物鏡集光能力，NA 越大解析度越高、光學切片越薄 |
| **Working Distance (WD)** | 工作距離 | 物鏡前端到焦平面的距離 |
| **PSF** | 點擴散函數 | 一個理想點光源在系統中成像的形狀，決定解析度 |
| **Resolution** | 解析度 | 能分辨兩個相鄰點的最小距離 |
| **Nyquist Sampling** | 奈奎斯特取樣 | 像素／Z 間距應約為解析度的一半，才不遺失資訊 |
| **Refractive Index** | 折射率 | 介質的光學參數，需與物鏡設計匹配（油鏡 n≈1.515） |
| **Focal Plane** | 焦平面 | 目前對焦的那一層 |
| **Depth of Field** | 景深 | 影像維持清晰的軸向範圍 |

## A.3 螢光與染劑

| 英文 | 中文 | 說明 |
| --- | --- | --- |
| **Fluorophore / Fluorochrome** | 螢光基團／螢光染劑 | 吸收特定波長後放出較長波長光的分子 |
| **Excitation (Ex)** | 激發 | 螢光分子吸收光子的波長 |
| **Emission (Em)** | 發射 | 螢光分子放出光子的波長，恆長於激發波長 |
| **Stokes Shift** | 史托克位移 | 激發峰與發射峰的波長差；差越大越容易分離 |
| **Photobleaching** | 光漂白 | 螢光分子在光照下不可逆地失去發光能力 |
| **Phototoxicity** | 光毒性 | 光照對活細胞造成的傷害 |
| **Bleed-through / Crosstalk** | 串色 | 一個染劑的訊號跑進另一個通道 |
| **Autofluorescence** | 自體螢光 | 樣品本身（非染劑）發出的螢光，形成背景 |
| **Quantum Yield** | 量子產率 | 吸收光子後成功發出螢光的比例，越高越亮 |
| **Anti-fade / Mounting Medium** | 抗褪色封片劑 | 減緩光漂白的封片試劑 |
| **Colocalization** | 共定位 | 兩種訊號在空間上重疊的程度 |

## A.4 硬體元件

| 英文 | 中文 | 說明 |
| --- | --- | --- |
| **Scan Head / Scan Unit** | 掃描頭 | 含振鏡、pinhole、分光鏡與 PMT 的核心單元 |
| **Galvanometer Mirror (Galvo)** | 振鏡 | 高速擺動的反射鏡，負責 X / Y 掃描 |
| **Dichroic Mirror (DM)** | 二向分光鏡 | 依波長決定反射或穿透（Mirror / DM570 / DM630） |
| **Barrier Filter (BA)** | 阻隔濾片／發射濾片 | 只讓特定波段的螢光進入 PMT |
| **Band Pass (BP)** | 帶通濾片 | 只通過某一波段（如 BA505-525） |
| **Interference Filter (IF)** | 長通干涉濾片 | 通過某波長以上的光（如 BA660IF） |
| **PMT (Photomultiplier Tube)** | 光電倍增管 | 把微弱光訊號轉成電訊號的偵測器 |
| **HV (High Voltage)** | 高壓 | PMT 的工作電壓，本機建議 400–600 V |
| **Gain** | 增益 | 訊號的電子放大倍率 |
| **Offset** | 偏移／黑階 | 訊號基準值，決定背景的黑度 |
| **Objective Lens** | 物鏡 | 本機含 UPLAPO 20X 等 |
| **UPLAPO** | Olympus 平場複消色差物鏡系列 | 高 NA、色差校正良好 |
| **Side Port** | 側面埠 | IX71 上安裝掃描頭的介面 |
| **Halogen Lamp** | 鹵素燈 | 透射（明視野）光源，由 LG-PS2 供電 |
| **HeNe Laser** | 氦氖雷射 | 本機的 543 / 633 nm 光源 |
| **Ar Laser** | 氬離子雷射 | 488 nm（選配） |
| **Class 3B** | 3B 級雷射 | 直射或鏡面反射可造成眼睛永久傷害 |
| **Vibration Isolation Table** | 光學防震桌 | 隔絕地面震動的麵包板式桌面 |

## A.5 掃描與軟體

| 英文 | 中文 | 說明 |
| --- | --- | --- |
| **XY Scan** | 平面掃描 | 單張二維影像 |
| **Z-Stack (XYZ)** | Z 軸堆疊 | 沿光軸逐層擷取的一疊切片 |
| **Time Lapse (XYT)** | 時間序列／縮時 | 同一平面隨時間重複擷取 |
| **XYZT** | 四維掃描 | 每個時間點擷取一整疊 Z |
| **Step Size** | 層間距 | Z-Stack 每層之間的距離（μm） |
| **Slice** | 切片／層 | Z-Stack 中的單一影像 |
| **Kalman Averaging** | 卡爾曼平均 | 多次掃描平均以降低雜訊 |
| **Line Average** | 逐線平均 | 每條掃描線重複多次後平均 |
| **Zoom** | 光學縮放 | 縮小掃描角度以提高像素解析度 |
| **Pan** | 平移 | 移動掃描區域而不移動載物台 |
| **Sequential Scan** | 依序掃描 | 雷射逐一開啟以消除串色 |
| **LUT (Look-Up Table)** | 查找表／偽色表 | 灰階對應到顯示顏色的規則 |
| **Hi-Lo** | 飽和檢查顯示 | 飽和顯示紅色、零值顯示藍色 |
| **Saturation** | 飽和／過曝 | 像素達最大灰階，資訊遺失 |
| **ROI (Region of Interest)** | 感興趣區域 | 用於量化分析的框選區 |
| **Line Profile** | 線強度分布 | 沿一條線的強度曲線 |
| **Maximum Projection** | 最大值投影 | 沿 Z 取每像素最大值壓成一張圖 |
| **3D Projection** | 三維投影 | 以任意角度重建立體影像 |
| **Deconvolution** | 去卷積 | 以 PSF 反推、提升解析度的運算 |
| **.oib** | Olympus Image Binary | FV500 原生單一檔案格式，含完整 metadata |
| **.oif** | Olympus Image File | 描述檔 + 同名資料夾的格式，複製時需一起帶走 |
| **Metadata** | 詮釋資料 | 影像的擷取參數紀錄（物鏡、雷射、PMT…） |
| **Bio-Formats** | Bio-Formats 套件 | ImageJ/FIJI 開啟 .oib 的外掛 |

## A.6 常見縮寫速查

| 縮寫 | 全稱 | 中文 |
| --- | --- | --- |
| CLSM | Confocal Laser Scanning Microscope | 共軛焦雷射掃描顯微鏡 |
| PMT | Photomultiplier Tube | 光電倍增管 |
| DM | Dichroic Mirror | 二向分光鏡 |
| BA | Barrier Filter | 阻隔濾片 |
| BP | Band Pass | 帶通 |
| IF | Interference Filter (long pass) | 長通干涉濾片 |
| NA | Numerical Aperture | 數值孔徑 |
| WD | Working Distance | 工作距離 |
| AU | Airy Unit | 艾里單位 |
| HV | High Voltage | 高壓（PMT） |
| ROI | Region of Interest | 感興趣區域 |
| PSF | Point Spread Function | 點擴散函數 |
| LUT | Look-Up Table | 查找表 |
| SNR | Signal-to-Noise Ratio | 訊噪比 |
| FWHM | Full Width at Half Maximum | 半高寬 |
| FRAP | Fluorescence Recovery After Photobleaching | 光漂白後螢光回復 |
| PSU | Power Supply Unit | 電源供應器 |
