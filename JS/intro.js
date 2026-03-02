// ========== GESTION DES COOKIES ==========
function setCookie(name, value, hours) {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function hasSeenIntro() {
    return getCookie('intro_completed') === 'true';
}

function markIntroAsCompleted(mode) {
    setCookie('intro_completed', 'true', 1);
    setCookie('portfolio_mode', mode, 24);
}

function getPortfolioMode() {
    return getCookie('portfolio_mode') || 'rh';
}

window.resetIntro = function() {
    deleteCookie('intro_completed');
    deleteCookie('portfolio_mode');
    location.reload();
}

// ========== CONFIGURATION ==========
const TYPING_SPEED = 50;

let isTyping = false;

// ========== FONCTIONS UTILITAIRES ==========
function escapeHtml(text) {
    return text.replace(/\n/g, '<br>');
}

function typeText(text, callback) {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    isTyping = true;
    let displayText = '';
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
            displayText += text[charIndex];
            typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
            charIndex++;
        } else {
            clearInterval(typeInterval);
            typingText.innerHTML = escapeHtml(displayText);
            isTyping = false;
            if (callback) callback();
        }
    }, TYPING_SPEED);
}

function showMoveButton() {
    const moveButton = document.getElementById('homemouvement');
    if (moveButton) {
        moveButton.style.display = 'block';
    }
}

function createModeSelection() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    const introText = window.t ? t('intro_text') : "Je m'appelle\nPaul Lasjunies\nJe suis étudiant à Epitech.\nEt\nJe suis ravi de vous présenter\nmon portfolio !";
    const rhBtnText = window.t ? t('intro_rh_btn') : "💼 Vue Rapide (Pour Recruteurs)";
    const techBtnText = window.t ? t('intro_tech_btn') : "🚀 Commencer le Voyage (Expérience Immersive)";
    
    typingText.innerHTML = `
        ${escapeHtml(introText)}
        <br><br>
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <button id="rhModeBtn" style="
                background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1));
                border: 2px solid rgba(0, 255, 136, 0.5);
                color: #00ff88;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 10px;
                cursor: pointer;
                font-family: 'SUSE mono';
                transition: all 0.3s ease;
            " onmouseover="this.style.background='linear-gradient(135deg, rgba(0, 255, 136, 0.3), rgba(0, 255, 136, 0.2))'; this.style.transform='translateY(-2px)'" 
               onmouseout="this.style.background='linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1))'; this.style.transform='translateY(0)'">
                ${rhBtnText}
            </button>
            
            <button id="techModeBtn" style="
                background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1));
                border: 2px solid rgba(138, 43, 226, 0.5);
                color: #b19cd9;
                padding: 15px 30px;
                font-size: 18px;
                border-radius: 10px;
                cursor: pointer;
                font-family: 'SUSE mono';
                transition: all 0.3s ease;
            " onmouseover="this.style.background='linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(138, 43, 226, 0.2))'; this.style.transform='translateY(-2px)'" 
               onmouseout="this.style.background='linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1))'; this.style.transform='translateY(0)'">
                ${techBtnText}
            </button>
        </div>
    `;
    
    const rhBtn = document.getElementById('rhModeBtn');
    const techBtn = document.getElementById('techModeBtn');
    
    if (rhBtn) {
        rhBtn.addEventListener('click', () => {
            markIntroAsCompleted('rh');
            initPortfolio('rh');
        });
    }
    
    if (techBtn) {
        techBtn.addEventListener('click', () => {
            showWorkInProgressPopup();
        });
    }
}

