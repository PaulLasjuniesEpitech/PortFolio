// ========== SYSTÈME DE TRADUCTION ==========

const translations = {
    fr: {
        // NAVIGATION
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_contact: "Contact",
        nav_intro: "Intro",
        nav_tech_mode: "🚀 Mode Tech",
        
        // INTRO
        intro_text: "Je m'appelle\nPaul Lasjunies\nJe suis étudiant à Epitech.\nEt\nJe suis ravi de vous présenter\nmon portfolio !",
        intro_warning: "Pour une meilleure expérience, veuillez utiliser un ordinateur",
        intro_rh_btn: "💼 Vue Rapide (Pour Recruteurs)",
        intro_tech_btn: "🚀 Commencer le Voyage (Expérience Immersive)",
        intro_popup_title: "🚧 Travaux en Cours",
        intro_popup_text: "L'expérience immersive est actuellement en développement.<br>Veuillez utiliser le mode Vue Rapide pour le moment.",
        intro_popup_btn: "Compris !",
        
        // HOME
        home_title: "Paul LASJUNIES",
        home_cv_title: "Commencez votre voyage bien préparé",
        home_cv_subtitle: "Télécharger mon CV",
        home_subtitle: "Étudiant Développeur à Epitech",
        home_welcome: "Bienvenue à bord.<br>Commencez votre voyage à travers mon travail.",
        home_about_title: "À Propos de ce Voyage",
        home_about_text: "Je suis étudiant à Epitech, passionné par le développement logiciel, les nouvelles technologies et les expériences créatives. Ce portfolio est conçu comme un voyage spatial pour refléter ma curiosité et ma façon d'explorer de nouvelles idées.",
        home_projects_title: "Missions En Vedette",
        home_drone: "Drone Project",
        home_drone_desc: "Construction d'un drone personnalisé avec Arduino, impression 3D et électronique",
        home_jobboard: "Plateforme JobBoard",
        home_jobboard_desc: "Une plateforme web connectant les chercheurs d'emploi aux opportunités",
        home_status: "Statut de la mission actuelle : <span class='status-active'>Actif</span>",
        home_status_ops: "Tous les systèmes opérationnels",
        
        // ABOUT
        about_title: "À Propos de Moi",
        about_subtitle: "Étudiant Développeur • Passionné d'Espace • Résolveur de Problèmes",
        about_hi: "Salut, je suis Paul 👋",
        about_intro_1: "Je suis un étudiant développeur à Epitech, passionné par le développement logiciel, la résolution de problèmes et la construction de projets significatifs.",
        about_intro_2: "Pendant mes études, j'ai travaillé sur des projets en équipe et individuels impliquant des algorithmes, de la programmation système et des technologies web.",
        about_goal_title: "🎯 Ce Que Je Recherche",
        about_goal_text: "Je recherche actuellement des opportunités pour continuer à apprendre, acquérir une expérience professionnelle et contribuer à des projets passionnants dans le développement logiciel. Que ce soit un stage, une alternance ou un projet collaboratif, je suis désireux d'appliquer mes compétences et de grandir en tant que développeur.",
        about_work_title: "🧠 Comment Je Travaille",
        about_work_text: "J'aime comprendre comment les choses fonctionnent, écrire du code propre et améliorer constamment mes compétences. J'aime comprendre les problèmes en profondeur avant de coder, en analysant différentes approches pour trouver la solution la plus efficace.",
        about_collab_title: "🤝 Collaboration",
        about_collab_text: "Je suis curieux, autonome, et j'apprécie de collaborer avec les autres pour trouver des solutions efficaces. Travailler en équipe me permet d'apprendre de différentes perspectives et d'améliorer ma propre approche de la résolution de problèmes.",
        about_skills_title: "Compétences Techniques",
        about_cert_title: "📜 Certifications Udemy",
        about_cert_intro: "Apprentissage continu à travers des cours en ligne",
        about_cert_1_title: "Bootcamp Python Complet",
        about_cert_1_desc: "Programmation Python avancée et structures de données",
        about_cert_2_title: "Masterclass Développement Web",
        about_cert_2_desc: "Développement full-stack avec frameworks modernes",
        about_cert_3_title: "Docker & Kubernetes",
        about_cert_3_desc: "Orchestration et déploiement de conteneurs",
        about_hobbies_title: "Au-Delà du Code",
        about_hobbies_intro: "Quand je ne code pas, j'aime les activités qui m'aident à rester concentré, créatif et curieux.",
        about_hobby_1: "Cyclisme",
        about_hobby_1_desc: "Le cyclisme m'aide à me vider l'esprit et à maintenir ma concentration. La discipline et l'endurance requises reflètent la persévérance nécessaire pour déboguer et résoudre les problèmes.",
        about_hobby_2: "Projets DIY",
        about_hobby_2_desc: "Construire des choses avec mes mains, comme mon projet de drone, me permet de comprendre le matériel et de combiner créativité et compétences techniques.",
        about_hobby_3: "Jeux Vidéo",
        about_hobby_3_desc: "Les jeux affûtent ma réflexion stratégique et ma prise de décision rapide. De nombreux jeux impliquent des systèmes complexes et des énigmes qui améliorent mes compétences analytiques.",
        about_hobby_4: "Espace & Science-Fiction",
        about_hobby_4_desc: "Ma passion pour l'exploration spatiale et la science-fiction alimente ma curiosité pour la technologie et l'innovation. Cela m'inspire à penser au-delà des limitations actuelles.",
        
        // PROJECTS
        projects_title: "Archive des Missions",
        projects_subtitle: "Explorez les modules que j'ai construits pendant mon voyage",
        projects_badge_personal: "Projet Personnel",
        projects_badge_epitech: "Projet Epitech",
        projects_status_progress: "🚧 En Cours",
        projects_status_completed: "⚡ Terminé",
        projects_status_active: "🚀 Actif",
        
        // Factor
        project_factor_title: "🏭 Factor",
        project_factor_badge: "Prototype de Jeu Procédural",
        project_factor_desc: "Factor est un projet d'apprentissage personnel développé avec Godot 4. Inspiré des jeux de construction d'usines, il se concentre sur la génération procédurale de cartes et l'architecture orientée objet.",
        project_factor_goals: "🎯 Objectifs du Projet",
        project_factor_goals_text: "Apprendre la génération procédurale de cartes, pratiquer l'architecture orientée objet et comprendre les flux de travail des moteurs de jeu avec Godot 4.",
        project_factor_work: "💼 Mon Travail",
        project_factor_work_text: "Conception d'un système de carte basé sur des tuiles procédurales, implémentation de systèmes orientés objet pour les bâtiments et ressources, et structuration du projet pour rester modulaire et extensible.",
        project_factor_learned: "📚 Ce Que J'ai Appris",
        project_factor_learned_text: "Comment structurer un projet de jeu en utilisant les principes OOP, équilibrer flexibilité et performance dans les systèmes procéduraux, et travailler efficacement avec Godot 4 et GDScript.",
        
        // Drone
        project_drone_title: "🚁 Drone Autonome",
        project_drone_badge: "Matériel & Logiciel",
        project_drone_desc: "Construction d'un drone entièrement fonctionnel à partir de zéro avec un ami. Le projet combine des pièces imprimées en 3D conçues avec Fusion 360, de la programmation Arduino et des circuits électroniques personnalisés pour le contrôle de vol et la stabilisation. En tirant parti de ma formation EEA (Électronique, Électrotechnique et Automatique) de l'Université Paul Sabatier.",
        project_drone_goals: "🎯 Objectifs du Projet",
        project_drone_goals_text: "Concevoir et construire un drone autonome personnalisé combinant programmation logicielle, modélisation 3D, connaissances en électronique et ingénierie mécanique. Intégrer des systèmes de contrôle de vol et traitement de données de capteurs pour un vol stable.",
        project_drone_work: "💼 Mon Travail",
        project_drone_work_text: "Conception du châssis et des pièces personnalisées du drone dans Fusion 360, impression 3D des composants avec une imprimante Creality, programmation du contrôleur de vol en C++ sur plateforme Arduino, câblage et intégration de circuits électroniques (ESCs, moteurs, capteurs), et application des principes EEA appris à l'Université Paul Sabatier pour la gestion de l'alimentation et le traitement du signal.",
        project_drone_learned: "📚 Ce Que J'ai Appris",
        project_drone_learned_text: "Comment intégrer des systèmes matériels et logiciels, gérer les données de capteurs en temps réel, concevoir des pièces mécaniques pour l'impression 3D, comprendre la conception de circuits électroniques et la distribution d'énergie, déboguer des systèmes physiques, et appliquer les connaissances théoriques EEA à des applications pratiques. Ce projet a renforcé mes compétences de résolution de problèmes multidisciplinaires.",
        project_drone_academic: "🎓 Formation Académique",
        project_drone_academic_text: "Ce projet s'appuie sur ma formation en Électronique, Électrotechnique et Automatique (EEA) de l'Université Paul Sabatier, où j'ai appris la conception de circuits, le traitement du signal, les systèmes de contrôle et les fondamentaux de la programmation embarquée.",
        
        // JobBoard
        project_jobboard_title: "💼 Plateforme JobBoard",
        project_jobboard_badge: "Web Full Stack",
        project_jobboard_desc: "Une plateforme web connectant les chercheurs d'emploi aux opportunités. Les fonctionnalités incluent des listes d'emplois, des filtres de recherche, l'authentification des utilisateurs et un tableau de bord administrateur pour gérer les publications. Construit en tant que projet Epitech.",
        project_jobboard_learned: "🎯 Principaux Apprentissages",
        project_jobboard_learned_text: "Ce projet a amélioré mes compétences en développement full-stack, de la conception d'un schéma de base de données à la construction d'API RESTful et la création d'un frontend responsive. J'ai appris à travailler en équipe, gérer les flux de travail Git et déployer une application web complète.",
        
        // 2D Game
        project_2dgame_title: "🎮 Jeu Java 2D",
        project_2dgame_badge: "Projet Académique en Équipe",
        project_2dgame_desc: "Un jeu 2D développé en Java dans le cadre d'un projet scolaire. L'objectif était de concevoir un jeu fonctionnel tout en appliquant les principes de programmation orientée objet et la logique de jeu.",
        project_2dgame_role: "💼 Mon Rôle",
        project_2dgame_role_text: "Participation à l'implémentation de la logique de jeu, travail sur la structure orientée objet, et collaboration avec une équipe pour concevoir les mécaniques de gameplay.",
        project_2dgame_learned: "📚 Ce Que J'ai Appris",
        project_2dgame_learned_text: "Structurer un projet Java en utilisant les principes OOP, gérer les états du jeu et les interactions des joueurs, et travailler efficacement dans un environnement d'équipe.",
        
        // RTC
        project_rtc_title: "💬 Plateforme de Communication en Temps Réel",
        project_rtc_badge: "Full Stack & Temps Réel",
        project_rtc_desc: "Une plateforme de communication en temps réel actuellement en développement. Le projet combine des technologies frontend modernes avec une architecture backend robuste supportant des connexions WebSocket pour la messagerie instantanée.",
        project_rtc_goals: "🎯 Objectifs du Projet",
        project_rtc_goals_text: "Construire un système de communication en temps réel évolutif, intégrer WebSocket pour la messagerie instantanée, et gérer une architecture de base de données hybride utilisant à la fois des solutions SQL et NoSQL.",
        project_rtc_work: "💼 Mon Travail",
        project_rtc_work_text: "Développement du frontend React, implémentation des endpoints API REST, mise en place du serveur WebSocket Spring Boot pour les fonctionnalités en temps réel, et conception du schéma de base de données sur PostgreSQL et MongoDB.",
        project_rtc_learning: "📚 Ce Que J'Apprends",
        project_rtc_learning_text: "Gestion de la communication bidirectionnelle en temps réel avec WebSockets, architecture d'un backend basé sur les microservices, et travail avec des bases de données relationnelles et orientées documents dans la même application.",
        
        // Portfolio
        project_portfolio_title: "🌌 Portfolio Spatial",
        project_portfolio_badge: "Web Créatif",
        project_portfolio_desc: "Un site portfolio interactif conçu comme un voyage spatial. Les fonctionnalités incluent des animations fluides, des effets de frappe, une UI glassmorphism, et un design responsive qui s'adapte à tous les appareils.",
        project_portfolio_learned: "🎯 Principaux Apprentissages",
        project_portfolio_learned_text: "La création de ce portfolio m'a appris des techniques CSS avancées, des animations JavaScript, et l'importance de l'expérience utilisateur. J'ai appris à créer un thème visuel cohérent et à raconter une histoire à travers le design.",
        
        project_view_code: "📁 Voir le Code",
        projects_more: "🛸 Plus de Missions Bientôt",
        projects_more_desc: "Travail en cours sur de nouveaux projets. Restez à l'écoute pour les mises à jour !",
        
        // CONTACT
        contact_title: "Mission Accomplie",
        contact_subtitle: "🛸 Vous avez atteint la fin du voyage",
        contact_intro: "Merci d'avoir pris le temps d'explorer mon portfolio. Si vous souhaitez me contacter, le module de communication est maintenant disponible ci-dessous.",
        contact_email: "Email",
        contact_email_detail: "paul.lasjunies@gmail.com",
        contact_email_action: "Envoyer un message →",
        contact_linkedin: "LinkedIn",
        contact_linkedin_detail: "Connectez-vous avec moi",
        contact_linkedin_action: "Voir le profil →",
        contact_github: "GitHub",
        contact_github_detail: "Consultez mon code",
        contact_github_action: "Voir les dépôts →",
        contact_form_title: "📨 Ou Envoyez un Message Direct",
        contact_form_subtitle: "Je vous répondrai dès que possible",
        contact_name: "Nom",
        contact_name_placeholder: "Votre nom",
        contact_email_label: "Email",
        contact_email_placeholder: "votre.email@exemple.com",
        contact_message: "Message",
        contact_message_placeholder: "Votre message...",
        contact_send: "Envoyer le Message",
        contact_cv: "📄 Télécharger CV",
        contact_transmission: "Fin de transmission.",
        contact_thanks: "Merci de votre visite. À bientôt.",
    },
    
    en: {
        // NAVIGATION
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_intro: "Intro",
        nav_tech_mode: "🚀 Tech Mode",
        
        // INTRO
        intro_text: "My name is\nPaul Lasjunies\nI'm a student at Epitech.\nAnd\nI'm glad to present you\nmy portfolio!",
        intro_warning: "For a better experience, please use a computer",
        intro_rh_btn: "💼 Quick View (For Recruiters)",
        intro_tech_btn: "🚀 Start Journey (Immersive Experience)",
        intro_popup_title: "🚧 Work in Progress",
        intro_popup_text: "The immersive experience is currently under development.<br>Please use the Quick View mode for now.",
        intro_popup_btn: "Got it!",
        
        // HOME
        home_title: "Paul LASJUNIES",
        home_cv_title: "Start your journey fully prepared",
        home_cv_subtitle: "Download my CV",
        home_subtitle: "Student Developer at Epitech",
        home_welcome: "Welcome aboard.<br>Start your journey through my work.",
        home_about_title: "About This Journey",
        home_about_text: "I'm a student at Epitech, passionate about software development, new technologies and creative experiences. This portfolio is designed as a space journey to reflect my curiosity and my way of exploring new ideas.",
        home_projects_title: "Featured Missions",
        home_drone: "Drone Project",
        home_drone_desc: "Built a custom drone using Arduino, 3D printing and electronics",
        home_jobboard: "JobBoard Platform",
        home_jobboard_desc: "A web platform connecting job seekers with opportunities",
        home_status: "Current mission status: <span class='status-active'>Active</span>",
        home_status_ops: "All systems operational",
        
        // ABOUT
        about_title: "About Me",
        about_subtitle: "Student Developer • Space Enthusiast • Problem Solver",
        about_hi: "Hi, I'm Paul 👋",
        about_intro_1: "I'm a student developer at Epitech, passionate about software development, problem solving and building meaningful projects.",
        about_intro_2: "During my studies, I've worked on both team and individual projects involving algorithms, system programming and web technologies.",
        about_goal_title: "🎯 What I'm Looking For",
        about_goal_text: "I'm currently seeking opportunities to continue learning, gain professional experience and contribute to exciting projects in software development. Whether it's an internship, apprenticeship, or collaborative project, I'm eager to apply my skills and grow as a developer.",
        about_work_title: "🧠 How I Work",
        about_work_text: "I enjoy understanding how things work, writing clean code and constantly improving my skills. I like to understand problems deeply before coding, analyzing different approaches to find the most efficient solution.",
        about_collab_title: "🤝 Collaboration",
        about_collab_text: "I'm curious, autonomous, and I appreciate collaborating with others to find efficient solutions. Working in teams allows me to learn from different perspectives and improve my own approach to problem-solving.",
        about_skills_title: "Technical Skills",
        about_cert_title: "📜 Udemy Certifications",
        about_cert_intro: "Continuous learning through online courses",
        about_cert_1_title: "Complete Python Bootcamp",
        about_cert_1_desc: "Advanced Python programming and data structures",
        about_cert_2_title: "Web Development Masterclass",
        about_cert_2_desc: "Full-stack development with modern frameworks",
        about_cert_3_title: "Docker & Kubernetes",
        about_cert_3_desc: "Container orchestration and deployment",
        about_hobbies_title: "Beyond Code",
        about_hobbies_intro: "When I'm not coding, I enjoy activities that help me stay focused, creative and curious.",
        about_hobby_1: "Cycling",
        about_hobby_1_desc: "Cycling helps me clear my mind and maintain focus. The discipline and endurance required mirror the persistence needed in debugging and problem-solving.",
        about_hobby_2: "DIY Projects",
        about_hobby_2_desc: "Building things with my hands, like my drone project, allows me to understand hardware and combine creativity with technical skills.",
        about_hobby_3: "Video Games",
        about_hobby_3_desc: "Gaming sharpens my strategic thinking and quick decision-making. Many games involve complex systems and puzzles that enhance my analytical skills.",
        about_hobby_4: "Space & Sci-Fi",
        about_hobby_4_desc: "My passion for space exploration and science fiction fuels my curiosity about technology and innovation. It inspires me to think beyond current limitations.",
        
        // PROJECTS (anglais - déjà dans le HTML)
        projects_title: "Mission Archive",
        projects_subtitle: "Explore the modules I've built during my journey",
        projects_badge_personal: "Personal Project",
        projects_badge_epitech: "Epitech Project",
        projects_status_progress: "🚧 In Progress",
        projects_status_completed: "⚡ Completed",
        projects_status_active: "🚀 Active",
        
        project_factor_title: "🏭 Factor",
        project_factor_badge: "Procedural Game Prototype",
        project_factor_desc: "Factor is a personal learning project developed with Godot 4. Inspired by factory-building games, it focuses on procedural map generation and object-oriented architecture.",
        project_factor_goals: "🎯 Project Goals",
        project_factor_goals_text: "Learn procedural map generation, practice object-oriented architecture, and understand game engine workflows using Godot 4.",
        project_factor_work: "💼 My Work",
        project_factor_work_text: "Designed a procedural tile-based map system, implemented object-oriented systems for buildings and resources, and structured the project to remain modular and extensible.",
        project_factor_learned: "📚 What I Learned",
        project_factor_learned_text: "How to structure a game project using OOP principles, balancing flexibility and performance in procedural systems, and working efficiently with Godot 4 and GDScript.",
        
        project_drone_title: "🚁 Autonomous Drone",
        project_drone_badge: "Hardware & Software",
        project_drone_desc: "Built a fully functional drone from scratch with a friend. The project combines 3D-printed parts designed in Fusion 360, Arduino programming, and custom electronic circuits for flight control and stabilization. Leveraging my EEA (Electronics, Electrical Engineering and Automation) background from Paul Sabatier University.",
        project_drone_goals: "🎯 Project Goals",
        project_drone_goals_text: "Design and build a custom autonomous drone combining software programming, 3D modeling, electronics knowledge, and mechanical engineering. Integrate flight control systems and sensor data processing for stable flight.",
        project_drone_work: "💼 My Work",
        project_drone_work_text: "Designed custom drone frame and parts in Fusion 360, 3D printed components using Creality printer, programmed flight controller in C++ on Arduino platform, wired and integrated electronic circuits (ESCs, motors, sensors), and applied EEA principles learned at Paul Sabatier University for power management and signal processing.",
        project_drone_learned: "📚 What I Learned",
        project_drone_learned_text: "How to integrate hardware and software systems, manage sensor data in real-time, design mechanical parts for 3D printing, understand electronic circuit design and power distribution, debug physical systems, and apply theoretical EEA knowledge to practical applications. This project strengthened my multidisciplinary problem-solving skills.",
        project_drone_academic: "🎓 Academic Background",
        project_drone_academic_text: "This project builds on my Electronics, Electrical Engineering and Automation (EEA) education from Paul Sabatier University, where I learned circuit design, signal processing, control systems, and embedded programming fundamentals.",
        
        project_jobboard_title: "💼 JobBoard Platform",
        project_jobboard_badge: "Full Stack Web",
        project_jobboard_desc: "A web platform connecting job seekers with opportunities. Features include job listings, search filters, user authentication, and an admin dashboard for managing postings. Built as an Epitech project.",
        project_jobboard_learned: "🎯 Key Learnings",
        project_jobboard_learned_text: "This project enhanced my full-stack development skills, from designing a database schema to building RESTful APIs and creating a responsive frontend. I learned to work in a team, manage Git workflows, and deploy a complete web application.",
        
        project_2dgame_title: "🎮 Java 2D Game",
        project_2dgame_badge: "Academic Team Project",
        project_2dgame_desc: "A 2D game developed in Java as part of a school project. The goal was to design a functional game while applying object-oriented programming principles and game logic.",
        project_2dgame_role: "💼 My Role",
        project_2dgame_role_text: "Participated in game logic implementation, worked on object-oriented structure, and collaborated with a team to design gameplay mechanics.",
        project_2dgame_learned: "📚 What I Learned",
        project_2dgame_learned_text: "Structuring a Java project using OOP principles, managing game states and player interactions, and working efficiently in a team environment.",
        
        project_rtc_title: "💬 Real-Time Communication Platform",
        project_rtc_badge: "Full Stack & Real-Time",
        project_rtc_desc: "A real-time communication platform currently in development. The project combines modern frontend technologies with a robust backend architecture supporting WebSocket connections for instant messaging.",
        project_rtc_goals: "🎯 Project Goals",
        project_rtc_goals_text: "Build a scalable real-time communication system, integrate WebSocket for instant messaging, and manage a hybrid database architecture using both SQL and NoSQL solutions.",
        project_rtc_work: "💼 My Work",
        project_rtc_work_text: "Developing the React frontend, implementing REST API endpoints, setting up Spring Boot WebSocket server for real-time features, and designing the database schema across PostgreSQL and MongoDB.",
        project_rtc_learning: "📚 What I'm Learning",
        project_rtc_learning_text: "Managing real-time bidirectional communication with WebSockets, architecting a microservices-based backend, and working with both relational and document-based databases in the same application.",
        
        project_portfolio_title: "🌌 Space Portfolio",
        project_portfolio_badge: "Creative Web",
        project_portfolio_desc: "An interactive portfolio website designed as a space journey. Features include smooth animations, typing effects, glassmorphism UI, and a responsive design that adapts to all devices.",
        project_portfolio_learned: "🎯 Key Learnings",
        project_portfolio_learned_text: "Creating this portfolio taught me advanced CSS techniques, JavaScript animations, and the importance of user experience. I learned to create a cohesive visual theme and tell a story through design.",
        
        project_view_code: "📁 View Code",
        projects_more: "🛸 More Missions Coming Soon",
        projects_more_desc: "Currently working on new projects. Stay tuned for updates!",
        
        // CONTACT
        contact_title: "Mission Complete",
        contact_subtitle: "🛸 You've reached the end of the journey",
        contact_intro: "Thank you for taking the time to explore my portfolio. If you'd like to get in touch, the communication module is now available below.",
        contact_email: "Email",
        contact_email_detail: "paul.lasjunies@gmail.com",
        contact_email_action: "Send a message →",
        contact_linkedin: "LinkedIn",
        contact_linkedin_detail: "Connect with me",
        contact_linkedin_action: "View profile →",
        contact_github: "GitHub",
        contact_github_detail: "Check out my code",
        contact_github_action: "View repositories →",
        contact_form_title: "📨 Or Send a Direct Message",
        contact_form_subtitle: "I'll get back to you as soon as possible",
        contact_name: "Name",
        contact_name_placeholder: "Your name",
        contact_email_label: "Email",
        contact_email_placeholder: "your.email@example.com",
        contact_message: "Message",
        contact_message_placeholder: "Your message...",
        contact_send: "Send Message",
        contact_cv: "📄 Download CV",
        contact_transmission: "End of transmission.",
        contact_thanks: "Thank you for your visit. See you soon.",
    }
};

