let contador = 0
let clickCounter = 0
const boxList = document.querySelectorAll('.box')


while(contador < 9){
    const boxElement = boxList[contador];

    //pq N TA FUNCIONANDO ESSA FUNCAO?P
    boxElement.onclick = function(){
        alert()
    }

    console.log(clickCounter);

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
