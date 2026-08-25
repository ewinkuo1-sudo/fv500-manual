# 第九章　常用螢光染劑

選染劑的原則只有一句：**染劑的激發峰要靠近雷射波長，發射光要落在通道的 barrier filter 範圍內。**

## 9.1 螢光光譜與雷射波長對照

<svg class="fig" viewBox="0 0 720 470" role="img" aria-label="常用螢光染劑光譜與雷射波長對照圖">
  <rect x="0" y="0" width="720" height="470" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-text)">常用螢光染劑光譜 vs FV500 雷射波長</text>
  <!-- 繪圖區 -->
  <rect x="60" y="60" width="630" height="240" fill="none" stroke="var(--fig-line)" stroke-width="1.6"/>
  <!-- 發射光譜（填色） -->
  <path d="M140,300 C164,300 175,140 194,140 C242,140 269,300 330,300 Z" fill="#3b82f6" fill-opacity="0.32" stroke="#3b82f6" stroke-width="2"/>
  <path d="M270,300 C289,300 297,118 312,118 C367,118 400,300 470,300 Z" fill="#22c55e" fill-opacity="0.32" stroke="#22c55e" stroke-width="2"/>
  <path d="M390,300 C405,300 412,128 424,128 C479,128 510,300 580,300 Z" fill="#f97316" fill-opacity="0.32" stroke="#f97316" stroke-width="2"/>
  <path d="M556,300 C585,300 598,134 620,134 C645,134 658,300 690,300 Z" fill="#ef4444" fill-opacity="0.32" stroke="#ef4444" stroke-width="2"/>
  <!-- 激發光譜（虛線） -->
  <path d="M70,150 C100,172 120,242 150,300" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="6 4"/>
  <path d="M200,300 C228,300 245,168 263,168 C276,168 288,300 300,300" fill="none" stroke="#22c55e" stroke-width="1.8" stroke-dasharray="6 4"/>
  <path d="M310,300 C340,300 356,172 376,172 C388,172 400,300 410,300" fill="none" stroke="#f97316" stroke-width="1.8" stroke-dasharray="6 4"/>
  <path d="M505,300 C537,300 555,170 577,170 C589,170 600,300 610,300" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="6 4"/>
  <!-- 染劑標籤 -->
  <text x="194" y="130" text-anchor="middle" font-size="11.5" font-weight="700" fill="#3b82f6">DAPI</text>
  <text x="312" y="108" text-anchor="middle" font-size="11.5" font-weight="700" fill="#22c55e">FITC / GFP</text>
  <text x="424" y="118" text-anchor="middle" font-size="11.5" font-weight="700" fill="#f97316">TRITC / Cy3</text>
  <text x="620" y="124" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ef4444">Cy5</text>
  <!-- 雷射線 -->
  <line x1="249" y1="60" x2="249" y2="300" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="7 4"/>
  <text x="249" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#0ea5e9">488 nm</text>
  <text x="249" y="40" text-anchor="middle" font-size="9.5" fill="var(--fig-muted)">Ar（選配）</text>
  <line x1="361" y1="60" x2="361" y2="300" stroke="#22c55e" stroke-width="2" stroke-dasharray="7 4"/>
  <text x="361" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">543 nm</text>
  <text x="361" y="40" text-anchor="middle" font-size="9.5" fill="var(--fig-muted)">HeNe</text>
  <line x1="544" y1="60" x2="544" y2="300" stroke="#ef4444" stroke-width="2" stroke-dasharray="7 4"/>
  <text x="544" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">633 nm</text>
  <text x="544" y="40" text-anchor="middle" font-size="9.5" fill="var(--fig-muted)">HeNe</text>
  <!-- 座標軸 -->
  <g stroke="var(--fig-line)" stroke-width="1.4">
    <line x1="70" y1="300" x2="70" y2="306"/>
    <line x1="172" y1="300" x2="172" y2="306"/>
    <line x1="273" y1="300" x2="273" y2="306"/>
    <line x1="375" y1="300" x2="375" y2="306"/>
    <line x1="477" y1="300" x2="477" y2="306"/>
    <line x1="578" y1="300" x2="578" y2="306"/>
    <line x1="680" y1="300" x2="680" y2="306"/>
  </g>
  <g font-size="10.5" fill="var(--fig-muted)" text-anchor="middle">
    <text x="70" y="318">400</text>
    <text x="172" y="318">450</text>
    <text x="273" y="318">500</text>
    <text x="375" y="318">550</text>
    <text x="477" y="318">600</text>
    <text x="578" y="318">650</text>
    <text x="680" y="318">700</text>
  </g>
  <text x="44" y="180" text-anchor="middle" font-size="11" fill="var(--fig-muted)" transform="rotate(-90 44 180)">相對強度</text>
  <text x="690" y="332" text-anchor="end" font-size="11" fill="var(--fig-muted)">波長 (nm)</text>
  <!-- 圖例 -->
  <rect x="466" y="64" width="222" height="44" rx="6" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-opacity="0.6"/>
  <rect x="476" y="73" width="26" height="10" rx="2" fill="var(--fig-line)" fill-opacity="0.4" stroke="var(--fig-line)"/>
  <text x="510" y="82" font-size="10.5" fill="var(--fig-text)">發射光譜（Emission）</text>
  <line x1="476" y1="97" x2="502" y2="97" stroke="var(--fig-line)" stroke-width="1.8" stroke-dasharray="6 4"/>
  <text x="510" y="101" font-size="10.5" fill="var(--fig-text)">激發光譜（Excitation）</text>
  <!-- 濾片對照 -->
  <text x="66" y="340" font-size="12.5" font-weight="700" fill="var(--fig-text)">偵測通道與 barrier filter 對照</text>
  <rect x="284" y="350" width="41" height="13" rx="3" fill="#22c55e" fill-opacity="0.55" stroke="#22c55e" stroke-width="1.4"/>
  <text x="66" y="361" font-size="11" fill="var(--fig-text)">CH1：BA505-525　FITC / GFP / Alexa488</text>
  <rect x="395" y="378" width="82" height="13" rx="3" fill="#f97316" fill-opacity="0.55" stroke="#f97316" stroke-width="1.4"/>
  <text x="66" y="389" font-size="11" fill="var(--fig-text)">CH2：BA560-600　TRITC / Cy3 / Alexa546</text>
  <rect x="599" y="406" width="86" height="13" rx="3" fill="#ef4444" fill-opacity="0.55" stroke="#ef4444" stroke-width="1.4"/>
  <text x="66" y="417" font-size="11" fill="var(--fig-text)">CH2：BA660IF　　Cy5 / Alexa647 / TO-PRO-3</text>
  <!-- DM -->
  <line x1="416" y1="300" x2="416" y2="430" stroke="var(--fig-purple)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="416" y="446" text-anchor="middle" font-size="11" font-weight="700" fill="var(--fig-purple)">DM570</text>
  <line x1="538" y1="300" x2="538" y2="430" stroke="var(--fig-purple)" stroke-width="1.6" stroke-dasharray="5 4"/>
  <text x="538" y="446" text-anchor="middle" font-size="11" font-weight="700" fill="var(--fig-purple)">DM630</text>
  <text x="66" y="446" font-size="10.5" fill="var(--fig-muted)">DM 決定螢光在 CH1 / CH2 之間的分界波長</text>
  <text x="66" y="462" font-size="10" fill="var(--fig-muted)">※ 光譜為示意圖，實際峰值請查各廠商規格；DAPI 激發峰 358 nm 位於圖左界外。</text>
