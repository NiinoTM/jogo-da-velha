const X = "X"
const O = "O"
const xLimit = [];
const oLimit = [];
const boxList = document.querySelectorAll('.box')

for(let i = 0; i < boxList.length; i++){
    xLimit.push("empty");
    oLimit.push("empty");
}

boxList.forEach( (box, i) => box.onclick = function(){
    function numberOfItems(list){
        return list.filter( (value) => value !== "empty").length
    }

    if(numberOfItems(xLimit) == numberOfItems(oLimit)){
        if(xLimit[i] === "empty" && oLimit[i] === "empty"){
            box.innerHTML = X;
            xLimit.splice(i, 1, "x");
        }
    } else {
        if(oLimit[i] === "empty" && xLimit[i] === "empty"){
            box.innerHTML = O;
            oLimit.splice(i, 1, "o");
        }
    }
})
