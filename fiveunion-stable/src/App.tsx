/**
 * 📦 IMPORTS - BIBLIOTHÈQUES NÉCESSAIRES
 * =====================================
 * 
 * React : Framework principal pour créer l'interface utilisateur
 * - useEffect : Pour exécuter du code quand le composant se charge
 * - useRef : Pour accéder directement aux éléments HTML (ex: canvas)
 * - useState : Pour gérer les états (données qui changent)
 */
import { useEffect, useRef, useState } from 'react';
import PremiumBanner from './components/PremiumBanner';
import AnnouncementBanner from './components/AnnouncementBanner';

/**
 * Framer Motion : Bibliothèque d'animations ultra puissante
 * - motion : Pour animer les éléments HTML
 * - useScroll : Pour détecter le scroll de la page
 * - useTransform : Pour transformer les valeurs (ex: scroll → rotation)
 * - useInView : Pour détecter si un élément est visible à l'écran
 */
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

/**
 * Lucide React : Bibliothèque d'icônes modernes et professionnelles
 * Chaque icône importée sera utilisée dans l'interface :
 * - ArrowRight : Flèches pour les boutons CTA
 * - Play : Bouton lecture vidéo
 * - TrendingUp : Graphiques de performance
 * - Zap : Énergie/rapidité
 * - Shield : Sécurité/protection
 * - DollarSign : Économies/ROI
 * - BarChart3 : Statistiques/dashboards
 * - Cpu : Technologie/IT
 * - Sparkles : Innovation/magie
 * - ChevronDown : Flèches vers le bas
 * - Star : Étoiles/avis clients
 * - CheckCircle2 : Validation/succès
 */
import { 
  ArrowRight, Play, Zap, Shield, DollarSign, 
  BarChart3, Sparkles, ChevronDown, Star, CheckCircle2
} from 'lucide-react';

/**
 * 🎨 FIVE UNION PREMIUM DESIGN SYSTEM
 * ===================================
 * 
 * ⚠️  ZONE DE PERSONNALISATION PRINCIPALE ⚠️
 * 
 * Ici tu peux changer TOUTES les couleurs du site !
 * Modifie ces valeurs pour changer l'apparence globale.
 * 
 * 💡 CONSEILS :
 * - Garde toujours le format hexadécimal (#RRGGBB)
 * - Teste les contrastes (texte blanc sur fond sombre)
 * - Les couleurs rgba() permettent la transparence (0 = invisible, 1 = opaque)
 */
const designSystem = {
  // 🎨 COULEURS PRINCIPALES - CHANGE ICI POUR PERSONNALISER
  colors: {
    primary: '#4FD1C7',              // 🔵 Couleur principale Five Union (boutons, liens)
    primaryGlow: 'rgba(79, 209, 199, 0.3)',  // ✨ Version transparente pour les effets de lueur
    secondary: '#20B2AA',            // 🔷 Couleur secondaire (éléments d'accent)
    accent: '#00F5FF',               // ⚡ Couleur d'accent (highlights, animations)
    dark: '#0A0A0F',                 // ⚫ Fond principal ultra sombre
    darkCard: '#12121A',             // 🃏 Fond des cartes (légèrement plus clair)
    text: '#FFFFFF',                 // 📝 Texte principal (blanc)
    textSecondary: '#A0AEC0',        // 📄 Texte secondaire (gris clair)
    success: '#10B981',              // ✅ Couleur de succès (vert)
    warning: '#F59E0B',              // ⚠️  Couleur d'alerte (orange)
  },
  
  // 🌈 DÉGRADÉS - EFFETS VISUELS AVANCÉS
  gradients: {
    // 🎯 Dégradé principal (boutons, éléments importants)
    primary: 'linear-gradient(135deg, #4FD1C7 0%, #20B2AA 50%, #00F5FF 100%)',
    
    // 🌌 Fond de page (effet spatial)
    background: 'radial-gradient(ellipse at top, #1a1a2e 0%, #0A0A0F 70%)',
    
    // 🃏 Fond des cartes (effet glassmorphism)
    card: 'linear-gradient(145deg, rgba(18, 18, 26, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
    
    // ✨ Effet de lueur animée
    glow: 'linear-gradient(90deg, transparent 0%, rgba(79, 209, 199, 0.2) 50%, transparent 100%)',
  }
};

/**
 * 🌟 PARTICULES ANIMÉES BACKGROUND
 * ================================
 * 
 * ✨ EFFET VISUEL : Particules flottantes en arrière-plan
 * 
 * 🎛️  PARAMÈTRES MODIFIABLES :
 * - Nombre de particules : ligne 120 (actuellement 80)
 * - Taille des particules : ligne 124 (1 à 4 pixels)
 * - Vitesse : lignes 125-126 (actuellement 0.5)
 * - Opacité : ligne 127 (0.2 à 1.0)
 * - Couleur : ligne 145 (actuellement teal Five Union)
 * 
 * 💡 POUR DÉSACTIVER : Commenter l'appel <ParticleBackground /> dans le composant principal
 */