</svg>

<p class="fig-caption">圖 9-1　常用染劑光譜、雷射波長與偵測通道對照</p>

## 9.2 染劑 × 雷射 × 通道完整對照表

::: warning FV500 沒有紫外雷射
本機配置為 HeNe 543／633 nm（可能另有 Ar 488 nm），**沒有 405 nm 或 UV 雷射**。因此 **DAPI 與 Hoechst 無法用共軛焦通道擷取**，只能用 IX71 的目視螢光（汞燈 + UV 濾片組）觀察，或改用可被 488 nm 激發的核染劑（如 SYTOX Green、YOYO-1）。
:::

| 染劑 | 激發峰 (nm) | 發射峰 (nm) | 適用雷射 | 建議通道 / 濾片 | 備註 |
| --- | --- | --- | --- | --- | --- |
| **DAPI** | 358 | 461 | ✕ 無對應雷射 | 僅目視螢光 | 需 405/UV，本機不可共軛焦 |
| **Hoechst 33342** | 350 | 461 | ✕ 無對應雷射 | 僅目視螢光 | 同上，活細胞可用 |
| **FITC** | 495 | 519 | 488 nm | CH1 / BA505-525 | 易光漂白、對 pH 敏感 |
| **GFP (EGFP)** | 488 | 507 | 488 nm | CH1 / BA505-525 | 活細胞首選 |
| **Alexa Fluor 488** | 495 | 519 | 488 nm | CH1 / BA505-525 | 比 FITC 更耐光、更亮 |
| **YFP** | 514 | 527 | 488 nm（非最佳） | CH1 / BA510-550 | 與 GFP 串色嚴重 |
| **SYTOX Green** | 504 | 523 | 488 nm | CH1 / BA505-525 | 死細胞核染，可替代 DAPI |
| **TRITC** | 550 | 573 | **543 nm** | CH2 / BA560-600 | 本機主力綠雷射對應 |
| **Cy3** | 550 | 570 | **543 nm** | CH2 / BA560-600 | 亮、耐光 |
| **Alexa Fluor 546** | 556 | 573 | **543 nm** | CH2 / BA560-600 | 比 TRITC 穩定 |
| **Rhodamine (TAMRA)** | 555 | 580 | **543 nm** | CH2 / BA560-600 | |
| **mCherry** | 587 | 610 | 543 nm（效率偏低） | CH2 / BA610IF | 543 激發效率約 40% |
| **Texas Red** | 596 | 615 | 543 nm（效率低） | CH2 / BA610IF | 訊號弱，需拉高功率 |
| **Propidium Iodide** | 535 | 617 | **543 nm** | CH2 / BA610IF | 死細胞核染 |
| **Alexa Fluor 594** | 590 | 617 | 543 nm（效率中） | CH2 / BA610IF | |
| **Cy5** | 649 | 670 | **633 nm** | CH2 / BA660IF | 本機紅雷射主力 |
| **Alexa Fluor 633** | 632 | 647 | **633 nm** | CH2 / BA660IF | 與雷射匹配最佳 |
| **Alexa Fluor 647** | 650 | 668 | **633 nm** | CH2 / BA660IF | 極亮、耐光 |
| **TO-PRO-3** | 642 | 661 | **633 nm** | CH2 / BA660IF | 遠紅核染，可當「DAPI 替代」 |
| **DRAQ5** | 646 | 681 | **633 nm** | CH2 / BA660IF | 活/固定細胞核染 |

