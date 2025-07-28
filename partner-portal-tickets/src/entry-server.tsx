import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import App from "./App";

const server = express();

server.use(express.static("dist/client"));

server.get("*", (req, res) => {
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head><title>Tickets</title></head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/assets/index.js"></script>
      </body>
    </html>
  `);
});

server.listen(3001, () => {
  console.log("MFE Tickets rodando em http://localhost:3001");
});
