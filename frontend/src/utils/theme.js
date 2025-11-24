export function toggleTheme() {
  const html = document.documentElement;

  // اگر دارک بود حذف کن، اگر نبود اضافه کن
  html.classList.toggle("dark");

  // ذخیره‌سازی در localStorage
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

export function loadTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  }
}
