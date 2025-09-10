import express from "express";
const router = express.Router();

import {
  confirmPayment,
  fetchPaymentDetails,
  generateAccessToken,
  createOrder,
  // capturePayment,
  completeOrder,
  cancelOrder,
} from "../controllers/paymentController.js";
// Method POST
router.post("/confirmPayment", confirmPayment);
// Method POST
router.post(
  "/fetchPaymentDetails/:userId/:scheduleTime/:price",
  fetchPaymentDetails
);
router.post("/pay/:orderId/:price", createOrder);
router.post("/generateAccessToken", generateAccessToken);
// router.post("/createOrder", createOrder);
// router.post("/capturePayment/:orderId", capturePayment);
router.get("/completeOrder", completeOrder);
router.get("/cancelOrder", cancelOrder);
export default router;


