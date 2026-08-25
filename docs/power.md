# 第三章　開關機程序

::: danger 順序錯誤可能損壞設備
開關機**必須嚴格依照順序**。跳步或顛倒順序可能造成雷射管損傷、PMT 受損或系統無法辨識硬體。若中途發現順序做錯，請完全關機、等待 5 分鐘後重新依序開機。
:::

## 3.1 開機程序

<svg class="fig" viewBox="0 0 700 600" role="img" aria-label="FV500 開機流程圖">
  <defs>
    <marker id="pu-ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,1.5 L9,5 L0,8.5 z" fill="var(--fig-primary)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="700" height="600" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="200" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-primary)">開機流程（由上而下）</text>
  <!-- 1 -->
  <rect x="46" y="42" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <circle cx="76" cy="70" r="15" fill="var(--fig-primary)"/>
  <text x="76" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">1</text>
  <text x="102" y="66" font-size="13.5" font-weight="600" fill="var(--fig-text)">開啟 FV5-PSU 電源供應器</text>
  <text x="102" y="86" font-size="11" fill="var(--fig-muted)">鑰匙轉至 ON → 主開關切至 ON</text>
  <line x1="200" y1="98" x2="200" y2="124" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#pu-ar)"/>
  <!-- 2 -->
  <rect x="46" y="128" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <circle cx="76" cy="156" r="15" fill="var(--fig-primary)"/>
  <text x="76" y="162" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">2</text>
  <text x="102" y="152" font-size="13.5" font-weight="600" fill="var(--fig-text)">開啟 HeNe 雷射 ×2</text>
  <text x="102" y="172" font-size="11" fill="var(--fig-muted)">543 nm（綠）、633 nm（紅）各自開關</text>
  <line x1="200" y1="184" x2="200" y2="210" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#pu-ar)"/>
  <!-- 3 等待 -->
  <rect x="46" y="214" width="308" height="70" rx="10" fill="var(--fig-amber-soft)" stroke="var(--fig-amber)" stroke-width="2.4" stroke-dasharray="8 5"/>
  <circle cx="76" cy="249" r="15" fill="var(--fig-amber)"/>
  <text x="76" y="255" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">3</text>
  <g transform="translate(316,249)">
    <circle cx="0" cy="0" r="17" fill="none" stroke="var(--fig-amber)" stroke-width="2.4"/>
    <path d="M0 -10 L0 0 L8 5" fill="none" stroke="var(--fig-amber)" stroke-width="2.4" stroke-linecap="round"/>
  </g>
  <text x="102" y="240" font-size="13.5" font-weight="600" fill="var(--fig-text)">等待 15 分鐘熱機</text>
  <text x="102" y="259" font-size="11" fill="var(--fig-muted)">HeNe 雷射需熱機才能輸出穩定功率</text>
  <text x="102" y="275" font-size="11" fill="var(--fig-amber)">定量實驗務必等滿 15 分鐘</text>
  <line x1="200" y1="284" x2="200" y2="310" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#pu-ar)"/>
  <!-- 4 -->
  <rect x="46" y="314" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="76" cy="342" r="15" fill="var(--fig-line)"/>
  <text x="76" y="348" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">4</text>
  <text x="102" y="338" font-size="13.5" font-weight="600" fill="var(--fig-text)">開啟 LG-PS2（僅明視野需要）</text>
  <text x="102" y="358" font-size="11" fill="var(--fig-muted)">亮度先轉到 MIN，之後再慢慢調亮</text>
  <line x1="200" y1="370" x2="200" y2="396" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#pu-ar)"/>
  <!-- 5 -->
  <rect x="46" y="400" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2"/>
  <circle cx="76" cy="428" r="15" fill="var(--fig-primary)"/>
  <text x="76" y="434" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">5</text>
  <text x="102" y="424" font-size="13.5" font-weight="600" fill="var(--fig-text)">開啟控制電腦</text>
  <text x="102" y="444" font-size="11" fill="var(--fig-muted)">等 Windows XP 完全進入桌面</text>
  <line x1="200" y1="456" x2="200" y2="482" stroke="var(--fig-primary)" stroke-width="2.4" marker-end="url(#pu-ar)"/>
  <!-- 6 -->
  <rect x="46" y="486" width="308" height="60" rx="10" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="2.4"/>
  <circle cx="76" cy="516" r="15" fill="var(--fig-green)"/>
  <text x="76" y="522" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">6</text>
  <text x="102" y="510" font-size="13.5" font-weight="600" fill="var(--fig-text)">啟動 FLUOVIEW v5.0</text>
  <text x="102" y="530" font-size="11" fill="var(--fig-muted)">軟體必須最後開啟，才能抓到硬體</text>
  <!-- 警告框 -->
  <rect x="386" y="180" width="278" height="200" rx="10" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="2.4"/>
  <path d="M420 216 L436 190 L452 216 Z" fill="none" stroke="var(--fig-danger)" stroke-width="2.4" stroke-linejoin="round"/>
  <text x="436" y="213" text-anchor="middle" font-size="12" font-weight="700" fill="var(--fig-danger)">!</text>
  <text x="464" y="208" font-size="14" font-weight="700" fill="var(--fig-danger)">順序錯誤可能損壞設備</text>
  <text x="406" y="248" font-size="11.5" fill="var(--fig-text)">· 軟體必須在硬體全開之後才啟動</text>
  <text x="406" y="272" font-size="11.5" fill="var(--fig-text)">· 未熱機就取像 → 強度不穩、無法定量</text>
  <text x="406" y="296" font-size="11.5" fill="var(--fig-text)">· 雷射勿頻繁開關，會縮短雷射管壽命</text>
  <text x="406" y="320" font-size="11.5" fill="var(--fig-text)">· 開機中途斷電請等 5 分鐘再重來</text>
  <text x="406" y="344" font-size="11.5" fill="var(--fig-text)">· 掃描前確認光路桿切到「側面埠」</text>
  <text x="406" y="368" font-size="11.5" fill="var(--fig-text)">· 使用登記簿必須簽名</text>
