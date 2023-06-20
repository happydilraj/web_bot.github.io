import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

Kommunicate.init("6b48bfc0984c0353587a17b30bc5cab6", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
