import 'modern-normalize';
import './app/styles/main.scss';
import { mountLayout } from './app/layout';
import { createHomePage } from './pages/home/home';
import { mountChild } from './shared/lib/dom';

mountLayout();
mountChild(document, '#app', createHomePage());
