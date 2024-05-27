function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let seconds = String(today.getSeconds()).padStart(2, '0'); 
    /*число (сек) - строка (из-за padStart) - отображение до задонной длины */


    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = seconds;
}
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const degrees = seconds * 6; 
    const arrow = document.getElementById('arrow');
    arrow.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`; 
}
setInterval(updateClock, 1000)
setInterval(showTime,1000);