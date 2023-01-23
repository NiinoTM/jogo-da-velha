let clickCounter = 0
const boxList = document.querySelectorAll('.box')


for(let contador = 0; contador < boxList.length; contador ++){
    const boxElement = boxList[contador];
    boxElement.onclick = function(){
        if(clickCounter == 0 || clickCounter == 2 || clickCounter == 4 || clickCounter == 6 || clickCounter == 8){
            boxElement.classList.add('X');   
            clickCounter ++;
            console.log(clickCounter);
        } else {
            boxElement.classList.add('O');
            clickCounter++;
            console.log(clickCounter);
        }
    }
    console.log(clickCounter)
}
