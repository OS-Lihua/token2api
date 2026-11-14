# Vane 品牌资产

采用「V 字形」标志和「酸橙石墨」配色。标志由两段粗笔画组成一个可读的 V，右上方一小块从主体分离并轻微旋转；分离的碎片表达「快到期的额度被拆出并流转」，主体仍是一个完整、稳定的字母，避免图形在缩小后失去识别度。

## 规范图

[`brand-sheet.svg`](brand-sheet.svg)（可编辑）与 [`brand-sheet.png`](brand-sheet.png) 汇总主标志、反白版、单色符号、应用图标、配色、1:1 尺寸样例与留白示意。修改标志或配色后需同步重新导出。

## 颜色与变量

| 用途 | 色值 | CSS 变量 |
| --- | --- | --- |
| 酸橙绿 | `#D1F344` | `--brand-lime` |
| 深橄榄 | `#2F3C15` | `--brand-olive`、`--accent` |
| 石墨黑 | `#171C13` | `--brand-graphite`、`--ink`、`--deep` |
| 暖白 | `#F7F9EE` | `--brand-paper`、`--frost` |

颜色定义集中在 `src/styles/globals.css`。主按钮采用酸橙绿底、石墨黑字和深色边框；悬停与按下沿用对应品牌变量。浅底链接和焦点边框使用深橄榄色。深色导航与代码区使用石墨黑，深底焦点使用酸橙绿。

酸橙绿不直接用于浅底小号文字。成功、警告、错误、资金审核和未知用量仍使用独立语义状态与文字说明，品牌色不改变业务状态。

## 页面标志

- `public/brand/logo-light.svg`：浅底版本，符号与字标均为石墨黑 `#171C13`。
- `public/brand/logo-dark.svg`：深底反白版本，符号为酸橙绿 `#D1F344`，字标为白色。
- `public/brand/mark.svg`：仅有符号的单色版本，用于空间受限或需要自行着色的场景。
- `src/app/_components/brand-logo.tsx`：统一品牌图像入口，使用 Next.js Image 直接展示可信的本地 SVG。

符号是自绘的可编辑路径，V 主体为 76×76 的两段粗笔画，右上分离块沿右臂方向上移 5 单位并旋转 3°，因此实际墨迹范围为 79.28×80.57（超出主体上沿 4.57、右沿 3.28）。字标已转为轮廓路径（Manrope 620，大写字高 46，字距 −0.005em），文件内不含文本节点，渲染不依赖本机字体。组合总尺寸 249.58×80.57，保持宽高比，不另加句点或用页面字体重排字标。

### 留白与最小尺寸

- 留白：标志四周至少留出 V 主体高度 1/4 的空白（约 19 单位），留白内不放文字、图标或边框。组合文件中符号墨迹到字标墨迹的间距约为 34 单位，大于该下限。
- 横向组合：最小高度 32px（宽约 99px），常用 36–44px。
- 单独符号：最小 20px（保留分离块）；小于 20px 时改用去掉分离块的简化形 [`public/brand/icon-simple.svg`](public/brand/icon-simple.svg)，此时最小 12px。16px 与 32px 的 favicon 使用该简化形。
- 图标底板：48 单位正方形酸橙绿底板配石墨黑符号，圆角 10；maskable 图标将墨迹居中于 512 画布，墨迹约占边长 58%，保持在遮罩安全区内。

## 浏览器与安装图标

- `public/icon.svg` 与 `public/favicon.ico`：酸橙绿底、石墨黑符号。ICO 包含 16、32、48px，其中 16、32px 使用简化形（分离缝小于 2px 会被抗锯齿抹平）。
- `public/brand/icon-simple.svg`：去掉分离块的简化符号，供 16px 及以下使用。
- `public/icons/icon-192.png`、`icon-512.png`：常规安装图标。
- `public/icons/icon-maskable-512.svg`、`icon-maskable-512.png`：预留中央安全区的可遮罩图标，SVG 为可编辑源文件。
- `src/app/apple-icon.png`：180px Apple 图标。
- `src/app/manifest.ts`：暖白启动背景与石墨黑安装主题色。

更换符号时需同步这些导出；maskable 图标应保持中央安全区，不直接替换为普通图标。

## 网页分享图

`src/app/opengraph-image.png` 是 1200×630px 的分享图，沿用同一标志与配色。可编辑源文件为 `public/brand/share.svg`；更新后需同步导出 PNG 和 `src/app/opengraph-image.alt.txt`。分享图中的字标与符号使用与主标志相同的路径，中文说明使用系统字体。

## 字体与授权

- 字标字体：Manrope，实例化字重 620，字距 −0.005em，已转为轮廓路径。
- 符号：自绘几何路径，无第三方字形或图形来源。
- 字体许可：Manrope 版权归 Manrope Project Authors，采用 SIL Open Font License 1.1，许可副本位于 `public/brand/Manrope-OFL.txt`。OFL 1.1 允许商用、修改与嵌入，但不得单独销售字体本身，也不得在修改版本上使用 Reserved Font Name；本仓库只分发轮廓后的标志，不分发字体文件。
- 待核实项：以上为按 OFL 1.1 文本作出的判断，未经过法务复核；“Vane”作为商标的可注册性与在先权利检索尚未执行。正式发布或申请商标前，需由法律顾问确认字体使用方式与商标可用性。
