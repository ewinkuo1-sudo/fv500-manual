---
description: 'Olympus FV500 共軛焦顯微鏡系統概述與共軛焦原理說明'
---

# 第一章　系統概述

## 1.1 什麼是共軛焦顯微鏡

一般的螢光顯微鏡（wide-field）會把整個視野都照亮，樣品**上下每一層**的螢光都同時進入眼睛或相機。結果就是：焦平面的影像被上下層散出來的模糊光暈蓋住，樣品越厚、影像越糊。

共軛焦雷射掃描顯微鏡（Confocal Laser Scanning Microscope, CLSM）用兩個手段解決這件事：

1. **點照明** — 用雷射聚焦成一個極小的光點，再靠振鏡（galvanometer mirror）讓光點在樣品上逐點掃過整個視野，一次只照亮一個點。
2. **點偵測 + 針孔（pinhole）** — 螢光回程時，在與焦平面「共軛」的位置放一個針孔。只有來自焦平面的光能通過針孔進入偵測器（PMT），焦平面以外的光被針孔擋掉。

「共軛焦」（confocal）三個字就是這個意思：**照明點**與**偵測針孔**位在光學上互相共軛的兩個焦點上。

<svg class="fig" viewBox="0 0 720 480" role="img" aria-label="共軛焦顯微鏡光路原理圖">
  <defs>
    <marker id="cf-ar-b" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-primary)"/>
    </marker>
    <marker id="cf-ar-g" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-green)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="480" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- 光軸 -->
  <line x1="250" y1="172" x2="250" y2="394" stroke="var(--fig-line)" stroke-width="2"/>
  <!-- 雷射 -->
  <rect x="20" y="150" width="112" height="46" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="76" y="171" text-anchor="middle" font-size="14" font-weight="600" fill="var(--fig-text)">雷射光源</text>
  <text x="76" y="188" text-anchor="middle" font-size="11" fill="var(--fig-muted)">543 / 633 nm</text>
  <line x1="132" y1="172" x2="243" y2="172" stroke="var(--fig-primary)" stroke-width="2.5" marker-end="url(#cf-ar-b)"/>
  <!-- 激發分光鏡 -->
  <line x1="232" y1="154" x2="268" y2="190" stroke="var(--fig-purple)" stroke-width="4" stroke-linecap="round"/>
  <text x="288" y="163" font-size="12.5" fill="var(--fig-text)">激發分光鏡</text>
  <text x="288" y="179" font-size="11" fill="var(--fig-muted)">Excitation Dichroic</text>
  <!-- 上下行方向標示 -->
  <line x1="222" y1="200" x2="222" y2="228" stroke="var(--fig-primary)" stroke-width="2" marker-end="url(#cf-ar-b)"/>
  <text x="216" y="216" text-anchor="end" font-size="11" fill="var(--fig-primary)">激發光</text>
  <line x1="278" y1="228" x2="278" y2="200" stroke="var(--fig-green)" stroke-width="2" marker-end="url(#cf-ar-g)"/>
  <text x="284" y="216" font-size="11" fill="var(--fig-green)">螢光</text>
  <!-- 振鏡 -->
  <rect x="206" y="234" width="88" height="46" rx="6" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <line x1="218" y1="270" x2="238" y2="246" stroke="var(--fig-primary)" stroke-width="3" stroke-linecap="round"/>
  <line x1="262" y1="270" x2="282" y2="246" stroke="var(--fig-primary)" stroke-width="3" stroke-linecap="round"/>
  <text x="308" y="252" font-size="12.5" fill="var(--fig-text)">振鏡掃描器</text>
  <text x="308" y="268" font-size="11" fill="var(--fig-muted)">Galvo Mirrors（X / Y 逐點掃描）</text>
  <!-- 物鏡 -->
  <path d="M212 312 L288 312 L268 356 L232 356 Z" fill="var(--fig-primary-soft)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="308" y="338" font-size="12.5" fill="var(--fig-text)">物鏡　UPLAPO 20X</text>
  <!-- 聚焦錐 -->
  <line x1="232" y1="356" x2="250" y2="398" stroke="var(--fig-primary)" stroke-width="1.6"/>
  <line x1="268" y1="356" x2="250" y2="398" stroke="var(--fig-primary)" stroke-width="1.6"/>
  <!-- 樣品 -->
  <rect x="168" y="392" width="164" height="16" rx="3" fill="var(--fig-primary-soft)" stroke="var(--fig-line)" stroke-width="1.5"/>
  <circle cx="250" cy="400" r="5" fill="var(--fig-green)"/>
  <line x1="150" y1="400" x2="350" y2="400" stroke="var(--fig-green)" stroke-width="1.2" stroke-dasharray="5 4"/>
  <text x="360" y="396" font-size="12.5" fill="var(--fig-text)">樣品</text>
  <text x="360" y="412" font-size="11" fill="var(--fig-green)">焦平面 Focal Plane</text>
  <text x="150" y="432" font-size="11" fill="var(--fig-muted)">雷射聚焦成一個點，靠振鏡在樣品上逐點掃過整個視野</text>
  <!-- 上行螢光：焦平面光線（實線）會聚於共用針孔 -->
  <path d="M236 164 L250 121" stroke="var(--fig-green)" stroke-width="2" fill="none"/>
  <path d="M264 164 L250 121" stroke="var(--fig-green)" stroke-width="2" fill="none"/>
  <!-- 焦外光線：虛線，在針孔平面已散開而被擋板擋住 -->
  <path d="M226 164 L260 124" stroke="var(--fig-danger)" stroke-width="1.8" stroke-dasharray="6 4" fill="none"/>
  <path d="M274 164 L240 124" stroke="var(--fig-danger)" stroke-width="1.8" stroke-dasharray="6 4" fill="none"/>
  <g stroke="var(--fig-danger)" stroke-width="2.4" stroke-linecap="round">
    <path d="M254 124 L266 136 M266 124 L254 136"/>
    <path d="M234 124 L246 136 M246 124 L234 136"/>
  </g>
  <!-- 共用針孔擋板（CH1 / CH2 共用，位於偵測分光鏡之前） -->
  <rect x="192" y="112" width="50" height="9" fill="var(--fig-text)"/>
  <rect x="258" y="112" width="50" height="9" fill="var(--fig-text)"/>
  <text x="184" y="102" text-anchor="end" font-size="12.5" fill="var(--fig-text)">針孔 Pinhole</text>
  <text x="184" y="118" text-anchor="end" font-size="11" fill="var(--fig-muted)">CONFOCAL APERTURE 1–5</text>
  <text x="184" y="134" text-anchor="end" font-size="11" fill="var(--fig-muted)">（CH1 / CH2 共用）</text>
  <!-- 通過針孔的螢光繼續上行 -->
  <line x1="250" y1="112" x2="250" y2="80" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#cf-ar-g)"/>
  <!-- 偵測分光鏡（位於針孔之後，依波長把螢光分給 CH1 / CH2） -->
  <line x1="232" y1="92" x2="268" y2="56" stroke="var(--fig-purple)" stroke-width="4" stroke-linecap="round"/>
  <text x="250" y="26" text-anchor="middle" font-size="12.5" fill="var(--fig-text)">偵測分光鏡</text>
  <text x="250" y="42" text-anchor="middle" font-size="11" fill="var(--fig-muted)">Mirror / DM570 / DM630</text>
  <!-- 反射向右進入偵測通道 -->
  <line x1="258" y1="74" x2="482" y2="74" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#cf-ar-g)"/>
  <!-- 阻隔濾片 -->
  <rect x="490" y="44" width="10" height="60" fill="var(--fig-amber-soft)" stroke="var(--fig-amber)" stroke-width="2"/>
  <text x="495" y="32" text-anchor="middle" font-size="11" fill="var(--fig-amber)">阻隔濾片</text>
  <!-- PMT -->
  <rect x="520" y="40" width="120" height="68" rx="7" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="580" y="68" text-anchor="middle" font-size="14" font-weight="600" fill="var(--fig-text)">偵測器 PMT</text>
  <text x="580" y="88" text-anchor="middle" font-size="11" fill="var(--fig-muted)">CH1 / CH2</text>
  <!-- 焦外註解 -->
  <text x="470" y="170" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--fig-danger)">焦外光線被 pinhole 擋住</text>
  <path d="M418 162 L272 140" stroke="var(--fig-danger)" stroke-width="1.2" stroke-dasharray="4 3" fill="none"/>
  <!-- 圖例 -->
  <rect x="440" y="252" width="256" height="104" rx="7" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-opacity="0.6"/>
  <text x="456" y="274" font-size="12" font-weight="600" fill="var(--fig-text)">圖例</text>
  <line x1="456" y1="294" x2="496" y2="294" stroke="var(--fig-primary)" stroke-width="2.5"/>
  <text x="506" y="298" font-size="11.5" fill="var(--fig-text)">激發雷射（下行）</text>
  <line x1="456" y1="318" x2="496" y2="318" stroke="var(--fig-green)" stroke-width="2.5"/>
  <text x="506" y="322" font-size="11.5" fill="var(--fig-text)">焦平面螢光 → 通過針孔</text>
  <line x1="456" y1="342" x2="496" y2="342" stroke="var(--fig-danger)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="506" y="346" font-size="11.5" fill="var(--fig-text)">焦外螢光 → 被擋住</text>
