import { setStoredTheme } from '../../shared/lib/storage';

export function initThemeSwitcher(headerElement) {
  const buttons = headerElement.querySelectorAll('[data-theme-btn]');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => applyTheme(btn.dataset.themeBtn));
  });

  applyTheme(document.documentElement.dataset.theme);

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.themeBtn === theme));
    });
    setStoredTheme(theme);
  }
}
