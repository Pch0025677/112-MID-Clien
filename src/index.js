import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_xx from './App_xx';

import { DemoProvider_xx } from './context/DemoContext_xx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoProvider_xx>
      <App_xx />
    </DemoProvider_xx>
  </React.StrictMode>
);

