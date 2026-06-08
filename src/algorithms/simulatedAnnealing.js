import { benchmarks } from './benchmarks';

export function runSimulatedAnnealing(benchmarkType, params) {
    const costFunc = benchmarks[benchmarkType] || benchmarks.rastrigin;
    const maxIter = params.maxIterations || 500;
    let T = params.T0 || 100;
    const alpha = params.coolingRate || 0.95;

    let currentX = (Math.random() - 0.5) * 10;
    let currentY = (Math.random() - 0.5) * 10;
    let currentCost = costFunc(currentX, currentY);

    let bestX = currentX;
    let bestY = currentY;
    let bestCost = currentCost;

    const convergenceHistory = [{ iteration: 0, cost: currentCost, fitnessBest: bestCost }];

    for (let iter = 1; iter <= maxIter; iter++) {
        // Ambil tetangga acak (Langkah pencarian lokal)
        let nextX = currentX + (Math.random() - 0.5) * 0.2;
        let nextY = currentY + (Math.random() - 0.5) * 0.2;
        let nextCost = costFunc(nextX, nextY);

        let deltaE = nextCost - currentCost;

        // Probabilitas Boltzmann untuk menerima solusi buruk (Poin B.2)
        if (deltaE < 0 || Math.random() < Math.exp(-deltaE / T)) {
            currentX = nextX;
            currentY = nextY;
            currentCost = nextCost;

            if (currentCost < bestCost) {
                bestX = currentX;
                bestY = currentY;
                bestCost = currentCost;
            }
        }

        convergenceHistory.push({ iteration: iter, cost: currentCost, fitnessBest: bestCost });
        
        // Penurunan suhu (Cooling schedule)
        T = T * alpha; 
    }

    return { convergenceHistory, bestFitness: bestCost, iterations: maxIter };
}