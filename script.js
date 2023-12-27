const bulb = document.getElementById('img');


let bulbOff = false;
function btnon(){
    bulb.src='on.png';
    document.getElementById('text').innerHTML='On'
}


function btnof(){
    bulb.src='of.png'
    document.getElementById('text').innerHTML = 'Off'
}