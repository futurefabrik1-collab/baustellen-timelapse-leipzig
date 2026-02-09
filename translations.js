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
    home_hero_title: "Professionelle Baustellen-Zeitraffer",
    home_hero_subtitle: "Dokumentieren Sie Ihr Bauprojekt in beeindruckenden 4K-Zeitraffer-Videos",
    home_hero_desc: "Von der ersten Schaufel bis zum letzten Pinselstrich – wir machen Ihren Baufortschritt sichtbar.",
    home_hero_cta1: "Kostenlos beraten lassen",
    home_hero_cta2: "Referenzen ansehen",
    
    home_features_title: "Warum Baustellen-Zeitraffer?",
    home_feature1_title: "Marketing & Präsentation",
    home_feature1_desc: "Beeindruckende Videos für Website, Social Media und Investoren-Präsentationen",
    home_feature2_title: "Dokumentation & Bauakte",
    home_feature2_desc: "Lückenlose digitale Baudokumentation für rechtliche Absicherung",
    home_feature3_title: "Projektmanagement",
    home_feature3_desc: "Überwachen Sie den Baufortschritt von überall aus in Echtzeit",
    
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
    home_hero_title: "Professional Construction Timelapse",
    home_hero_subtitle: "Document your construction project with stunning 4K timelapse videos",
    home_hero_desc: "From groundbreaking to final touches – we make your construction progress visible.",
    home_hero_cta1: "Free Consultation",
    home_hero_cta2: "View Portfolio",
    
    home_features_title: "Why Construction Timelapse?",
    home_feature1_title: "Marketing & Presentation",
    home_feature1_desc: "Impressive videos for website, social media, and investor presentations",
    home_feature2_title: "Documentation & Records",
    home_feature2_desc: "Complete digital construction documentation for legal protection",
    home_feature3_title: "Project Management",
    home_feature3_desc: "Monitor construction progress from anywhere in real-time",
    
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
