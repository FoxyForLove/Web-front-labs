document.addEventListener('DOMContentLoaded', (event) => {
    let today = new Date();
    let maxDate = today.toISOString().split('T')[0];
    document.getElementById('birthday').setAttribute('max', maxDate);
});
function showDaysCount() {
    let inputDate = document.querySelector('input[type=date]');
    if (!inputDate.value) {
        document.getElementById('days-count').textContent = 'Ошибка: Пожалуйста, выберите дату рождения.';
        return;
    }

    let today = new Date();
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);
    document.getElementById('days-count').textContent = `Количество дней с даты рождения: ${daysCount}`;
}
function clearInput() {
    document.getElementById('birthday').value = '';
    document.getElementById('days-count').textContent = '';
}