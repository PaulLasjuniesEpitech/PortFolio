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

// Vérifier si l'intro a déjà été vue
function hasSeenIntro() {
    return getCookie('intro_completed') === 'true';
}

function markIntroAsCompleted() {
    setCookie('intro_completed', 'true', 1); // Cookie valable 1 heure
}

// Fonction globale pour réinitialiser l'intro
window.resetIntro = function() {
    deleteCookie('intro_completed');
    location.reload();
}

// ========== CONFIGURATION ==========
const TYPING_SPEED = 50;
const DELETING_SPEED = 10;
const TYPO_DELETE_SPEED = 50;

// ========== TEXTES AVEC TYPOS ==========
const texts = [
    {
        text: "My name is\nPaul Lasjunies\nI'm a student at Epitech.\nAnd\nI'm glad to present you\nmy portfolio!\n\nPlease use the controls above",
        typos: [
            { word: "Paul", wrong: "Pual", delay: 500 }
        ]
    },
    {
        text: "I chose a very specific format for this portfolio.\nNot something classic.",
        typos: [
            { word: "portfolio", wrong: "portofolio", delay: 600 }
        ]
    },
    {
        text: "I'm a huge fan of space, science fiction\nand space exploration.",
        typos: [
            { word: "science", wrong: "sceince", delay: 500 }
        ]
    },
    {
        text: "For me, discovering new technologies\nfeels a lot like exploring the unknown.",
        typos: [
            { word: "technologies", wrong: "technolgies", delay: 700 }
        ]
    },
    {
        text: "So I decided to present my projects\nas a space journey.\nEach section represents a place\ninside the spaceship during the trip.",
        typos: []
    },
    {
        text: "At the end of this short introduction,\nyou'll arrive at my homepage.",
        typos: []
    },
    {
        text: "If you want to explore the other parts of my portfolio,\nyou'll need to click on the \"move\" button\nat the top center of the page.",
        typos: [
            { word: "portfolio", wrong: "portfollio", delay: 500 }
        ]
    },
    {
        text: "You can then choose which section\nyou'd like to visit next and continue your journey.",
        typos: []
    },
    {
        text: "Please note that if you decide to go to the contact page,\nit will mark the end of our journey.\nBut even then, the spaceship will remain accessible,\nallowing you to revisit any area of the mission.",
        typos: []
    },
    {
        text: "I hope you'll enjoy the experience\nas much as I enjoyed creating it.",
        typos: [
            { word: "creating", wrong: "creatng", delay: 600 }
        ]
    },
    {
        text: "I wish you a pleasant trip!",
        typos: []
    }
];

// ========== VARIABLES GLOBALES ==========
let currentIndex = 0;
let isTyping = false;
let animationEnabled = true;

// ========== FONCTIONS UTILITAIRES ==========
function escapeHtml(text) {
    return text.replace(/\n/g, '<br>');
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = false;
}

// ========== AFFICHAGE INSTANTANÉ ==========
function displayTextInstantly(textObj) {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    typingText.innerHTML = escapeHtml(textObj.text);
}

// ========== ANIMATION DE FRAPPE ==========
function typeText(textObj) {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    isTyping = true;
    let displayText = '';
    let charIndex = 0;
    const fullText = textObj.text;
    
    // Si pas de typos, frappe normale
    if (!textObj.typos || textObj.typos.length === 0) {
        const typeInterval = setInterval(() => {
            if (charIndex < fullText.length) {
                displayText += fullText[charIndex];
                typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
                charIndex++;
            } else {
                clearInterval(typeInterval);
                typingText.innerHTML = escapeHtml(displayText);
                isTyping = false;
            }
        }, TYPING_SPEED);
        return;
    }
    
    // Avec typos - prendre la première typo
    const typo = textObj.typos[0];
    const wrongWord = typo.word;
    const wrongVersion = typo.wrong;
    const wrongIndex = fullText.indexOf(wrongWord);
    
    if (wrongIndex === -1) {
        console.error('Wrong word "' + wrongWord + '" not found in text');
        displayTextInstantly(textObj);
        isTyping = false;
        return;
    }
    
    // Phase 1: Taper jusqu'au début du mot avec typo
    const typeBeforeTypo = setInterval(() => {
        if (charIndex < wrongIndex) {
            displayText += fullText[charIndex];
            typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
            charIndex++;
        } else {
            clearInterval(typeBeforeTypo);
            
            // Phase 2: Taper le mot avec une faute
            let typoIndex = 0;
            const typeTypo = setInterval(() => {
                if (typoIndex < wrongVersion.length) {
                    displayText += wrongVersion[typoIndex];
                    typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
                    typoIndex++;
                } else {
                    clearInterval(typeTypo);
                    
                    // Phase 3: Pause
                    setTimeout(() => {
                        // Phase 4: Effacer la faute
                        const deleteTypo = setInterval(() => {
                            if (displayText.length > wrongIndex) {
                                displayText = displayText.slice(0, -1);
                                typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
                            } else {
                                clearInterval(deleteTypo);
                                
                                // Phase 5: Taper correctement
                                let correctIndex = 0;
                                const typeCorrect = setInterval(() => {
                                    if (correctIndex < wrongWord.length) {
                                        displayText += wrongWord[correctIndex];
                                        typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
                                        correctIndex++;
                                        charIndex++;
                                    } else {
                                        clearInterval(typeCorrect);
                                        
                                        // Phase 6: Finir le texte
                                        const typeRest = setInterval(() => {
                                            if (charIndex < fullText.length) {
                                                displayText += fullText[charIndex];
                                                typingText.innerHTML = escapeHtml(displayText) + '<span class="cursor">_</span>';
                                                charIndex++;
                                            } else {
                                                clearInterval(typeRest);
                                                typingText.innerHTML = escapeHtml(displayText);
                                                isTyping = false;
                                            }
                                        }, TYPING_SPEED);
                                    }
                                }, TYPING_SPEED);
                            }
                        }, TYPO_DELETE_SPEED);
                    }, typo.delay || 500);
                }
            }, TYPING_SPEED);
        }
    }, TYPING_SPEED);
}

