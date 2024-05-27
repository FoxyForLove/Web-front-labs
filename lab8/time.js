function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let seconds = String(today.getSeconds()).padStart(2, '0'); 
    /*число (сек) - строка (из-за padStart) - отображение до задонной длины */


    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = seconds;
}
setInterval(showTime,1000);