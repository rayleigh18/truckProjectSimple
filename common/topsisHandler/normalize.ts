export function normalizeMatrices(matrices_transpose: number[][]) {
    const matrices = matrices_transpose[0].map((_, colIndex) => matrices_transpose.map(row => row[colIndex]));
    // Multiply with the kriteria weight
    const col_norm_const = matrices.map((krit) => {
        let val = 0;
        krit.forEach(num => {
            val += num * num;
        });

        return Math.sqrt(val);
    });

    // Normalization
    matrices_transpose.forEach((row, i) => {
        row.forEach((col, j) => {
            if (matrices_transpose[i][j] == 0) {
                matrices_transpose[i][j] = 0;
                return 0;
            }
            matrices_transpose[i][j] /= col_norm_const[j];
        })
    });

    return matrices_transpose;

}