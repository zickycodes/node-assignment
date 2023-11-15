import { expect } from "chai";
import {
  echo,
  sum,
  multiply,
  flatten,
  invert,
} from "../src/matrixoperations/controllers/operation.controller";
import sinon from "sinon";
import httpMocks from "node-mocks-http";

describe("echo", () => {
  it("should return the product of the matrix in matrix format", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/multiply",
      file: {
        path: "./matrix.csv",
      },
    });
    const res = httpMocks.createResponse();
    const next = sinon.stub();

    await echo(req, res, next);

    const data = res._getData();

    expect(data).to.be.a("string");

    const rows: Array<any> = data.split("\n");

    // Check if there is at least one row
    expect(rows).to.have.lengthOf.at.least(1);

    const values = rows[0].split(",");

    // Check if there is at least one value
    expect(values).to.have.lengthOf.at.least(1);

    // Check if each value is a number
    values.forEach((value: number) => {
      expect(Number(value)).to.be.a("number");
    });

    const matrixWidth = values.length;
    rows.forEach((row) => {
      const rowValues = row.split(",");
      expect(rowValues).to.have.lengthOf(matrixWidth);
    });
  });
});

describe("sum", () => {
  it("should return the sum of the matrix", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/sum",
      file: {
        path: "./matrix.csv",
      },
    });
    const res = httpMocks.createResponse();
    const next = sinon.stub();

    await sum(req, res, next);

    const data = res._getData();
    const anssum = Number(data);

    // Check if the data is a number
    expect(anssum).to.be.a("number");
  });
});

describe("multiply", () => {
  it("should return the product of the matrix", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/multiply",
      file: {
        path: "./matrix.csv",
      },
    });
    const res = httpMocks.createResponse();
    const next = sinon.stub();

    await multiply(req, res, next);

    const data = res._getData();
    const product = Number(data);

    // Check if the data is a number
    expect(product).to.be.a("number");
  });
});

describe("flatten", () => {
  it("should return the product of the matrix", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/multiply",
      file: {
        path: "./matrix.csv",
      },
    });
    const res = httpMocks.createResponse();
    const next = sinon.stub();

    await flatten(req, res, next);

    const data = res._getData();
    const product = Number(data);

    // Check if the data is a number
    expect(product).to.be.a("string");
  });
});

describe("invert", () => {
  it("should return the product of the matrix in matrix format", async () => {
    const req = httpMocks.createRequest({
      method: "POST",
      url: "/multiply",
      file: {
        path: "./matrix.csv",
      },
    });
    const res = httpMocks.createResponse();
    const next = sinon.stub();

    await invert(req, res, next);

    const data = res._getData();

    expect(data).to.be.a("string");

    const rows: Array<any> = data.split("\n");

    // Check if there is at least one row
    expect(rows).to.have.lengthOf.at.least(1);

    const values = rows[0].split(",");

    // Check if there is at least one value
    expect(values).to.have.lengthOf.at.least(1);

    // Check if each value is a number
    values.forEach((value: number) => {
      expect(Number(value)).to.be.a("number");
    });

    const matrixWidth = values.length;
    rows.forEach((row) => {
      const rowValues = row.split(",");
      expect(rowValues).to.have.lengthOf(matrixWidth);
    });
  });
});
