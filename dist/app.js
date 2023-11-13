"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const operator_route_1 = __importDefault(require("./matrixoperations/controllers/router/operator.route"));
const app = (0, express_1.default)();
app.use(operator_route_1.default);
app.listen(8088, () => console.log("Server is running on port 8088"));
