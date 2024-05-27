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

    showDate();