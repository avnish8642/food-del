import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config.js'
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = 4000;

app.use(express.json())

//middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order/', orderRouter)

app.get("/", (req, res) => {
  console.log("🔥 GET REQUEST RECEIVED");
  res.send("API working");
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});

//mongodb+srv://<db_username>:68o8RGdj8RgtzEVg@cluster0.zyr1cry.mongodb.net/?appName=Cluster0
