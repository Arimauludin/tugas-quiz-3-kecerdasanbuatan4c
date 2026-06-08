/**
 * src/components/Navbar.jsx
 * Komponen Navigasi Atas Aplikasi Simulasi Optimasi.
 */
import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-slate-950 text-white border-b border-slate-800 px-6 py-4 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Bagian Kiri: Judul Utama Aplikasi */}
                <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                        <h1 className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            OptiSim Web
                        </h1>
                        <p className="text-xs text-slate-400 font-medium">
                            Simulasi Pencarian Lokal & Optimasi Nonlinear
                        </p>
                    </div>
                </div>

                {/* Bagian Kanan: Identitas & Mata Kuliah */}
                <div className="flex items-center space-x-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                            Tugas Mandiri Proyek
                        </p>
                        <p className="text-xs text-slate-300 font-mono">
                            Mata Kuliah: Kecerdasan Buatan
                        </p>
                    </div>
                    <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
                    <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Production Ready
                    </div>
                </div>
            </div>
        </nav>
    );
}