import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const Settings = {
  placesCount: 317,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount}/>
  </React.StrictMode>
);
