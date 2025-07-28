import React from "react";
import { createRoot } from "react-dom/client";
import TicketsApp from "./TicketsApp";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<TicketsApp />);
