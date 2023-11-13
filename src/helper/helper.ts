import { Response, Request, NextFunction } from "express";
import { OperationService } from "../matrixoperations/services/helper.operation.service";
import fs from "fs";

export function helperFunc(
  results: any[],
  req: Request,
  res: Response,
  next: NextFunction,
  action: string
) {
  // calculate the sum of the integers and send response
  if (action === "sum") {
    const sum = OperationService.calculateSum(results);
    res.send(sum.toString());
  }
  if (action === "flatten") {
    const flattenedMatrix = OperationService.flattenMatrix(results);
    const flattenedString = flattenedMatrix.join(",");
    res.send(flattenedString);
  }
  if (action === "multiply") {
    const product = OperationService.calculateProduct(results);
    res.send(product.toString());
  }
  if (action === "echo") {
    const matrix = results.map((row) => row.join(",")).join("\n");
    res.send(matrix);
  }
  if (action === "invert") {
    const invertedMatrix = OperationService.invertMatrix(results);
    const matrix = invertedMatrix.map((row) => row.join(",")).join("\n");
    res.send(matrix);
  }

  // Delete the uploaded file after processing
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  fs.unlink(req.file.path, (err) => {
    if (err) {
      return next(err);
    }
  });
}
