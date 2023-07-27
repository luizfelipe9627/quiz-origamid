// Está importando a biblioteca React e ReactDOM.
import React from "react";
import ReactDOM from "react-dom/client";

// Está importando o componente.
import App from "./App.jsx";

// Está renderizando o componente App no elemento com o ID root do HTML.
ReactDOM.createRoot(document.getElementById("root")).render(
  // O React.StrictMode serve para ativar verificações de segurança e ativar avisos no console.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
