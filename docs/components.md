# 第二章　系統組成

## 2.1 系統架構總覽

FV500 系統由**六大部分**組成：電源供應器、雷射光源、掃描頭、顯微鏡本體、透射光源、控制電腦。所有光學元件都安裝在光學防震桌（麵包板式）上，避免地面震動造成影像抖動。

<svg class="fig" viewBox="0 0 720 540" role="img" aria-label="FV500 系統架構連接圖">
  <defs>
    <marker id="sc-pw" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-amber)"/>
    </marker>
    <marker id="sc-op" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-green)"/>
    </marker>
    <marker id="sc-sg" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
      <path d="M0,1 L8,4.5 L0,8 z" fill="var(--fig-primary)"/>
    </marker>
    <marker id="sc-sg2" markerWidth="9" markerHeight="9" refX="2" refY="4.5" orient="auto">
      <path d="M8,1 L0,4.5 L8,8 z" fill="var(--fig-primary)"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="720" height="540" rx="10" fill="var(--fig-bg)" stroke="var(--fig-line)" stroke-opacity="0.35"/>
  <!-- 光學防震桌 -->
  <rect x="16" y="492" width="688" height="34" rx="5" fill="var(--fig-primary-soft)" stroke="var(--fig-line)" stroke-width="1.5"/>
  <text x="360" y="514" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--fig-text)">光學防震桌（麵包板式）— 所有光學元件的共同基座</text>
  <!-- 電源供應器 -->
  <rect x="30" y="38" width="150" height="62" rx="7" fill="var(--fig-surface)" stroke="var(--fig-amber)" stroke-width="2.5"/>
  <text x="105" y="62" text-anchor="middle" font-size="13.5" font-weight="600" fill="var(--fig-text)">FV5-PSU</text>
  <text x="105" y="80" text-anchor="middle" font-size="11" fill="var(--fig-muted)">電源供應器</text>
  <text x="105" y="94" text-anchor="middle" font-size="10.5" fill="var(--fig-amber)">鑰匙開關 + ON/OFF</text>
  <!-- 電源匯流 -->
  <path d="M105 100 L105 124 L18 124 L18 322" fill="none" stroke="var(--fig-amber)" stroke-width="2.2"/>
  <path d="M18 176 L26 176" stroke="var(--fig-amber)" stroke-width="2.2" marker-end="url(#sc-pw)"/>
  <path d="M18 246 L26 246" stroke="var(--fig-amber)" stroke-width="2.2" marker-end="url(#sc-pw)"/>
  <path d="M18 316 L26 316" stroke="var(--fig-amber)" stroke-width="2.2" marker-end="url(#sc-pw)"/>
  <text x="118" y="118" font-size="10.5" fill="var(--fig-amber)">供電</text>
  <!-- 雷射 -->
  <rect x="30" y="150" width="150" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-green)" stroke-width="2"/>
  <text x="105" y="172" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--fig-text)">HeNe 雷射 543 nm</text>
  <text x="105" y="190" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">綠光 · Class 3B</text>
  <rect x="30" y="220" width="150" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-green)" stroke-width="2"/>
  <text x="105" y="242" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--fig-text)">HeNe 雷射 633 nm</text>
  <text x="105" y="260" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">紅光 · Class 3B</text>
  <rect x="30" y="290" width="150" height="52" rx="7" fill="var(--fig-surface)" stroke="var(--fig-green)" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="105" y="312" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--fig-text)">Ar 雷射 488 nm</text>
  <text x="105" y="330" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">藍光 · 選配</text>
  <!-- 光纖匯入掃描頭 -->
  <path d="M180 176 L226 176 L226 212" fill="none" stroke="var(--fig-green)" stroke-width="2"/>
  <path d="M180 246 L226 246 L226 220" fill="none" stroke="var(--fig-green)" stroke-width="2"/>
  <path d="M180 316 L212 316 L212 216 L226 216" fill="none" stroke="var(--fig-green)" stroke-width="2" stroke-dasharray="6 4"/>
  <path d="M226 216 L282 216" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#sc-op)"/>
  <text x="238" y="206" font-size="10.5" fill="var(--fig-green)">光纖</text>
  <!-- 掃描頭 -->
  <rect x="286" y="150" width="196" height="136" rx="8" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2.5"/>
  <text x="384" y="174" text-anchor="middle" font-size="14" font-weight="600" fill="var(--fig-text)">FluoView 掃描頭</text>
  <line x1="300" y1="184" x2="468" y2="184" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <text x="302" y="202" font-size="11" fill="var(--fig-muted)">· 振鏡掃描器（X / Y）</text>
  <text x="302" y="220" font-size="11" fill="var(--fig-muted)">· CONFOCAL APERTURE 1–5</text>
  <text x="302" y="238" font-size="11" fill="var(--fig-muted)">· 偵測 DM：Mirror/DM570/DM630</text>
  <text x="302" y="256" font-size="11" fill="var(--fig-muted)">· CH1 / CH2 PMT + barrier filter</text>
  <text x="302" y="276" font-size="11" fill="var(--fig-primary)">前面板：手動 pinhole 旋鈕</text>
  <!-- 掃描頭 <-> IX71 -->
  <path d="M384 286 L384 356" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#sc-op)"/>
  <path d="M356 356 L356 292" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#sc-op)"/>
  <text x="396" y="326" font-size="11" fill="var(--fig-green)">安裝於側面埠</text>
  <text x="396" y="342" font-size="10.5" fill="var(--fig-muted)">Side Port</text>
  <!-- IX71 -->
  <rect x="286" y="360" width="196" height="112" rx="8" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2.5"/>
  <text x="384" y="384" text-anchor="middle" font-size="14" font-weight="600" fill="var(--fig-text)">Olympus IX71</text>
  <text x="384" y="402" text-anchor="middle" font-size="11" fill="var(--fig-muted)">倒立式研究顯微鏡</text>
  <line x1="300" y1="412" x2="468" y2="412" stroke="var(--fig-line)" stroke-opacity="0.5"/>
  <text x="302" y="430" font-size="11" fill="var(--fig-muted)">· 物鏡轉盤（UPLAPO 20X 等）</text>
  <text x="302" y="448" font-size="11" fill="var(--fig-muted)">· 載物台 · 粗/微調焦</text>
  <text x="302" y="466" font-size="11" fill="var(--fig-muted)">· 目鏡 / 光路切換桿</text>
  <!-- LG-PS2 -->
  <rect x="30" y="398" width="150" height="62" rx="7" fill="var(--fig-surface)" stroke="var(--fig-amber)" stroke-width="2"/>
  <text x="105" y="422" text-anchor="middle" font-size="13" font-weight="600" fill="var(--fig-text)">LG-PS2</text>
  <text x="105" y="440" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">鹵素燈電源</text>
  <text x="105" y="454" text-anchor="middle" font-size="10.5" fill="var(--fig-amber)">MIN↔MAX · MAIN/REMOTE</text>
  <path d="M180 428 L282 428" stroke="var(--fig-green)" stroke-width="2.5" marker-end="url(#sc-op)"/>
  <text x="232" y="420" text-anchor="middle" font-size="10.5" fill="var(--fig-green)">光纖導光</text>
  <text x="232" y="446" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">透射照明</text>
  <!-- 控制電腦 -->
  <rect x="546" y="150" width="156" height="96" rx="8" fill="var(--fig-surface)" stroke="var(--fig-primary)" stroke-width="2.5"/>
  <text x="624" y="176" text-anchor="middle" font-size="13.5" font-weight="600" fill="var(--fig-text)">控制電腦</text>
  <text x="624" y="196" text-anchor="middle" font-size="11" fill="var(--fig-muted)">Windows XP</text>
  <text x="624" y="216" text-anchor="middle" font-size="11.5" fill="var(--fig-primary)">FLUOVIEW v5.0</text>
  <text x="624" y="234" text-anchor="middle" font-size="10.5" fill="var(--fig-muted)">影像擷取 / 儲存 / 分析</text>
  <!-- PC <-> 掃描頭 -->
  <path d="M542 190 L488 190" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#sc-sg)"/>
  <path d="M488 210 L542 210" stroke="var(--fig-primary)" stroke-width="2.2" marker-end="url(#sc-sg2)" marker-start="url(#sc-sg2)"/>
  <text x="516" y="178" text-anchor="middle" font-size="10.5" fill="var(--fig-primary)">串列埠</text>
  <text x="516" y="230" text-anchor="middle" font-size="10.5" fill="var(--fig-primary)">影像資料</text>
  <!-- PC -> IX71 Z 控制 -->
  <path d="M624 246 L624 262 L704 262 L704 460 L490 460" fill="none" stroke="var(--fig-primary)" stroke-width="2.2" stroke-dasharray="7 4" marker-end="url(#sc-sg)"/>
  <text x="696" y="452" text-anchor="end" font-size="10.5" fill="var(--fig-primary)">Z 軸馬達控制</text>
  <!-- 圖例 -->
  <rect x="510" y="284" width="192" height="96" rx="7" fill="var(--fig-surface)" stroke="var(--fig-line)" stroke-opacity="0.6"/>
  <text x="524" y="304" font-size="12" font-weight="600" fill="var(--fig-text)">圖例</text>
  <line x1="524" y1="322" x2="558" y2="322" stroke="var(--fig-amber)" stroke-width="2.5"/>
  <text x="566" y="326" font-size="11" fill="var(--fig-text)">電源</text>
  <line x1="524" y1="344" x2="558" y2="344" stroke="var(--fig-green)" stroke-width="2.5"/>
  <text x="566" y="348" font-size="11" fill="var(--fig-text)">光路 / 光纖</text>
  <line x1="524" y1="366" x2="558" y2="366" stroke="var(--fig-primary)" stroke-width="2.5"/>
  <text x="566" y="370" font-size="11" fill="var(--fig-text)">電子訊號</text>
