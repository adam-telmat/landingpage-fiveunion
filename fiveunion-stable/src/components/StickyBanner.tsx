import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

interface StickyBannerProps {
  onCTAClick?: () => void;
}

export default function StickyBanner({ onCTAClick }: StickyBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'mt-20' : 'mt-0'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* 🎯 Bannière compacte */}
        <div className="bg-gradient-to-r from-slate-900/95 via-teal-900/80 to-cyan-900/80 backdrop-blur-xl border-b border-teal-500/30 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between">
              
              {/* 📝 Contenu principal */}
              <div className="flex items-center space-x-6">
                {/* Badge animé */}
                <motion.div
                  className="flex items-center px-3 py-1.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 rounded-full"
                  animate={{ 
                    boxShadow: [
                      '0 0 0 0 rgba(20, 184, 166, 0.4)',
                      '0 0 0 8px rgba(20, 184, 166, 0)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
                  <span className="text-sm font-bold text-teal-300">
                    🚀 OFFRE LIMITÉE
                  </span>
                </motion.div>

                {/* Message principal */}
                <div className="hidden sm:block">
                  <span className="text-white font-semibold">
                    Audit IT Gratuit → 
                  </span>
                  <span className="text-teal-400 font-bold ml-2">
                    Économisez jusqu'à 40% sur votre budget IT
                  </span>
                </div>

                {/* Message mobile */}
                <div className="sm:hidden">
                  <span className="text-white font-semibold text-sm">
                    Audit IT Gratuit → 
                  </span>
                  <span className="text-teal-400 font-bold text-sm">
                    -40% sur votre IT
                  </span>
                </div>

                {/* Métriques rapides */}
                <div className="hidden lg:flex items-center space-x-4">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                    <span className="text-gray-300">500+ DAF satisfaits</span>
                  </div>
                  <div className="w-1 h-4 bg-teal-500/30"></div>
                  <div className="text-sm text-gray-300">
                    <span className="text-cyan-400 font-bold">99.9%</span> uptime garanti
                  </div>
                </div>
              </div>

              {/* 🎯 Actions */}
              <div className="flex items-center space-x-3">
                {/* Bouton CTA principal */}
                <motion.button
                  onClick={onCTAClick}
                  className="group relative px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <div className="relative flex items-center">
                    <span className="hidden sm:inline">Obtenir mon audit</span>
                    <span className="sm:hidden">Audit</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                {/* Bouton fermer */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-lg transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 🌟 Barre de progression animée */}
          <motion.div
            className="h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-500"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}