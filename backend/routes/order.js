const router = require("express").Router();
const bcrypt = require("bcrypt");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken.js");
const OrderSchema = require("../models/Order.js");

// ? Create
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new OrderSchema(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await OrderSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await OrderSchema.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get User Orders
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await OrderSchema.find({ userId: req.params.userId });

    return res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get All Orders
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await OrderSchema.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ? Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderSchema.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;
