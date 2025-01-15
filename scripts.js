const carousels_netflix = document.querySelectorAll('.carousel-container-netflix');

carousels_netflix.forEach(carousel => {
    const carouselSlide_netflix = carousel.querySelector('.carousel-slide-netflix');
    const carouselImages_netflix = carousel.querySelectorAll('.carousel-slide-netflix img');
    const prevBtn_netflix = carousel.querySelector('.prev-btn');
    const nextBtn_netflix = carousel.querySelector('.next-btn');
    let counter = 0;
    const size = carouselImages_netflix[0].clientWidth;

    nextBtn_netflix.addEventListener('click', () => {
        if (counter >= carouselImages_netflix.length) return;
        carouselSlide_netflix.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide_netflix.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn_netflix.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide_netflix.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide_netflix.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});
//amazon button logic
const carousels_amazon = document.querySelectorAll('.carousel-container-amazon');

carousels_amazon.forEach(carousel => {
    const carouselSlide_amazon = carousel.querySelector('.carousel-slide-amazon');
    const carouselImages_amazon = carousel.querySelectorAll('.carousel-slide-amazon img');
    const prevBtn_amazon = carousel.querySelector('.prev-btn');
    const nextBtn_amazon = carousel.querySelector('.next-btn');
    let counter = 0;
    const size = carouselImages_amazon[0].clientWidth;

    nextBtn_amazon.addEventListener('click', () => {
        if (counter >= carouselImages_amazon.length) return;
        carouselSlide_amazon.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide_amazon.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn_amazon.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide_amazon.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide_amazon.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
})
;
//Netflix left right hover logic
const anotherContainLRs = document.querySelectorAll('.another-contain-netflix, .another-contain-amazon');

anotherContainLRs.forEach(anotherContainLR => {
    anotherContainLR.addEventListener('mouseenter', (e) => {
        const { left, right } = anotherContainLR.getBoundingClientRect();
        const hoverDirection = e.clientX - left < (right - left) / 2 ? 'left' : 'right';
        anotherContainLR.classList.remove('hover-left', 'hover-right');
        if (hoverDirection === 'left') {
            anotherContainLR.classList.add('hover-left');
        } else {
            anotherContainLR.classList.add('hover-right');
        }
    });

    anotherContainLR.addEventListener('mouseleave', () => {
        anotherContainLR.classList.remove('hover-left', 'hover-right');
    });
});

//Amazon left right hover logic
const anotherContain = document.querySelectorAll('.another-contain-amazon');

anotherContain.forEach(anotherContainLR => {
    anotherContainLR.addEventListener('mouseenter', (e) => {
        const { left, right } = anotherContainLR.getBoundingClientRect();
        const hoverDirection = e.clientX - left < (right - left) / 2 ? 'left' : 'right';
        anotherContainLR.classList.remove('hover-left', 'hover-right');
        if (hoverDirection === 'left') {
            anotherContainLR.classList.add('hover-left');
        } else {
            anotherContainLR.classList.add('hover-right');
        }
    });

    anotherContainLR.addEventListener('mouseleave', () => {
        anotherContainLR.classList.remove('hover-left', 'hover-right');
    });
});
//trying to hide the carousel containe 