</svg>

<p class="fig-caption">圖 1-1　共軛焦光路原理：只有來自焦平面的螢光能穿過針孔抵達 PMT</p>

## 1.2 與傳統螢光顯微鏡的差異

| 比較項目 | 傳統螢光顯微鏡 | 共軛焦顯微鏡 FV500 |
| --- | --- | --- |
| 照明方式 | 全視野同時照明（汞燈／LED） | 雷射點照明 + 振鏡逐點掃描 |
| 影像來源 | 樣品全厚度螢光疊加 | 單一光學切片 |
| 焦外雜訊 | 高，厚樣品易糊 | 由 pinhole 濾除，背景極低 |
| 偵測器 | CCD／CMOS 相機 | PMT 光電倍增管 |
| 空間解析度 | 受繞射與焦外光限制 | 橫向較佳，並具備 Z 軸解析力 |
| 三維能力 | 無（需去卷積） | 直接 Z-Stack 取得三維資料 |
| 擷取速度 | 快（毫秒級整張） | 較慢（逐點掃描，秒級一張） |
| 樣品負擔 | 全域曝光，整體光漂白 | 僅掃描區受光，但點強度高 |

::: tip 什麼時候該用共軛焦？
- 樣品厚度超過約 10 μm（組織切片、整體染色、球狀體、活細胞團）。
- 需要**定量**螢光強度或共定位（co-localization）分析。
- 需要三維結構或沿 Z 軸的分佈資訊。

