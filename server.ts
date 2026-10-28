import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Enable CORS for assets so iframes and preview environments can load images cleanly
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });

  // Static Assets - Serve public assets (images, fonts, downloads)
  const publicPath = path.join(process.cwd(), "public");
  app.use(express.static(publicPath, { maxAge: "1h" }));
  app.use("/public", express.static(publicPath, { maxAge: "1h" }));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact / Project Inquiry API
  app.post("/api/inquiry", (req, res) => {
    try {
      const { name, email, service, budget, message } = req.body;
      console.log("Received inquiry from:", name, email, service, budget);
      res.json({
        success: true,
        message: "Thank you! Your project brief has been received. Shakeeb will get in touch within 24 hours.",
      });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to process inquiry" });
    }
  });

  // Vite Middleware in Development vs Static Serving in Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Shakeeb Khan Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