</svg>

<p class="fig-caption">圖 2-1　FV500 系統架構與連接關係</p>

## 2.2 各組件功能說明

### 2.2.1 FV5-PSU 電源供應器

系統的總電源，位於機櫃內或桌下。

| 控制元件 | 位置 | 功能 |
| --- | --- | --- |
| 鑰匙開關 | 前面板 | 雷射安全連鎖。轉到 ON 才允許雷射出光 |
| ON / OFF 切換 | 前面板 | 掃描頭與控制電路主電源 |
| 指示燈 | 前面板 | 亮起表示供電正常 |

::: warning 鑰匙管理
鑰匙為雷射安全管制品。**不使用時請轉到 OFF 並將鑰匙取下**，交由實驗室管理者保管，避免未受訓人員誤啟雷射。
:::

### 2.2.2 雷射光源

| 雷射 | 波長 | 顏色 | 等級 | 主要激發染劑 |
| --- | --- | --- | --- | --- |
| HeNe（綠） | 543 nm | 綠 | Class 3B | TRITC、Cy3、Alexa 546、Rhodamine |
| HeNe（紅） | 633 nm | 紅 | Class 3B | Cy5、Alexa 633、Alexa 647、TO-PRO-3 |
| Ar（選配） | 488 nm | 藍 | Class 3B | FITC、GFP、Alexa 488、YFP |

