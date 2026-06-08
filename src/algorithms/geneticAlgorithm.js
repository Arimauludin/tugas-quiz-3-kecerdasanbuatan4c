import { benchmarks } from './benchmarks';

export function runGeneticAlgorithm(benchmarkType, params) {
    const costFunc = benchmarks[benchmarkType] || benchmarks.rastrigin;
    const maxGen = params.maxIterations || 500;
    const popSize = params.populationSize || 50;
    const pc = params.crossoverRate || 0.8;
    const pm = params.mutationRate || 0.1;

    // Inisialisasi populasi acak kromosom [x, y]
    let population = Array.from({ length: popSize }, () => ({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        fitness: 0
    }));

    const convergenceHistory = [];

    for (let gen = 1; gen <= maxGen; gen++) {
        // Hitung fitness (karena minimasi, nilai fitness makin tinggi jika cost makin kecil)
        population.forEach(ind => {
            const cost = costFunc(ind.x, ind.y);
            ind.fitness = 1 / (cost + 0.0001);
        });

        // Cari yang terbaik (Elitisme - Poin B.3)
        population.sort((a, b) => b.fitness - a.fitness);
        const bestInd = population[0];
        const bestCost = costFunc(bestInd.x, bestInd.y);

        // Hitung rata-rata fitness populasi untuk grafik komparatif
        let sumCost = population.reduce((sum, ind) => sum + costFunc(ind.x, ind.y), 0);
        let avgCost = sumCost / popSize;

        convergenceHistory.push({ 
            iteration: gen, 
            cost: avgCost,         // Grafik Rata-rata populasi
            fitnessBest: bestCost  // Grafik Nilai Terbaik (Poin B.3)
        });

        // Proses pembentukan generasi baru
        let nextPop = [];

        // Jaga solusi terbaik agar tidak hilang (Elitisme)
        nextPop.push({ x: bestInd.x, y: bestInd.y });

        while (nextPop.length < popSize) {
            // Seleksi Turnamen
            let p1 = population[Math.floor(Math.random() * popSize)];
            let p2 = population[Math.floor(Math.random() * popSize)];
            
            // Crossover / Kawin Silang (Single-point)
            if (Math.random() < pc) {
                let child = { x: p1.x, y: p2.y }; // Kombinasi x dari parent1 dan y dari parent2
                
                // Mutasi Acak
                if (Math.random() < pm) child.x += (Math.random() - 0.5) * 0.5;
                if (Math.random() < pm) child.y += (Math.random() - 0.5) * 0.5;
                
                nextPop.push(child);
            } else {
                nextPop.push({ x: p1.x, y: p1.y });
            }
        }
        population = nextPop;
    }

    const finalBestCost = costFunc(population[0].x, population[0].y);
    return { convergenceHistory, bestFitness: finalBestCost, iterations: maxGen };
}