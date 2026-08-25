# 第十一章　故障排除

::: tip 排查的第一原則
**先確認最簡單、最常見的原因。** 九成以上的「儀器壞了」其實是光路桿沒切、雷射沒開、物鏡選錯，或忘了對焦。
:::

## 11.1 「影像全黑」排查流程

這是最常見的問題，請依序檢查。

<svg class="fig" viewBox="0 0 720 520" role="img" aria-label="影像全黑排查決策流程圖">
  <defs>
    <marker id="tb-ar" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-primary)"/>
    </marker>
    <marker id="tb-arr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-danger)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="520" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- 起點 -->
  <rect x="126" y="16" width="208" height="40" rx="20" fill="var(--fig-danger)"/>
  <text x="230" y="41" text-anchor="middle" font-size="13.5" font-weight="700" fill="#ffffff">影像全黑 / 極暗</text>
  <line x1="230" y1="56" x2="230" y2="82" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#tb-ar)"/>
  <!-- D1 -->
  <polygon points="230,84 344,116 230,148 116,116" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="230" y="112" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">IX71 光路切換桿</text>
  <text x="230" y="128" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">已切到「側面埠」？</text>
  <line x1="344" y1="116" x2="392" y2="116" stroke="var(--fig-danger)" stroke-width="2.2" marker-end="url(#tb-arr)"/>
  <text x="368" y="108" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--fig-danger)">否</text>
  <rect x="398" y="96" width="288" height="40" rx="8" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="1.8"/>
  <text x="412" y="121" font-size="11.5" fill="var(--fig-text)">切到側面埠（光要送進掃描頭）</text>
  <line x1="230" y1="148" x2="230" y2="170" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#tb-ar)"/>
  <text x="242" y="164" font-size="10.5" font-weight="700" fill="var(--fig-green)">是</text>
  <!-- D2 -->
  <polygon points="230,172 344,204 230,236 116,204" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="230" y="200" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">雷射已開啟、快門開，</text>
  <text x="230" y="216" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">且已熱機 15 分鐘？</text>
  <line x1="344" y1="204" x2="392" y2="204" stroke="var(--fig-danger)" stroke-width="2.2" marker-end="url(#tb-arr)"/>
  <text x="368" y="196" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--fig-danger)">否</text>
  <rect x="398" y="184" width="288" height="40" rx="8" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="1.8"/>
  <text x="412" y="209" font-size="11.5" fill="var(--fig-text)">開啟雷射、確認 PSU 鑰匙在 ON</text>
  <line x1="230" y1="236" x2="230" y2="258" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#tb-ar)"/>
  <text x="242" y="252" font-size="10.5" font-weight="700" fill="var(--fig-green)">是</text>
  <!-- D3 -->
  <polygon points="230,260 344,292 230,324 116,292" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="230" y="288" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">通道、DM、barrier</text>
  <text x="230" y="304" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">filter 與染劑相符？</text>
  <line x1="344" y1="292" x2="392" y2="292" stroke="var(--fig-danger)" stroke-width="2.2" marker-end="url(#tb-arr)"/>
  <text x="368" y="284" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--fig-danger)">否</text>
  <rect x="398" y="272" width="288" height="40" rx="8" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="1.8"/>
  <text x="412" y="297" font-size="11.5" fill="var(--fig-text)">依第 9 章重設雷射 / DM / 濾片</text>
  <line x1="230" y1="324" x2="230" y2="346" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#tb-ar)"/>
  <text x="242" y="340" font-size="10.5" font-weight="700" fill="var(--fig-green)">是</text>
  <!-- D4 -->
  <polygon points="230,348 344,380 230,412 116,380" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="230" y="376" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">用明視野或目鏡</text>
  <text x="230" y="392" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">確認焦平面正確？</text>
  <line x1="344" y1="380" x2="392" y2="380" stroke="var(--fig-danger)" stroke-width="2.2" marker-end="url(#tb-arr)"/>
  <text x="368" y="372" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--fig-danger)">否</text>
  <rect x="398" y="360" width="288" height="40" rx="8" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="1.8"/>
  <text x="412" y="385" font-size="11.5" fill="var(--fig-text)">回到目視重新對焦後再切側面埠</text>
  <line x1="230" y1="412" x2="230" y2="434" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#tb-ar)"/>
  <text x="242" y="428" font-size="10.5" font-weight="700" fill="var(--fig-green)">是</text>
  <!-- D5 -->
  <polygon points="230,436 344,464 230,492 116,464" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <text x="230" y="460" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">PMT 400–600 V、</text>
  <text x="230" y="476" text-anchor="middle" font-size="11.5" fill="var(--fig-text)">雷射功率 ≥ 10%？</text>
  <line x1="344" y1="464" x2="392" y2="464" stroke="var(--fig-danger)" stroke-width="2.2" marker-end="url(#tb-arr)"/>
  <text x="368" y="456" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--fig-danger)">否</text>
  <rect x="398" y="444" width="288" height="40" rx="8" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="1.8"/>
  <text x="412" y="469" font-size="11.5" fill="var(--fig-text)">提高雷射功率與 PMT、pinhole 開大</text>
  <!-- 結論 -->
  <rect x="398" y="16" width="288" height="64" rx="8" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="2"/>
  <text x="412" y="38" font-size="12" font-weight="700" fill="var(--fig-text)">全部都「是」仍全黑？</text>
  <text x="412" y="58" font-size="11" fill="var(--fig-muted)">→ 樣品無螢光或已完全漂白</text>
  <text x="412" y="74" font-size="11" fill="var(--fig-muted)">→ 換一片已知會亮的對照樣品驗證</text>
