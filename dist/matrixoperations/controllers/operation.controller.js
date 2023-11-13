"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.sum = exports.flatten = exports.invert = exports.echo = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const helper_operation_service_1 = require("../services/helper.operation.service");
const echo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    fs_1.default.createReadStream("./matrix.csv")
        .pipe((0, csv_parser_1.default)({ headers: false }))
        .on("data", (data) => {
        results.push(Object.values(data));
        // console.log(data);
    }) // push each row of data into results array
        .on("end", () => {
        // convert array of arrays to string format and send response
        const matrix = results.map((row) => row.join(",")).join("\n");
        console.log(matrix);
        res.send(matrix);
    });
});
exports.echo = echo;
const invert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    fs_1.default.createReadStream("./matrix.csv")
        .pipe((0, csv_parser_1.default)({ headers: false }))
        .on("data", (data) => results.push(Object.values(data))) // push each row of data into results array
        .on("end", () => {
        // convert array of arrays to string format and send response
        const invertedMatrix = helper_operation_service_1.OperationService.invertMatrix(results);
        const matrix = invertedMatrix.map((row) => row.join(",")).join("\n");
        res.send(matrix);
        console.log(matrix);
    });
});
exports.invert = invert;
const flatten = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    fs_1.default.createReadStream("./matrix.csv")
        .pipe((0, csv_parser_1.default)({ headers: false }))
        .on("data", (data) => results.push(Object.values(data))) // push each row of data into results array
        .on("end", () => {
        // flatten the matrix and send response
        const flattenedMatrix = helper_operation_service_1.OperationService.flattenMatrix(results);
        const flattenedString = flattenedMatrix.join(",");
        res.send(flattenedString);
        console.log(flattenedString);
    });
});
exports.flatten = flatten;
const sum = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    fs_1.default.createReadStream("./matrix.csv")
        .pipe((0, csv_parser_1.default)({ headers: false }))
        .on("data", (data) => results.push(Object.values(data))) // push each row of data into results array
        .on("end", () => {
        // calculate the sum of the integers and send response
        const sum = helper_operation_service_1.OperationService.calculateSum(results);
        res.send(sum.toString());
    });
});
exports.sum = sum;
const multiply = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const results = [];
    fs_1.default.createReadStream("./matrix.csv")
        .pipe((0, csv_parser_1.default)({ headers: false }))
        .on("data", (data) => results.push(Object.values(data))) // push each row of data into results array
        .on("end", () => {
        // calculate the product of the integers and send response
        const product = helper_operation_service_1.OperationService.calculateProduct(results);
        res.send(product.toString());
    });
});
exports.multiply = multiply;
