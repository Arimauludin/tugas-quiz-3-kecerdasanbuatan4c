import React from 'react';

export default function SidebarControls({ benchmark, setBenchmark, algorithm, setAlgorithm, hcVariant, setHcVariant, params, setParams, onRun }) {
  
  // Fungsi pembantu agar update parameter angka tidak merusak state
  const handleParamChange = (key, value) => {
    setParams(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-slate-200 mb-2">
        ⚙️ Parameter Simulasi
      </h2>
      
      {/* 1. Pilihan Fungsi Benchmark */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1">Fungsi Benchmark</label>
        <select value={benchmark} onChange={(e) => setBenchmark(e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none">
          <option value="rastrigin">Fungsi Rastrigin (Nonlinear)</option>
          <option value="ackley">Fungsi Ackley</option>
          <option value="schwefel">Fungsi Schwefel</option>
        </select>
      </div>

      {/* 2. Pilihan Algoritma Optimasi */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1">Algoritma Optimasi</label>
        <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none">
          <option value="hillClimbing">Hill Climbing</option>
          <option value="simulatedAnnealing">Simulated Annealing</option>
          <option value="geneticAlgorithm">Genetic Algorithm</option>
        </select>
      </div>

      {/* 3. INPUT DINAMIS: Tergantung Algoritma yang Dipilih */}
      {algorithm === 'hillClimbing' && (
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Varian Hill Climbing</label>
          <select value={hcVariant} onChange={(e) => setHcVariant(e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none">
            <option value="simple">Simple Hill Climbing</option>
            <option value="steepest">Steepest-Ascent Hill Climbing</option>
            <option value="stochastic">Stochastic Hill Climbing</option>
          </select>
        </div>
      )}

      {algorithm === 'simulatedAnnealing' && (
        <div className="grid grid-cols-2 gap-2 border-l-2 border-yellow-500 pl-2 space-y-1">
          <div className="col-span-2 text-xs font-bold text-yellow-400">Parameter SA:</div>
          <div>
            <label className="block text-[10px] text-slate-400">Suhu Awal (T0)</label>
            <input type="number" value={params.initialTemperature || 100} onChange={(e) => handleParamChange('initialTemperature', e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-1 text-xs text-white"/>
          </div>
          <div>
            <label className="block text-[10px] text-slate-400">Cooling Rate</label>
            <input type="number" step="0.01" value={params.coolingRate || 0.95} onChange={(e) => handleParamChange('coolingRate', e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-1 text-xs text-white"/>
          </div>
        </div>
      )}

      {algorithm === 'geneticAlgorithm' && (
        <div className="grid grid-cols-2 gap-2 border-l-2 border-green-500 pl-2 space-y-1">
          <div className="col-span-2 text-xs font-bold text-green-400">Parameter GA:</div>
          <div>
            <label className="block text-[10px] text-slate-400">Pop Size</label>
            <input type="number" value={params.populationSize || 50} onChange={(e) => handleParamChange('populationSize', e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-1 text-xs text-white"/>
          </div>
          <div>
            <label className="block text-[10px] text-slate-400">Mutation Rate</label>
            <input type="number" step="0.01" value={params.mutationRate || 0.1} onChange={(e) => handleParamChange('mutationRate', e.target.value)} className="w-full bg-[#0b1329] border border-slate-600 rounded p-1 text-xs text-white"/>
          </div>
        </div>
      )}

      {/* 4. Parameter Umum: Maksimum Iterasi */}
      <div>
        <label className="block text-xs font-semibold text-slate-400 mb-1">Maksimum Iterasi / Generasi</label>
        <input 
          type="number" 
          value={params.maxIterations || 500} 
          onChange={(e) => handleParamChange('maxIterations', e.target.value)}
          className="w-full bg-[#0b1329] border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
        />
      </div>

      {/* Tombol Pemicu Utama */}
      <button 
        onClick={onRun} 
        className="w-full bg-blue-600 hover:bg-blue-500 font-bold py-2.5 px-4 rounded-lg transition text-sm flex items-center justify-center gap-2 mt-4 shadow-md active:scale-95"
      >
        🚀 Jalankan Simulasi
      </button>
    </div>
  );
}