若樣品是單層貼壁細胞且訊號很弱，傳統螢光顯微鏡＋相機反而更快、光漂白更少。
:::

## 1.3 FV500 系統特色

- **雙通道同步偵測**　CH1 / CH2 各有獨立 PMT、獨立 Gain / Offset 與可抽換 barrier filter，可同時記錄兩種螢光。
- **手動共軛焦光圈**　掃描頭前面板的 **CONFOCAL APERTURE** 旋鈕分 1–5 段：段數越小＝pinhole 越小＝光學切片越薄、解析度越高但訊號越弱；段數越大＝訊號越強但切片變厚。段位表詳見[第4章 軟體介面](/software#confocal-aperture)。
- **多種掃描模式**　XY（單張）、XYZ（Z-Stack）、XYT（時間序列）、XYZT（四維）、XZ（垂直切面）、Line scan。
- **Sequential Scan**　多種螢光染劑串色時，可設定逐通道／逐幀依序激發，徹底消除 bleed-through。
- **Kalman／Line 平均**　以多次掃描平均抑制 PMT 雜訊，明顯提升弱訊號影像品質。
- **明視野／DIC 同步**　透射光偵測器可與共軛焦螢光同時擷取，將螢光疊在細胞形態上。
- **IX71 倒立式本體**　適合培養皿、多孔盤與活細胞觀察，樣品由上方自由取放。

::: warning 系統年份與軟體環境
FV500 搭配的 FLUOVIEW v5.0 執行於 **Windows XP**。此電腦**不應**連上網際網路，也不建議插入來路不明的隨身碟。資料備份方式請見 [第8章 檔案管理](/file-management)。
:::
