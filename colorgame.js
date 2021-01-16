var numSquares = 6;

var colors = randCol(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(numSquares);

var picked = document.querySelector("#pick");

picked.textContent = pickedColor;

var message = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetbtn = document.querySelector("#reset");

//var easybtn = document.querySelector("#easy");
//var hardbtn = document.querySelector("#hard");

var mode = document.querySelectorAll(".mode");

for (var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");

        this.classList.add("selected");

        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

        /*
        if(this.textContent === "Easy"){
            numSquares = 3;
        }else{
            numSquares = 6;
        }
        */

        res();
    });

}

function res(){
    colors = randCol(numSquares);
    pickedColor = pickColor(numSquares);
    picked.textContent = pickedColor;
    resetbtn.textContent = "New Colors";
    message.textContent = "";
    h1.style.backgroundColor = "dodgerblue";

    for (var i = 0; i < squares.length; i++){

        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }

    }

}

/*easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");

    message.textContent = "";

    numSquares = 3;


    colors = randCol(numSquares);

    pickedColor = pickColor(numSquares);

    picked.textContent = pickedColor;
    

    for (var i = 0; i < squares.length; i++){
        
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }

    }

});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;

    colors = randCol(numSquares);

    pickedColor = pickColor(numSquares);

    picked.textContent = pickedColor;
    message.textContent = "";


    for (var i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";

    }
});
*/

for (var i = 0; i < squares.length; i++){

    squares[i].style.backgroundColor = colors[i] //add intial colors to squares
    squares[i].addEventListener("click", function(){
        var clicked = this.style.backgroundColor;
        if (clicked === pickedColor){
            message.textContent = "Correct!";
            resetbtn.textContent = "Play Again";
            change(clicked);
            h1.style.backgroundColor = clicked;
        }
        else{
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    })

}

resetbtn.addEventListener("click", function(){
    colors = randCol(numSquares);
    pickedColor = pickColor(numSquares);
    picked.textContent = pickedColor;
    this.textContent = "New Colors";
    message.textContent = "";
    h1.style.backgroundColor = "dodgerblue";

    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

})

function change(color){
    //all squares change color to match correct
    for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor= color;
    }
}

function pickColor(num){
   var ran =  Math.floor(Math.random() * num);
   return colors[ran];
}

function randCol(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push(col());
    }

    return arr;
}

function col(){
    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}