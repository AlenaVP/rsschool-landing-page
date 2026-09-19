import 'modern-normalize';
import './app/styles/main.scss';
import { createHeader } from './widgets/header/header';
import { createHomePage } from './pages/home/home';
import { createFooter } from './widgets/footer/footer';
import { mountChild } from './shared/lib/dom';
import { initThemeSwitcher } from './features/theme-switcher/theme-switcher';

const header = createHeader();
mountChild(document, '#header', header);
initThemeSwitcher(header);

mountChild(document, '#app', createHomePage());
mountChild(document, '#footer', createFooter());
