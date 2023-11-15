export class OperationService {
  static calculateProduct(matrix: any[][]): number {
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

  static calculateSum(matrix: any[][]): number {
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

  static invertMatrix(matrix: any[][]): any[][] {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]));
  }

  static flattenMatrix(matrix: any[][]): any[] {
    return matrix.reduce((acc, row) => acc.concat(row), []);
  }
}
