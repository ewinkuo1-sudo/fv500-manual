---
description: 'FV500 基本掃描六步驟：從放樣品、對焦、調訊號到存檔的完整日常流程'
---

# 第五章　基本掃描操作

本章是**最常用的日常流程**：從放樣品到存下一張漂亮的共軛焦影像，共六個步驟。

## 5.1 六步驟總覽

<svg class="fig" viewBox="0 0 720 470" role="img" aria-label="基本掃描六步驟流程圖">
  <defs>
    <marker id="bs-ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,1.5 L9,5 L0,8.5 z" fill="var(--fig-line)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="470" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="360" y="30" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-text)">基本掃描六步驟</text>
  <!-- 1 -->
  <rect x="28" y="52" width="186" height="112" rx="10" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2.4"/>
  <rect x="28" y="52" width="186" height="8" rx="4" fill="var(--fig-primary)"/>
  <circle cx="54" cy="86" r="15" fill="var(--fig-primary)"/>
  <text x="54" y="92" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">1</text>
  <text x="78" y="92" font-size="13.5" font-weight="700" fill="var(--fig-text)">準備樣品</text>
  <text x="44" y="118" font-size="11" fill="var(--fig-muted)">放上載物台、目視找到細胞</text>
  <text x="44" y="136" font-size="11" fill="var(--fig-muted)">光路桿切到「側面埠」</text>
  <text x="44" y="154" font-size="11" fill="var(--fig-muted)">選好物鏡（軟體同步）</text>
  <!-- 2 -->
  <rect x="264" y="52" width="186" height="112" rx="10" fill="var(--fig-surface)" stroke="var(--fig-purple)" stroke-width="2.4"/>
  <rect x="264" y="52" width="186" height="8" rx="4" fill="var(--fig-purple)"/>
  <circle cx="290" cy="86" r="15" fill="var(--fig-purple)"/>
  <text x="290" y="92" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">2</text>
  <text x="314" y="92" font-size="13.5" font-weight="700" fill="var(--fig-text)">選擇通道</text>
  <text x="280" y="118" font-size="11" fill="var(--fig-muted)">依染劑選雷射波長</text>
  <text x="280" y="136" font-size="11" fill="var(--fig-muted)">設定 DM 與 barrier filter</text>
  <text x="280" y="154" font-size="11" fill="var(--fig-muted)">確認 CH1 / CH2 啟用狀態</text>
  <!-- 3 -->
  <rect x="500" y="52" width="186" height="112" rx="10" fill="var(--fig-surface)" stroke="var(--fig-cyan)" stroke-width="2.4"/>
  <rect x="500" y="52" width="186" height="8" rx="4" fill="var(--fig-cyan)"/>
  <circle cx="526" cy="86" r="15" fill="var(--fig-cyan)"/>
  <text x="526" y="92" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">3</text>
  <text x="550" y="92" font-size="13.5" font-weight="700" fill="var(--fig-text)">XY Repeat 對焦</text>
  <text x="516" y="118" font-size="11" fill="var(--fig-muted)">低雷射功率即時預覽</text>
  <text x="516" y="136" font-size="11" fill="var(--fig-muted)">微調焦找到最清楚平面</text>
  <text x="516" y="154" font-size="11" fill="var(--fig-muted)">用 Zoom / Pan 決定構圖</text>
  <!-- 箭頭 1→2→3 -->
  <line x1="216" y1="108" x2="256" y2="108" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#bs-ar)"/>
  <line x1="452" y1="108" x2="492" y2="108" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#bs-ar)"/>
  <!-- 折返 3→4 -->
  <path d="M593 166 L593 200 L121 200 L121 236" fill="none" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#bs-ar)"/>
  <!-- 4 -->
  <rect x="28" y="242" width="186" height="128" rx="10" fill="var(--fig-surface)" stroke="var(--fig-amber)" stroke-width="2.4"/>
  <rect x="28" y="242" width="186" height="8" rx="4" fill="var(--fig-amber)"/>
  <circle cx="54" cy="276" r="15" fill="var(--fig-amber)"/>
  <text x="54" y="282" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">4</text>
  <text x="78" y="282" font-size="13.5" font-weight="700" fill="var(--fig-text)">調整訊號</text>
  <text x="44" y="308" font-size="11" fill="var(--fig-muted)">雷射功率 → PMT → Offset</text>
  <text x="44" y="326" font-size="11" fill="var(--fig-muted)">開 Hi-Lo LUT 檢查飽和</text>
  <text x="44" y="344" font-size="11" fill="var(--fig-muted)">紅點＝過曝　大片藍＝Offset 過頭</text>
  <text x="44" y="362" font-size="11" fill="var(--fig-amber)">PMT 400–600 V 為佳</text>
  <!-- 5 -->
  <rect x="264" y="242" width="186" height="128" rx="10" fill="var(--fig-surface)" stroke="var(--fig-danger)" stroke-width="2.4"/>
  <rect x="264" y="242" width="186" height="8" rx="4" fill="var(--fig-danger)"/>
  <circle cx="290" cy="276" r="15" fill="var(--fig-danger)"/>
  <text x="290" y="282" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">5</text>
  <text x="314" y="282" font-size="13.5" font-weight="700" fill="var(--fig-text)">Once 正式拍</text>
  <text x="280" y="308" font-size="11" fill="var(--fig-muted)">設定 Scan Size 512 或 1024</text>
  <text x="280" y="326" font-size="11" fill="var(--fig-muted)">開啟 Kalman 平均（2–4 次）</text>
  <text x="280" y="344" font-size="11" fill="var(--fig-muted)">掃描期間不要碰桌子</text>
  <text x="280" y="362" font-size="11" fill="var(--fig-danger)">拍完立刻停止雷射照射</text>
  <!-- 6 -->
  <rect x="500" y="242" width="186" height="128" rx="10" fill="var(--fig-surface)" stroke="var(--fig-green)" stroke-width="2.4"/>
  <rect x="500" y="242" width="186" height="8" rx="4" fill="var(--fig-green)"/>
  <circle cx="526" cy="276" r="15" fill="var(--fig-green)"/>
  <text x="526" y="282" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff">6</text>
  <text x="550" y="282" font-size="13.5" font-weight="700" fill="var(--fig-text)">存檔</text>
  <text x="516" y="308" font-size="11" fill="var(--fig-muted)">File I/O → Save（.oib）</text>
  <text x="516" y="326" font-size="11" fill="var(--fig-muted)">命名含日期_樣品_倍率_通道</text>
  <text x="516" y="344" font-size="11" fill="var(--fig-muted)">拍一張存一張，不要累積</text>
  <text x="516" y="362" font-size="11" fill="var(--fig-green)">離開前複製到備份碟</text>
  <line x1="216" y1="300" x2="256" y2="300" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#bs-ar)"/>
  <line x1="452" y1="300" x2="492" y2="300" stroke="var(--fig-line)" stroke-width="2.4" marker-end="url(#bs-ar)"/>
  <!-- 回饋箭頭 -->
  <path d="M593 372 L593 410 L121 410 L121 376" fill="none" stroke="var(--fig-line)" stroke-width="1.8" stroke-dasharray="7 5" marker-end="url(#bs-ar)"/>
  <text x="360" y="404" text-anchor="middle" font-size="11" fill="var(--fig-muted)">換視野或換樣品 → 回到步驟 4 重新確認訊號設定</text>
  <text x="360" y="444" text-anchor="middle" font-size="11.5" fill="var(--fig-muted)">整組實驗要互相比較時：步驟 4 的所有參數與 pinhole 段位必須全程固定</text>
