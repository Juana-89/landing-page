import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import image from "../models/_image.js";

const app = express();
const port = 5500;

//Connection to the database in mongodb
const url =
  "mongodb+srv://user:rYaMB2Aab6iB@cluster0.grfpamv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.json({ limit: "7mb" }));
app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.post("/api/places", (req, res) => {
  let placeDB = req.body;
  let objRec = [];
  placeDB.forEach((place) => {
    objRec.push({
      name: place.name,
      img1: place.img1,
      img2: place.img2,
      img3: place.img3,
    });
  });

  image.create(objRec, (error, record) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(record);
    }
  });
});

app.get("/api/places", (req, res) => {
  image.find({}, (error, docs) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(docs);
    }
  });
});

app.listen(port, () => {
  console.log(`Server funciona en el puerto ${port}`);
});
