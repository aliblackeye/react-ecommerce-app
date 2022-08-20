const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.js");
const ProductSchema = require("../models/Product.js");

// ? Create
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new ProductSchema(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await ProductSchema.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await ProductSchema.findById(req.params.id);

    return res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get All Products
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if(qNew){
        products = await ProductSchema.find().sort({createdAt: -1}).limit(5)
    }
    else if (qCategory){
        products = await ProductSchema.find({
            categories:{
            $in: [qCategory],
        } ,
    });
    }

    else {
        products = await ProductSchema.find();
    }

    return res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router;