</svg>

<p class="fig-caption">圖 5-1　基本掃描六步驟</p>

## 5.2 步驟一：準備樣品

1. 確認蓋玻片厚度為 **#1.5（0.17 mm）**，這是物鏡設計的標準厚度。用錯厚度會明顯降低解析度。
2. 樣品底面（朝物鏡那一面）**必須乾淨無殘膠、無指紋**，必要時用拭鏡紙沾少量酒精擦拭。
3. 將樣品放上 IX71 載物台並固定，避免掃描中滑動。
4. 先用**目鏡＋明視野**或目視螢光找到細胞、對到大致焦平面。
5. 將 IX71 的**光路切換桿切到側面埠**（掃描頭）。
6. 在軟體的 Objective 下拉選單選擇**與轉盤上一致**的物鏡。

::: warning 使用油鏡時
先確認物鏡確實是浸油型（標示 Oil），滴一滴專用浸油，**不要有氣泡**。乾鏡沾到油會嚴重影響成像，也可能滲入鏡片。
:::

## 5.3 步驟二：選擇通道

依樣品的螢光染劑設定：

| 染劑範例 | 雷射 | 建議 DM | 通道 |
| --- | --- | --- | --- |
| 僅 FITC / GFP | 488 nm | Mirror | CH1 |
| 僅 TRITC / Cy3 | 543 nm | Mirror | CH1 |
| FITC + TRITC | 488 + 543 nm | DM570 | CH1 綠 / CH2 紅 |
| TRITC + Cy5 | 543 + 633 nm | DM630 | CH1 紅 / CH2 遠紅 |
| 僅 Cy5 / Alexa 647 | 633 nm | Mirror | CH1 |

完整對照請見 [第9章 常用螢光染劑](/fluorophores)。

1. 在 Channel Setting 勾選需要的通道，**不用的通道關掉**。
2. 選擇對應雷射並設定輸出百分比（先從 **5–15 %** 開始）。
3. 確認偵測 DM（Mirror / DM570 / DM630）。
4. 確認掃描頭上實際插入的 **barrier filter** 與軟體顯示一致。

## 5.4 步驟三：XY Repeat 對焦

