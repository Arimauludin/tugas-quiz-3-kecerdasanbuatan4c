// Fungsi Benchmark sesuai Poin B.4 Modul
export const benchmarks = {
    rastrigin: (x, y) => {
        return 20 + (x*x - 10 * Math.cos(2 * Math.PI * x)) + (y*y - 10 * Math.cos(2 * Math.PI * y));
    },
    ackley: (x, y) => {
        const p1 = -20 * Math.exp(-0.2 * Math.sqrt(0.5 * (x*x + y*y)));
        const p2 = -Math.exp(0.5 * (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)));
        return p1 + p2 + 20 + Math.E;
    }
};