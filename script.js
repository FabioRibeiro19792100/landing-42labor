// Splash Screen - Remove after 2 seconds
window.addEventListener('load', function() {
    setTimeout(function() {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.display = 'none';
        }
    }, 2000);
});

// Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const processoItems = document.querySelectorAll('.processo-item');
    
    processoItems.forEach(item => {
        const header = item.querySelector('.processo-header');
        const accordion = item.querySelector('.processo-accordion');
        const arrow = item.querySelector('.processo-arrow');
        
        if (!header || !accordion || !arrow) return;
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all accordions first
            processoItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherAccordion = otherItem.querySelector('.processo-accordion');
                    const otherArrow = otherItem.querySelector('.processo-arrow');
                    if (otherAccordion) {
                        otherAccordion.style.maxHeight = '0';
                    }
                    if (otherArrow) {
                        otherArrow.style.transform = 'rotate(0deg)';
                    }
                }
            });
            
            // Toggle current accordion
            if (isActive) {
                item.classList.remove('active');
                accordion.style.maxHeight = '0';
                arrow.style.transform = 'rotate(0deg)';
            } else {
                item.classList.add('active');
                // Force reflow to get accurate height
                accordion.style.maxHeight = 'none';
                const height = accordion.scrollHeight;
                accordion.style.maxHeight = '0';
                // Trigger reflow
                void accordion.offsetHeight;
                // Now set to actual height
                accordion.style.maxHeight = height + 'px';
                arrow.style.transform = 'rotate(90deg)';
            }
        });
    });
});

