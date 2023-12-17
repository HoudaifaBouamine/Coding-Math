window.onload = function(){

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;


    for(var i =0;i<= Math.PI * 10;i+= 0.001){

        var x = i * 50;
        var y = -1 * (Math.cos(i) * 50) + width/2;
        
        context.fillRect(x,y,2,2);
        
        y = -1 * (Math.sin(i) * 50) + width/2;
        context.fillRect(x,y,2,2);
        
        y = -1 * (Math.tan(i) * 50) + width/2;
        context.fillRect(x,y,2,2);
        
    }

};
