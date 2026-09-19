const THEME_KEY = 'theme';

export function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

export function setStoredTheme(theme) {
  return localStorage.setItem(THEME_KEY, theme);
}
