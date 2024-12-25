import express from "express";
import connectDB from "./config/database.js";
import Routes from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use("/api", ...Routes());

const bootstrap = async () => {
  try {
    await connectDB();
    console.log("db connected");
    app.listen(4000, () => {
      console.log("run 4000 port");
    });
  } catch (error) {
    console.error(error.message);
  }
};

bootstrap();