</svg>

<p class="fig-caption">圖 3-1　開機流程</p>

### 開機步驟細節

**① 開啟 FV5-PSU**
1. 確認桌面淨空、樣品尚未放上載物台。
2. 將鑰匙插入 FV5-PSU 前面板，轉至 **ON**。
3. 將主開關切至 **ON**，確認指示燈亮起。

**② 開啟兩台 HeNe 雷射**
1. 依序打開 **543 nm** 與 **633 nm** 雷射模組的電源開關。
2. 確認雷射模組指示燈亮起、散熱風扇開始運轉。
3. 若配置 Ar 488 nm 雷射，另需將其電流／功率鈕依實驗室規定設定。

**③ 等待 15 分鐘**
- 這段時間可以準備樣品、登記使用紀錄、清潔物鏡。
- 熱機未完成時雷射功率會持續漂移，影像亮度會越拍越亮或越暗。

**④ 開啟 LG-PS2（如需明視野／DIC）**
1. 亮度旋鈕先轉到 **MIN**。
2. 切換開關依需求置於 **MAIN**（面板控制）或 **REMOTE**。
3. 打開電源，再慢慢把亮度調到需要的程度。

**⑤ 開啟控制電腦**
- 等待 Windows XP 完全載入桌面，不要在開機中途就點軟體。

**⑥ 啟動 FLUOVIEW v5.0**
- 雙擊桌面圖示，等待軟體完成硬體初始化（掃描頭會有輕微的機械聲）。
- 若軟體跳出「無法連線至硬體」，請見 [第11章 故障排除](/troubleshooting)。

## 3.2 關機程序

