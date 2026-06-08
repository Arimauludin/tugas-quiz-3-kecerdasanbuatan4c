import React from 'react';

export default function VisualizerChart({ simulationData }) {
  if (!simulationData || simulationData.length === 0) return null;

  // Mencari nilai maksimum dan minimum untuk auto-scaling grafik SVG
  const maxIter = Math.max(...simulationData.map(d => d.iteration)) || 1;
  const maxFitness = Math.max(...simulationData.map(d => d.fitness)) || 1;

  // Dimensi area grafik SVG
  const width = 500;
  const height = 200;
  const padding = 30;

  // Mengonversi data points menjadi koordinat X dan Y di dalam SVG
  const points = simulationData.map(d => {
    const x = padding + (d.iteration / maxIter) * (width - padding * 2);
    // Dibalik (height - y) karena koordinat Y komputer dimulai dari atas ke bawah
    const y = height - padding - (d.fitness / maxFitness) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full bg-[#0b1329] rounded-lg p-4 border border-slate-700">
      <div className="text-xs text-slate-400 mb-2 flex justify-between">
        <span>Nilai Terbaik (Fitness Minimum Global)</span>
        <span className="text-blue-400 font-semibold">Garis Biru = Proses Konvergensi</span>
      </div>
      
      {/* Grafik SVG Responsif */}
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        {/* Garis Grid Horizontal Sederhana */}
        <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#334155" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#334155" strokeWidth="1" strokeDasharray="4" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#475569" strokeWidth="1" />

        {/* Garis Grid Vertikal Sederhana */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#475569" strokeWidth="1" />
        <line x1={width - padding} y1={padding} x2={width - padding} y2={height - padding} stroke="#334155" strokeWidth="1" strokeDasharray="4" />

        {/* Jalur Garis Konvergensi Utama (Line Path) */}
        {simulationData.length > 1 && (
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points}
            className="drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]"
          />
        )}

        {/* Titik-titik Koordinat Data */}
        {simulationData.map((d, idx) => {
          const x = padding + (d.iteration / maxIter) * (width - padding * 2);
          const y = height - padding - (d.fitness / maxFitness) * (height - padding * 2);
          return (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r="3"
              className="fill-blue-400 stroke-[#0b1329] stroke-2 hover:r-5 transition-all cursor-pointer"
            />
          );
        })}

        {/* Label Teks Sumbu Y (Fitness) */}
        <text x={padding - 5} y={padding + 5} textAnchor="end" className="text-[10px] fill-slate-500 font-mono">
          {maxFitness.toFixed(1)}
        </text>
        <text x={padding - 5} y={height - padding + 4} textAnchor="end" className="text-[10px] fill-slate-500 font-mono">
          0
        </text>

        {/* Label Teks Sumbu X (Iterasi) */}
        <text x={padding} y={height - padding + 15} textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
          0
        </text>
        <text x={width - padding} y={height - padding + 15} textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
          {maxIter}
        </text>
      </svg>
      
      <div className="text-center text-[10px] text-slate-500 mt-1 font-mono">
        Sumbu X: Iterasi Ke- / Generasi Populasi
      </div>
    </div>
  );
}