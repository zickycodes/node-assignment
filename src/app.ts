import express from "express";
import { Request, Response, NextFunction } from "express";
import operationRouter from "./matrixoperations/controllers/router/operator.route";

const app = express();
app.use(operationRouter);

interface CustomError extends Error {
  statusCode?: number;
}

// Your Express middleware
const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
};

// Usage in your Express app
app.use(errorHandler);
app.listen(8088, () => console.log("Server is running on port 8088"));
