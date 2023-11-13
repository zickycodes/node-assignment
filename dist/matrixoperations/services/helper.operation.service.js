"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationService = void 0;
class OperationService {
    // constructor() {
    //     // constructor logic if needed
    // }
    static calculateProduct(matrix) {
        let product = 1;
        matrix.forEach((row) => {
            row.forEach((value) => {
                const intValue = parseInt(value);
                if (!isNaN(intValue)) {
                    product *= intValue;
                }
            });
        });
        return product;
    }
    static calculateSum(matrix) {
        let sum = 0;
        matrix.forEach((row) => {
            row.forEach((value) => {
                const intValue = parseInt(value);
                if (!isNaN(intValue)) {
                    sum += intValue;
                }
            });
        });
        return sum;
    }
    static invertMatrix(matrix) {
        return matrix[0].map((_, i) => matrix.map((row) => row[i]));
    }
    static flattenMatrix(matrix) {
        return matrix.reduce((acc, row) => acc.concat(row), []);
    }
}
exports.OperationService = OperationService;