// Langue par défaut
let currentLang = 'fr';

// Fonction pour obtenir une traduction
function t(key) {
    return translations[currentLang][key] || key;
}

// Fonction pour changer la langue
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    updatePageContent();
}

// Fonction pour obtenir la langue sauvegardée
function getSavedLanguage() {
    return localStorage.getItem('preferred_lang') || 'fr';
}

// Fonction pour mettre à jour le contenu de la page
function updatePageContent() {
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
    
    // Mettre à jour l'état du bouton de langue
    updateLanguageButton();
}

// Fonction pour mettre à jour le bouton de langue
function updateLanguageButton() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        if (currentLang === 'fr') {
            langBtn.innerHTML = '<strong>FR</strong> / en';
        } else {
            langBtn.innerHTML = 'fr / <strong>EN</strong>';
        }
    }
}

// Créer le bouton de langue
function createLanguageButton() {
    const header = document.querySelector('nav');
    if (!header || document.getElementById('lang-toggle')) return;
    
    const langBtn = document.createElement('button');
    langBtn.id = 'lang-toggle';
    langBtn.className = 'lang-button';
    
    // Définir le contenu initial
    if (currentLang === 'fr') {
        langBtn.innerHTML = '<strong>FR</strong> / en';
    } else {
        langBtn.innerHTML = 'fr / <strong>EN</strong>';
    }
    
    langBtn.style.cssText = `
        position: absolute;
        right: 160px;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: white;
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-family: "SUSE mono";
        font-size: 14px;
        transition: all 0.3s ease;
        z-index: 10;
    `;
    
    langBtn.addEventListener('click', () => {
        setLanguage(currentLang === 'fr' ? 'en' : 'fr');
    });
    
    langBtn.addEventListener('mouseover', () => {
        langBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    langBtn.addEventListener('mouseout', () => {
        langBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    });
    
    header.appendChild(langBtn);
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', () => {
    currentLang = getSavedLanguage();
    createLanguageButton();
    updatePageContent();
});

// Exporter les fonctions
window.setLanguage = setLanguage;
window.t = t;
window.currentLang = () => currentLang;