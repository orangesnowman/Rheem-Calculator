/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import RheemWidget from './components/RheemWidget';

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-slate-100">
      <div className="w-full max-w-4xl mb-8 text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-display font-black text-rheem-dark tracking-tight">
          RHEEM <span className="text-rheem-red">CALCULATOR</span>
        </h1>
        <p className="text-slate-500 font-medium">Encuentra el calentador perfecto para tu hogar</p>
      </div>
      
      <RheemWidget />
      
      <footer className="mt-12 text-slate-400 text-sm font-medium flex items-center gap-4">
        <span>© 2026 Rheem Manufacturing Company</span>
        <span className="w-1 h-1 bg-slate-300 rounded-full" />
        <a href="#" className="hover:text-rheem-red transition-colors">Soporte Técnico</a>
        <span className="w-1 h-1 bg-slate-300 rounded-full" />
        <a href="#" className="hover:text-rheem-red transition-colors">Garantía</a>
      </footer>
    </main>
  );
}