function showWorkInProgressPopup() {
    const popupTitle = window.t ? t('intro_popup_title') : "🚧 Travaux en Cours";
    const popupText = window.t ? t('intro_popup_text') : "L'expérience immersive est actuellement en développement.<br>Veuillez utiliser le mode Vue Rapide pour le moment.";
    const popupBtn = window.t ? t('intro_popup_btn') : "Compris !";
    
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
        border: 2px solid rgba(138, 43, 226, 0.5);
        border-radius: 20px;
        padding: 40px;
        z-index: 1000;
        text-align: center;
        max-width: 500px;
        animation: fadeIn 0.3s ease;
    `;
    
    popup.innerHTML = `
        <h2 style="color: #b19cd9; margin-bottom: 20px; font-size: 32px;">${popupTitle}</h2>
        <p style="margin-bottom: 30px; line-height: 1.6;">
            ${popupText}
        </p>
        <button id="closePopup" style="
            background: linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 255, 136, 0.1));
            border: 2px solid rgba(0, 255, 136, 0.5);
            color: #00ff88;
            padding: 12px 30px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            font-family: 'SUSE mono';
            transition: all 0.3s ease;
        ">
            ${popupBtn}
        </button>
    `;
    
    document.body.appendChild(popup);
    
    document.getElementById('closePopup').addEventListener('click', () => {
        popup.remove();
    });
}

function initPortfolio(mode) {
    const intro = document.getElementById('intro');
    const homePage = document.getElementById('home');
    const homeSection = document.getElementById('dHOME');
    
    if (intro) intro.style.display = 'none';
    if (homePage) homePage.style.display = 'flex';
    if (homeSection) homeSection.scrollTop = 0;
    
    if (mode === 'rh') {
        setupRHMode();
    } else {
        setupTechMode();
    }
}

function setupRHMode() {
    const moveButton = document.getElementById('homemouvement');
    if (moveButton) moveButton.style.display = 'none';
    
    showRHNav();
}

function setupTechMode() {
    showMoveButton();
    hideRHNav();
}

function showRHNav() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    
    if (document.getElementById('rh-nav')) return;
    
    const rhNav = document.createElement('div');
    rhNav.id = 'rh-nav';
    rhNav.style.cssText = `
        position: absolute;
        left: 60%;
        transform: translateX(-50%);
        display: flex;
        gap: 15px;
    `;
    
    const buttons = [
        { id: 'nav-home', key: 'nav_home', section: 'dHOME' },
        { id: 'nav-about', key: 'nav_about', section: 'dAbout_me' },
        { id: 'nav-projects', key: 'nav_projects', section: 'dProjects' },
        { id: 'nav-contact', key: 'nav_contact', section: 'dContacts' },
        { id: 'nav-intro', key: 'nav_intro', action: 'intro' }
    ];
    
    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.id = btn.id;
        button.textContent = window.t ? t(btn.key) : btn.key;
        button.setAttribute('data-i18n', btn.key);
        button.style.cssText = `
            background-color: transparent;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            cursor: pointer;
            border-radius: 5px;
            padding: 5px 10px;
            font-family: "SUSE mono";
            transition: all 0.3s ease;
            font-size: 14px;
        `;
        
        button.addEventListener('mouseover', () => {
            button.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.background = 'transparent';
        });
        
        button.addEventListener('click', () => {
            if (btn.action === 'intro') {
                resetIntro();
            } else {
                navigateToSection(btn.section);
            }
        });
        
        rhNav.appendChild(button);
    });
    
    const techModeBtn = document.createElement('button');
    techModeBtn.id = 'switch-tech';
    techModeBtn.textContent = window.t ? t('nav_tech_mode') : '🚀 Mode Tech';
    techModeBtn.setAttribute('data-i18n', 'nav_tech_mode');
    techModeBtn.style.cssText = `
        position: absolute;
        right: 20px;
        background: linear-gradient(135deg, rgba(138, 43, 226, 0.2), rgba(138, 43, 226, 0.1));
        color: #b19cd9;
        border: 1px solid rgba(138, 43, 226, 0.3);
        cursor: pointer;
        border-radius: 5px;
        padding: 5px 15px;
        font-family: "SUSE mono";
        transition: all 0.3s ease;
        font-size: 14px;
    `;
    
    techModeBtn.addEventListener('click', () => {
        showWorkInProgressPopup();
    });
    
    nav.appendChild(rhNav);
    nav.appendChild(techModeBtn);
}

function hideRHNav() {
    const rhNav = document.getElementById('rh-nav');
    const techBtn = document.getElementById('switch-tech');
    if (rhNav) rhNav.remove();
    if (techBtn) techBtn.remove();
}

function navigateToSection(sectionId) {
    const sections = ['dHOME', 'dAbout_me', 'dProjects', 'dContacts'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'flex';
        targetSection.scrollTop = 0;
    }
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    if (hasSeenIntro()) {
        const mode = getPortfolioMode();
        const intro = document.getElementById('intro');
        const homePage = document.getElementById('home');
        const homeSection = document.getElementById('dHOME');
        
        if (intro) intro.style.display = 'none';
        if (homePage) homePage.style.display = 'flex';
        if (homeSection) homeSection.scrollTop = 0;
        
        initPortfolio(mode);
        
        console.log('Intro déjà vue, mode:', mode);
        return;
    }
    
    const typingText = document.getElementById('typingText');
    if (!typingText) {
        console.error('Element #typingText not found');
        return;
    }
    
    const controls = document.querySelector('.intro-controls');
    if (controls) controls.style.display = 'none';
    
    const introText = window.t ? t('intro_text') : "Je m'appelle\nPaul Lasjunies\nJe suis étudiant à Epitech.\nEt\nJe suis ravi de vous présenter\nmon portfolio !";
    
    setTimeout(() => {
        typeText(introText, createModeSelection);
    }, 500);
});