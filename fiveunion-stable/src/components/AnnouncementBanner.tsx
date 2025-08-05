// import React from 'react'; // Pas nécessaire en React 17+
import { motion } from 'framer-motion';
import { Megaphone, Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBannerProps {
  className?: string;
  onCTAClick?: () => void;
}

export default function AnnouncementBanner({ className = "" }: AnnouncementBannerProps) {
  return (
    <motion.div
      className={`relative overflow-hidden bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* 🎭 Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* 🌟 Particules flottantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}

      {/* 📢 Contenu principal */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            
            {/* 📢 Icône et badge */}
            <motion.div
              className="flex items-center justify-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="p-3 bg-white/20 rounded-full"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Megaphone className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="text-white font-bold text-sm">
                  🔥 ÉVÉNEMENT EXCEPTIONNEL
                </span>
              </div>
            </motion.div>

            {/* 🎯 Titre principal */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <span className="block">Webinaire DAF Exclusif</span>
              <span className="block text-cyan-200">
                "IT Strategy 2025"
              </span>
            </motion.h2>

            {/* 📅 Détails de l'événement */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-cyan-200" />
                <span className="font-semibold">25 Septembre 2025 • 14h-15h</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-200" />
                <span className="font-semibold">Places limitées : 50 DAF</span>
              </div>
            </motion.div>

            {/* 📝 Description */}
            <motion.p
              className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Découvrez les <span className="font-bold text-cyan-200">stratégies IT 2025</span> qui 
              permettent aux DAF visionnaires d'économiser jusqu'à <span className="font-bold">40% sur leur budget</span> 
              tout en boostant la performance de leurs équipes.
            </motion.p>

            {/* 🎁 Bonus */}
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-cyan-200 mr-2" />
              <span className="text-white font-semibold">
                🎁 Bonus : Template Excel "Budget IT 2025" offert
              </span>
            </motion.div>

            {/* 🚀 CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-white text-teal-600 font-black rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-tally-open="wz6Kz8" 
                data-tally-emoji-text="🎓" 
                data-tally-emoji-animation="bounce"
                data-ref="webinaire-cta"
                data-source="webinaire-banner"
              >
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="relative flex items-center">
                  <span className="text-lg">Réserver ma place GRATUITE</span>
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <div className="text-white/80 text-sm">
                <span className="font-semibold text-cyan-200">⚡ Dernières places !</span> 
                <br />Plus que 12 places disponibles
              </div>
            </motion.div>

            {/* ⏰ Urgence */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 text-cyan-200 font-bold">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ⏰
                </motion.span>
                <span>Inscription avant le 20 septembre minuit</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🌈 Bordure animée */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-white to-cyan-400"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 100%'
        }}
      />
    </motion.div>
  );
}