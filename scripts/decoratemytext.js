window.onload = function () {
    let txt = document.getElementById("big");
    let bol = 1;
    let inter;

    function big() {
        alert("Hello World");
        if (bol === 1) {
            inter = setInterval(bigger, 500);
            bol = 2;
        } else {
            clearInterval(inter);
            bol = 1;
        }

        function bigger() {
            var area = document.getElementById("txt");
            var style = window.getComputedStyle(area, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            area.style.fontSize = fontSize + 2 + "px";
        }
    }

    txt.onclick = big;
    var chk = document.getElementById("bling");
    chk.onchange = bling;

};


function bling() {
    var area = document.getElementById("txt");
    var chk = document.getElementById("bling");
    if (chk.checked) {
        document.body.style.backgroundImage = "url('http://www.sondracelli.com/images/p-bg.jpg')";
        area.style.fontWeight = 900;
        area.style.color = "green";
        area.style.textDecoration = "underline";
    } else {
        document.body.style.backgroundImage = "url()";
        area.style.fontWeight = 100;
        area.style.color = "black";
        area.style.textDecoration = "none";
    }
}