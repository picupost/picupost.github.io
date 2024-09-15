document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    galleryItems.forEach(item => {
        item.classList.add('hidden');
        observer.observe(item);
    });

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').classList.add('zoom');
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('img').classList.remove('zoom');
        });
    });
});