<svg class="fig" viewBox="0 0 700 600" role="img" aria-label="FV500 關機流程圖">
  <defs>
    <marker id="pd-ar" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
      <path d="M0,1.5 L9,5 L0,8.5 z" fill="var(--fig-purple)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="700" height="600" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <text x="200" y="28" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-purple)">關機流程（開機的反向順序）</text>
  <!-- 1 -->
  <rect x="46" y="42" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-purple)" stroke-width="2"/>
  <circle cx="76" cy="70" r="15" fill="var(--fig-purple)"/>
  <text x="76" y="76" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">1</text>
  <text x="102" y="66" font-size="13.5" font-weight="600" fill="var(--fig-text)">存檔並關閉 FLUOVIEW v5.0</text>
  <text x="102" y="86" font-size="11" fill="var(--fig-muted)">確認所有影像已存檔並複製到備份碟</text>
  <line x1="200" y1="98" x2="200" y2="124" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 2 -->
  <rect x="46" y="128" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-purple)" stroke-width="2"/>
  <circle cx="76" cy="156" r="15" fill="var(--fig-purple)"/>
  <text x="76" y="162" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">2</text>
  <text x="102" y="152" font-size="13.5" font-weight="600" fill="var(--fig-text)">取下樣品、清潔物鏡</text>
  <text x="102" y="172" font-size="11" fill="var(--fig-muted)">用過油鏡務必用拭鏡紙擦淨浸油</text>
  <line x1="200" y1="184" x2="200" y2="210" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 3 -->
  <rect x="46" y="214" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-purple)" stroke-width="2"/>
  <circle cx="76" cy="242" r="15" fill="var(--fig-purple)"/>
  <text x="76" y="248" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">3</text>
  <text x="102" y="238" font-size="13.5" font-weight="600" fill="var(--fig-text)">關閉電腦（正常關機）</text>
  <text x="102" y="258" font-size="11" fill="var(--fig-muted)">「開始 → 關機」，勿直接斷電</text>
  <line x1="200" y1="270" x2="200" y2="296" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 4 -->
  <rect x="46" y="300" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-width="2" stroke-dasharray="6 4"/>
  <circle cx="76" cy="328" r="15" fill="var(--fig-line)"/>
  <text x="76" y="334" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">4</text>
  <text x="102" y="324" font-size="13.5" font-weight="600" fill="var(--fig-text)">關閉 LG-PS2</text>
  <text x="102" y="344" font-size="11" fill="var(--fig-muted)">先把亮度轉回 MIN，再關電源</text>
  <line x1="200" y1="356" x2="200" y2="382" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 5 -->
  <rect x="46" y="386" width="308" height="56" rx="10" fill="var(--fig-surface)" stroke="var(--fig-purple)" stroke-width="2"/>
  <circle cx="76" cy="414" r="15" fill="var(--fig-purple)"/>
  <text x="76" y="420" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">5</text>
  <text x="102" y="410" font-size="13.5" font-weight="600" fill="var(--fig-text)">關閉 HeNe 雷射 ×2</text>
  <text x="102" y="430" font-size="11" fill="var(--fig-muted)">543 nm、633 nm 各自關閉</text>
  <line x1="200" y1="442" x2="200" y2="468" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 6 等待散熱 -->
  <rect x="46" y="472" width="308" height="56" rx="10" fill="var(--fig-amber-soft)" stroke="var(--fig-amber)" stroke-width="2.4" stroke-dasharray="8 5"/>
  <circle cx="76" cy="500" r="15" fill="var(--fig-amber)"/>
  <text x="76" y="506" text-anchor="middle" font-size="15" font-weight="700" fill="var(--fig-bg)">6</text>
  <g transform="translate(320,500)">
    <circle cx="0" cy="0" r="15" fill="none" stroke="var(--fig-amber)" stroke-width="2.2"/>
    <path d="M0 -9 L0 0 L7 4" fill="none" stroke="var(--fig-amber)" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <text x="102" y="496" font-size="13.5" font-weight="600" fill="var(--fig-text)">等待風扇散熱約 5 分鐘</text>
  <text x="102" y="516" font-size="11" fill="var(--fig-muted)">風扇停止前不要切斷 PSU 電源</text>
  <line x1="200" y1="528" x2="200" y2="548" stroke="var(--fig-purple)" stroke-width="2.4" marker-end="url(#pd-ar)"/>
  <!-- 7 -->
  <rect x="46" y="552" width="308" height="42" rx="10" fill="var(--fig-green-soft)" stroke="var(--fig-green)" stroke-width="2.4"/>
  <circle cx="76" cy="573" r="14" fill="var(--fig-green)"/>
  <text x="76" y="579" text-anchor="middle" font-size="14" font-weight="700" fill="var(--fig-bg)">7</text>
  <text x="102" y="578" font-size="13" font-weight="600" fill="var(--fig-text)">FV5-PSU：OFF → 鑰匙轉 OFF 並取下</text>
  <!-- 提醒框 -->
  <rect x="386" y="170" width="278" height="216" rx="10" fill="var(--fig-danger-soft)" stroke="var(--fig-danger)" stroke-width="2.4"/>
  <path d="M420 206 L436 180 L452 206 Z" fill="none" stroke="var(--fig-danger)" stroke-width="2.4" stroke-linejoin="round"/>
  <text x="436" y="203" text-anchor="middle" font-size="12" font-weight="700" fill="var(--fig-danger)">!</text>
  <text x="464" y="198" font-size="14" font-weight="700" fill="var(--fig-danger)">關機注意事項</text>
  <text x="406" y="238" font-size="11.5" fill="var(--fig-text)">· 絕不可先關 PSU 再關雷射</text>
  <text x="406" y="262" font-size="11.5" fill="var(--fig-text)">· 雷射未散熱就斷電 → 傷雷射管</text>
  <text x="406" y="286" font-size="11.5" fill="var(--fig-text)">· 電腦務必正常關機，避免檔案損毀</text>
  <text x="406" y="310" font-size="11.5" fill="var(--fig-text)">· 資料先備份再關機</text>
  <text x="406" y="334" font-size="11.5" fill="var(--fig-text)">· 物鏡浸油務必當場擦乾淨</text>
  <text x="406" y="358" font-size="11.5" fill="var(--fig-text)">· 鑰匙交回管理者保管</text>
  <text x="406" y="378" font-size="11" fill="var(--fig-danger)">下一位使用者若在 2 小時內接手，雷射可不關</text>
