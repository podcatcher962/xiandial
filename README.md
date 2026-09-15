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
| **戏台** | 52 个电台，分京戏 / 地方戏 / 说书 / 文艺 / 怀旧老歌五类。**每一个都经真浏览器逐台试播验证** |
| **拾藏** | 把自己下载的戏、评书、相声收进来（支持整文件夹、可拖放），存在本机 IndexedDB，断网照听、听到哪记到哪 |
| **匣子外观** | 木纹外壳 + 扬声器网罩 + 调频窗，指针随台移动、放送时电平表跳动 |
| **换台** | 左右旋钮换台，中间圆钮开关；长按卡片收藏 |
| **定时关机** | 15 分 / 30 分 / 1 小时 / 1.5 小时 —— 听着睡着也不怕 |
| **其他** | 自建台、深浅色、四档字号、大触控模式、减弱动效、设置导出导入、历史记录 |

### 怎么用

1. 点「戏台」里任意一个台就开始放。
2. 想听自己存的戏 → 进「拾藏」，把音频文件或整个文件夹拖进去。
3. 常听的台长按卡片收藏，下次不用翻。
4. 换台用左右旋钮，或直接点卡片。

### 已知限制

- **直播流地址会不定期更换**，这是网络电台的通病。程序在连不上时会自动试备用线路，但仍可能个别台失效。
- **HLS（.m3u8）流**在桌面版 Edge / Safari 上可原生播放；部分安卓浏览器不支持，程序会给这类台标 `HLS` 徽章提示。
- 电台地址来自公开电台目录与各广播机构公开提供的直播流。

### 免责声明

- **本工具不托管、不缓存、不转码、不分发任何音频内容**，只把各广播电台**已经公开提供**的直播流地址交给浏览器播放。
- 所有电台音频流均来自第三方广播机构或公开电台目录，与本工具无关。收听内容的著作权归相应广播机构与权利人所有。
- 「拾藏」播放的是**你自己导入的本机文件**，请确保你对该文件拥有合法使用权。
- 本工具可能因第三方接口变化而部分或全部失效，不承诺更新。
- 本工具不含统计、不含上报、不联网回传任何信息；所有收藏、设置、导入音频**只保存在你本机**。

### 技术说明

| 项目 | 说明 |
|---|---|
| 形态 | 单个 HTML 文件，约 68 KB，无依赖、无 CDN、无联网安装 |
| 播放 | 浏览器原生 `Audio`；MP3 直播流与 HLS（m3u8）切片流 |
| 本地库 | IndexedDB，元数据与二进制分库存放，支持断点续播 |
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
| **Stations** | 52 stations across five categories: Peking opera, regional opera, storytelling (pingshu), arts & culture, and vintage oldies. **Every station was individually playback-tested in a real browser** |
| **Library** | Import your own downloaded opera / storytelling audio files (whole folders supported, drag-and-drop). Stored locally in IndexedDB — works offline, resumes where you left off |
| **Radio shell** | Wood-grain cabinet, speaker grille and a tuning window whose needle follows the station; a VU meter pulses during playback |
| **Tuning** | Turn the left/right knobs to change station, the centre knob to toggle play; long-press a card to bookmark |
| **Sleep timer** | 15 min / 30 min / 1 h / 1.5 h — safe to fall asleep to |
| **Extras** | Add your own stations, light/dark themes, four font sizes, large-touch mode, reduced motion, settings export/import, listening history |

### How to use

1. Tap any station on the **Stations** page to start playing.
2. For your own files, open **Library** and drag in audio files or a whole folder.
3. Long-press a card to bookmark a favourite station.
4. Use the side knobs to tune, or tap cards directly.

### Known limitations

- **Live stream URLs change from time to time** — a common problem for internet radio. The app automatically retries backup routes, but individual stations may still go offline.
- **HLS (.m3u8) streams** play natively on desktop Edge / Safari; some Android browsers do not support them, and such stations are marked with an `HLS` badge.
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
| Form | A single HTML file, ~68 KB, no dependencies, no CDN, no install |
| Playback | Native browser `Audio`; MP3 live streams and HLS (m3u8) segments |
| Local library | IndexedDB, metadata and binary stored separately, resume supported |
| Settings | Saved in localStorage, exportable / importable as JSON |
| Privacy | Zero collection, zero telemetry, zero third-party requests (only direct connections to the stations themselves) |

### License

Free to use and redistribute as-is, please keep the attribution. If you modify it, keep it to yourself — do not distribute modified versions. All rights reserved.

---

© 永远的兰兰 · Lanlan Eternal
