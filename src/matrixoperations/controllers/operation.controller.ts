import csvParser from "csv-parser";
import fs from "fs";
import { Response, Request, NextFunction } from "express";
import { helperFunc } from "../../helper/helper";
// import { OperationService } from "../services/helper.operation.service";

export const echo = async (req: Request, res: Response, next: NextFunction) => {
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
      helperFunc(results, req, res, next, "echo");
    });
};

export const invert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      helperFunc(results, req, res, next, "invert");
    });
};

export const flatten = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const results: any[] = [];
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      helperFunc(results, req, res, next, "flatten");
    });
};

export const sum = async (req: Request, res: Response, next: NextFunction) => {
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
      helperFunc(results, req, res, next, "sum");
    });
};

export const multiply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }
  const results: any[] = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser({ headers: false }))
    .on("data", (data: any) => results.push(Object.values(data))) // push each row of data into results array
    .on("end", () => {
      helperFunc(results, req, res, next, "multiply");
    });
};
