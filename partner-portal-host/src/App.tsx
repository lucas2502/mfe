import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";

const Ticket = React.lazy(() => import("ticket/TicketsApp"));

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/ticket">Ticket</Link>
      </nav>

      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Suspense>
    </>
  );
}
