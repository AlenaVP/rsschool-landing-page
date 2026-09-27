import footerTemplate from './footer.html?raw';
import './footer.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';

export function createFooter() {
  const footerElement = createElementFromTemplate(footerTemplate);
  return footerElement;
}
