import homeTemplate from './home.html?raw';
import './home.scss';
import { createElementFromTemplate, mountChild } from '../../shared/lib/dom';
import { createSlider } from '../../widgets/slider/slider';

export function createHomePage() {
  const homeElement = createElementFromTemplate(homeTemplate);
  mountChild(homeElement, '.slider', createSlider());
  return homeElement;
}
