![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 待辦清單 Web App

這是一個在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App。專案以純前端技術實作，提供日常待辦事項的新增、管理、篩選與主題切換功能。

## 線上展示

https://chihhsinou.github.io/my-copilot-workshop/

## 功能

- 新增待辦事項，空白內容不會被新增。
- 勾選待辦事項並標記為已完成，完成項目會顯示刪除線並淡化。
- 取消待辦事項的完成狀態。
- 刪除單筆待辦事項。
- 清除所有已完成的待辦事項，操作前會顯示確認對話框。
- 沒有已完成項目時停用「清除已完成」按鈕。
- 顯示整體未完成項目數量，數字不受目前篩選條件影響。
- 提供「全部」、「未完成」與「已完成」篩選。
- 篩選結果為空時顯示對應提示文字。
- 支援淺色與深色模式切換。
- 使用者手動切換的主題偏好會保存，尚未手動切換時會跟隨作業系統設定。
- 使用 `localStorage` 保存待辦事項，重新整理後資料仍會保留。
- 採用置中卡片式介面並支援手機螢幕。

## 技術

- 使用 HTML、CSS 與原生 JavaScript。
- 不使用任何框架或套件，沒有 `package.json`，也沒有建置流程。
- 不引用外部 CDN，可直接離線開啟。
- 使用 CSS 變數管理淺色與深色主題配色。
- 使用 `prefers-color-scheme` 偵測作業系統的深淺色偏好。
- 使用瀏覽器 `localStorage` 儲存待辦資料與主題偏好。
- 主要檔案為根目錄的 `index.html`、`styles.css` 與 `app.js`。

## 開發方式

這個專案在 GitHub Copilot 實戰工作坊中，透過以下方式逐步完成：

- 使用 GitHub Copilot Agent Mode，根據功能規格建立待辦清單的 HTML、CSS 與 JavaScript。
- 使用 Agent Mode 跨檔案加入深色模式與篩選功能，並透過檢查與版本控制確認修改結果。
- 透過 MCP 查詢 Microsoft Learn 官方文件，了解 `prefers-color-scheme` 與深色模式的色彩對比無障礙建議。
- 透過 GitHub MCP 讀取 repository issue，依照 issue 內容規劃與完成修正，並建立 Pull Request。
- 使用 `.github/copilot-instructions.md` 定義專案技術與協作規則。
- 使用 `.github/prompts/fix-issue.prompt.md` 定義從讀取 issue、提出計畫、建立分支、修改、驗證到建立 Pull Request 的 agentic workflow。

## 我學到什麼

- 如何用清楚的需求描述引導 Agent Mode 完成多檔案的前端功能。
- 如何透過 MCP 讓 AI 讀取官方文件與 GitHub issue，取得更完整的開發上下文。
- 如何用專案指令檔與 prompt 固定團隊的程式風格與協作流程。
- 如何在修改前先確認計畫，並透過分支、提交與 Pull Request 管理 AI 產生的變更。
- 如何用瀏覽器操作驗證功能，而不是只依賴程式碼表面上看起來正確。
