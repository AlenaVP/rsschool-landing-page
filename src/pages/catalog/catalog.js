import catalogTemplate from './catalog-template.html?raw';
import './catalog.scss';
import { createElementFromTemplate } from '@/shared/lib/dom';
import { createProductCard } from '@/entities/product/product';
import { PRODUCTS } from '@/entities/product/product.model';

const DEFAULT_CATEGORY = 'coffee';

export function createCatalogPage() {
  const catalogElement = createElementFromTemplate(catalogTemplate);
  renderCards(catalogElement, DEFAULT_CATEGORY);
  return catalogElement;
}

function renderCards(catalogElement, category) {
  const grid = catalogElement.querySelector('[data-catalog-grid]');

  PRODUCTS.filter((product) => product.category === category).forEach((product) => {
    grid.append(createProductCard(product));
  });
}