const ParticleBackground = () => {
  // 📌 Référence pour accéder directement au canvas HTML
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 🎬 Animation qui se lance quand le composant est monté
  useEffect(() => {
    // 🎨 Récupération du canvas et de son contexte de dessin 2D
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 📏 Ajustement de la taille du canvas à la fenêtre
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // ✨ CRÉATION DES PARTICULES
    // 🔢 Change le nombre 80 pour avoir plus/moins de particules
    const particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,           // 📍 Position X aléatoire
      y: Math.random() * canvas.height,          // 📍 Position Y aléatoire
      size: Math.random() * 3 + 1,               // 📏 Taille entre 1 et 4 pixels
      speedX: (Math.random() - 0.5) * 0.5,      // ➡️  Vitesse horizontale (-0.25 à +0.25)
      speedY: (Math.random() - 0.5) * 0.5,      // ⬆️  Vitesse verticale (-0.25 à +0.25)
      opacity: Math.random() * 0.8 + 0.2,       // 🌟 Opacité entre 0.2 et 1.0
    }));

    // 🎬 FONCTION D'ANIMATION (boucle infinie)
    const animate = () => {
      // 🖤 Fond semi-transparent pour créer un effet de traînée (OPTIMISÉ)
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 🔄 Animation de chaque particule
      particles.forEach(particle => {
        // 🏃 Déplacement de la particule
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 🏀 Rebond sur les bords de l'écran
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // 🌈 Création d'un dégradé radial pour chaque particule
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,                    // Centre du dégradé
          particle.x, particle.y, particle.size * 2     // Rayon du dégradé
        );
        
        // 🎨 COULEUR DES PARTICULES - Change ici pour une autre couleur !
        gradient.addColorStop(0, `rgba(79, 209, 199, ${particle.opacity})`);  // Centre opaque
        gradient.addColorStop(1, 'rgba(79, 209, 199, 0)');                    // Bord transparent

        // ✏️  Dessin de la particule
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 🔄 Demande la prochaine frame d'animation (60 FPS)
      requestAnimationFrame(animate);
    };

    // 🚀 Démarrage de l'animation
    animate();

    // 📱 Gestion du redimensionnement de la fenêtre
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 👂 Écoute des événements de redimensionnement
    window.addEventListener('resize', handleResize);
    
    // 🧹 Nettoyage quand le composant est détruit
    return () => window.removeEventListener('resize', handleResize);
  }, []); // ⚠️  [] = s'exécute une seule fois au montage

  // 🎨 Rendu du canvas avec le fond dégradé
  return (
    <canvas
      ref={canvasRef}                                           // 📌 Référence pour le JavaScript
      className="fixed inset-0 pointer-events-none z-0"        // 📍 Position fixe, pas d'interaction, arrière-plan
      style={{ 
        background: designSystem.gradients.background,         // 🌌 Fond dégradé du design system
        willChange: 'auto'                                     // ⚡ Optimisation GPU
      }}
    />
  );
};

/**
 * 🎯 COMPOSANTS UI PREMIUM
 * ========================
 * 
 * 🧩 COMPOSANTS RÉUTILISABLES
 * Ces composants peuvent être utilisés partout dans l'application
 */

/**
 * 🔥 GLOW BUTTON - Bouton avec effet de lueur
 * ===========================================
 * 
 * 🎨 VARIANTES DISPONIBLES :
 * - primary : Bouton principal (teal dégradé)
 * - secondary : Bouton secondaire (bordure teal)
 * - ghost : Bouton fantôme (transparent avec bordure)
 * 
 * 📏 TAILLES DISPONIBLES :
 * - sm : Petit bouton
 * - md : Taille moyenne (défaut)
 * - lg : Grand bouton
 * - xl : Très grand bouton
 * 
 * 💡 UTILISATION :
 * <GlowButton variant="primary" size="lg">Mon Texte</GlowButton>
 */
const GlowButton = ({ children, variant = 'primary', size = 'md', className = '', ...props }: any) => {
  // 🎨 STYLES DES VARIANTES - Modifie ici pour changer l'apparence des boutons
  const variants = {
    primary: `bg-gradient-to-r from-teal-400 to-cyan-400 text-black font-bold shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40`,    // 🔵 Bouton principal
    secondary: `bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10`,  // 🔷 Bouton secondaire
    ghost: `bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10`  // 👻 Bouton fantôme
  };

  // 📏 TAILLES DES BOUTONS - Modifie ici pour ajuster les dimensions
  const sizes = {
    sm: 'px-4 py-2 text-sm',      // 🤏 Petit
    md: 'px-6 py-3',              // 📐 Moyen
    lg: 'px-8 py-4 text-lg',      // 📏 Grand
    xl: 'px-10 py-5 text-xl'      // 📊 Très grand
  };

  return (
    <motion.button
      className={`
        inline-flex items-center justify-center rounded-full font-medium transition-all duration-300
        ${(variants as any)[variant]} ${(sizes as any)[size]} ${className}
      `}
      // 🎬 ANIMATIONS AU SURVOL ET CLIC
      whileHover={{ scale: 1.05, y: -2 }}    // 🔍 Agrandit et soulève au survol
      whileTap={{ scale: 0.95 }}             // 🤏 Rétrécit au clic
      {...props}                              // 📋 Transmet toutes les autres propriétés
    >
      {children} {/* 📝 Contenu du bouton */}
    </motion.button>
  );
};

