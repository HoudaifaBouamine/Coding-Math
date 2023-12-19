"use strict";
window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var c_width = width * 0.5;
    var c_heigth = height * 0.5;
    var moment = 100;
    var speed = 0.05;
    var w = 20, h = 20;
    render();
    function render() {
        moment += speed;
        context.clearRect(0, 0, width, height);
        context.fillRect(c_width - 20, c_heigth + 300 * Math.cos(moment), w, h);
        context.beginPath();
        context.arc(c_width + 20, 400 - 100 * Math.cos(moment), 30, 0, Math.PI * 2, false);
        context.fill();
        requestAnimationFrame(render);
    }
};
