/**
 * Local dev server — serves static files + /api/ask, no Vercel account needed.
 * Run: node dev-server.js  (reads .env for GEMINI_API_KEY)
 * Not used in production — Vercel serves api/ask.js natively there.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

// minimal .env loader, no dependency
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, "utf8").split("\n").forEach(line => {
    const match = line.match(/^([^=#\s]+)\s*=\s*(.*)\s*$/);
    if (match) process.env[match[1]] = match[2];
  });
}

const askHandler = require("./api/ask.js");

const MIME = {
  ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".svg": "image/svg+xml", ".woff2": "font/woff2", ".pdf": "application/pdf",
  ".ico": "image/x-icon", ".txt": "text/plain", ".xml": "application/xml"
};

const PORT = 8790;

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith("/api/ask")) {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", async () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch {
        req.body = {};
      }
      res.status = (code) => { res.statusCode = code; return res; };
      res.json = (obj) => { res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(obj)); };
      res.setHeader = res.setHeader.bind(res);
      await askHandler(req, res);
    });
    return;
  }

  let filePath = req.url.split("?")[0];
  if (filePath === "/") filePath = "/index.html";
  const fullPath = path.join(__dirname, decodeURIComponent(filePath));

  fs.readFile(fullPath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }
    const ext = path.extname(fullPath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
  console.log(process.env.GEMINI_API_KEY ? "GEMINI_API_KEY loaded from .env" : "WARNING: GEMINI_API_KEY not set — /api/ask will fail");
});
