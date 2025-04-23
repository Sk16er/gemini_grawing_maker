/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import '@tailwindcss/browser';

import ReactDOM from 'react-dom/client';
import Home from './Home';

// Fixed ReactDOM.createRoot type issue
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Home />);
