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
import session from "express-session";
import passport from "passport";
import "./api/v1/config/auth";

// INITIALIZE SERVER
dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // React app URL
  credentials: true // Izinkan pengiriman cookie lintas domain
}));


app.use(express.json());

// Initialize PORT
const PORT = process.env.PORT || 3001;

// Initialize session and passport
app.use(session({
  secret: process.env.SESSION_SECRET_KEY as string,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false, // Ubah ke true jika menggunakan HTTPS
    maxAge: 1000 * 60 * 60 * 3
  }
}));

app.use(passport.initialize());
app.use(passport.session());

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
// Initialize middleware

// Initialize routes
app.use("/api/v1", routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
