import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import React from "react";
import path from "path";
import fs from "fs";
import App from "../src/App";

const server = express();

const clientDistPath = path.resolve(__dirname, "../client");

server.use(express.static(clientDistPath));

server.get("*", (req, res) => {
  const indexFile = path.resolve(clientDistPath, "index.html");

  fs.readFile(indexFile, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Erro ao ler index.html", err);
      return res.status(500).send("Erro interno");
    }

    const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    const html = htmlData.replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`
    );

    res.send(html);
  });
});

server.listen(3001, () => {
  console.log("MFE Tickets rodando em http://localhost:3001");
});
