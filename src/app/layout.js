import { createHeader } from '../widgets/header/header';
import { createFooter } from '../widgets/footer/footer';
import { mountChild } from '../shared/lib/dom';

import { initThemeSwitcher } from '../features/theme-switcher/theme-switcher';

export function mountLayout() {
  const header = createHeader();
  mountChild(document, '#header', header);
  initThemeSwitcher(header);

  mountChild(document, '#footer', createFooter());
}
