/* МЕНЮ */

// Добавляем обработчик события "DOMContentLoaded" для выполнения кода после полной загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на элементы меню и гамбургер-меню
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const menu = document.getElementById("menu");

    // Добавляем обработчик события "click" для открытия/закрытия меню при клике на гамбургер-меню
    hamburgerMenu.addEventListener("click", function() {
        // Добавляем/удаляем класс "open" для анимации иконки гамбургер-меню
        hamburgerMenu.classList.toggle("open");
        // Изменяем стиль отображения меню для показа/скрытия его
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

/* КАЛЬКУЛЯТОР */

// Функция для получения текущего курса Норвежской кроны от Центробанка России
async function getExchangeRate() {
    try {
        const apiUrl = "https://www.cbr-xml-daily.ru/daily_json.js";
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Получаем курс Норвежской кроны и делим его на 10 (для приведения к нужной точности)
        const nokRate = data.Valute.NOK.Value / 10;
        document.getElementById('exchangeRate').textContent = `Курс Норвежской кроны (NOK): ${nokRate.toFixed(4).replace('.', ',')} руб.`;
        return nokRate;
    } catch (error) {
        console.log("Error fetching exchange rate:", error);
        document.getElementById('exchangeRate').textContent = "Ошибка загрузки курса Норвежской кроны (NOK).";
    }
}

// Функция для конвертации суммы в рублях в Норвежские кроны
async function convertToNOK() {
    try {
        // Получаем введенную пользователем сумму в рублях
        const rubAmount = parseFloat(document.getElementById("rubAmount").value);
        // Проверяем корректность введенной суммы
        if (isNaN(rubAmount) || rubAmount <= 0) {
            displayResult("Введите корректную сумму в рублях");
            return;
        }
        // Получаем текущий курс Норвежской кроны
        const nokRate = await getExchangeRate();
        const nokAmount = rubAmount / nokRate;
        displayResult(nokAmount.toFixed(2) + " NOK");
        // Сохраняем результат для обратной конвертации
        window.nokToRubAmount = nokAmount;
    } catch (error) {
        console.log("Error converting to NOK:", error);
        displayResult("Ошибка конвертации в NOK");
    }
}

// Функция для конвертации суммы из Норвежских крон в рубли
async function convertToRUB() {
    try {
        // Проверяем, была ли выполнена предыдущая конвертация
        if (typeof window.nokToRubAmount === 'undefined') {
            displayResult("Сначала выполните конвертацию в NOK");
            return;
        }
        const nokRate = await getExchangeRate();
        const rubAmount = window.nokToRubAmount * nokRate;
        displayResult(rubAmount.toFixed(2) + " RUB");
    } catch (error) {
        console.log("Error converting to RUB:", error);
        displayResult("Ошибка конвертации в RUB");
    }
}

// Функция для отображения результата на странице
function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.style.display = "block";
    resultElement.textContent = "Результат: " + result;
}

// Запрашиваем текущий курс Норвежской кроны при загрузке страницы
document.addEventListener('DOMContentLoaded', getExchangeRate);

/* НОВОСТИ */

// Скрываем полные новости при загрузке страницы
window.onload = function() {
    const allFullNews = document.querySelectorAll('.full-news');
    allFullNews.forEach(fullNews => {
        fullNews.style.display = 'none';
    });
}

// Функция для отображения или скрытия полной новости по ее идентификатору
function showFullNews(newsId) {
    const fullNews = document.getElementById(`fullNews${newsId}`);
    fullNews.style.display = fullNews.style.display === "none" ? "block" : "none";
}
