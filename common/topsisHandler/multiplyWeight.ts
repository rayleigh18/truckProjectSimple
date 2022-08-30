export function multiplyWeight(matrices_normalized: number[][], kriteria_weight_normalized: number[]) {
    // run over the matrices transpose
    matrices_normalized.forEach((row, i) => {
        row.forEach((col, j) => {
            matrices_normalized[i][j] *= kriteria_weight_normalized[j];
        })
    });

    return matrices_normalized;
}