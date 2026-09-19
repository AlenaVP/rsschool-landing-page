import catalogTemplate from './catalog-template.html?raw';
import './catalog.scss';
import { createElementFromTemplate } from '../../shared/lib/dom';

export function createCatalogPage() {
  const catalogElement = createElementFromTemplate(catalogTemplate);
  return catalogElement;
}
