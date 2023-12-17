
window.onload = function(){
    
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    
    var c_width = width * 0.5;
    var c_heigth = height * 0.5;

    var moment = 100;
    var speed = 0.05;
    var w = 20,h=20;
    
    render();

    function render(){
        moment += speed;
        context.fillStyle = "white";
        context.fillRect(0,0,width,height);
        context.fillStyle = "black";
        context.fillRect(c_width,c_heigth + 300 * Math.cos(moment),w,h);

        requestAnimationFrame(render);
        
    }
    
};





