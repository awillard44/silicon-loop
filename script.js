document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Effect for Hero
    const heroTitle = document.querySelector('.glitch');
    const text = heroTitle.innerText;
    heroTitle.innerText = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 2. Live "Loop Risk" Counter
    const stats = document.querySelectorAll('.value');
    stats.forEach(stat => {
        if (stat.innerText.includes('$')) {
            let value = parseFloat(stat.innerText.replace('$', '').replace('T', '').replace('B', ''));
            setInterval(() => {
                // Simulate market volatility
                let jitter = (Math.random() - 0.5) * 0.01;
                value += jitter;
                stat.innerText = `$${value.toFixed(2)}${stat.innerText.includes('T') ? 'T' : 'B'}`;
            }, 2000);
        }
    });

    // 3. SEC "Intercept" Animation on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
