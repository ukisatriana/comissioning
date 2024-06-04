import i18next from 'i18next';

import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';
import DataProjectPage from './DataProject';

i18next.addResourceBundle('en', 'dataprojectPage', en);
i18next.addResourceBundle('tr', 'dataprojectPage', tr);
i18next.addResourceBundle('ar', 'dataprojectPage', ar);

const DataProjectConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'data-project',
      element: <DataProjectPage />,
    },
  ],
};

export default DataProjectConfig;

/**
 * Lazy load Example
 */
/*
import React from 'react';

const Example = lazy(() => import('./Example'));

const DataProjectConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'example',
      element: <Example />,
    },
  ],
};

export default DataProjectConfig;
*/
