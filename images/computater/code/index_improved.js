// Modern JavaScript for enhanced interactivity

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript educational page loaded successfully!');
    
    // Initialize all interactive features
    initializeColorChanger();
    initializeCallbackButton();
    initializeSmoothScrolling();
    initializeNavigationHighlight();
    initializeCodeExamples();
});

// Color changer functionality for #minTekst
function initializeColorChanger() {
    const colors = [
        'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
        'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    ];
    
    let currentColorIndex = 0;
    
    // Global function for onclick attribute
    window.man1 = function() {
        const element = document.getElementById('minTekst');
        if (element) {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            element.style.background = colors[currentColorIndex];
            
            // Add a small animation effect
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
            
            console.log(`Color changed to index: ${currentColorIndex}`);
        }
    };
}

// Enhanced callback button functionality
function initializeCallbackButton() {
    const button = document.getElementById('myCallbackButton1');
    if (button) {
        let clickCount = 0;
        const messages = [
            'Takk for at du klikket! 🎉',
            'Du er flink til å klikke! 👏',
            'Callback-funksjoner er kule! 🚀',
            'JavaScript er fantastisk! ⭐',
            'Du mestrer interaktivitet! 💪'
        ];
        
        button.addEventListener('click', function() {
            clickCount++;
            const message = messages[Math.floor(Math.random() * messages.length)];
            
            // Create temporary message element
            const messageEl = document.createElement('div');
            messageEl.textContent = `${message} (Klikk #${clickCount})`;
            messageEl.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
                padding: 1rem 2rem;
                border-radius: 0.5rem;
                font-weight: 500;
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                z-index: 1000;
                animation: fadeInOut 2s ease-in-out;
            `;
            
            // Add CSS animation keyframes if not already added
            if (!document.querySelector('#callback-animations')) {
                const style = document.createElement('style');
                style.id = 'callback-animations';
                style.textContent = `
                    @keyframes fadeInOut {
                        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            document.body.appendChild(messageEl);
            
            // Remove message after animation
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 2000);
            
            console.log(`Button clicked ${clickCount} times`);
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Add highlight effect to target
                target.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.3)';
                setTimeout(() => {
                    target.style.boxShadow = '';
                }, 2000);
            }
        });
    });
}

// Navigation highlight based on scroll position
function initializeNavigationHighlight() {
    const sections = document.querySelectorAll('article[id]');
    const navLinks = document.querySelectorAll('.listbox1 a[href^="#"]');
    
    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add CSS for active state
    if (!document.querySelector('#nav-highlight-styles')) {
        const style = document.createElement('style');
        style.id = 'nav-highlight-styles';
        style.textContent = `
            .listbox1 a.active {
                transform: translateY(-4px) scale(1.05);
                box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2);
            }
        `;
        document.head.appendChild(style);
    }
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call
}

// Enhanced code examples with copy functionality
function initializeCodeExamples() {
    const codeElements = document.querySelectorAll('code');
    
    codeElements.forEach(code => {
        // Add hover effect for inline code
        code.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
            this.style.transform = 'scale(1.05)';
        });
        
        code.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.transform = '';
        });
    });
    
    // Add copy functionality to code blocks
    const preElements = document.querySelectorAll('pre');
    preElements.forEach(pre => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Kopier';
        copyButton.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
        
        pre.addEventListener('mouseenter', () => {
            copyButton.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(pre.textContent);
                copyButton.textContent = 'Kopiert!';
                setTimeout(() => {
                    copyButton.textContent = 'Kopier';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    });
}

// Add loading animation
function showLoadingComplete() {
    const loadingEl = document.createElement('div');
    loadingEl.textContent = '✨ Siden er klar for læring!';
    loadingEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
    `;
    
    // Add slide-in animation
    if (!document.querySelector('#loading-animations')) {
        const style = document.createElement('style');
        style.id = 'loading-animations';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(loadingEl);
    
    setTimeout(() => {
        if (loadingEl.parentNode) {
            loadingEl.style.animation = 'slideIn 0.5s ease-out reverse';
            setTimeout(() => {
                if (loadingEl.parentNode) {
                    loadingEl.parentNode.removeChild(loadingEl);
                }
            }, 500);
        }
    }, 3000);
}

// Show loading complete message
setTimeout(showLoadingComplete, 1000);

