import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Building, Target } from 'lucide-react';

interface FiveUnionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  needs: string;
  message: string;
}

export default function FiveUnionModal({ isOpen, onClose }: FiveUnionModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    needs: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi - Remplace par ton endpoint
    try {
      // Ici tu peux envoyer vers ton backend, Zapier, ou directement Tally
      await fetch('https://api.tally.so/forms/3jVo9Q/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('✅ Formulaire soumis:', formData);
      setIsSubmitted(true);
      
      // Fermer après 3 secondes
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          employees: '',
          needs: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('❌ Erreur envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay avec blur */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Container avec style Five Union */}
          <div className="bg-gradient-to-br from-slate-900/95 to-teal-900/95 backdrop-blur-xl border border-teal-500/30 rounded-3xl shadow-2xl">
            
            {/* Header */}
            <div className="relative p-8 border-b border-teal-500/20">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-red-500/20 rounded-xl transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <motion.h2 
                  className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  🚀 Audit IT Gratuit
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-300 max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Découvrez comment économiser jusqu'à <span className="text-teal-400 font-bold">40% sur votre IT</span>
                </motion.p>
              </div>
            </div>

            {/* Body */}
            <div className="p-8">
              {isSubmitted ? (
                // Message de succès
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">🎉 Merci !</h3>
                  <p className="text-xl text-gray-300 mb-2">Votre demande d'audit a été envoyée</p>
                  <p className="text-lg text-teal-400 font-semibold">Un expert vous contacte dans les 24h</p>
                </motion.div>
              ) : (
                // Formulaire
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Prénom */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                        placeholder="votre.email@entreprise.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Entreprise et Employés */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Entreprise *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        <Target className="w-4 h-4 inline mr-2" />
                        Nombre d'employés
                      </label>
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                      >
                        <option value="">Sélectionnez</option>
                        <option value="1-10">1-10 employés</option>
                        <option value="11-50">11-50 employés</option>
                        <option value="51-200">51-200 employés</option>
                        <option value="200+">200+ employés</option>
                      </select>
                    </div>
                  </div>

                  {/* Besoins */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Vos besoins prioritaires
                    </label>
                    <select
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Sélectionnez votre priorité</option>
                      <option value="leasing-materiel">Location/Leasing matériel IT</option>
                      <option value="cybersecurite">Cybersécurité</option>
                      <option value="infogérance">Infogérance IT</option>
                      <option value="optimisation-couts">Optimisation des coûts IT</option>
                      <option value="autre">Autre besoin</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/40 border border-teal-500/30 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Décrivez brièvement vos défis IT actuels..."
                    />
                  </div>

                  {/* Bouton Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Obtenir mon audit gratuit
                      </div>
                    )}
                  </motion.button>

                  {/* Footer */}
                  <p className="text-center text-sm text-gray-400 mt-6">
                    🔒 Vos données sont sécurisées et ne seront jamais partagées
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}