# 拾声 XianDial

[中文](#中文) | [English](#english)

---

## 中文

> 抽屉里那台老收音机回来了。拧开旋钮就能听戏。

**拾声**是一个**单文件**的网络收音机 —— 一个 HTML 文件，双击就开，无后端、无 CDN、无图片、无第三方脚本。

### 在线版

**https://podcatcher962.github.io/xiandial/**

手机浏览器打开也能用，可以「添加到主屏幕」当 App 点。

### 功能

| 模块 | 说明 |
|---|---|
| **戏台** | **1131 个电台**，按 央广 / 国广 / 地方台（再分 31 省，含大量地级市台）/ 交通台 / 新闻综合 / 教育台 / 戏曲 / 说书 / 文艺 / 音乐 / 怀旧老歌 / 网络台 / 电视伴音 分类。"地方台"选中后还能按下排 31 个省份再筛一层，省里再收着地级市台（苏州、宁波、唐山、徐州…）。**每一个都经真浏览器逐台试播验证** |
| **搜索** | 台名、分类、**拼音**（首字母与全拼都认）三路一起搜 —— 打「hnt」出河南台、「pingshu」出评书台、「xianggang」出香港台，1131 个台里秒找「河南」「评书」「央视」 |
| **锁屏控制** | 手机上锁屏 / 通知栏显示台名，支持耳机线控切台 |
| **拾藏** | 把自己下载的戏、评书、相声收进来（支持整文件夹、可拖放），存在本机 IndexedDB，断网照听、听到哪记到哪 |
| **边听边录** | 听到好的按底栏 **⏺** 就录下来 —— 按钮变红闪，旁边实时显示已录多久、多大。可设**固定时长**（15 / 30 / 60 分钟），也可选「**跟着定时关机停**」：听着睡着，醒来那段还在。录完自动进「拾藏」标着 `录音`，回听、删除都行；想留成普通文件，点那一条的 **存文件** 导到下载目录。录音全程不上传 |
| **匣子外观** | 木纹外壳 + 扬声器网罩 + 调频窗，指针随台移动、放送时电平表跳动 |
| **收藏** | 喜欢的台点卡片右上角的 **☆**（或底部播放条上的 **☆**，收的正是正在听的那个）就收进来；顶上「**收藏**」那一类里，收过的台一按就到。播放条星标随时能收、能取消 |
| **最近听过** | 自动记下听过的台（最多 12 条，只存本机），点台名接着听；不想要了按「一键清零」，收藏不受影响 |
| **换台** | 左右旋钮换台，中间圆钮开关；长按卡片也能收藏 |
| **定时关机** | 15 分 / 30 分 / 1 小时 / 1.5 小时，还能设「**播完就停**」；到点前 20 秒**音量缓缓收小**再停，不惊醒人 —— 听着睡着也不怕 |
| **断线自愈** | 信号断了**原地自动重接**（1.5 / 3 / 6 / 12 秒各试一次），接得上就接着放，接不上才换台 |
| **其他** | 自建台、深浅色、四档字号、大触控模式、减弱动效、设置导出导入 |

### 怎么用

1. 点「戏台」里任意一个台就开始放。
2. 想听自己存的戏 → 进「拾藏」，把音频文件或整个文件夹拖进去。
3. 喜欢的台，点卡片右上角的星标收好；在「戏台」页点顶上「收藏」那一类，收过的台一按就到。
4. 换台用左右旋钮，或直接点卡片；「最近听过」那一栏点台名就能接着听。

### 已知限制

- **中央广播电视总台央广 16 套、国广（CRI）6 套**、**31 个省市自治区的省市县广播**与**央视 / 省级卫视伴音**已内置；伴音流来自公开网络，若失效可在「自己加一个台」里换成新地址。
- **直播流地址会不定期更换**，这是网络电台的通病。程序在连不上时会自动试备用线路，但仍可能个别台失效。
- **HLS（.m3u8）流**已内嵌 hls.js 播放引擎 —— 桌面 Edge / Safari 走原生通道，安卓 Chrome 等浏览器由 hls.js 接管，**都能直接播**（央视与卫视伴音基本是 HLS）。
- 电台地址来自公开电台目录与各广播机构公开提供的直播流。

### 免责声明

- **本工具不托管、不缓存、不转码、不分发任何音频内容**，只把各广播电台**已经公开提供**的直播流地址交给浏览器播放。
- 所有电台音频流均来自第三方广播机构或公开电台目录，与本工具无关。收听内容的著作权归相应广播机构与权利人所有。
- 「拾藏」播放的是**你自己导入的本机文件**，请确保你对该文件拥有合法使用权。
- 「**边听边录**」录下的内容只存在你本机浏览器里，不上传、不回传，供个人时移回听；请勿再分发。
- 本工具可能因第三方接口变化而部分或全部失效，不承诺更新。
- 本工具不含统计、不含上报、不联网回传任何信息；所有收藏、设置、导入音频**只保存在你本机**。

### 技术说明

| 项目 | 说明 |
|---|---|
| 形态 | 单个 HTML 文件，约 537 KB（内嵌 hls.js 播放引擎），无依赖、无 CDN、无联网安装 |
| 播放 | 浏览器原生 `Audio` + 内嵌 hls.js；MP3 直播流与 HLS（m3u8）切片流 |
| 本地库 | IndexedDB，元数据与二进制分库存放，支持断点续播；**录音也存这里**，要拿到普通音频文件请在「拾藏」点「存文件」导出到下载目录 |
| 设置 | localStorage 保存，可导出 / 导入 JSON 备份 |
| 隐私 | 零采集、零上报、零第三方请求（仅播放时直连电台本身） |

### 授权

可自由使用、原样转发，请保留署名。若要改动，请只留给自己看，改过的版本不要对外分发。保留所有权利。

---

## English

> The old radio from the drawer is back. Just turn the dial and listen.

**XianDial** is a **single-file** internet radio for Chinese opera, storytelling and spoken-word broadcasts — one HTML file, opens with a double click. No backend, no CDN, no images, no third-party scripts.

### Live version

**https://podcatcher962.github.io/xiandial/**

Works in mobile browsers too — you can "Add to Home Screen" and use it like an app.

### Features

| Module | Description |
|---|---|
| **Stations** | **1131 stations**, grouped by CNR / CRI / local stations (further split into 31 provinces, incl. many prefecture cities) / traffic / news & general / education / opera / storytelling / arts / music / oldies / online-only / TV audio. Picking "local" reveals a second row of 31 province chips — and plenty of prefecture-city stations (Suzhou, Ningbo, Tangshan, Xuzhou …) behind them. **Every station was individually playback-tested in a real browser** |
| **Library** | Import your own downloaded opera / storytelling audio files (whole folders supported, drag-and-drop). Stored locally in IndexedDB — works offline, resumes where you left off |
| **Recording** | Press **⏺** on the player bar to record what you are hearing — the button blinks red and shows elapsed time and size. Set a **fixed length** (15 / 30 / 60 min) or "**stop with the sleep timer**", so what you fall asleep to is still there in the morning. Recordings land in **Library** tagged `录音`; play them back, delete them, or tap **Save file** to export one to your downloads folder. Nothing is ever uploaded |
| **Radio shell** | Wood-grain cabinet, speaker grille and a tuning window whose needle follows the station; a VU meter pulses during playback |
| **Favourites** | Tap the **☆** on a card — or the **☆** on the player bar, which bookmarks exactly what you are listening to — and the station lands in a dedicated "**Favourites**" category at the top of the list. The player-bar star toggles it on and off at any time |
| **Recently played** | The app keeps the last 12 stations you listened to (locally only); tap a name to resume, or hit "clear" to wipe the list — favourites are untouched |
| **Search** | Station name, category and **pinyin** (both initials and full spelling) all searchable — type "hnt" for Henan stations, "pingshu" for storytelling, or "xianggang" for Hong Kong; find any of the 1131 in a second |
| **Tuning** | Turn the left/right knobs to change station, the centre knob to toggle play; long-press a card to bookmark too |
| **Sleep timer** | 15 min / 30 min / 1 h / 1.5 h, plus "**stop after this**"; the volume **fades out over the last 20 seconds** — safe to fall asleep to |
| **Auto-reconnect** | If the stream drops, the app **retries in place** (1.5 / 3 / 6 / 12 s) and only switches station if it cannot get back |
| **Extras** | Add your own stations, light/dark themes, four font sizes, large-touch mode, reduced motion, settings export/import |

### How to use

1. Tap any station on the **Stations** page to start playing.
2. For your own files, open **Library** and drag in audio files or a whole folder.
3. Tap the star on a card to bookmark a favourite; the "Favourites" category at the top gathers them all.
4. Use the side knobs to tune, or tap cards directly; the "Recently played" row resumes in one tap.

### Known limitations

- **Live stream URLs change from time to time** — a common problem for internet radio. The app automatically retries backup routes, but individual stations may still go offline.
- **HLS (.m3u8) streams** are handled by an embedded hls.js engine: desktop Edge / Safari use their native HLS path, while Android Chrome and others are driven by hls.js. Both work (most CCTV and provincial-satellite feeds are HLS).
- Station addresses come from public radio directories and streams publicly provided by broadcasters.

### Disclaimer

- **This tool does not host, cache, transcode or redistribute any audio content.** It only hands publicly available live stream URLs to the browser for playback.
- All audio streams come from third-party broadcasters or public radio directories and are unrelated to this tool. Copyright in the content belongs to the respective broadcasters and rights holders.
- The **Library** plays **files you imported yourself**; please make sure you have the right to use them.
- The tool may partially or completely stop working as third-party interfaces change, with no guarantee of updates.
- No analytics, no telemetry, no network callbacks. Bookmarks, settings and imported audio **stay on your device only**.

### Technical notes

| Item | Detail |
|---|---|
| Form | A single HTML file, ~537 KB (with the embedded hls.js engine), no dependencies, no CDN, no install |
| Playback | Native browser `Audio` + embedded hls.js; MP3 live streams and HLS (m3u8) segments |
| Local library | IndexedDB, metadata and binary stored separately, resume supported |
| Settings | Saved in localStorage, exportable / importable as JSON |
| Privacy | Zero collection, zero telemetry, zero third-party requests (only direct connections to the stations themselves) |

### License

Free to use and redistribute as-is, please keep the attribution. If you modify it, keep it to yourself — do not distribute modified versions. All rights reserved.

---

© 永远的兰兰 · Lanlan Eternal