</svg>

<p class="fig-caption">圖 11-1　影像全黑的排查順序</p>

## 11.2 影像品質問題

| # | 問題 | 可能原因 | 解決方法 |
| --- | --- | --- | --- |
| 1 | **影像全黑** | 光路桿未切到側面埠 | 切到側面埠 |
| | | 雷射未開／快門關閉／未熱機 | 開啟雷射，等 15 分鐘 |
| | | 濾片或 DM 與染劑不符 | 依第 9 章重設 |
| | | 焦平面完全偏離 | 用明視野或目鏡重新對焦 |
| | | PMT 電壓過低 | 調到 400–600 V |
| | | 樣品已光漂白或根本沒染上 | 換新樣品，做陽性對照 |
| 2 | **影像太暗** | 雷射功率太低 | 提高到 10–20% |
| | | pinhole 太小 | CONFOCAL APERTURE 轉大一段 |
| | | 掃描太快 | 放慢 Speed |
| | | 樣品在深層，散射嚴重 | 靠近蓋玻片的區域訊號較強 |
| 3 | **影像過曝（Hi-Lo 一片紅）** | 雷射功率或 PMT 太高 | 先降雷射，再降 PMT |
| | | Gain 過高 | 降回 1.0 |
| 4 | **雜訊很多、顆粒粗** | PMT 電壓過高（>700 V） | 降 PMT，改為提高雷射功率 |
| | | 未使用平均 | 開啟 Kalman 2–4 次 |
| | | 掃描速度太快 | 放慢 Speed |
| 5 | **背景灰、對比差** | Offset 未調整 | 調高 Offset 讓背景轉黑 |
| | | 室內燈光漏入 | 關燈、拉遮光簾 |
| | | 樣品自體螢光 | 改用紅／遠紅染劑 |
| | | 抗體阻斷不足 | 重新製備樣品 |
| 6 | **影像模糊、無法對焦到清晰** | 蓋玻片厚度不對 | 改用 #1.5（0.17 mm） |
| | | 乾鏡沾到浸油 | 清潔物鏡 |
| | | 油鏡未加油或有氣泡 | 重新加油，排除氣泡 |
| | | 物鏡表面髒污 | 依 10.5 節清潔 |
| | | 封片劑折射率不匹配 | 換用匹配的封片劑 |
| 7 | **影像有橫向條紋／撕裂** | 掃描期間有震動 | 不要碰桌面，確認防震桌浮起 |
| | | Round Trip 掃描未對位 | 改用 One Way |
| | | 空調直吹 | 調整出風方向 |
| 8 | **兩個通道疊不準（位移）** | 通道對位偏移 | 用 beads 檢查，需工程師校正 |
| | | 使用 Sequential 時樣品移動 | 改用 Line Sequential |
| 9 | **綠紅通道看起來完全一樣** | 串色（bleed-through） | 做單染對照，改用 Sequential Scan |
| | | DM 或濾片裝錯 | 檢查實際插入的濾片 |
| 10 | **越拍越暗** | 光漂白 | 降低雷射功率、縮短曝光、用耐光染劑 |
| | | 雷射尚未熱機完成 | 等滿 15 分鐘 |
| 11 | **影像邊緣暗、中央亮** | 光路對位偏移 | 記錄並回報，需工程師校正 |
| | | Zoom 過低而光學元件邊緣暈影 | 提高 Zoom 或更換物鏡 |
| 12 | **長時間拍攝時焦點漂移** | 溫度變化 | 開機後平衡 20–30 分鐘再拍 |
| | | 樣品在培養液中沉降 | 改用 XYZT 抓較厚的 Z 範圍 |
| | | 浸油緩慢流動 | 減少用油量 |
| 13 | **比例尺數值明顯不合理** | 軟體物鏡設定與實際不符 | 改正物鏡選單 |

## 11.3 軟體與電腦問題

