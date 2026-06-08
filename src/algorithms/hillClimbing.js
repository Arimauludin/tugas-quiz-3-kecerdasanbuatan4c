import { benchmarks } from './benchmarks';

export function runHillClimbing(benchmarkType, variant, params) {
    const costFunc = benchmarks[benchmarkType] || benchmarks.rastrigin;
    const maxIter = params.maxIterations || 500;
    const stepSize = params.stepSize || 0.1;

    // Titik awal acak antara -5 s.d 5
    let currentX = (Math.random() - 0.5) * 10;
    let currentY = (Math.random() - 0.5) * 10;
    let currentCost = costFunc(currentX, currentY);

    const convergenceHistory = [{ iteration: 0, cost: currentCost, fitnessBest: currentCost }];
    let iter = 1;

    while (iter <= maxIter) {
        let nextX = currentX;
        let nextY = currentY;
        let nextCost = currentCost;

        if (variant === 'simple') {
            // 1. Simple Hill Climbing: Ambil tetangga acak pertama yang lebih baik
            let dx = (Math.random() - 0.5) * stepSize;
            let dy = (Math.random() - 0.5) * stepSize;
            let tempCost = costFunc(currentX + dx, currentY + dy);
            if (tempCost < currentCost) {
                nextX = currentX + dx;
                nextY = currentY + dy;
                nextCost = tempCost;
            }
        } else if (variant === 'steepest') {
            // 2. Steepest-Ascent: Cek beberapa tetangga, ambil yang PALING baik
            for (let i = 0; i < 10; i++) {
                let dx = (Math.random() - 0.5) * stepSize;
                let dy = (Math.random() - 0.5) * stepSize;
                let tempCost = costFunc(currentX + dx, currentY + dy);
                if (tempCost < nextCost) {
                    nextX = currentX + dx;
                    nextY = currentY + dy;
                    nextCost = tempCost;
                }
            }
        } else if (variant === 'stochastic') {
            // 3. Stochastic: Pilih tetangga acak, pindah berdasarkan probabilitas peningkatan
            let dx = (Math.random() - 0.5) * stepSize;
            let dy = (Math.random() - 0.5) * stepSize;
            let tempCost = costFunc(currentX + dx, currentY + dy);
            if (tempCost < currentCost || Math.random() < 0.05) { // Ada peluang kecil menerima lintasan buruk
                nextX = currentX + dx;
                nextY = currentY + dy;
                nextCost = tempCost;
            }
        }

        // Jika macet (local optima / plateau), simpan statusnya
        if (nextCost === currentCost && variant !== 'stochastic') {
            // Mekanisme restart otomatis jika terjebak local optima (Poin B.4 Modul)
            currentX = (Math.random() - 0.5) * 10;
            currentY = (Math.random() - 0.5) * 10;
            currentCost = costFunc(currentX, currentY);
        } else {
            currentX = nextX;
            currentY = nextY;
            currentCost = nextCost;
        }

        convergenceHistory.push({ iteration: iter, cost: currentCost, fitnessBest: currentCost });
        iter++;
    }

    return { convergenceHistory, bestFitness: currentCost, iterations: maxIter };
}