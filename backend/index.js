const colors = require("colors"); // Renkli çıktı alabilmek için eklendi.
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB!".magenta);
  } catch (error) {
    console.log("Error connecting to MongoDB!".red);
  }
};

app.listen(process.env.PORT, () => {
  console.log("Backend server is running!".blue);
  connectDB();
});


app.get('/api/test/',(req,res) => {
    res.status(200).send("Backend server is running!");
})


// ? Middlewares
app.use(express.json());
app.use(cors());

// ! Import Routes
const userRoutes = require("./routes/user.js")
const authRoutes = require("./routes/auth.js")
const productRoutes = require("./routes/product.js")
const orderRoutes = require("./routes/order.js")
const cartRoutes = require("./routes/cart.js")
const paymentRoutes = require("./routes/iyzico.js")
app.use("/users",userRoutes);
app.use("/auth",authRoutes);
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
app.use("/carts",cartRoutes);
app.use("/pay",paymentRoutes);

