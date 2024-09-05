// Import express
import express from "express";

// import dotenv
import dotenv from "dotenv";

// import routes
import routers from "./api/routes/index";

// INITIALIZE SERVER
const app = express();
dotenv.config();

// Initialize PORT
const PORT = process.env.PORT || 8080;

// Initialize json format
app.use(express.json());

// Initialize middleware

  // Initialize routes
  app.use("/api", routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});