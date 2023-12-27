
window.onload = render;


function render(){
    
    let canvas : HTMLCanvasElement = <HTMLCanvasElement>
        document.getElementById("canvas");
    let context : CanvasRenderingContext2D = <CanvasRenderingContext2D> 
        canvas.getContext("2d");
    
    let width   = canvas.width = window.innerWidth ;
    let height  = canvas.height = window.innerHeight - 30;
    let time = 0;
    let timeSpeed = 0.03;
    let wave : number[] = []; 
    
    draw();
    function draw(){

        context.fillStyle = 'black';
        context.fillRect(0,0,width,height);
        
        let radius = 100;
        
        context.strokeStyle = 'white';
        let x = radius + 40;
        let y = radius + 40;
        context.beginPath();
        context.ellipse(x,y,radius,radius,0.5,0,Math.PI * 2)
        context.stroke();
        
        let angle = time;
        let dot_x = x + Math.cos(angle) * radius;
        let dot_y = y - Math.sin(angle) * radius;
        let dot_radius = 5;
        context.fillStyle = 'white';

        dot(dot_x,dot_y,dot_radius);

        line(x,y,dot_x,dot_y);
        wave.push(dot_y);

        context.beginPath();
        context.lineWidth = 1;
        for(let i = 0 ; i < wave.length - 1;i+=1){
            let wave_point_x = i + x + radius * 1.5;
            let wave_point_y = wave[wave.length -1 - i];
            
            let wave_point_x_next = (i+1) + x + radius * 1.5;
            let wave_point_y_next = wave[wave.length -1 - (i+1)];
            
            context.moveTo(wave_point_x,wave_point_y);
            context.lineTo(wave_point_x_next,wave_point_y_next);
        }
        
        context.stroke();
        context.lineWidth=1;

        let first_wave_point_x = x + radius * 1.5;
        let first_wave_point_y = wave[wave.length -1];

        line(dot_x,dot_y,first_wave_point_x,first_wave_point_y);

        dot(first_wave_point_x,first_wave_point_y,3);

        time+=timeSpeed;
        
        if(wave.length > 500){
            wave.shift();
        }

        requestAnimationFrame(draw);
        
    }
    
    function line(x1: number,y1: number,x2: number,y2 : number)
    {
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.stroke();

    }

    function point(x:number,y:number)
    {
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(x+1,y+1);
        context.stroke();
    }

    function dot(x:number,y:number,radius:number)
    {
        context.beginPath();
        context.arc(x,y,radius,0,Math.PI * 2);
        context.fill();    
    }
};