::: tip 本機最推薦的雙標組合
**TRITC（或 Alexa 546）+ Cy5（或 Alexa 647）**
- 分別由 543 nm 與 633 nm 激發，**兩者激發與發射都分得很開**，串色極少。
- 兩台 HeNe 雷射都用得上，不需依賴選配的 Ar 雷射。
- 偵測 DM 選 **DM630**。

若需要三標，第三色只能靠目視螢光（如 DAPI 對核）或改用 488 nm（若有 Ar 雷射）。
:::

## 9.3 依雷射反查可用染劑

| 雷射 | 可有效激發的染劑 |
| --- | --- |
| **488 nm（Ar，選配）** | FITC、GFP、Alexa 488、YFP、SYTOX Green、Fluo-4、Calcein-AM |
| **543 nm（HeNe 綠）** | TRITC、Cy3、Alexa 546、Rhodamine、PI、mCherry（效率較低）、Texas Red（效率低） |
| **633 nm（HeNe 紅）** | Cy5、Alexa 633、Alexa 647、TO-PRO-3、DRAQ5、APC |

## 9.4 串色（Bleed-through）問題

### 什麼是串色

**串色**是指 A 染劑的訊號跑進了原本應該只有 B 染劑的通道。主要兩種來源：

| 類型 | 成因 | 例子 |
| --- | --- | --- |
| **發射串色** | A 的發射光譜長尾延伸到 B 的濾片範圍 | FITC 的紅色尾巴進入 CH2 |
| **激發串色** | 用來激發 B 的雷射也激發了 A | 543 nm 也能激發 FITC（雖效率低） |

