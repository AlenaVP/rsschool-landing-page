import navTemplate from './nav.html?raw';
import './nav.scss';

export function createNav(mountSelector) {
  const mount = document.querySelector(mountSelector);
  if (!mount) return;
  mount.innerHTML = navTemplate;
}