/**
 * 🃏 FLOATING CARD - Carte flottante avec effet glassmorphism
 * ==========================================================
 * 
 * ✨ EFFETS VISUELS :
 * - Fond transparent avec flou (glassmorphism)
 * - Animation d'apparition depuis le bas
 * - Effet de survol (lévitation)
 * - Rotation 3D subtile
 * 
 * 🎛️  PARAMÈTRES :
 * - children : Contenu de la carte
 * - className : Classes CSS supplémentaires
 * - delay : Délai d'animation en secondes
 * 
 * 💡 UTILISATION :
 * <FloatingCard delay={0.2}>Mon contenu</FloatingCard>
 */
const FloatingCard = ({ children, className = '', delay = 0 }: any) => (
  <motion.div
    className={`backdrop-blur-xl border border-white/10 rounded-2xl ${className}`}  // 🎨 Style glassmorphism
    style={{ background: designSystem.gradients.card }}                            // 🌈 Fond dégradé
    // 🎬 ANIMATION D'APPARITION
    initial={{ opacity: 0, y: 100, rotateX: 10 }}        // 👻 Invisible, en bas, légèrement inclinée
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}       // 👁️  Visible, position normale quand à l'écran
    viewport={{ once: true }}                             // 🎯 Animation une seule fois
    transition={{ duration: 0.8, delay, type: 'spring' }} // ⏱️  Durée et délai personnalisables
    // 🎬 ANIMATION DE SURVOL
    whileHover={{ y: -10, rotateX: 5, transition: { duration: 0.3 } }}  // 🕊️  Lévitation au survol
  >
    {children} {/* 📝 Contenu de la carte */}
  </motion.div>
);

/**
 * 🔢 COUNTER NUMBER - Compteur animé
 * ==================================
 * 
 * 🎬 EFFET VISUEL : Compte de 0 jusqu'à la valeur finale avec animation fluide
 * 
 * 🎛️  PARAMÈTRES MODIFIABLES :
 * - end : Nombre final à atteindre
 * - duration : Durée de l'animation en secondes (défaut: 2s)
 * - prefix : Texte avant le nombre (ex: "€", "+")
 * - suffix : Texte après le nombre (ex: "%", "k", "M")
 * 
 * 💡 UTILISATION :
 * <CounterNumber end={1500} duration={3} prefix="+" suffix="%" />
 * Résultat : +1,500%
 */
const CounterNumber = ({ end, duration = 2, prefix = '', suffix = '' }: any) => {
  // 📊 État pour stocker la valeur actuelle du compteur
  const [count, setCount] = useState(0);
  
  // 📌 Référence pour détecter quand l'élément est visible
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true }); // 👁️  Détection de visibilité (une seule fois)

  // 🎬 Animation du compteur quand l'élément devient visible
  useEffect(() => {
    if (inView) {
      const startTime = Date.now(); // ⏰ Temps de début
      
      // 🔄 Fonction d'animation récursive
      const animate = () => {
        const elapsed = Date.now() - startTime;                    // ⏱️  Temps écoulé
        const progress = Math.min(elapsed / (duration * 1000), 1); // 📈 Progression (0 à 1)
        const easeOut = 1 - Math.pow(1 - progress, 3);            // 🎨 Courbe d'animation (ease-out)
        setCount(Math.floor(easeOut * end));                       // 🔢 Mise à jour du compteur
        
        // 🔄 Continue l'animation si pas terminée
        if (progress < 1) requestAnimationFrame(animate);
      };
      
      animate(); // 🚀 Démarrage de l'animation
    }
  }, [inView, end, duration]); // 🎯 Dépendances : se relance si ces valeurs changent

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count.toLocaleString()}{suffix} {/* 🌍 toLocaleString() ajoute les séparateurs de milliers */}
    </span>
  );
};

/**
 * 🚀 LANDING PAGE FIVE UNION PREMIUM
 * ==================================
 * 
 * 🏗️  COMPOSANT PRINCIPAL
 * Ce composant contient toute la landing page Five Union
 * 
 * 📋 STRUCTURE :
 * 1. Header (navigation fixe)
 * 2. Hero Section (section d'accueil)
 * 3. Stats Section (statistiques animées)
 * 4. Services Section (nos services)
 * 5. ROI Section (retour sur investissement)
 * 6. Testimonials (témoignages clients)
 * 7. Footer (pied de page)
 */
