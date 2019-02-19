window.onload = function() {
    document.getElementById("price").innerHTML = '&yen' + dayjs().format('YYYYMM');
}