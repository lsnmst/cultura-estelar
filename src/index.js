import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/index.scss';
import App from './App';
import { TranslationProvider } from "./i18n-lite";

ReactDOM.render(
  <TranslationProvider defaultLang="pt">
    <App />
  </TranslationProvider>,
  document.getElementById("root")
);