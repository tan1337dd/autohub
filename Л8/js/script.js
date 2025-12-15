// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    
    // Кнопка заказа тест-драйва
    const orderBtn = document.getElementById('orderBtn');
    if (orderBtn) {
        orderBtn.addEventListener('click', function() {
            alert('Спасибо! Мы свяжемся с вами для уточнения времени тест-драйва.');
        });
    }

    // Затемнение шапки при прокрутке
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
            header.style.backgroundColor = '#1a1a1a';
        }
    });

    // Автоматическое обновление года в футере
    const yearElements = document.querySelectorAll('#currentYear, .year');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
    
    // Плавная прокрутка для якорей
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});