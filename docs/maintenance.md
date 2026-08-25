---
description: 'FV500 日常維護：鏡片清潔、浸油處理與使用登記'
---

# 第十章　日常維護

儀器的壽命取決於每一位使用者的習慣。本章的每一條都很短，但每一條都有人違反過。

## 10.1 絕對禁止事項

<svg class="fig" viewBox="0 0 720 320" role="img" aria-label="FV500 使用禁止事項圖示">
  <rect x="0" y="0" width="720" height="320" rx="10" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="2.4"/>
  <text x="360" y="34" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-danger)">⚠　以下行為絕對禁止</text>
  <!-- 1 手指碰鏡片 -->
  <g transform="translate(36,60)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <circle cx="30" cy="34" r="11" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <path d="M30 23 L30 12 M24 16 L30 10 L36 16" fill="none" stroke="var(--fig-text)" stroke-width="2" stroke-linecap="round"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">手指觸摸鏡片</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">皮脂會永久腐蝕鍍膜，</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">且極難完全清除</text>
  </g>
  <!-- 2 面紙擦拭 -->
  <g transform="translate(266,60)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <rect x="18" y="30" width="24" height="16" rx="2" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <path d="M24 30 C24 20 36 20 36 30" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">用面紙擦鏡片</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">纖維會刮傷鏡面，</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">只能用專用拭鏡紙</text>
  </g>
  <!-- 3 直視雷射 -->
  <g transform="translate(496,60)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <path d="M14 32 C22 22 38 22 46 32 C38 42 22 42 14 32 Z" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <circle cx="30" cy="32" r="5" fill="var(--fig-text)"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">直視雷射光路</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">Class 3B 可造成</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">永久視網膜損傷</text>
  </g>
  <!-- 4 拔插纜線 -->
  <g transform="translate(36,190)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <path d="M18 38 L30 26 L42 38" fill="none" stroke="var(--fig-text)" stroke-width="2" stroke-linecap="round"/>
    <rect x="25" y="18" width="10" height="10" rx="2" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">自行拔插纜線 / 光纖</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">光路會失準，</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">需工程師重新校正</text>
  </g>
  <!-- 5 飲食 -->
  <g transform="translate(266,190)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <path d="M20 22 L22 42 L38 42 L40 22 Z" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <path d="M40 26 C46 26 46 34 40 34" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">飲料與食物進場</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">液體潑到電子元件</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">＝ 整台報銷</text>
  </g>
  <!-- 6 拆解 -->
  <g transform="translate(496,190)">
    <circle cx="30" cy="30" r="26" fill="none" stroke="var(--fig-danger)" stroke-width="3.2"/>
    <path d="M20 40 L34 26" stroke="var(--fig-text)" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M32 24 A7 7 0 1 1 40 32 L36 28 Z" fill="none" stroke="var(--fig-text)" stroke-width="2"/>
    <line x1="12" y1="48" x2="48" y2="12" stroke="var(--fig-danger)" stroke-width="3.6" stroke-linecap="round"/>
    <text x="72" y="24" font-size="12.5" font-weight="700" fill="var(--fig-text)">自行拆解或調整光路</text>
    <text x="72" y="42" font-size="10.5" fill="var(--fig-muted)">含移除護罩、鬆開</text>
    <text x="72" y="57" font-size="10.5" fill="var(--fig-muted)">掃描頭固定螺絲</text>
  </g>
</svg>

<p class="fig-caption">圖 10-1　六大禁止事項</p>

