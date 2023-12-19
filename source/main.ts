
window.onload = function(){

    var canvas : HTMLCanvasElement = 
                    <HTMLCanvasElement>
                     document.getElementById("canvas");
    var context : CanvasRenderingContext2D =
                     <CanvasRenderingContext2D> 
                     canvas.getContext("2d");

    var width   = canvas.width = window.innerWidth;
    var height  = canvas.height = window.innerHeight;

    var x = 0,
        y = 0,
        angle = 0,
        speed = 0.01,
        radius = 200,
        xCenter = width/2,
        yCenter = height/2,
        frame = 0;


        render();
        
    function render(){
        
        angle+=speed;
        context.clearRect(0,0,width,height);
        draw_origin(context,width,height,xCenter,yCenter);

        x = radius * Math.cos(angle) + xCenter;
        y = -1 * radius * Math.sin(angle) + yCenter;

        context.beginPath();
        context.arc(x,y,10,0,2 * Math.PI);
        context.fill();
        var info : HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("info");
        
        if(frame % 5 == 0)
            info.innerHTML = `  x : ${(Math.cos(angle)).toFixed(2)}, y : ${(Math.sin(angle)).toFixed(2)}`;
        frame++;
        
        requestAnimationFrame(render);
    }

    function draw_origin(context : CanvasRenderingContext2D,max_width:number,max_height:number,xOrigin : number,yOrigin : number){

            context.beginPath();
            context.moveTo(0,yOrigin);
            context.lineTo(width,yOrigin);
            context.stroke();
            context.beginPath();
            context.moveTo(xOrigin,0);
            context.lineTo(xOrigin,height);
            context.stroke();
            
    }
    
};