- HeNe 雷射為**氣體雷射**，開機後需 **10–15 分鐘**熱機才能輸出穩定功率。定量實驗務必等熱機完成。
- HeNe 雷射管有壽命（約數千小時），**請勿頻繁開關**；同一天內有多位使用者時，建議中間不要關閉。
- Ar 雷射（若配置）發熱量大，需確認散熱風扇運轉正常，且關機後要讓風扇繼續運轉散熱。

### 2.2.3 FluoView 掃描頭

安裝於 IX71 的**側面埠（side port）**，是整套系統的光學核心。

- **振鏡掃描器**　兩片高速擺動反射鏡，分別負責 X 與 Y 方向掃描。
- **CONFOCAL APERTURE 旋鈕**　前面板的手動 pinhole 調整鈕，共 1–5 段。

  | 段位 | Pinhole | 光學切片 | 訊號強度 | 適用情境 |
  | --- | --- | --- | --- | --- |
  | 1 | 最小 | 最薄 | 最弱 | 高解析度、強訊號樣品 |
  | 2 | 小 | 薄 | 弱 | 一般高品質影像 |
  | **3** | **中** | **中** | **中** | **建議起始值** |
  | 4 | 大 | 厚 | 強 | 訊號偏弱的樣品 |
  | 5 | 最大 | 最厚 | 最強 | 極弱訊號、快速定位 |

