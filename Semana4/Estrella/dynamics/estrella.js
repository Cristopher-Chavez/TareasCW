const canvas = document.getElementById("estrella");
const ctx = canvas.getContext("2d");

const numero = document.getElementById("numero"); 
const pico = document.getElementById("pico");
const relleno = document.getElementById("relleno"); 
const color = document.getElementById("color"); 

numero.addEventListener("change",aumenta);
    function aumenta(){
        if(numero.value >= 31){
            alert("El número máximo de picos de la estrella es 30");
        }else if(numero.value <= 3){
            alert("El número mínimo de picos de la estrella es 4");
        }
        else{
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 300, 300);
        centx = 150; 
        centy = 150;
        radio = 0;
        punt = numero.value * 2;
        bul = false;
        frac = Math.PI * 2 / punt;
        
        ctx.beginPath();
        for(let i=0; i<punt; i++){
            if(bul == false){
                radio = 150
                bul = true;
            }else{
                radio = pico.value;
                bul = false;
            }
            ang = i * frac;
            x = radio * Math.cos(ang)+centx;
            y = radio * Math.sin(ang)+centy;
            ctx.lineTo(x, y);
        }
        ctx.closePath();

        ctx.fillStyle = '#ffffff';
        if(relleno.checked == true){
            ctx.fillStyle = color.value;
        }
        ctx.fill();
        ctx.strokeStyle = color.value;
        ctx.stroke();
        }
    }

pico.addEventListener("change",aumenta);

color.addEventListener("change",aumenta);

relleno.addEventListener("change",aumenta);
