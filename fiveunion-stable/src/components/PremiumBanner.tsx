// import React from 'react'; // Pas nécessaire en React 17+
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Zap, TrendingUp } from 'lucide-react';

interface PremiumBannerProps {
  className?: string;
  onCTAClick?: () => void;
}

export default function PremiumBanner({ className = "" }: PremiumBannerProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* 🌌 Background avec particules animées */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-teal-900/20 to-cyan-900/30">
        {/* Particules flottantes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Effet de grille futuriste */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* 🎯 Contenu principal */}
      <div className="relative z-10 px-6 sm:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* 📝 Contenu texte */}
            <div className="space-y-6">
              {/* Badge premium */}
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-teal-400 mr-2" />
                <span className="text-sm font-semibold text-teal-300">
                  🚀 Offre Spéciale DAF 2025
                </span>
              </motion.div>

              {/* Titre principal */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-white">Transformez votre </span>
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  IT en machine à ROI
                </span>
              </motion.h2>

              {/* Sous-titre */}
              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Rejoignez les <span className="text-teal-400 font-bold">500+ DAF</span> qui ont déjà 
                optimisé leur budget IT avec Five Union. 
                <span className="text-cyan-400 font-semibold"> Économies garanties dès le 1er mois.</span>
              </motion.p>

              {/* Métriques impressionnantes */}
              <motion.div
                className="grid grid-cols-3 gap-4 py-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: TrendingUp, value: "40%", label: "Économies IT" },
                  { icon: Shield, value: "99.9%", label: "Disponibilité" },
                  { icon: Zap, value: "24h", label: "Support" }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-xl mb-2 mx-auto">
                      <metric.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Bouton principal */}
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-tally-open="wz6Kz8" 
                  data-tally-emoji-text="🎯" 
                  data-tally-emoji-animation="bounce"
                  data-ref="premium-banner"
                  data-source="premium-banner"
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Audit Gratuit Immédiat
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.button>

                {/* Bouton secondaire */}
                <motion.button
                  className="px-8 py-4 border-2 border-teal-500/50 text-teal-300 font-semibold rounded-xl hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const element = document.querySelector('#services');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Voir nos solutions
                </motion.button>
              </motion.div>

              {/* Social proof */}
              <motion.div
                className="flex items-center space-x-6 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full border-2 border-slate-900 flex items-center justify-center text-white font-bold text-sm"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-teal-500/20 border-2 border-teal-500/50 rounded-full flex items-center justify-center text-teal-400 font-bold text-xs">
                    +500
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-teal-400 font-semibold">500+ DAF</span> nous font déjà confiance
                </div>
              </motion.div>
            </div>

            {/* 🖼️ Visuel côté droit */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Container avec effet glassmorphism */}
              <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl">
                
                {/* Dashboard mockup */}
                <div className="space-y-4">
                  {/* Header du dashboard */}
                  <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-lg"></div>
                      <span className="text-white font-semibold">Five Union Dashboard</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Métriques en temps réel */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Économies ce mois", value: "€12,340", trend: "+23%" },
                      { label: "Uptime", value: "99.98%", trend: "+0.1%" },
                      { label: "Incidents résolus", value: "47", trend: "-12%" },
                      { label: "ROI Total", value: "340%", trend: "+45%" }
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-black/20 rounded-xl border border-teal-500/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                        <div className="text-lg font-bold text-white">{metric.value}</div>
                        <div className="text-xs text-green-400">{metric.trend}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Graphique simulé */}
                  <div className="p-4 bg-black/20 rounded-xl">
                    <div className="text-sm text-gray-400 mb-4">Évolution des économies IT</div>
                    <div className="flex items-end justify-between h-20 space-x-2">
                      {[40, 65, 45, 80, 70, 95, 85, 100].map((height, index) => (
                        <motion.div
                          key={index}
                          className="bg-gradient-to-t from-teal-500 to-cyan-400 rounded-t"
                          style={{ height: `${height}%`, width: '12px' }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Effet de glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur opacity-75 -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🌟 Effet de bordure animée */}
      <div className="absolute inset-0 rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-cyan-500/20 rounded-3xl"></div>
        <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-3xl"></div>
      </div>
    </motion.div>
  );
}