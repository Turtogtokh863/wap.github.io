window.onload = function () {
    "use strict";
    let index = 0;
    let int;
    let ars;
    let speed = 250;
    let anim;

    let strBtn = document.getElementById("start");
    let stpBtn = document.getElementById("stop");
    let txt = document.getElementById("text-area");
    let slcf = document.getElementById("fontsize");
    let slc = document.getElementById("animation");
    let chk = document.getElementById("turbo");
    strBtn.onclick = startAnimation;
    chk.onchange = changeSpeed;
    slc.onchange = changeAnimation;
    stpBtn.onclick = stopAnimation;
    slcf.onchange = changeFont;


    function startAnimation() {
        ars = window.ANIMATIONS[anim].split("=====\n");
        int = setInterval(draw, speed);
        stpBtn.disabled = false;
        slc.disabled = true;
        strBtn.disabled = true;
    }

    function drawAll() {
        txt.value = ars;
    }

    function stopAnimation() {
        if (int)
            clearInterval(int);
        stpBtn.disabled = true;
        slc.disabled = false;
        strBtn.disabled = false;
        drawAll()
    }

    function changeAnimation() {
        anim = slc.value;
        console.log(anim);
        index = 0;
        if (strBtn.disabled) {
            clearInterval(int);
            int = setInterval(draw, speed);
        }
    }

    function changeSpeed() {
        if (chk.checked)
            speed = 50;
        else
            speed = 250;
        clearInterval(int);
        int = setInterval(draw, speed);
    }

    function draw() {
        if (ars) {
            txt.value = ars[index++];
            if (index === ars.length)
                index = 0;
        }
    }

    function changeFont() {
        txt.style.fontSize = slcf.value;
    }

};