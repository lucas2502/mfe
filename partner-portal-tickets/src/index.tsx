import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import App from "./App";

const server = express();

server.use(express.static("dist"));

server.get("*", (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Tickets</title></head>
      <body>
        <div id="root">${app}</div>
      </body>
    </html>
  `);
});

server.listen(3001, () => {
  console.log("Tickets MFE rodando em http://localhost:3001");
});
