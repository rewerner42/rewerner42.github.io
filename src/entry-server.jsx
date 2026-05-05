import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render(language = 'de') {
  return renderToString(
    <StrictMode>
      <App initialLanguage={language} />
    </StrictMode>,
  );
}
