import express from "express";
import operationRouter from "./matrixoperations/controllers/router/operator.route";

const app = express();
app.use(operationRouter);
app.listen(8088, () => console.log("Server is running on port 8088"));
