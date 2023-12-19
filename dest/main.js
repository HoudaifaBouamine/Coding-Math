"use strict";
window.onload = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var info = document.getElementById("info");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight - 30;
    var x = 0, y = 0, xAngle = 0, yAngle = 0, ySpeed = 0.01, xSpeed = 0.013, xRadius = 150, yRadius = 250, xCenter = width / 2, yCenter = height / 2, frame = 0;
    render();
    function render() {
        xAngle += xSpeed;
        yAngle += ySpeed;
        context.clearRect(0, 0, width, height);
        draw_origin(context, width, height, xCenter, yCenter, xRadius / 5, xRadius / 5, 5, 5);
        x = xRadius * Math.cos(xAngle) + xCenter;
        y = -1 * yRadius * Math.sin(yAngle) + yCenter;
        context.lineWidth = 1;
        context.beginPath();
        context.moveTo(xCenter, yCenter);
        context.lineTo(x, y);
        context.strokeStyle = "red";
        context.stroke();
        context.beginPath();
        context.moveTo(x, yCenter);
        context.lineTo(x, y);
        context.strokeStyle = "blue";
        context.stroke();
        context.beginPath();
        context.moveTo(xCenter, y);
        context.lineTo(x, y);
        context.strokeStyle = "green";
        context.stroke();
        context.beginPath();
        context.arc(x, y, 5, 0, 2 * Math.PI);
        context.fill();
        if (frame % 5 == 0)
            info.innerHTML = `  x : ${(Math.cos(xAngle)).toFixed(2)}, y : ${(Math.sin(yAngle)).toFixed(2)}`;
        frame++;
        requestAnimationFrame(render);
    }
    function draw_origin(context, max_width, max_height, xOrigin, yOrigin, xStep = 30, yStep = 30, xBigStepNum = -1, yBigStepNum = -1) {
        let oldLineWidth = context.lineWidth;
        let oldColor = context.strokeStyle;
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(0, yOrigin);
        context.lineTo(width, yOrigin);
        context.stroke();
        context.beginPath();
        context.moveTo(xOrigin, 0);
        context.lineTo(xOrigin, height);
        context.stroke();
        context.lineWidth = 1;
        context.strokeStyle = "gray";
        for (let i = xOrigin + xStep; i < width; i += xStep) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, height);
            context.stroke();
        }
        for (let i = xOrigin - xStep; i >= 0; i -= xStep) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, height);
            context.stroke();
        }
        for (let i = yOrigin + yStep; i < height; i += yStep) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(width, i);
            context.stroke();
        }
        for (let i = yOrigin - yStep; i >= 0; i -= yStep) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(width, i);
            context.stroke();
        }
        if (xBigStepNum != -1) {
            let oldwidth = context.lineWidth;
            context.lineWidth = 2;
            for (let i = xOrigin + xStep * xBigStepNum; i < width; i += xStep * xBigStepNum) {
                context.beginPath();
                context.moveTo(i, 0);
                context.lineTo(i, height);
                context.stroke();
            }
            for (let i = xOrigin - xStep * xBigStepNum; i >= 0; i -= xStep * xBigStepNum) {
                context.beginPath();
                context.moveTo(i, 0);
                context.lineTo(i, height);
                context.stroke();
            }
            context.lineWidth = oldwidth;
        }
        if (yBigStepNum != -1) {
            let oldwidth = context.lineWidth;
            context.lineWidth = 2;
            for (let i = yOrigin + yStep * yBigStepNum; i < width; i += yStep * yBigStepNum) {
                context.beginPath();
                context.moveTo(0, i);
                context.lineTo(width, i);
                context.stroke();
            }
            for (let i = yOrigin - yStep * yBigStepNum; i >= 0; i -= yStep * yBigStepNum) {
                context.beginPath();
                context.moveTo(0, i);
                context.lineTo(width, i);
                context.stroke();
            }
            context.lineWidth = oldwidth;
        }
        context.lineWidth = oldLineWidth;
        context.strokeStyle = oldColor;
    }
};
