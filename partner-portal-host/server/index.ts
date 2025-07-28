import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "../dist/client/assets"))
);

app.get("*", async (req, res) => {
  const template = fs.readFileSync(
    path.resolve(__dirname, "../dist/client/index.html"),
    "utf-8"
  );

  const { render } = await import("../dist/server/entry-server.js");
  const appHtml = render(req.url);

  const html = template.replace(`<div id="root">`, `<div id="root">${appHtml}`);

  res.status(200).set({ "Content-Type": "text/html" }).end(html);
});

app.listen(3000, () => {
  console.log("SSR Host rodando em http://localhost:3000");
});
