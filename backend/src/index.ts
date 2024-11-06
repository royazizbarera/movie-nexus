// Import express
import express from "express";

// import cors
import cors from "cors";

// import dotenv
import dotenv from "dotenv";

// import routes
import routers from "./api/v1/routes/index";
import insertDummyData from "./api/v1/helpers/insertDummyData";

// auth
import cookieParser from "cookie-parser";

import session from "express-session";
import passport, { use } from "passport";
import "./api/v1/config/auth";
import testDummy from "./api/v1/helpers/testDummy";

// INITIALIZE SERVER
dotenv.config();
const app = express();

const allowedOrigins = [
  "http://localhost:3000", // React app 1 URL
  "http://localhost:3002", // React app 2 URL
  "https://completely-safe-moth.ngrok-free.app", // Ngrok URL
  "https://movie-nexus-kappa.vercel.app", // Vercel URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the incoming request origin is in the allowedOrigins array
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Izinkan pengiriman cookie lintas domain
    methods: ["GET", "POST", "PUT", "DELETE"], // Izinkan metode HTTP yang digunakan
  })
);

app.use(express.json());

// Initialize PORT
const PORT = process.env.PORT || 3005;

// Initialize session and passport
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false, // Ubah ke true jika menggunakan HTTPS
      maxAge: 1000 * 60 * 60 * 3,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// cookie parser
app.use(cookieParser());
// initialize database
// Route untuk menginsert data dummy
app.route("/api/v1/insertDummyData").get(async (req, res) => {
  try {
    await insertDummyData(); // Tunggu sampai proses insert selesai
    res.status(200).send("Dummy data inserted successfully!"); // Kirim respons sukses ke klien
  } catch (error) {
    res.status(500).send(error); // Kirim respons error jika terjadi kesalahan
  }
});

app.get("/insert-genre", async (req, res) => {
  try {
    await testDummy(); // Tunggu sampai proses insert selesai
    res.status(200).send("Dummy data inserted successfully!"); // Kirim respons sukses ke klien
  } catch (error) {
    res.status(500).send(error); // Kirim respons error jika terjadi kesalahan
  }
}); 
// hello world
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Route test untuk memastikan `/api` tersedia
app.get("/api", (req, res) => {
  res.send("API is working!");
});
// Initialize routes
app.use("/api/v1", routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;