// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.about-card, .team-member, .tech-card, .info-item, .contact-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter Animation for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        
        if (typeof target === 'string') {
            element.textContent = target;
        } else {
            element.textContent = Math.floor(start) + '%';
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('%')) {
                    const number = parseInt(text);
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                message: formData.get('message')
            };
            
            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showNotification('Lütfen gerekli alanları doldurun.', 'error');
                return;
            }
            
            if (!isValidEmail(data.email)) {
                showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Mesajınız gönderiliyor...', 'info');
            
            setTimeout(() => {
                showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Notification styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: '500',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    const colors = {
        success: '#059669',
        error: '#dc2626',
        info: '#2563eb',
        warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment below line if you want typing effect
        // typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Technology cards hover effect with dynamic descriptions
document.addEventListener('DOMContentLoaded', function() {
    const techCards = document.querySelectorAll('.tech-card');
    
    const techDetails = {
        'React.js': {
            description: 'Modern ve reactive kullanıcı arayüzleri oluşturmak için Facebook tarafından geliştirilen güçlü JavaScript kütüphanesi.',
            features: ['Virtual DOM ile yüksek performans', 'Component tabanlı mimari', 'Zengin ekosistem ve topluluk desteği']
        },
        'Node.js': {
            description: 'JavaScript\'i server-side\'da çalıştırmayı sağlayan runtime ortamı. Hızlı ve ölçeklenebilir ağ uygulamaları için ideal.',
            features: ['Asenkron ve event-driven mimari', 'NPM ile geniş paket ekosistemi', 'Cross-platform uyumluluk']
        },
        'MongoDB': {
            description: 'Doküman tabanlı NoSQL veritabanı. Esnek şema yapısı ve yatay ölçeklendirme özellikleriye öne çıkar.',
            features: ['JSON benzeri doküman yapısı', 'Otomatik sharding', 'Güçlü sorgu dili']
        },
        'Python & AI': {
            description: 'Veri bilimi ve yapay zeka uygulamaları için en popüler programlama dili. Zengin kütüphane ekosistemi.',
            features: ['Scikit-learn, TensorFlow desteği', 'Pandas ile veri manipülasyonu', 'Kolay öğrenilebilir syntax']
        },
        'Docker': {
            description: 'Uygulamaları container\'lara paketleyerek taşınabilir ve tutarlı deployment sağlayan platform.',
            features: ['Mikroservis mimarisi desteği', 'CI/CD pipeline entegrasyonu', 'Resource izolasyonu']
        },
        'AWS Cloud': {
            description: 'Amazon\'un kapsamlı bulut bilişim platformu. Güvenilir, ölçeklenebilir ve maliyet-etkin çözümler.',
            features: ['Global veri merkezi ağı', 'Pay-as-you-use modeli', 'Güvenlik ve compliance']
        }
    };
    
    techCards.forEach(card => {
        const title = card.querySelector('h3').textContent;
        const details = techDetails[title];
        
        if (details) {
            card.addEventListener('mouseenter', function() {
                const description = card.querySelector('p');
                description.textContent = details.description;
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Performance optimization: Lazy load images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});
