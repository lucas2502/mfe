// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const TicketsPage = () => <div>Bem-vindo ao módulo de chamados</div>;

const TicketsApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default TicketsApp;
