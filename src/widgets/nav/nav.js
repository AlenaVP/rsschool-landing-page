import navTemplate from './nav.html?raw';
import './nav.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';
import { getCurrentPage } from '../../shared/lib/page';
import { NAV_ITEMS } from './nav.config';

function resolveHref({ section, scope }, currentPage) {
  const hash = `#${section}`;
  const isOnSamePage = scope === 'layout' || scope === currentPage;
  return isOnSamePage ? hash : `./index.html${hash}`;
}

function navItemTemplate(item, currentPage) {
  return `
    <li class="nav__list-item">
      <a href="${resolveHref(item, currentPage)}" class="nav__list-link">${item.label}</a>
    </li>
  `;
}

export function createNav() {
  const navElement = createElementFromTemplate(navTemplate);
  const currentPage = getCurrentPage();

  navElement.querySelector('.nav__list').innerHTML = NAV_ITEMS.map((item) => navItemTemplate(item, currentPage)).join('');

  return navElement;
}
