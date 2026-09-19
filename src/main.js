import 'modern-normalize';
import './app/styles/main.scss';
import { createHeader } from './widgets/header/header';
import { createHomePage } from './pages/home/home';
import { createFooter } from './widgets/footer/footer';
import { mountChild } from './shared/lib/dom';

mountChild(document, '#header', createHeader());
mountChild(document, '#app', createHomePage());
mountChild(document, '#footer', createFooter());
