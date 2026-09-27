import 'modern-normalize';
import './app/styles/main.scss';
import { mountLayout } from './app/layout';
import { createCatalogPage } from './pages/catalog/catalog';
import { mountChild } from './shared/lib/dom';

mountLayout();
mountChild(document, '#app', createCatalogPage());
