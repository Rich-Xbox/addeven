// let num_input = document.querySelector(".num")
// let btn = document.querySelector("button")
// let plus = document.querySelector(".plus")
// let minus = document.querySelector(".minus")
// let span = document.querySelector("span")
// let color_input = document.querySelector(".color_input")

// let raqam = 0
// span.innerHTML = raqam
// btn.addEventListener("click", function(){
//     raqam = num_input.value
//     span.innerHTML = raqam
// })

// plus.addEventListener("click", function(){
//     console.log(raqam);
    
//     raqam++
//     span.innerHTML = raqam
// })

// minus.addEventListener("click", function(){
//     console.log(raqam);
    
//     raqam--
//     span.innerHTML = raqam
// })


// color_input.addEventListener("change", function(e){
    
//     // span.style.color = 
// })

function updateNumber() {
    let inputVal = document.getElementById("numberInput").value;
    if (inputVal) {
        document.getElementById("counterValue").innerText = inputVal;
    }
}

function increase() {
    let counter = document.getElementById("counterValue");
    counter.innerText = parseInt(counter.innerText) + 1;
}

function decrease() {
    let counter = document.getElementById("counterValue");
    counter.innerText = parseInt(counter.innerText) - 1;
}

function changeColor() {
    let colorVal = document.getElementById("colorInput").value;
    if (colorVal) {
        document.body.style.backgroundColor = colorVal;
    }
}