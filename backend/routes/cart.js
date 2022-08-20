const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.js");
const CartSchema = require("../models/Cart.js");

// ? Create
router.post("/", verifyToken, async (req, res) => {
  const newCart = new CartSchema(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await CartSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await CartSchema.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await CartSchema.findOne({userId:req.params.userId});

    return res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get All
router.get("/",verifyTokenAndAdmin,async(req,res)=> {
    try {
        const carts = await CartSchema.find()
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