export default function FiveUnionPremiumLanding() {
  // 📜 Détection du scroll pour les animations
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]); // 🎭 Opacité du header selon le scroll
  
  // 🎯 État pour notre modal Five Union
  // const [showModal, setShowModal] = useState(false); // Remplacé par Tally
  

  


  /**
   * 📱 HEADER FUTURISTE
   * ===================
   * 
   * 🎯 FONCTIONNALITÉS :
   * - Position fixe en haut de page
   * - Effet glassmorphism (fond flou)
   * - Logo Five Union avec espacement personnalisé
   * - Navigation responsive
   * - Animation d'opacité au scroll
   * 
   * 🛠️  PERSONNALISATION :
   * - Logo : Remplace "/assets/five-unionlogo3.png"
   * - Espacement logo : Modifie "marginLeft: '-7.7rem'"
   * - Menu : Modifie le tableau ['Solutions', 'ROI Calculator', ...]
   * - Couleurs : Utilise les variables du designSystem
   */
  const Header = () => (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"  // 📍 Position fixe + glassmorphism
      style={{ 
        background: 'rgba(10, 10, 15, 0.8)',  // 🎨 Fond semi-transparent
        opacity: headerOpacity                 // 🎭 Opacité dynamique selon le scroll
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4"> {/* 📦 Container responsive avec padding mobile optimisé */}
        <div className="flex items-center justify-between"> {/* 🔄 Flex layout */}
          
          {/* 🏷️  LOGO FIVE UNION */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }} // 🔍 Légère animation au survol
          >
            <div className="flex items-center">
              <div className="h-12 sm:h-16"> {/* 📏 Logo plus petit sur mobile : 48px -> 64px */}
                <img 
                  src="/assets/five-unionlogo3.png"           // 🖼️  Chemin vers le logo
                  alt="Five Union Logo HEADER"                // ♿ Texte alternatif pour l'accessibilité
                  className="h-full w-auto object-contain"    // 🎨 Responsive et proportionnel
                />
              </div>
              {/* 📝 TEXTE "FIVE UNION" À CÔTÉ DU LOGO */}
              <span 
                className="text-lg sm:text-2xl font-bold text-white" 
                style={{ marginLeft: window.innerWidth < 640 ? '-5rem' : '-7.7rem' }}  // 🎯 ESPACEMENT ADAPTATIF
              >
                Five Union
              </span>
            </div>
          </motion.div>

          {/* 📱 MENU BURGER MOBILE */}
          <button className="md:hidden p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* 🧭 MENU DE NAVIGATION DESKTOP */}
          <nav className="hidden md:flex items-center space-x-8"> {/* 📱 Caché sur mobile, visible sur desktop */}
            {/* 📋 LISTE DES ÉLÉMENTS DU MENU - MODIFIE ICI POUR CHANGER LE MENU ! */}
            {[
              { name: 'Solutions', href: '#services' },
              { name: 'Pricing', href: '#pricing' },
              { name: 'À Propos', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}                                          // 🔗 Liens vers les vraies sections
                className="text-gray-300 hover:text-teal-400 transition-colors font-medium"  // 🎨 Style + hover
                whileHover={{ y: -2 }}                                   // 🎬 Animation au survol (monte de 2px)
                transition={{ delay: i * 0.1 }}                         // ⏱️ Délai progressif pour l'animation
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name} {/* 📝 Texte affiché */}
              </motion.a>
            ))}
          </nav>

          {/* 🎯 BOUTON CTA HEADER - MODAL FIVE UNION */}
          <GlowButton 
            size="sm"
            data-tally-open="wz6Kz8" 
            data-tally-emoji-text="🚀" 
            data-tally-emoji-animation="bounce"
            data-ref="header-cta"
            data-source="navigation"
          >
            Audit Gratuit {/* 📝 TEXTE DU BOUTON - MODIFIE ICI ! */}
          </GlowButton>
        </div>
      </div>
    </motion.header>
  );

  /**
   * 🌟 HERO SECTION ÉPOUSTOUFLANTE
   * ==============================
   * 
   * 🎯 SECTION D'ACCUEIL PRINCIPALE
   * La première impression de votre site !
   * 
   * 🎨 ÉLÉMENTS VISUELS :
   * - Titre accrocheur avec dégradé
   * - Sous-titre explicatif
   * - 2 boutons CTA principaux
   * - Métriques de performance
   * - Images d'ordinateurs portables
   * 
   * 🛠️ PERSONNALISATION :
   * - Titre : Lignes 466-474
   * - Sous-titre : Lignes 477-485
   * - Boutons : Lignes 494-503
   * - Badge : Ligne 447
   */
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* 📝 CONTENU TEXTE (COLONNE GAUCHE) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}    // 👻 Invisible, décalé à gauche
          animate={{ opacity: 1, x: 0 }}      // 👁️ Visible, position normale
          transition={{ duration: 1, ease: 'easeOut' }}  // ⏱️ Animation fluide 1s
        >
          
          {/* 🏷️ BADGE "SOLUTION IT PREMIUM" */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Solution IT Premium pour DAF Visionnaires {/* 📝 MODIFIE CE TEXTE ICI ! */}
          </motion.div>

          {/* 🎯 TITRE PRINCIPAL ACCROCHEUR */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* 📝 PREMIÈRE PARTIE DU TITRE */}
            <span className="text-white">L'IT qui </span>
            
            {/* ✨ MOT CLÉ AVEC DÉGRADÉ ET EFFET DE LUEUR */}
            <span 
              className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 30px rgba(79, 209, 199, 0.3)' }}  // 🌟 Effet de lueur
            >
              rapporte {/* 📝 MOT CLÉ PRINCIPAL - MODIFIE ICI ! */}
            </span>
            <br />
            
            {/* 📝 DEUXIÈME PARTIE DU TITRE */}
            <span className="text-white">plus qu'il ne coûte.</span>
          </motion.h1>

          {/* 📄 SOUS-TITRE EXPLICATIF */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Transformez votre parc informatique d'un centre de coûts opaque en 
            <span className="text-teal-400 font-semibold"> levier de performance financière </span>
            prévisible et optimisé. {/* 📝 DESCRIPTION PRINCIPALE - MODIFIE ICI ! */}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlowButton 
              size="lg" 
              className="group"
              data-tally-open="wz6Kz8" 
              data-tally-emoji-text="💰" 
              data-tally-emoji-animation="bounce"
              data-ref="hero-cta"
              data-source="hero-section"
            >
              <BarChart3 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Démarrer mon Audit Gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
            
            <GlowButton 
              variant="secondary" 
              size="lg"
              onClick={() => {
                const element = document.querySelector('#services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="w-5 h-5 mr-2" />
              Découvrir nos solutions
            </GlowButton>
          </motion.div>

          {/* Métriques de Performance */}
          <motion.div 
            className="grid grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {[
              { value: 40, suffix: '%', label: 'Réduction coûts IT' },
              { value: 99.9, suffix: '%', label: 'Uptime garanti' },
              { value: 24, suffix: 'h', label: 'Support premium' }
            ].map((metric, i) => (
              <div key={i} className="group">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  <CounterNumber end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Asset Visuel Principal - MacBook Futuriste */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 bg-teal-400/20 rounded-3xl blur-3xl scale-110"
              style={{ animation: 'pulse 4s ease-in-out infinite' }}
            />
            
            {/* MacBook Container */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-teal-400/20"
              whileHover={{ rotateY: 5, rotateX: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                src="/assets/mac-futuriste-demi fermé.jpg" 
                alt="MacBook Pro Futuriste Five Union"
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(79, 209, 199, 0.3))',
                  willChange: 'transform'
                }}
                loading="lazy"
                decoding="async"
              />
              
              {/* Holographic UI Overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-teal-400/30"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, type: 'spring' }}
                >
                  <div className="text-teal-400 text-sm font-mono">
                    ROI Calculator Active
                  </div>
                  <div className="text-white text-lg font-bold">
                    +<CounterNumber end={127} />k€ économisés
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          {[
            { icon: <DollarSign />, label: 'OPEX Optimisé', position: 'top-4 -left-4' },
            { icon: <Shield />, label: 'Sécurité Managée', position: 'bottom-4 -right-4' },
            { icon: <Zap />, label: 'Performance Max', position: 'top-1/2 -right-8' }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.position} bg-black/80 backdrop-blur-sm rounded-xl p-3 border border-teal-400/20`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.2, type: 'spring' }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="text-teal-400">{item.icon}</div>
                <span className="text-white text-xs font-medium">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-teal-400" />
      </motion.div>
    </section>
  );

  // ========================================
  // 💼 SECTION TRANSFORMATION MÉTIER
  // ========================================
  const TransformationSection = () => (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Du <span className="text-red-400">Chaos IT</span> à la{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Maîtrise Financière
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment Five Union transforme votre relation avec l'IT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Problèmes DAF */}
          <FloatingCard className="p-8" delay={0.2}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Votre Réalité Actuelle</h3>
            </div>
            
            {[
              { title: 'CAPEX Imprévisible', desc: 'Demandes urgentes qui explosent vos budgets', impact: '-15% trésorerie' },
              { title: 'Visibilité ROI = 0', desc: 'Impossible de justifier les investissements IT', impact: 'Stress permanent' },
              { title: 'Pannes = Catastrophe', desc: 'Chaque incident coûte des milliers d\'euros', impact: '-40% productivité' }
            ].map((problem, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 mb-6 p-4 rounded-xl bg-red-500/5 border border-red-500/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold">{i + 1}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{problem.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{problem.desc}</p>
                  <span className="text-red-400 text-xs font-bold">{problem.impact}</span>
                </div>
              </motion.div>
            ))}
          </FloatingCard>

          {/* Solutions Five Union */}
          <FloatingCard className="p-8" delay={0.4}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-teal-400 mb-4">✨ Avec Five Union</h3>
            </div>
            
            {[
              { title: 'OPEX Maîtrisé', desc: 'Coût fixe mensuel, zéro surprise budgétaire', impact: '+25% trésorerie' },
              { title: 'ROI Temps Réel', desc: 'Dashboard avec métriques de performance live', impact: 'Visibilité totale' },
              { title: 'Zéro Downtime', desc: 'Remplacement proactif avant la panne', impact: '+60% productivité' }
            ].map((solution, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 mb-6 p-4 rounded-xl bg-teal-500/5 border border-teal-500/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-400" />
                </div>
      <div>
                  <h4 className="text-white font-bold mb-1">{solution.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{solution.desc}</p>
                  <span className="text-teal-400 text-xs font-bold">{solution.impact}</span>
                </div>
              </motion.div>
            ))}
          </FloatingCard>
        </div>
      </div>
    </section>
  );

  // ========================================
  // 🖥️ SECTION MATÉRIEL PREMIUM
  // ========================================
  const MaterialSection = () => (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Du Matériel qui{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Inspire la Performance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un employé bien équipé = un employé rentable. C'est mathématique.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* MacBook Pro Setup */}
          <FloatingCard className="p-6" delay={0.2}>
            <div className="aspect-video bg-gradient-to-br from-purple-900 to-black rounded-xl mb-6 overflow-hidden">
              <img 
                src="/assets/mac-futuriste-demi fermé.jpg"
                alt="MacBook Pro Premium"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">MacBook Pro M3</h3>
            <p className="text-gray-400 mb-4">Performance ultime pour vos équipes créatives</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-teal-400">78,99€/mois</span>
              <GlowButton 
                size="sm"
                data-tally-open="wz6Kz8" data-tally-emoji-text="💻" data-tally-emoji-animation="bounce"
              >
                Configurer
              </GlowButton>
            </div>
          </FloatingCard>

          {/* PC Portable Entreprise */}
          <FloatingCard className="p-6" delay={0.4}>
            <div className="aspect-video bg-black rounded-xl mb-6 overflow-hidden">
              <img 
                src="/assets/open-pcportable-futurist.jpg"
                alt="PC Portable Professionnel"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                style={{ willChange: 'auto' }}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ThinkPad T490s</h3>
            <p className="text-gray-400 mb-4">Robustesse et sécurité entreprise</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-teal-400">20,99€/mois</span>
              <GlowButton 
                size="sm"
                data-tally-open="wz6Kz8" data-tally-emoji-text="💻" data-tally-emoji-animation="bounce"
              >
                Configurer
              </GlowButton>
            </div>
          </FloatingCard>

          {/* Setup Multi-Écrans */}
          <FloatingCard className="p-6" delay={0.6}>
            <div className="aspect-video bg-gray-900 rounded-xl mb-6 overflow-hidden">
              <img 
                src="/assets/pc-portable-triplescreen.jpg"
                alt="Setup Multi-Écrans"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                style={{ willChange: 'auto' }}
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Setup Multi-Écrans Pro</h3>
            <p className="text-gray-400 mb-4">Productivité maximale pour vos analysts</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-teal-400">199€/mois</span>
              <GlowButton 
                size="sm"
                data-tally-open="wz6Kz8" data-tally-emoji-text="💻" data-tally-emoji-animation="bounce"
              >
                Configurer
              </GlowButton>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );

  // ========================================
  // 📊 SECTION PRICING
  // ========================================
  const ROISection = () => (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FloatingCard className="p-12 text-center" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Tarification{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Transparente
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Des prix justes, sans surprise. Calculez vos économies en quelques clics.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              {[
                { label: 'Employés IT', value: '50+', color: 'text-teal-400' },
                { label: 'Économies Annuelles', value: '€127k', color: 'text-green-400' },
                { label: 'ROI', value: '340%', color: 'text-yellow-400' },
                { label: 'Temps Gagné', value: '1,200h', color: 'text-purple-400' }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            <GlowButton 
              size="xl" 
              className="group"
              data-tally-open="wz6Kz8" data-tally-emoji-text="📱" data-tally-emoji-animation="bounce"
            >
              <BarChart3 className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Obtenir une Étude Personnalisée Gratuite
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
          </motion.div>
        </FloatingCard>
      </div>
    </section>
  );

  // ========================================
  // 🎯 CTA FINAL ÉPIQUE
  // ========================================
  const FinalCTA = () => (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-teal-500/10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold text-white mb-8">
            Prêt à{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Révolutionner
            </span>
            <br />
            votre IT ?
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Rejoignez les DAF visionnaires qui ont transformé leur IT en avantage concurrentiel.
            <br />
            <span className="text-teal-400 font-semibold">L'audit est gratuit. Le ROI est garanti.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
            <GlowButton 
              size="xl" 
              className="group"
              data-tally-open="wz6Kz8" 
              data-tally-emoji-text="✨" 
              data-tally-emoji-animation="bounce"
              data-ref="final-cta"
              data-source="cta-section"
            >
              <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Démarrer mon Audit Gratuit
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </GlowButton>
            
            <GlowButton variant="secondary" size="xl">
              <Play className="w-6 h-6 mr-3" />
              Voir la Démo Live
            </GlowButton>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              Audit en 30 minutes
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
              Sans engagement
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-teal-400 mr-2" />
              Confidentiel
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // ========================================
  // 🦶 FOOTER PREMIUM NIVEAU 50K€
  // ========================================
  const Footer = () => (
    <footer id="contact" className="relative py-20 border-t border-white/10 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="h-12">
                <img src="/assets/five-unionlogo3.png" alt="Five Union Logo FOOTER" className="h-full w-auto object-contain" />
              </div>
              <span className="text-2xl font-bold text-white" style={{ marginLeft: '-5.8rem' }}>Five Union</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire de confiance pour les solutions de location d'ordinateurs portables et de smartphones avec des conditions et un service adapté à vos besoins.
            </p>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://linkedin.com/company/fiveunion"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <span className="text-white text-sm">in</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Produits & Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6">Produits & Services</h3>
            <ul className="space-y-4">
              {[
                'Location ordinateurs',
                'Location smartphones', 
                'Location tablettes',
                'Gestion MDM',
                'Cybersécurité',
                'Support technique'
              ].map((item, i) => (
                <li key={i}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Entreprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6">Entreprise</h3>
            <ul className="space-y-4">
              {[
                'Réserver un appel',
                'Notre Équipe',
                'Actualités',
                'Mentions Légales',
                'Politique de Confidentialité',
                'Conditions Générales'
              ].map((item, i) => (
                <li key={i}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-teal-400 mb-6">Contact</h3>
            <div className="space-y-6">
              
              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <span className="text-teal-400 text-sm">📞</span>
                </div>
                <div>
                  <p className="text-white font-medium">07 67 584 583</p>
                  <p className="text-gray-500 text-sm">Lun-Ven 9h-18h</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <span className="text-teal-400 text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-white font-medium">contact@fiveunion.fr</p>
                  <p className="text-gray-500 text-sm">Réponse sous 2h</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-3 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                  <span className="text-teal-400 text-sm">📍</span>
                </div>
                <div>
                  <p className="text-white font-medium">40 avenue de Lascours</p>
                  <p className="text-gray-500 text-sm">13400 Aubagne, France</p>
                </div>
              </motion.div>
              
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
                      className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">
            © 2025 <span className="text-teal-400 font-medium">Five Union</span>. Tous droits réservés.
          </p>
          
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <span className="text-gray-500">Pourquoi choisir le</span>
            <span className="text-teal-400 font-semibold">leasing</span>
            <span className="text-gray-500">avec</span>
            <span className="text-teal-400 font-semibold">Five Union</span>
            <span className="text-gray-500">?</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );

  // ========================================
  // 🎬 RENDU FINAL
  // ========================================
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <ParticleBackground />
      

      
      <Header />
      <main className="relative z-10">
        <HeroSection />
        
        {/* 🎨 BANNIÈRE PREMIUM FIVE UNION */}
        <section className="py-16 px-4 sm:px-6">
          <PremiumBanner 
            className="max-w-7xl mx-auto rounded-3xl"
            onCTAClick={() => {}}
          />
        </section>
        
        <TransformationSection />
        
        {/* 📢 BANNIÈRE D'ANNONCE SPÉCIALE (optionnelle) */}
        <section className="py-8">
          <AnnouncementBanner 
            className="rounded-3xl mx-4 sm:mx-6 max-w-7xl lg:mx-auto"
            onCTAClick={() => {}}
          />
        </section>
        
        <MaterialSection />
        <ROISection />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* 🎯 MODAL FIVE UNION PERSONNALISÉ - Remplacé par Tally */}
      {/* <FiveUnionModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      /> */}

      {/* Custom Styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        /* 🎨 CUSTOMISATION POPUP TALLY - STYLE FIVE UNION */
        /* 🎯 NOUVELLE APPROCHE AVEC SÉLECTEURS CSS MODERNES */
        
        /* Overlay du modal - Sélecteurs Tally spécifiques */
        [data-tally-popup-overlay],
        [class*="tally"][class*="overlay"],
        [class*="tally"][class*="backdrop"],
        div[style*="position: fixed"][style*="inset: 0"],
        .tally-popup-overlay {
          background: rgba(10, 10, 15, 0.95) !important;
          backdrop-filter: blur(20px) !important;
        }
        
        /* Container principal du formulaire - Ciblage multiple */
        div[class*="popup"],
        div[class*="modal"],
        div[class*="dialog"],
        div[role="dialog"],
        .tally-popup,
        .fiveunion-tally-popup,
        [data-tally-popup] {
          background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(10, 40, 40, 0.95)) !important;
          border: 1px solid rgba(20, 184, 166, 0.3) !important;
          border-radius: 24px !important;
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(20, 184, 166, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(20px) !important;
        }
        
        /* Header du formulaire */
        .tally-popup .tally-form-header {
          background: transparent !important;
          border-bottom: 1px solid rgba(20, 184, 166, 0.2) !important;
          padding: 24px !important;
        }
        
        /* Titre principal */
        .tally-popup h1, .tally-popup .tally-form-title {
          color: #ffffff !important;
          font-size: 28px !important;
          font-weight: 800 !important;
          text-align: center !important;
          background: linear-gradient(135deg, #14b8a6, #06b6d4) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          margin-bottom: 8px !important;
        }
        
        /* Sous-titre */
        .tally-popup .tally-form-description, .tally-popup p {
          color: #d1d5db !important;
          font-size: 16px !important;
          text-align: center !important;
          margin-bottom: 24px !important;
        }
        
        /* Corps du formulaire */
        .tally-popup .tally-form-body {
          background: transparent !important;
          padding: 0 24px 24px 24px !important;
        }
        
        /* Labels des champs */
        .tally-popup label {
          color: #f3f4f6 !important;
          font-weight: 600 !important;
          font-size: 14px !important;
          margin-bottom: 8px !important;
          display: block !important;
        }
        
        /* Champs de saisie - Ciblage agressif */
        input, 
        textarea, 
        select,
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="number"],
        .tally-popup input, 
        .tally-popup textarea, 
        .tally-popup select,
        div[role="dialog"] input,
        div[role="dialog"] textarea,
        div[role="dialog"] select {
          background: rgba(0, 0, 0, 0.4) !important;
          border: 1px solid rgba(20, 184, 166, 0.3) !important;
          border-radius: 12px !important;
          color: #ffffff !important;
          padding: 12px 16px !important;
          font-size: 16px !important;
          transition: all 0.3s ease !important;
          width: 100% !important;
        }
        
        /* Focus sur les champs */
        .tally-popup input:focus, 
        .tally-popup textarea:focus, 
        .tally-popup select:focus {
          outline: none !important;
          border-color: #14b8a6 !important;
          box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1) !important;
          background: rgba(0, 0, 0, 0.6) !important;
        }
        
        /* Placeholder */
        .tally-popup input::placeholder, 
        .tally-popup textarea::placeholder {
          color: #9ca3af !important;
        }
        
        /* Bouton principal */
        .tally-popup button[type="submit"], 
        .tally-popup .tally-submit-button {
          background: linear-gradient(135deg, #14b8a6, #06b6d4) !important;
          border: none !important;
          border-radius: 12px !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          padding: 14px 32px !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          width: 100% !important;
          margin-top: 16px !important;
          box-shadow: 
            0 4px 14px 0 rgba(20, 184, 166, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }
        
        /* Hover sur le bouton */
        .tally-popup button[type="submit"]:hover, 
        .tally-popup .tally-submit-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 
            0 8px 25px 0 rgba(20, 184, 166, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
        }
        
        /* Bouton de fermeture */
        .tally-popup .tally-close-button {
          background: rgba(239, 68, 68, 0.1) !important;
          border: 1px solid rgba(239, 68, 68, 0.3) !important;
          color: #ef4444 !important;
          border-radius: 8px !important;
          padding: 8px !important;
          transition: all 0.3s ease !important;
        }
        
        .tally-popup .tally-close-button:hover {
          background: rgba(239, 68, 68, 0.2) !important;
          transform: scale(1.1) !important;
        }
        
        /* Footer du formulaire */
        .tally-popup .tally-form-footer {
          background: transparent !important;
          border-top: 1px solid rgba(20, 184, 166, 0.2) !important;
          padding: 16px 24px !important;
          text-align: center !important;
        }
        
        /* Texte "Powered by Tally" - On le cache */
        .tally-popup .tally-branding,
        .tally-popup .tally-powered-by,
        .tally-popup [class*="powered"],
        .tally-popup [class*="branding"] {
          display: none !important;
        }
        
        /* Messages d'erreur */
        .tally-popup .tally-error {
          color: #ef4444 !important;
          background: rgba(239, 68, 68, 0.1) !important;
          border: 1px solid rgba(239, 68, 68, 0.3) !important;
          border-radius: 8px !important;
          padding: 12px !important;
          margin: 8px 0 !important;
        }
        
        /* Messages de succès */
        .tally-popup .tally-success {
          color: #10b981 !important;
          background: rgba(16, 185, 129, 0.1) !important;
          border: 1px solid rgba(16, 185, 129, 0.3) !important;
          border-radius: 8px !important;
          padding: 12px !important;
          margin: 8px 0 !important;
        }
        
        /* Options de choix multiple */
        .tally-popup .tally-option {
          background: rgba(0, 0, 0, 0.3) !important;
          border: 1px solid rgba(20, 184, 166, 0.2) !important;
          border-radius: 8px !important;
          padding: 12px !important;
          margin: 8px 0 !important;
          color: #ffffff !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
        }
        
        .tally-popup .tally-option:hover {
          border-color: #14b8a6 !important;
          background: rgba(20, 184, 166, 0.1) !important;
        }
        
        .tally-popup .tally-option.selected {
          border-color: #14b8a6 !important;
          background: rgba(20, 184, 166, 0.2) !important;
        }
        
        /* Animation d'entrée */
        .tally-popup {
          animation: tally-slide-in 0.4s ease-out !important;
        }
        
        @keyframes tally-slide-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        /* Animation pour le message de succès */
        @keyframes successPop {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        
        /* 🎯 APPROCHE UNIVERSELLE - TOUS LES IFRAMES ET MODALS */
        @supports (backdrop-filter: blur(20px)) {
          iframe[src*="tally.so"] {
            border-radius: 24px !important;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8) !important;
          }
        }
        
        /* Style pour tous les éléments qui pourraient être le popup */
        * {
          --tally-color-primary: #14b8a6;
          --tally-color-accent: #06b6d4;
          --tally-background: rgba(20, 20, 30, 0.95);
        }
        
        /* Injection CSS via variables CSS custom */
        :root {
          --tally-popup-background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(10, 40, 40, 0.95));
          --tally-input-background: rgba(0, 0, 0, 0.4);
          --tally-input-border: rgba(20, 184, 166, 0.3);
          --tally-button-background: linear-gradient(135deg, #14b8a6, #06b6d4);
        }
        
        /* 🎨 STYLES POUR ÉLÉMENTS DÉTECTÉS AUTOMATIQUEMENT */
        .fiveunion-tally-styled,
        .fiveunion-tally-styled * {
          background: var(--tally-popup-background) !important;
          border-radius: 24px !important;
          border-color: rgba(20, 184, 166, 0.3) !important;
        }
        
        .fiveunion-tally-styled input,
        .fiveunion-tally-styled textarea,
        .fiveunion-tally-styled select {
          background: var(--tally-input-background) !important;
          border: 1px solid var(--tally-input-border) !important;
          border-radius: 12px !important;
          color: #ffffff !important;
          padding: 12px 16px !important;
        }
        
        .fiveunion-tally-styled button[type="submit"] {
          background: var(--tally-button-background) !important;
          border: none !important;
          border-radius: 12px !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          padding: 14px 32px !important;
        }
      `}</style>
    </div>
  );
}