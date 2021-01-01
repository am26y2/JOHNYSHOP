const express = require("express");
const products = require("./data/products");
const dotenv = require("dotenv");
const connectDB=require('./config/db')
const {notFound,errorHandler}=require("./middleware/errorMiddleware")

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is  running...");
});
 
app.use("/api/products",require("./routes/productRoutes"))
const port = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(
  port,
  console.log(`Server begins in ${port} in ${process.env.MODE}`)
);