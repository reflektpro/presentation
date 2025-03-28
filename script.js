let currentSlide = 0; // Индекс текущего слайда
const slidesContainer = document.getElementById('slides-container'); // Контейнер для слайдов
const slideFiles = [
    'slide1.html',
    'slide2.html',
    'slide3.html',
    'slide4.html',
    'slide5.html',
    'slide6.html',
    'slide7.html',
    'slide8.html',
    'slide9.html',
    'slide10.html'
]; // Массив с именами файлов слайдов

// Функция для загрузки всех слайдов
function loadSlides() {
    const promises = slideFiles.map(file => fetch(file).then(response => response.text()));
    Promise.all(promises).then(slides => {
        slidesContainer.innerHTML = slides.join(''); // Вставляем содержимое всех слайдов в контейнер
        updateSlides(); // Обновляем видимость слайдов
    }).catch(error => console.error('Ошибка загрузки слайдов:', error));
}

// Функция для обновления видимости слайдов
function updateSlides() {
    const slides = slidesContainer.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

// Обработчик события для кнопки "Назад"
document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slideFiles.length - 1; // Переход к предыдущему слайду
    updateSlides();
});

// Обработчик события для кнопки "Вперед"
document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide < slideFiles.length - 1) ? currentSlide + 1 : 0; // Переход к следующему слайду
    updateSlides();
});

// Инициализируем загрузку всех слайдов
loadSlides();