- **偵測分光鏡（Detection DM）**　決定螢光如何分配到 CH1 / CH2：

  | 設定 | 作用 | 典型用途 |
  | --- | --- | --- |
  | Mirror | 全部反射至單一通道 | 只用一個通道時 |
  | DM570 | 570 nm 以下 / 以上分開 | 綠 + 紅（FITC + TRITC） |
  | DM630 | 630 nm 以下 / 以上分開 | 紅 + 遠紅（TRITC + Cy5） |

- **CH1 / CH2 偵測器**　各含一支 PMT 與一個**可抽換 barrier filter 插槽**。更換濾片時務必記錄原本裝的型號，用完換回。

### 2.2.4 Olympus IX71 顯微鏡本體

倒立式設計，物鏡在樣品下方，適合培養皿與多孔盤。

- **物鏡轉盤**　含 UPLAPO 20X 等物鏡。切換時務必轉到定位（有段落感）。
- **粗調 / 微調焦**　微調每格約 1 μm；FV500 的 Z-Stack 由軟體透過 Z 馬達控制，手動旋鈕僅用於初步對焦。
- **光路切換桿**　在「目鏡」與「側面埠（掃描頭）」之間切換。**掃描時必須切到側面埠**，否則影像全黑。
- **濾片轉盤**　目視螢光用的濾片組（與共軛焦偵測路徑無關）。
- **載物台**　X / Y 移動旋鈕。

### 2.2.5 LG-PS2 透射光源

供應 IX71 上方的鹵素燈，用於明視野／DIC 觀察與透射光偵測。

| 控制元件 | 說明 |
| --- | --- |
| 亮度旋鈕 MIN ↔ MAX | 調整鹵素燈輸出。開機時先轉到 MIN 再逐步調亮 |
| MAIN / REMOTE 切換 | MAIN＝面板旋鈕控制；REMOTE＝由顯微鏡端或軟體控制 |
| 電源開關 | 只在需要明視野時開啟，可延長燈泡壽命 |

### 2.2.6 控制電腦

- Windows XP + **FLUOVIEW v5.0**。
- 負責掃描參數設定、影像擷取、儲存（.oib）與基本分析。
- 內含掃描控制介面卡，透過串列埠與掃描頭通訊。

## 2.3 背板連接埠說明

::: danger 請勿自行更動接線
以下資訊供辨識用途。所有光纖、訊號線與電源線都已由工程師校準固定，**任何拔插都可能導致光路失準或系統無法辨識硬體**。發現線材鬆脫請通知管理者，不要自行插回。
:::

| 位置 | 接口 | 連接對象 | 說明 |
| --- | --- | --- | --- |
| FV5-PSU 背板 | 主電源輸入 | 牆插 / UPS | 建議接不斷電系統 |
| FV5-PSU 背板 | 掃描頭供電 | 掃描頭 | 粗多芯電纜 |
| FV5-PSU 背板 | 雷射連鎖 | HeNe 雷射模組 | 安全連鎖訊號 |
| 掃描頭背面 | 光纖輸入埠 | 雷射合光模組 | 藍色／黑色光纖接頭，嚴禁拉扯 |
| 掃描頭背面 | 訊號纜線 | 控制電腦介面卡 | 傳送 PMT 影像資料 |
| 掃描頭底部 | 光學接環 | IX71 側面埠 | 以固定螺絲鎖住 |
| IX71 背面 | Z 馬達控制線 | 控制電腦 / PSU | 驅動 Z-Stack |
| IX71 上方燈室 | 導光纖 | LG-PS2 | 透射照明 |
| 電腦背面 | 串列埠（COM） | 掃描頭 | 控制指令 |

::: tip 光纖保養
光纖最小彎曲半徑約 **10 公分**，切勿折壓、踩踏或以重物壓住。清潔桌面時請避開所有纜線。
:::
