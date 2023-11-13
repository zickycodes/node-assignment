"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operation_controller_1 = require("../operation.controller");
// const adminController = require("../controllers/admin");
const router = (0, express_1.Router)();
router.get("/echo", operation_controller_1.echo);
router.get("/sum", operation_controller_1.sum);
router.get("flatten", operation_controller_1.flatten);
router.get("invert", operation_controller_1.invert);
router.get("multiply", operation_controller_1.multiply);
// "start": "ts-node src/app.ts",
exports.default = router;
