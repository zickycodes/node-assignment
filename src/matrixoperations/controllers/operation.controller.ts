import csvParser from "csv-parser";
import fs from "fs";
import { Response, Request, NextFunction } from "express";
import { helperFunc, isValidMatrix } from "../../helper/helper";

export const echo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const results: any[] = [];

    const fileStream = fs.createReadStream(req.file.path);

    fileStream.on("error", (err) => {
      console.error("File stream error:", err);
      res.status(500).send("Internal server error");
    });

    fileStream
      .pipe(csvParser({ headers: false }))
      .on("data", (data: number) => {
        if (Object.values(data).length > 0) {
          results.push(Object.values(data));
        }
      })
      .on("end", () => {
        // console.log("Parsed Matrix:", results);
        if (isValidMatrix(results)) {
          helperFunc(results, req, res, next, "echo");
        } else {
          res.status(400).send("Invalid matrix format");
        }
      })
      .on("error", (err) => {
        console.error("CSV parsing error:", err);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    console.error("Synchronous error:", error);
    res.status(500).send("Internal server error");
  }
};

export const invert = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const results: any[] = [];

    const fileStream = fs.createReadStream(req.file.path);

    fileStream.on("error", (err) => {
      // Handle file stream error
      console.error("File stream error:", err);
      res.status(500).send("Internal server error");
    });

    fileStream
      .pipe(csvParser({ headers: false }))
      .on("data", (data: number) => {
        if (Object.values(data).length > 0) {
          results.push(Object.values(data));
        }
      })
      .on("end", () => {
        // console.log("Parsed Matrix:", results);
        if (isValidMatrix(results)) {
          helperFunc(results, req, res, next, "invert");
        } else {
          res.status(400).send("Invalid matrix format");
        }
      })
      .on("error", (err) => {
        // Handle CSV parsing error
        console.error("CSV parsing error:", err);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    // Handle any synchronous errors that might occur
    console.error("Synchronous error:", error);
    res.status(500).send("Internal server error");
  }
};

export const flatten = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results: any[] = [];
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const fileStream = fs.createReadStream(req.file.path);

    fileStream.on("error", (err) => {
      // Handle file stream error
      console.error("File stream error:", err);
      res.status(500).send("Internal server error");
    });

    fileStream
      .pipe(csvParser({ headers: false }))
      .on("data", (data: number) => {
        if (Object.values(data).length > 0) {
          results.push(Object.values(data));
        }
      })
      .on("end", () => {
        // console.log("Parsed Matrix:", results);
        if (isValidMatrix(results)) {
          helperFunc(results, req, res, next, "flatten");
        } else {
          res.status(400).send("Invalid matrix format");
        }
      })
      .on("error", (err) => {
        // Handle CSV parsing error
        console.error("CSV parsing error:", err);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    // Handle any synchronous errors that might occur
    console.error("Synchronous error:", error);
    res.status(500).send("Internal server error");
  }
};

export const sum = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const results: any[] = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream.on("error", (err) => {
      console.error("File stream error:", err);
      res.status(500).send("Internal server error");
    });

    fileStream
      .pipe(csvParser({ headers: false }))
      .on("data", (data: number) => {
        if (Object.values(data).length > 0) {
          results.push(Object.values(data));
        }
      })
      .on("end", () => {
        // console.log("Parsed Matrix:", results);
        if (isValidMatrix(results)) {
          helperFunc(results, req, res, next, "sum");
        } else {
          res.status(400).send("Invalid matrix format");
        }
      })
      .on("error", (err) => {
        console.error("CSV parsing error:", err);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    console.error("Synchronous error:", error);
    res.status(500).send("Internal server error");
  }
};

export const multiply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded");
      return;
    }

    const results: any[] = [];
    const fileStream = fs.createReadStream(req.file.path);

    fileStream.on("error", (err) => {
      console.error("File stream error:", err);
      res.status(500).send("Internal server error");
    });

    fileStream
      .pipe(csvParser({ headers: false }))
      .on("data", (data: number) => {
        if (Object.values(data).length > 0) {
          results.push(Object.values(data));
        }
      })
      .on("end", () => {
        // console.log("Parsed Matrix:", results);
        if (isValidMatrix(results)) {
          helperFunc(results, req, res, next, "multiply");
        } else {
          res.status(400).send("Invalid matrix format");
        }
      })
      .on("error", (err) => {
        console.error("CSV parsing error:", err);
        res.status(500).send("Internal server error");
      });
  } catch (error) {
    console.error("Synchronous error:", error);
    res.status(500).send("Internal server error");
  }
};
