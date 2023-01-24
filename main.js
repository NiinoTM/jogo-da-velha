let xLimit = [];
let oLimit = [];

const boxList = document.querySelectorAll('.box')

for(let i = 0; i < boxList.length; i++){
    xLimit.push("disabled");
    oLimit.push("disabled");
}

boxList.forEach( (box, i) => box.onclick = function(){
    function numberOfItems(limitList){
        return limitList.filter( (value) => value !== "disabled").length
    }

    if(numberOfItems(xLimit) == numberOfItems(oLimit)){
        if(xLimit[i] === "disabled" && oLimit[i] === "disabled"){
            box.innerHTML = "x";
            xLimit.splice(i, 1, "x");
        }
    } else {
        if(oLimit[i] === "disabled" && xLimit[i] === "disabled"){
            box.innerHTML = "o";
            oLimit.splice(i, 1, "o");
        }
    }
})
