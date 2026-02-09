// Language translations for baustellen-timelapse-leipzig.de
const translations = {
  de: {
    // Navigation
    nav_services: "Leistungen",
    nav_portfolio: "Referenzen",
    nav_guide: "Ratgeber",
    nav_faq: "FAQ",
    nav_contact: "Kontakt",
    nav_cta: "Projekt besprechen",
    
    // Homepage
    home_hero_title: "BAUSTELLEN-ZEITRAFFER für LEIPZIG",
    home_hero_subtitle: "Für Bauunternehmen, Architekturbüros und Projektentwickler: Hochauflösende Baudokumentation mit 4K-Kameras, LTE-Anbindung und professioneller Filmproduktion – alles aus einer Hand.",
    home_hero_cta: "Jetzt anfragen",
    
    // Services Section
    services_title: "Komplettlösungen für Ihre Baudokumentation",
    services_subtitle: "Von der Kamera-Installation bis zum fertigen 3D-Modell – wir begleiten Ihr Bauprojekt mit modernster Technik.",
    
    service1_title: "Baustellenkamera",
    service1_desc: "Hochauflösende 4K-Kameras mit LTE, Cloud-Zugang und professioneller Installation. Perfekt für laufende Bauüberwachung.",
    
    service2_title: "Zeitraffer-Filmproduktion",
    service2_desc: "Professionelle Videos mit Musik, Logo und Animationen. Ideal für Marketing, Dokumentation und Präsentationen.",
    
    service3_title: "Digitaler Zwilling & 3D",
    service3_desc: "Einzigartige 3D/4D-Dokumentation mit Gaussian Splatting. Beobachten Sie die Evolution Ihres Projekts in immersiver 3D-Ansicht.",
    
    home_process_title: "So funktioniert's",
    home_step1_title: "Beratung & Planung",
    home_step1_desc: "Wir besprechen Ihr Projekt und planen die optimale Kamera-Position",
    home_step2_title: "Installation",
    home_step2_desc: "Professionelle Montage und Einrichtung in 2-4 Stunden",
    home_step3_title: "Automatische Aufnahme",
    home_step3_desc: "Die Kamera arbeitet selbstständig – Sie haben jederzeit Zugriff",
    home_step4_title: "Finales Video",
    home_step4_desc: "Wir produzieren Ihr individuelles Zeitraffer-Video in 4K",
    
    home_cta_title: "Bereit für Ihr Zeitraffer-Projekt?",
    home_cta_desc: "Lassen Sie uns Ihr Bauprojekt in Szene setzen",
    home_cta_button: "Jetzt Beratung vereinbaren",
    
    // Footer
    footer_about: "Über uns",
    footer_about_text: "Professionelle Baustellendokumentation und Zeitraffer-Filmproduktion für Leipzig und Umgebung.",
    footer_services: "Leistungen",
    footer_legal: "Rechtliches",
    footer_privacy: "Datenschutz",
    footer_imprint: "Impressum",
    footer_copyright: "© 2024 Baustellen-Timelapse Leipzig - Future Fabrik GmbH. Alle Rechte vorbehalten.",
    
    // Common
    learn_more: "Mehr erfahren",
    contact_us: "Kontakt aufnehmen",
    back_home: "Zurück zur Startseite",
  },
  
  en: {
    // Navigation
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_guide: "Guide",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_cta: "Discuss Project",
    
    // Homepage
    home_hero_title: "CONSTRUCTION TIMELAPSE for LEIPZIG",
    home_hero_subtitle: "For construction companies, architecture firms, and project developers: High-resolution construction documentation with 4K cameras, LTE connectivity, and professional film production – all from one source.",
    home_hero_cta: "Request Now",
    
    // Services Section
    services_title: "Complete Solutions for Your Construction Documentation",
    services_subtitle: "From camera installation to the finished 3D model – we accompany your construction project with cutting-edge technology.",
    
    service1_title: "Construction Camera",
    service1_desc: "High-resolution 4K cameras with LTE, cloud access, and professional installation. Perfect for ongoing construction monitoring.",
    
    service2_title: "Timelapse Film Production",
    service2_desc: "Professional videos with music, logo, and animations. Ideal for marketing, documentation, and presentations.",
    
    service3_title: "Digital Twin & 3D",
    service3_desc: "Unique 3D/4D documentation with Gaussian Splatting. Observe your project's evolution in immersive 3D view.",
    
    home_process_title: "How It Works",
    home_step1_title: "Consultation & Planning",
    home_step1_desc: "We discuss your project and plan the optimal camera position",
    home_step2_title: "Installation",
    home_step2_desc: "Professional mounting and setup in 2-4 hours",
    home_step3_title: "Automatic Recording",
    home_step3_desc: "The camera works independently – you have access anytime",
    home_step4_title: "Final Video",
    home_step4_desc: "We produce your custom timelapse video in 4K quality",
    
    home_cta_title: "Ready for Your Timelapse Project?",
    home_cta_desc: "Let us showcase your construction project",
    home_cta_button: "Schedule Consultation Now",
    
    // Footer
    footer_about: "About Us",
    footer_about_text: "Professional construction documentation and timelapse film production for Leipzig and surroundings.",
    footer_services: "Services",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_imprint: "Imprint",
    footer_copyright: "© 2024 Construction Timelapse Leipzig - Future Fabrik GmbH. All rights reserved.",
    
    // Common
    learn_more: "Learn More",
    contact_us: "Contact Us",
    back_home: "Back to Homepage",
  }
};

// Language switcher functionality
(function() {
  // Get current language from localStorage or default to 'de'
  let currentLang = localStorage.getItem('language') || 'de';
  
  // Function to translate the page
  function translatePage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update language switcher active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }
  
  // Initialize on page load
  window.addEventListener('DOMContentLoaded', function() {
    translatePage(currentLang);
    
    // Add click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const lang = this.getAttribute('data-lang');
        translatePage(lang);
      });
    });
  });
  
  // Export for use in other scripts
  window.switchLanguage = translatePage;
  window.getCurrentLanguage = () => currentLang;
})();
