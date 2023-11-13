import express from "express";
import { Router } from "express";
import { echo, sum, flatten, invert, multiply } from "../operation.controller";
import { upload } from "../../../midlleware/upload";
const router = Router();

router.post("/echo", upload.single("file"), echo);
router.post("/sum", upload.single("file"), sum);
router.post("/flatten", upload.single("file"), flatten);
router.post("/invert", upload.single("file"), invert);
router.post("/multiply", upload.single("file"), multiply);

// "start": "ts-node src/app.ts",
export default router;