</svg>

<p class="fig-caption">圖 3-2　關機流程</p>

## 3.3 使用者交接

::: tip 連續使用時不必完全關機
若下一位使用者在 **2 小時內**接手：
1. 存好自己的檔案並複製走。
2. 取下樣品、擦淨物鏡。
3. **保留** FV5-PSU 與雷射開啟狀態（省去 15 分鐘熱機、延長雷射管壽命）。
4. 在登記簿註明交接時間與下一位使用者。
:::

## 3.4 緊急處理

| 狀況 | 處理方式 |
| --- | --- |
| 冒煙、異味、異常聲響 | 立即切斷 FV5-PSU，拔除牆插，通知管理者 |
| 停電 | 復電後**不要**立刻開機，等 5 分鐘再依標準順序開機 |
| 雷射光外洩／護罩鬆脫 | 立即關閉雷射，勿自行修復，通知工程師 |
| 樣品打翻在載物台 | 關閉雷射，用拭鏡紙與適當清潔劑小心吸除，切勿讓液體流入物鏡 |
| 軟體當機 | 先嘗試關閉軟體重開；若無效則依標準順序完全關機再開 |

::: danger 雷射安全
- 系統含 **Class 3B** 雷射，直射或鏡面反射可造成永久性視網膜傷害。
- 掃描時**不要**把眼睛湊到物鏡上方或側面埠。
- 操作時取下手錶、戒指等反光飾品。
- 任何護罩、遮光板都不得移除。
:::
