import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Bath, Waves, ChevronRight } from 'lucide-react';
import { RHEEM_CATALOG, calculateRecommendation } from '../constants';

export default function RheemWidget() {
  const [personas, setPersonas] = useState(3);
  const [banos, setBanos] = useState(2);
  const [tina, setTina] = useState(false);

  const recommendedGallons = useMemo(() => 
    calculateRecommendation(personas, banos, tina), 
    [personas, banos, tina]
  );

  const product = RHEEM_CATALOG[recommendedGallons];

  return (
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
      {/* Controls Column */}
      <div className="flex-1 p-8 md:p-12 bg-white">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-2 h-8 bg-rheem-red rounded-full" />
            <h2 className="text-2xl font-display font-bold text-rheem-dark">Calcula tu Tamaño</h2>
          </div>
          <button 
            onClick={() => {
              setPersonas(3);
              setBanos(2);
              setTina(false);
            }}
            className="text-xs font-bold text-slate-400 hover:text-rheem-red transition-colors uppercase tracking-wider"
          >
            Reiniciar
          </button>
        </div>

        <div className="space-y-10">
          {/* Personas Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <label className="flex items-center gap-2 font-semibold text-slate-700">
                  <Users className="w-5 h-5 text-rheem-red" />
                  Personas en casa
                </label>
                <p className="text-[10px] text-slate-400 font-medium">Total de habitantes permanentes</p>
              </div>
              <span className="bg-rheem-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                {personas}{personas === 8 ? '+' : ''}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              value={personas}
              onChange={(e) => setPersonas(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Baños Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <label className="flex items-center gap-2 font-semibold text-slate-700">
                  <Bath className="w-5 h-5 text-rheem-red" />
                  Baños completos
                </label>
                <p className="text-[10px] text-slate-400 font-medium">Duchas que se usan simultáneamente</p>
              </div>
              <span className="bg-rheem-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                {banos}{banos === 4 ? '+' : ''}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="4"
              value={banos}
              onChange={(e) => setBanos(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Tina Toggle */}
          <div 
            className={`flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer ${
              tina ? 'bg-slate-50 border-rheem-red/30' : 'bg-rheem-light border-transparent'
            }`}
            onClick={() => setTina(!tina)}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${tina ? 'bg-rheem-red text-white' : 'bg-slate-200 text-slate-500'}`}>
                <Waves className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700">¿Tienen tina o jacuzzi?</span>
            </div>
            <button
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
                tina ? 'bg-rheem-red' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  tina ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Result Column */}
      <div className="flex-1 bg-rheem-light p-8 md:p-12 flex flex-col items-center justify-between text-center relative overflow-hidden min-h-[500px]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rheem-red rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rheem-red rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>

        <div className="relative z-10 w-full flex flex-col h-full space-y-6">
          <header className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Tu Equipo Ideal</span>
            <AnimatePresence mode="wait">
              <motion.h3
                key={product.gal}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-5xl font-display font-black text-rheem-dark"
              >
                {product.gal} <span className="text-xl font-bold">Galones</span>
              </motion.h3>
            </AnimatePresence>
          </header>

          {/* Spacer for visual balance where image used to be */}
          <div className="flex-grow" />

          <AnimatePresence mode="wait">
            <motion.div
              key={product.model}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <p className="text-rheem-red font-bold text-lg leading-tight px-4">{product.model}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-[10px] bg-white/50 text-slate-500 px-2 py-0.5 rounded-full border border-slate-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 inline-block min-w-[180px]">
                <span className="text-3xl font-black text-rheem-dark block">Q {product.price}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-5 bg-rheem-red text-white font-black rounded-full hover:bg-red-700 transition-all group shadow-xl shadow-rheem-red/20"
            >
              CONOCE MÁS
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