| 禁止事項 | 後果 |
| --- | --- |
| ❌ 手指直接觸摸任何鏡片（物鏡、目鏡、濾片） | 皮脂腐蝕鍍膜，永久性損傷 |
| ❌ 用面紙、衛生紙、實驗衣擦鏡片 | 纖維刮傷鏡面 |
| ❌ 使用丙酮、二甲苯等強溶劑清潔物鏡 | 溶解鏡片黏合膠，物鏡報廢 |
| ❌ 在雷射開啟時移除任何護罩或遮光板 | Class 3B 雷射直射，永久視力損傷 |
| ❌ 自行拔插光纖、訊號線、電源線 | 光路失準，需工程師到場校正 |
| ❌ 自行調整光路、鬆開掃描頭固定螺絲 | 系統無法成像 |
| ❌ 攜帶飲料或食物進入儀器室 | 液體潑灑毀損電子元件 |
| ❌ PMT 高壓開啟時打開明視野強光 | PMT 永久損壞 |
| ❌ 用力轉動已到底的物鏡轉盤或焦距鈕 | 機械結構損壞 |
| ❌ 乾鏡沾到浸油後繼續使用 | 成像模糊，油可能滲入鏡組 |
| ❌ 讓浸油乾涸在物鏡上過夜 | 油固化後極難清除 |
| ❌ 強拉或折壓光纖（彎曲半徑 < 10 cm） | 光纖內部斷裂，訊號永久衰減 |
| ❌ 在雷射運轉時直接切斷 FV5-PSU 電源 | 雷射管熱衝擊損傷 |
| ❌ 把個人隨身碟長期留在 XP 電腦上 | 病毒交叉感染 |
| ❌ 未經訓練即獨自操作 | 一切後果由操作者承擔 |

## 10.2 每次使用的檢查清單

### 使用前

- [ ] 在使用登記簿簽名（姓名、日期、起始時間）
- [ ] 檢查前一位使用者是否已清潔物鏡
- [ ] 確認桌面淨空，無雜物壓在纜線上
- [ ] 確認 CONFOCAL APERTURE 旋鈕的目前段位並記錄
- [ ] 確認掃描頭上的 barrier filter 型號並記錄
- [ ] 確認軟體物鏡設定與轉盤實際物鏡一致
- [ ] 確認硬碟剩餘空間足夠（狀態列可看）

### 使用中

- [ ] 雷射功率保持在能看清楚的最低值
- [ ] 不需掃描時按 Stop，不要一直掛著 XY Repeat
- [ ] 拍一張存一張
- [ ] 掃描期間不碰桌面、載物台與調焦鈕

### 使用後

- [ ] 影像全部存檔並複製到自己的儲存裝置
- [ ] **實際開啟一個備份檔確認可讀**
- [ ] 取下樣品
- [ ] 用過油鏡：以拭鏡紙擦淨浸油（可沾少量鏡頭清潔液）
- [ ] 物鏡轉回**最低倍率**（或依實驗室規定的收納位置）
- [ ] PMT 電壓降回低值
- [ ] 若更換過 barrier filter 或 DM，**換回原本的設定**
- [ ] 載物台歸位，台面清潔
- [ ] 依順序關機（或確認交接給下一位使用者）
- [ ] 登記簿填寫結束時間與異常狀況
- [ ] 帶走個人物品與隨身碟

## 10.3 每週維護（由管理者或值班人員執行）

- [ ] 檢查所有物鏡表面是否有殘留油漬、指紋（低倍檢視）
- [ ] 用吹球清除載物台與物鏡周圍的灰塵
- [ ] 檢查纜線與光纖是否被壓、被拉或鬆脫
- [ ] 檢查雷射模組散熱風扇是否正常運轉、出風口是否積塵
- [ ] 記錄室內溫濕度
- [ ] 確認硬碟剩餘空間，清理逾期的舊資料（依規定並先確認已備份）
- [ ] 檢視使用登記簿的異常回報
- [ ] 用標準螢光樣品（fluorescent beads）確認系統表現是否穩定
- [ ] 檢查防震桌是否仍為浮起狀態（氣壓式）

## 10.4 每月／每季

| 週期 | 項目 |
| --- | --- |
| 每月 | 記錄雷射累計使用時數；檢查影像品質是否有長期衰退趨勢 |
| 每月 | 清理電腦暫存檔、檢查磁碟健康狀況 |
| 每季 | 以 beads 樣品檢查通道對位（channel registration） |
| 每季 | 檢查濾片與 DM 是否有黴斑或鍍膜劣化 |
| 每年 | 由 Olympus 工程師執行定期保養與光路校正 |

## 10.5 物鏡清潔標準程序

::: warning 清潔前先確認
只有**確定髒了**才清潔。過度清潔本身就是磨損。
:::

### 需要的耗材

- **拭鏡紙**（lens tissue，如 Olympus 或 Thorlabs 專用）
- **鏡頭清潔液**（Olympus 原廠清潔液；或 70% 乙醇／異丙醇，依實驗室規定）
- **吹球**（不要用壓縮空氣罐，噴出的推進劑會殘留）

