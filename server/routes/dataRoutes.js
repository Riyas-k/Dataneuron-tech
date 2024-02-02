// routes/dataRoutes.js
import express from "express";
import { addData, updateData } from "../controllers/dataController.js";
import { getCount } from "../Helpers/dataHelper.js";

const router = express.Router();

router.post("/add", addData);

router.put("/update", updateData);

router.get("/count", async(req, res) => {
  const data = await getCount()
  res.json({ count: data });
});

export default router;