1. 把雷射功率調到**低值**（樣品不怕漂白時再調高）。
2. 按 **XY Repeat**（或 **Focus** 更快、更省光漂白）。
3. 轉 IX71 微調焦鈕，找到影像最銳利的平面。
4. 用載物台 X / Y 找到想拍的區域。
5. 需要放大細節時用 **Zoom + Pan**，不必移動載物台。
6. 構圖滿意後按 **Stop**。

::: tip 對焦技巧
共軛焦影像在離焦時會**整片變暗**（而不是變糊），這和一般顯微鏡不同。看到畫面幾乎全黑不要馬上調高 PMT，先確認是不是離焦了。
:::

## 5.5 步驟四：調整 PMT / Offset / Gain

**調整順序永遠是：雷射功率 → PMT → Offset → （必要時）Gain。**

1. 開啟 **Hi-Lo LUT**：畫面左下工具列的 **`<LUT>`** 按鈕 → [Color Tool] → Standard Color LUTs → **Hi-Lo**。
2. 調 PMT，讓**最亮的結構剛好開始出現少量紅點**，然後退回一點點，讓紅點消失。
3. 調 Offset，觀察背景的藍點：
   - 背景出現**零星**藍點 = Offset 調整正確（黑位準在零點附近）。
   - 背景出現**大片**藍色區域 = Offset 調過頭（弱訊號被截掉），需降低 Offset。
4. 若對比仍不足，再微調 Gain。

### Hi-Lo LUT 的判讀

| 顯示 | 意義 | 處理 |
| --- | --- | --- |
| 🔴 紅色像素 | 已飽和（達最大灰階），資訊永久遺失 | 降 PMT 或降雷射功率 |
| 🔵 背景零星藍點 | 黑位準在零點附近，Offset 調整正確 | 保持 |
| 🔵 大片藍色區域 | Offset 調過頭，弱訊號被截掉 | 降低 Offset |
| 其他灰階 | 正常範圍 | 保持 |

::: danger 飽和 = 資料作廢
一旦像素飽和，該處的真實強度就永遠救不回來。**要做定量分析的影像，絕對不能有紅點。** 拍好看的示意圖可以容忍少量飽和，但定量絕對不行。
:::

### 常見情境對策

| 情境 | 對策 |
| --- | --- |
| 訊號很弱、PMT 已 700 V | 調大 pinhole（3→4）、提高雷射功率、放慢掃描速度 |
| 亮的地方紅一片 | 降雷射功率（先）與 PMT |
| 背景灰但訊號也不強 | 檢查是否有環境漏光、barrier filter 是否裝錯 |
| 影像顆粒粗 | 開 Kalman 平均、降 PMT、放慢速度 |
| 兩通道亮度差很多 | 各通道獨立調 PMT，不要用同一組值 |

## 5.6 步驟五：Once 正式擷取

1. 設定 **Scan Size**：一般 512×512；要出版／放大檢視用 1024×1024。
2. 設定 **Speed**：想要更好的訊噪比就放慢，但注意光漂白。
3. 設定 **Kalman 平均**：

   | 次數 | 效果 | 代價 |
   | --- | --- | --- |
   | Off | 最快 | 雜訊最多 |
   | 2 | 雜訊明顯下降 | 時間 ×2 |
   | **3** | **常用平衡點** | 時間 ×3 |
   | 4 以上 | 邊際效益遞減 | 光漂白明顯 |

   > Kalman 是把同一平面掃描多次後平均，雜訊隨次數的平方根下降（平均 4 次 ≈ 雜訊減半）。活細胞或易漂白樣品建議 2 次以內。

4. 按 **Once**（Scan Once）。
5. **掃描期間不要碰顯微鏡、桌面或載物台**——防震桌只能擋地面震動，擋不了手推。
6. 掃描完成後按 **Stop** 停止掃描——掃描停止後雷射即不再照射樣品，避免不必要的光漂白。

## 5.7 步驟六：存檔

1. 開啟 **File I/O** 面板 → **Save**，格式選 **.oib**（Olympus Image Binary）。
2. 檔名建議：`20260825_HeLa_Tub-FITC_20X_01.oib`
3. 存到指定資料夾（不要存桌面）。
4. 離開前把整個資料夾複製到 USB 隨身碟或網路磁碟。

詳見 [第8章 檔案管理](/file-management)。

## 5.8 一次完整操作的檢查清單

- [ ] 雷射已熱機滿 15 分鐘
- [ ] 光路桿切到側面埠
- [ ] 軟體物鏡與實際物鏡一致
- [ ] 蓋玻片為 #1.5、樣品底面乾淨
- [ ] CONFOCAL APERTURE 已定在需要的段位（建議 3）
- [ ] barrier filter 與 DM 與染劑相符
- [ ] Hi-Lo 檢查：無紅點、背景僅零星藍點
- [ ] PMT 在 400–600 V 之間
- [ ] Kalman 已設定
- [ ] 影像已存檔並備份
- [ ] 登記簿已簽名
