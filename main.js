window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;

    var c_width = width * 0.5;
    var c_heigth = height * 0.5;

    for(var i = - c_width / 50;i<= c_width / 50;i+= 0.001){

        var x = i * 50;
        var y = -1 * (Math.cos(i) * 50);
        
        context.fillRect(x + c_width,y + c_heigth,2,2);
        
        y = -1 * (Math.sin(i) * 50) ;
        context.fillRect(x + c_width,y + c_heigth,2,2);
        
        y = -1 * (Math.tan(i) * 50) ;
        context.fillRect(x + c_width,y + c_heigth,2,2);
        
        
    }

};