### 判斷方法：單染對照片

1. 準備**只染 FITC** 的樣品，用**紅色通道**的完整設定掃描。
2. 準備**只染 TRITC** 的樣品，用**綠色通道**的完整設定掃描。
3. 若對照片在「不該有訊號的通道」看得到影像 → **確定有串色**。

::: danger 沒做單染對照的共定位結論不可信
「綠紅重疊 = 共定位」這個結論，在沒有單染對照的情況下**沒有說服力**。審稿人會問，而且問得對。
:::

### 解法一：Sequential Scan（首選）

讓兩種雷射**不同時開啟**，從物理上消除激發串色。

| 模式 | 切換單位 | 速度 | 適用 |
| --- | --- | --- | --- |
| Line Sequential | 每條掃描線 | 快 | 活細胞、會動的樣品 |
| Frame Sequential | 每整張影像 | 慢 | 固定樣品、嚴重串色 |

設定方式見 [第6章 6.7 節](/advanced-scan#_6-7-sequential-scan-依序掃描)。

### 解法二：選光譜距離更遠的染劑

| 不佳組合 | 問題 | 建議改成 |
| --- | --- | --- |
| FITC + YFP | 光譜幾乎重疊 | FITC + TRITC |
| FITC + TRITC | 發射有部分重疊 | FITC + Cy5 |
| TRITC + Texas Red | 發射峰太近 | TRITC + Cy5 |
| GFP + Alexa 488 | 完全無法分辨 | 只能擇一 |

### 解法三：調整濾片與 DM

- 使用**帶通（band-pass）**濾片而非長通（IF）濾片，可有效切掉長尾。
- 例：CH1 用 BA505-525 而非 BA510IF，能大幅減少 FITC 尾巴進入紅通道。

### 解法四：降低串色來源的亮度

若 FITC 訊號極強而 TRITC 很弱，串色會更明顯。適度降低 488 nm 功率或減少 FITC 抗體用量，可改善通道分離。

## 9.5 光漂白（Photobleaching）

| 染劑 | 耐光性 | 建議 |
| --- | --- | --- |
| FITC | 差 | 縮短曝光、低功率、使用抗褪色劑 |
| GFP | 中等 | 活細胞務必低功率 |
| Alexa 系列 | **佳** | 需長時間拍攝時的首選 |
| Cy3 / Cy5 | 佳 | |
| TRITC | 中等 | |
| DAPI | 差 | 但本機無法共軛焦擷取 |

### 減少光漂白的通用做法

1. 雷射功率能低就低（**5–15 %** 起試）。
2. 用 **Focus / XY Repeat 低功率**找視野，正式拍才拉高。
3. 找好視野就按 **Stop**，不要一直掛著掃描。
4. pinhole 開大一段（3→4）換亮度，就能降低雷射功率。
5. 固定樣品使用**抗褪色封片劑**（如含 DABCO、n-propyl gallate、市售 ProLong / VECTASHIELD）。
6. 樣品避光保存，於 4°C 冷藏。
7. **先拍最容易漂白的通道**（例如 FITC 先拍、Cy5 後拍）。

## 9.6 樣品製備小提醒

| 項目 | 建議 |
| --- | --- |
| 蓋玻片 | **#1.5（0.17 mm）**，物鏡的設計厚度 |
| 封片劑折射率 | 與物鏡浸潤介質匹配（油鏡搭配 n≈1.515 的封片劑） |
| 抗體濃度 | 過量會提高背景，先做濃度梯度 |
| 阻斷（blocking） | 不足會造成整片背景螢光 |
| 自體螢光 | 植物、腦組織、含醛固定樣品的自體螢光集中在**綠色區**，此時改用紅／遠紅染劑較有利 |
| 樣品厚度 | 20X 物鏡有效穿透深度約 50–100 μm，更深需要清透化處理 |
