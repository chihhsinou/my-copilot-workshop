// 待辦清單應用程式:僅使用原生 JavaScript,資料儲存在 localStorage
(function () {
  const STORAGE_KEY = "todo-list-items";
  const THEME_KEY = "todo-list-theme";

  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const emptyHint = document.getElementById("empty-hint");
  const remainingCount = document.getElementById("remaining-count");
  const clearCompletedButton = document.getElementById("clear-completed");
  const themeToggle = document.getElementById("theme-toggle");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  let currentFilter = "all";

  // 從 localStorage 讀取待辦事項,失敗時回傳空陣列
  function loadTodos() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  // 將目前的待辦事項寫回 localStorage
  function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  let todos = loadTodos();

  // 套用使用者偏好,沒有偏好時跟隨作業系統設定
  function applyTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const isDark = savedTheme ? savedTheme === "dark" : systemPrefersDark.matches;
    document.documentElement.dataset.theme = savedTheme || (isDark ? "system-dark" : "system-light");
    themeToggle.textContent = isDark ? "☀️ 淺色模式" : "🌙 深色模式";
    themeToggle.setAttribute("aria-label", isDark ? "切換至淺色模式" : "切換至深色模式");
  }

  // 取得目前篩選條件應顯示的待辦事項
  function getVisibleTodos() {
    if (currentFilter === "active") return todos.filter((todo) => !todo.completed);
    if (currentFilter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  }

  // 根據目前資料重新渲染整個列表
  function render() {
    list.innerHTML = "";

    getVisibleTodos().forEach((todo) => {
      const li = document.createElement("li");
      li.className = "todo-item" + (todo.completed ? " completed" : "");
      li.dataset.id = todo.id;

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => toggleTodo(todo.id));

      const span = document.createElement("span");
      span.className = "todo-text";
      span.textContent = todo.text;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.type = "button";
      deleteBtn.textContent = "刪除";
      deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });

    // 篩選後沒有結果時顯示對應提示文字
    const visibleTodos = getVisibleTodos();
    emptyHint.textContent = todos.length === 0
      ? "還沒有任何待辦事項,新增一個吧!"
      : currentFilter === "active"
          ? "目前沒有未完成的待辦事項,其他項目可能被目前的篩選條件隱藏"
        : currentFilter === "completed"
          ? "目前沒有已完成的待辦事項,其他項目可能被目前的篩選條件隱藏"
          : "還沒有任何待辦事項,新增一個吧!";
    emptyHint.style.display = visibleTodos.length === 0 ? "block" : "none";

    const remaining = todos.filter((todo) => !todo.completed).length;
    remainingCount.textContent = `未完成:${remaining} 項`;
    clearCompletedButton.disabled = !todos.some((todo) => todo.completed);
  }

  // 新增一筆待辦事項
  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return; // 空白內容不新增

    todos.push({
      id: Date.now().toString(),
      text: trimmed,
      completed: false,
    });

    saveTodos(todos);
    render();
  }

  // 切換完成狀態
  function toggleTodo(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(todos);
    render();
  }

  // 刪除指定項目
  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    saveTodos(todos);
    render();
  }

  // 確認後刪除所有已完成項目
  function clearCompleted() {
    if (!confirm("確定要清除所有已完成的待辦事項嗎？")) return;

    todos = todos.filter((todo) => !todo.completed);
    saveTodos(todos);
    render();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo(input.value);
    input.value = "";
    input.focus();
  });

  clearCompletedButton.addEventListener("click", clearCompleted);

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark" ||
      (document.documentElement.dataset.theme === "system-dark" && systemPrefersDark.matches);
    localStorage.setItem(THEME_KEY, isDark ? "light" : "dark");
    applyTheme();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      filterButtons.forEach((filterButton) => {
        filterButton.classList.toggle("active", filterButton === button);
      });
      render();
    });
  });

  systemPrefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(THEME_KEY)) applyTheme();
  });

  applyTheme();
  render();
})();
