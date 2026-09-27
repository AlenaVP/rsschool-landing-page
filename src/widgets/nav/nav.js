import navTemplate from './nav.html?raw';
import './nav.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';

export function createNav() {
  const navElement = createElementFromTemplate(navTemplate);
  return navElement;
}
