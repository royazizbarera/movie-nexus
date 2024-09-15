// Import express
import express from "express";

// import cors
import cors from "cors";

// import dotenv
import dotenv from "dotenv";

// import routes
import routers from "./api/v1/routes/index";
import insertDummyData from "./api/v1/helpers/insertDummyData";

// INITIALIZE SERVER
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Initialize PORT
const PORT = process.env.PORT || 3001;

// Initialize json format
app.use(express.json());

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
