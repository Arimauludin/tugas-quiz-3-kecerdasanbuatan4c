/**
 * utils/mathHelpers.js
 * Fungsi pembantu matematika untuk algoritma optimasi
 */

// Menghasilkan angka acak Gaussian (Normal Distribution) menggunakan Box-Muller transform
export function randomGaussian(mean = 0, stdDev = 1) {
    const u1 = 1.0 - Math.random();
    const u2 = 1.0 - Math.random();
    const randStdNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return mean + stdDev * randStdNormal;
}

// Membatasi nilai agar tetap berada di dalam rentang batas (boundary) tertentu
export function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}