| # | 問題 | 可能原因 | 解決方法 |
| --- | --- | --- | --- |
| 14 | **軟體啟動時顯示「無法連線硬體」** | 開機順序錯誤（軟體先開） | 關閉軟體 → 確認硬體全開 → 重開軟體 |
| | | FV5-PSU 未開或鑰匙未轉 ON | 檢查電源與鑰匙 |
| | | 串列埠連線異常 | 完全關機再依序開機；仍不行請報修 |
| 15 | **軟體當機／無回應** | XP 系統不穩、記憶體不足 | 等 1 分鐘；仍無回應則結束程式重開 |
| | | 檔案過大 | 分段擷取，單檔控制在 2 GB 內 |
| 16 | **存檔失敗／硬碟空間不足** | 硬碟已滿 | 清理舊資料（先確認已備份） |
| | | 檔名含中文或特殊字元 | 改用英數字與底線 |
| 17 | **掃描按鈕變灰、無法點選** | 前一次掃描未正常結束 | 按 Stop；必要時重開軟體 |
| | | 模式設定不完整（如 Z 未設定） | 補齊必要參數 |
| 18 | **Z-Stack 無法執行** | Start / Stop Z 未設定或相同 | 重新設定 Start / Stop |
| | | Z 馬達行程到底 | 用粗調鈕把焦點移到行程中段 |
| 19 | **.oib 檔在別台電腦打不開** | 缺少 Bio-Formats | 用 FIJI + Bio-Formats Importer |
| | | 只複製了 .oif 而未複製同名資料夾 | 連資料夾一起複製 |

## 11.4 硬體問題

| # | 問題 | 可能原因 | 解決方法 |
| --- | --- | --- | --- |
| 20 | **雷射指示燈不亮** | PSU 鑰匙未轉 ON | 轉到 ON |
| | | 雷射開關未開 | 檢查各雷射模組開關 |
| | | 雷射管壽命終了 | **需工程師更換** |
| 21 | **雷射有開但沒有光輸出** | 安全連鎖被觸發 | 檢查護罩是否確實蓋好 |
| | | 快門故障 | **需工程師檢修** |
| 22 | **明視野燈不亮** | LG-PS2 未開或亮度在 MIN | 開電源，調高亮度 |
| | | MAIN / REMOTE 切換位置錯誤 | 切到 MAIN 試試 |
| | | 鹵素燈泡燒毀 | 通知管理者更換 |
| 23 | **物鏡轉盤卡住** | 轉盤未到定位 | 輕輕左右轉動找定位，**不可用力** |
| | | 物鏡碰到樣品 | 先降下物鏡再轉 |
| 24 | **焦距鈕轉不動** | 已達行程上／下限 | 反向轉回；不可硬轉 |
| 25 | **異音、異味、冒煙** | 電子元件故障 | **立即切斷 FV5-PSU、拔除牆插、通知管理者** |

## 11.5 必須通知工程師的情況

::: danger 以下狀況請立即停止使用並回報
- 冒煙、燒焦味、明顯異音
- 雷射完全無輸出，或輸出功率顯著下降
- 影像出現無法解釋的幾何變形、條紋、亮度不均
- 兩通道對位明顯偏移
- 掃描頭發出摩擦或撞擊聲（振鏡異常）
- 光纖接頭鬆脫、纜線外皮破損
- 物鏡鏡片有刮痕、裂痕或內部霧化／黴斑
- 焦距或載物台機構卡死
- 任何在自行排查後仍無法解決的問題
:::

### 回報時請提供

1. **發生時間**與**當時的操作步驟**。
2. 使用的物鏡、雷射、通道、濾片、DM 設定。
3. 錯誤訊息的**完整內容**（拍照最好）。
4. 問題是**每次都發生**還是偶發。
5. 是否已嘗試過完全關機重開。
6. 有問題的影像檔案。

::: warning 不要自行嘗試維修
不要拆開任何機殼、不要調整光路螺絲、不要拔插光纖。**一次錯誤的「幫忙」可能造成數十萬元的校正費用。**
:::

## 11.6 快速自我檢查表

遇到問題時，先依序確認這 10 件事：

- [ ] FV5-PSU 鑰匙在 ON、主開關在 ON
- [ ] 兩台 HeNe 雷射都已開啟且熱機滿 15 分鐘
- [ ] IX71 光路切換桿在「側面埠」
- [ ] 軟體選的物鏡＝轉盤上的物鏡
- [ ] 雷射波長與染劑相符
- [ ] DM 與 barrier filter 與染劑相符
- [ ] 目視或明視野下確認樣品確實在焦平面上
- [ ] PMT 在 400–600 V、雷射功率 ≥ 10%
- [ ] CONFOCAL APERTURE 不在 1（先轉到 3 試試）
- [ ] 換一片**已知會亮的對照樣品**驗證是儀器還是樣品的問題

> 最後一項最有價值：**永遠準備一片保證會亮的對照樣品。** 它能在 30 秒內告訴你問題出在儀器還是樣品。
