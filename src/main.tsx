import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

const AppTree = import.meta.env.DEV ? (
  <StrictMode>
    <App />
  </StrictMode>
) : (
  <App />
);

root.render(AppTree);
