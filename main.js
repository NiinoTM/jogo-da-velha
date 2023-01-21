const boxList = document.querySelectorAll('.box')
let contador = 0
let clickCounter = 0


while(contador < 9){
    const boxElement = boxList[contador];
    console.log(clickCounter);

    while(clickCounter < 9){
        boxElement.onclick = function(){
            contador += 1
        }
    }

    if(clickCounter == 0 || clickCounter == 2 || clickCounter == 4 || clickCounter == 6 || clickCounter == 8){
        boxElement.onclick = function(){
            boxElement.classList.add('X')
        }
    }

    if(clickCounter == 1 || clickCounter == 3 || clickCounter == 5 || clickCounter == 7 || clickCounter == 9){
        console.log(boxElement);
        boxElement.onclick = function(){
            boxElement.classList.add('Y')
        }
    }

    contador += 1;
}
