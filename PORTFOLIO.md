![工作坊完成徽章](https://img.shields.io/badge/GitHub_Copilot_實戰工作坊-已完成-1F883D?style=for-the-badge&logo=githubcopilot&logoColor=white)

# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊中完成的待辦清單 Web App。它以純前端技術實作，提供待辦事項的新增、完成狀態管理、篩選、刪除與主題切換功能。

## 線上展示

https://<你的帳號>.github.io/<你的repo名稱>/

## 功能

- 新增待辦事項，輸入空白內容時不會新增。
- 勾選待辦事項並標記為已完成，完成項目會顯示刪除線並淡化。
- 取消待辦事項的完成狀態。
- 刪除單筆待辦事項。
- 顯示整體未完成項目數量，數字不受目前篩選條件影響。
- 提供「全部」、「未完成」與「已完成」篩選。
- 篩選結果為空時，顯示對應的提示文字，並說明項目可能只是被篩選條件隱藏。
- 提供淺色與深色模式切換，切換按鈕會顯示對應圖示與文字。
- 使用者手動選擇的主題偏好會保存；尚未手動切換時會跟隨作業系統設定。
- 提供「清除已完成」功能，刪除前使用瀏覽器確認對話框確認。
- 沒有已完成項目時，停用「清除已完成」按鈕。
- 使用 `localStorage` 保存待辦資料與主題偏好，重新整理後仍可保留。
- 採用置中卡片式介面，並支援手機螢幕。

## 技術

- 使用純 HTML、CSS 與原生 JavaScript。
- 不使用任何框架或套件，沒有 `package.json`，也沒有建置流程。
- 不引用外部 CDN，可直接離線開啟。
- 使用 CSS 變數管理介面顏色與深淺色主題。
- 使用 `prefers-color-scheme` 偵測作業系統的深淺色偏好。
- 使用瀏覽器 `localStorage` 儲存待辦資料與主題偏好。
- 專案主要由根目錄的 `index.html`、`styles.css` 與 `app.js` 組成。

## 開發方式

這個專案是在 GitHub Copilot 實戰工作坊中逐步完成的：

- 使用 GitHub Copilot Agent Mode，根據需求建立待辦清單的 HTML、CSS 與 JavaScript。
- 使用 Agent Mode 跨檔案加入深色模式、篩選與清除已完成等功能。
- 使用 MCP 查詢 Microsoft Learn 官方文件，了解 `prefers-color-scheme` 與深色模式的色彩對比無障礙建議。
- 使用 GitHub MCP 讀取 repository issue，依照 issue 內容提出修改計畫、建立分支、完成修正並建立 Pull Request。
- 使用 `.github/copilot-instructions.md` 定義專案的技術限制、程式風格與協作流程。
- 使用 `.github/prompts/fix-issue.prompt.md` 定義讀取 issue、等待確認、修改、驗證、提交與開 PR 的 agentic workflow。

## 我學到什麼

- 如何用完整且具體的需求描述，引導 Agent Mode 完成多檔案前端功能。
- 如何透過 MCP 讀取官方文件與 GitHub issue，讓開發決策有可靠的上下文。
- 如何使用專案指令檔與 prompt 固定程式風格和協作流程。
- 如何透過分支、提交與 Pull Request 管理 AI 協助產生的修改。
- 如何以瀏覽器實際操作驗證功能，而不是只依賴程式碼檢查。
