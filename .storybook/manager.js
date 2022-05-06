import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://bcakyz.com/icon.svg',
    brandTitle: 'Bekircan Akyuz Components',
    brandUrl: 'https://bcakyz.com',
  },
});