// ========== NAVIGATION ==========
function showPreviousText() {
    if (isTyping || currentIndex === 0) return;
    
    currentIndex--;
    if (animationEnabled) {
        typeText(texts[currentIndex]);
    } else {
        displayTextInstantly(texts[currentIndex]);
    }
    updateButtons();
}

function showNextText() {
    if (isTyping) return;
    
    if (currentIndex < texts.length - 1) {
        currentIndex++;
        if (animationEnabled) {
            typeText(texts[currentIndex]);
        } else {
            displayTextInstantly(texts[currentIndex]);
        }
        updateButtons();
    } else {
        // Dernier texte atteint
        if (animationEnabled) {
            setTimeout(() => {
                createStartButton();
            }, 1000);
        } else {
            createStartButton();
        }
    }
}


// ========== TOGGLE ANIMATION ==========
function toggleAnimation() {
    const animationToggle = document.getElementById('animationToggle');
    if (!animationToggle) return;
    
    animationEnabled = animationToggle.checked;
    
    // Réafficher le texte actuel selon le mode
    if (animationEnabled) {
        typeText(texts[currentIndex]);
    } else {
        displayTextInstantly(texts[currentIndex]);
    }
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si l'intro a déjà été complétée
    if (hasSeenIntro()) {
        // Skip l'intro et aller directement à la home page
        const intro = document.getElementById('intro');
        const homePage = document.getElementById('home');
        const homeSection = document.getElementById('dHOME');
        
        if (intro) intro.style.display = 'none';
        if (homePage) homePage.style.display = 'flex';
        if (homeSection) homeSection.scrollTop = 0;
        
        console.log('Intro déjà vue, passage direct à la home page');
        return; // Arrêter l'exécution du reste du script
    }
    
    // Sinon, lancer l'intro normalement
    const typingText = document.getElementById('typingText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const animationToggle = document.getElementById('animationToggle');

    if (!typingText) {
        console.error('Element #typingText not found');
        return;
    }

    // Initialisation
    updateButtons();
    
    // Animation automatique au démarrage
    if (animationEnabled) {
        setTimeout(() => {
            typeText(texts[currentIndex]);
        }, 500);
    } else {
        displayTextInstantly(texts[currentIndex]);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', showPreviousText);
    if (nextBtn) nextBtn.addEventListener('click', showNextText);
    if (animationToggle) animationToggle.addEventListener('change', toggleAnimation);
});

// Fonction pour afficher le bouton Move
function showMoveButton() {
    const moveButton = document.getElementById('homemouvement');
    if (moveButton) {
        moveButton.style.display = 'block';
    }
}

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si l'intro a déjà été complétée
    if (hasSeenIntro()) {
        // Skip l'intro et aller directement à la home page
        const intro = document.getElementById('intro');
        const homePage = document.getElementById('home');
        const homeSection = document.getElementById('dHOME');
        
        if (intro) intro.style.display = 'none';
        if (homePage) homePage.style.display = 'flex';
        if (homeSection) homeSection.scrollTop = 0;
        
        // IMPORTANT: Afficher le bouton Move
        showMoveButton();
        
        console.log('Intro déjà vue, passage direct à la home page');
        return; // Arrêter l'exécution du reste du script
    }
    
    // ... reste du code inchangé
});

function createStartButton() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    
    typingText.innerHTML = `
        ${escapeHtml(texts[currentIndex].text)}
        <br><br>
        <button id="startJourneyBtn" style="
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
            Start Journey ►
        </button>
    `;
    
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Marquer l'intro comme complétée
            markIntroAsCompleted();
            
            // Transition vers la home page
            const intro = document.getElementById('intro');
            const homePage = document.getElementById('home');
            const homeSection = document.getElementById('dHOME');
            
            if (intro) intro.style.display = 'none';
            if (homePage) homePage.style.display = 'flex';
            if (homeSection) homeSection.scrollTop = 0;
            
            // IMPORTANT: Afficher le bouton Move
            showMoveButton();
        });
    }
}