function showDate() {
    let today = new Date();

            let outRU = document.getElementById('current-date-ru');
            outRU.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');

            let outZA = document.getElementById('current-date-za');
            outZA.innerHTML = 'Дата и время для локали ЮАР: ' + today.toLocaleString('en-ZA');

            let outEG = document.getElementById('current-date-eg');
            outEG.innerHTML = 'Дата и время для локали Египта: ' + today.toLocaleString('ar-EG');

            let outGR = document.getElementById('current-date-gr');
            outGR.innerHTML = 'Дата и время для греческой локали: ' + today.toLocaleString('el-GR');

            let outPK = document.getElementById('current-date-pk');
            outPK.innerHTML = 'Дата и время для пакистанской локали: ' + today.toLocaleString('ur-PK');

            let outCN = document.getElementById('current-date-cn');
            outCN.innerHTML = 'Дата и время для китайской локали: ' + today.toLocaleString('zh-CN');
    }
function showCurrentDetails() {
    let today = new Date();

        let year = today.getFullYear();
        let month = today.toLocaleString('default', { month: 'long' });
        let day = today.getDate();
        let weekday = today.toLocaleString('default', { weekday: 'long' });

        document.getElementById('current-year').innerHTML = 'Текущий год: ' + year;
        document.getElementById('current-month').innerHTML = 'Текущий месяц: ' + month;
        document.getElementById('current-day').innerHTML = 'Текущая дата: ' + day;
        document.getElementById('current-weekday').innerHTML = 'День недели: ' + weekday;
    }

    document.addEventListener('DOMContentLoaded', (event) => {
        showDate();
        showCurrentDetails();
    });
function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0); 
        /* ( : на 4, високосный; : 100, некоторые не високосные), (400 - все же високосные)*/
    }
function findDayOfWeek() {
        let day = parseInt(document.getElementById('input-day').value);
        let month = parseInt(document.getElementById('input-month').value) - 1;
        let year = parseInt(document.getElementById('input-year').value);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            document.getElementById('result').innerText = 'Пожалуйста, введите корректную дату.';
            return;
        }
        var daysInMonth;
            switch (month) {
                case 1: // Февраль
                    daysInMonth = isLeapYear(year) ? 29 : 28;
                    break;
                case 3: // Апрель
                case 5: // Июнь
                case 8: // Сентябрь
                case 10: // Ноябрь
                    daysInMonth = 30;
                    break;
                default:
                    daysInMonth = 31;
            }

            if (day < 1 || day > daysInMonth) {
                document.getElementById('result').innerText = 'В этом месяце нет столько дней.';
                return;
            }

            var daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            var inputDate = new Date(year, month, day);
            var dayOfWeek = daysOfWeek[inputDate.getDay()];

            document.getElementById('result').innerText = 'День недели: ' + dayOfWeek;
        }