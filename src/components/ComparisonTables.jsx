import React from 'react';

export default function ComparisonTable({ metrics }) {
  // Jika metrics belum ada atau kosong, jangan tampilkan apa-apa
  if (!metrics) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm text-slate-300">
        <thead>
          <tr className="border-b border-slate-700 bg-[#0b1329]">
            <th className="py-3 px-4 font-semibold text-slate-400 text-xs tracking-wider uppercase">Metrik Pengujian</th>
            <th className="py-3 px-4 font-semibold text-slate-400 text-xs tracking-wider uppercase text-right">Nilai / Output Simulasi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {/* Baris 1: Waktu Komputasi */}
          <tr className="hover:bg-slate-800/40 transition">
            <td className="py-3 px-4 flex items-center gap-2">
              ⏱️ <span>Waktu Eksekusi (Execution Time)</span>
            </td>
            <td className="py-3 px-4 text-right font-mono text-emerald-400 font-semibold">
              {metrics.executionTime || '0 ms'}
            </td>
          </tr>

          {/* Baris 2: Nilai Fitness Terbaik */}
          <tr className="hover:bg-slate-800/40 transition">
            <td className="py-3 px-4 flex items-center gap-2">
              🎯 <span>Fitness Terbaik (Best Convergence Value)</span>
            </td>
            <td className="py-3 px-4 text-right font-mono text-blue-400 font-semibold">
              {metrics.bestFitness !== undefined ? metrics.bestFitness : '-'}
            </td>
          </tr>

          {/* Baris 3: Total Iterasi hingga Konvergen */}
          <tr className="hover:bg-slate-800/40 transition">
            <td className="py-3 px-4 flex items-center gap-2">
              🔄 <span>Iterasi yang Dibutuhkan (Generasi)</span>
            </td>
            <td className="py-3 px-4 text-right font-mono text-yellow-400 font-semibold">
              {metrics.iterationsNeeded !== undefined ? `${metrics.iterationsNeeded} / Gen` : '-'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}