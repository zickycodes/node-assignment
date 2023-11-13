import csvParser from "csv-parser";
import fs from "fs";
import { Response, Request } from "express";
import { OperationService } from "../services/helper.operation.service";

export const echo = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data) => {
      results.push(Object.values(data));
      // console.log(data);
    }) // push each row of data into results array
    .on("end", () => {
      // convert array of arrays to string format and send response
      const matrix = results.map((row) => row.join(",")).join("\n");
      res.send(matrix);
    });
};

export const invert = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      // convert array of arrays to string format and send response
      const invertedMatrix = OperationService.invertMatrix(results);
      const matrix = invertedMatrix.map((row) => row.join(",")).join("\n");
      res.send(matrix);
      console.log(matrix);
    });
};

export const flatten = async (req: Request, res: Response) => {
  const results: any[] = [];
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      // flatten the matrix and send response
      const flattenedMatrix = OperationService.flattenMatrix(results);
      const flattenedString = flattenedMatrix.join(",");
      res.send(flattenedString);
    });
};

export const sum = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];
  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      // calculate the sum of the integers and send response
      const sum = OperationService.calculateSum(results);
      res.send(sum.toString());
    });
};

export const multiply = async (req: Request, res: Response) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      // calculate the product of the integers and send response
      const product = OperationService.calculateProduct(results);
      res.send(product.toString());
    });
};
