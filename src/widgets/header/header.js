import headerTemplate from './header.html?raw';
import './header.scss';
import { createElementFromTemplate, mountChild } from '../../shared/lib/dom';
import { createNav } from '../nav/nav';

export function createHeader() {
  const headerElement = createElementFromTemplate(headerTemplate);
  mountChild(headerElement, '.nav', createNav());
  return headerElement;
}
