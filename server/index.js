const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectToMongoDatabase } = require("./database");
const postsRouter = require("./routes/posts");

const app = express();
const port = process.env.PORT || 3030;

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/posts", postsRouter);

const startServer = async () => {
  try {
    await connectToMongoDatabase();
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