### 步驟

1. **先吹**　用吹球吹掉表面灰塵。灰塵沒吹掉就擦＝拿砂紙磨鏡片。
2. **摺紙**　取一張拭鏡紙對摺數次，形成乾淨的擦拭邊緣。**不要用手碰到要接觸鏡片的部分。**
3. **乾擦**　以極輕的力道，從鏡片中心**單向**向外螺旋擦拭一次。
4. **濕擦（僅在必要時）**　在拭鏡紙上滴 1 滴清潔液（**不要直接滴在物鏡上**），重複步驟 3。
5. **換紙**　每擦一次就換新的一張，不可重複使用。
6. **檢查**　用低倍目視或反光檢查是否已乾淨、無條紋。

::: danger 清潔物鏡的禁忌
- ❌ 清潔液直接滴在物鏡上（會滲入鏡組內部）
- ❌ 使用丙酮、二甲苯、甲苯
- ❌ 來回反覆擦拭（會把污漬磨進鍍膜）
- ❌ 使用棉花棒（棉絮殘留）
- ❌ 用力按壓（前鏡片可能是浮動式設計）
:::

## 10.6 油鏡使用注意事項

| 步驟 | 要點 |
| --- | --- |
| 選油 | 只用 **Olympus 原廠浸油**，不可與其他品牌混用（折射率不同） |
| 用量 | **一小滴**即可。太多會流到轉盤與其他物鏡上 |
| 氣泡 | 滴油後緩慢升起物鏡接觸樣品；有氣泡會嚴重降低成像品質 |
| 切換 | **絕不可**在沾油狀態下轉到乾鏡；務必先降下物鏡再切換 |
| 用後 | **當場**用拭鏡紙擦淨。油固化後極難清除 |
| 樣品 | 蓋玻片上的油也要擦掉，否則會沾污收納盒與其他樣品 |

::: warning 倒立顯微鏡的特殊風險
IX71 的物鏡在樣品**下方**，浸油與培養液**會往下滴**。若樣品皿破裂或封片不良，液體會直接流進物鏡。使用液體樣品時務必確認容器完好，並在物鏡周圍留意是否有滲漏。
:::

## 10.7 環境要求

| 項目 | 建議範圍 | 說明 |
| --- | --- | --- |
| **溫度** | 20–25 °C，**變動 < ±2 °C／日** | 溫度漂移造成焦點漂移與光路變形 |
| **濕度** | 40–60 % RH | > 70% 易長黴（光學鏡片的頭號殺手）；< 30% 易產生靜電 |
| **震動** | 光學防震桌須保持浮起 | 氣壓式桌面需確認氣壓正常 |
| **照明** | 掃描時應關閉室內燈或使用遮光簾 | 雜散光會被 PMT 收到，抬高背景 |
| **粉塵** | 儀器室應保持清潔，定期清掃 | 不使用時蓋上防塵罩 |
| **電源** | 建議接不斷電系統（UPS） | 突然斷電對雷射與電腦都有風險 |
| **空調出風** | 不可直吹顯微鏡本體 | 氣流造成焦點漂移與影像抖動 |

::: tip 黴菌是光學儀器最大的長期威脅
台灣的濕度長期偏高。若儀器室無恆濕控制，建議：
- 在儀器室放置除濕機並定期倒水。
- 物鏡不使用時放在**乾燥箱**（相對濕度 40–50%）。
- 長假前確認除濕設備正常運作。

黴菌一旦長在鏡片內部，**只能送修更換鏡組**。
:::

## 10.8 使用登記簿

每次使用都必須登記，內容至少包含：

| 欄位 | 說明 |
| --- | --- |
| 日期 / 起訖時間 | 用於計費與追蹤 |
| 使用者姓名 / 實驗室 | |
| 使用的雷射 | 用於統計雷射時數 |
| 使用的物鏡 | 特別是油鏡 |
| 更換過的濾片 / DM | **務必註明是否已換回** |
| 異常狀況 | 任何不對勁都要寫，不論多小 |

::: warning 異常一定要回報
「應該只是我的問題」——這句話讓很多小故障拖成大維修。**看到就寫，寫了就通知管理者。** 誠實回報的人不會被責怪，隱瞞的人才會。
:::
