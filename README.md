# 沙發兌換券 - Vue 3 靜態網站

一個使用 Vue 3 + Vite + Tailwind CSS 建立的浪漫沙發兌換券單頁網站，支援手機 RWD 並可部署到 GitHub Pages。

## 📋 功能特色

- ✨ Vue 3 + TypeScript + Vite 現代化開發環境
- 🎨 Tailwind CSS + 自訂泡泡字效果 + 玻璃擬態設計
- 📱 手機優先的 RWD 設計（支援 iPhone 13/15、Android 360-430px）
- 🌅 全螢幕背景圖片 + 漸層遮罩
- 🚀 GitHub Pages 自動部署
- ♿ 無障礙設計（語意化標籤、適當對比度）
- 📊 SEO 與 Open Graph 最佳化

## 🚀 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 放置背景圖片

**重要：** 請將您的沙發背景圖片重新命名為 `sofa-bg.png`，並放置在 `public/` 目錄下：

```
public/
└── sofa-bg.png  # 您的沙發背景圖片
```

> 目前專案中已有 `sofa-bg.png`，您可以將其複製到 `public/` 目錄：
>
> ```bash
> cp sofa-bg.png public/sofa-bg.png
> ```

### 3. 本機開發

```bash
npm run dev
```

開啟瀏覽器訪問 `http://localhost:5173` 即可預覽。

### 4. 建置生產版本

```bash
npm run build
```

建置完成的檔案會輸出到 `dist/` 目錄。

## 📦 部署到 GitHub Pages

### 自動部署設定

1. **建立 GitHub 倉庫**並推送代碼到 `main` 分支

2. **設定倉庫名稱**：編輯 `vite.config.ts`，取消註解並修改 `base` 設定：

   ```typescript
   export default defineConfig({
     plugins: [vue()],
     // 將 'your-repo-name' 替換為您的實際倉庫名稱
     base: "/your-repo-name/",
   });
   ```

3. **啟用 GitHub Pages**：

   - 前往倉庫設定 → Pages
   - Source 選擇 "Deploy from a branch"
   - 選擇 `gh-pages` 分支
   - 點擊 Save

4. **推送到 GitHub**：

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **自動部署**：推送後 GitHub Actions 會自動建置並部署到 `gh-pages` 分支

### 手動部署

如果不使用 GitHub Actions，您也可以手動部署：

```bash
npm run build
# 然後將 dist/ 目錄的內容上傳到您的靜態網站託管服務
```

## 🎨 自訂設計

### 修改背景圖片

替換 `public/sofa-bg.png` 為您的背景圖片即可。

### 調整文字內容

編輯 `src/App.vue` 中的模板內容：

```vue
<template>
  <!-- 修改這裡的文字內容 -->
  <h1 class="bubble-text title-responsive text-white mb-2">沙 發 兌 換 券</h1>
  <!-- ... 其他內容 -->
</template>
```

### 自訂樣式

主要樣式定義在 `src/styles.css`：

- `.bubble-text`：泡泡字效果
- `.glass-morphism`：玻璃擬態效果
- `.gradient-overlay`：漸層遮罩
- 響應式字體大小類別

### 修改顏色主題

編輯 `src/styles.css` 中的 CSS 變數或直接修改 Tailwind 類別。

## 📱 RWD 測試

推薦測試的裝置寬度：

- iPhone 13/15: 390px
- 小型 Android: 360px
- 大型 Android: 430px
- 平板: 768px
- 桌面: 1024px+

## 🛠️ 技術棧

- **前端框架**：Vue 3 (Composition API)
- **建置工具**：Vite
- **開發語言**：TypeScript
- **樣式框架**：Tailwind CSS
- **字體**：Noto Sans TC / Noto Serif TC (Google Fonts)
- **部署**：GitHub Pages + GitHub Actions

## 📝 專案結構

```
├── public/
│   └── sofa-bg.png          # 背景圖片（需自行放置）
├── src/
│   ├── App.vue              # 主要組件
│   ├── main.ts              # 應用程式入口
│   └── styles.css           # 全域樣式
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions 部署設定
├── index.html               # HTML 模板
├── package.json             # 依賴與腳本
├── tailwind.config.js       # Tailwind 設定
├── vite.config.ts           # Vite 設定
└── README.md                # 說明文件
```

## 🐛 疑難排解

### 背景圖片不顯示

- 確認 `public/sofa-bg.png` 存在
- 檢查檔案名稱是否正確
- 確認圖片格式是否為瀏覽器支援的格式

### GitHub Pages 部署失敗

- 確認 `vite.config.ts` 中的 `base` 設定正確
- 檢查 GitHub Actions 執行日誌
- 確認倉庫設定中的 Pages 設定正確

### 字體沒有載入

- 檢查網路連線是否正常
- 確認 Google Fonts 連結是否正確

## 📄 授權

MIT License - 可自由使用與修改。
