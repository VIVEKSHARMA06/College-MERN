let text = document.querySelectorAll(".text");
let display = document.getElementById("display");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let errorDisplay = document.getElementById("error");

let numFunc = function numClick(e) {
    let t = e.target;
    if (t.classList.contains("operator")) {
        if (display.value === "") {
            errorDisplay.innerText =
                "Error: Expression cannot start with an operator";
            return;
        } else if (t.innerText === "x") {
            display.value += "*";
        } else if (t.innerText === "÷") {
            display.value += "/";
        } else if (t.innerText === "-") {
            display.value += "-";
        } else if (t.innerText === "+") {
            display.value += "+";
        }
    } else {
        display.value += t.innerText;
    }
};

text.forEach(function (num) {
    num.addEventListener("click", numFunc);
});

clear.addEventListener("click", function () {
    display.value = "";
});

equal.addEventListener("click", function () {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        errorDisplay.innerText = "Error: Invalid Expression";
        console.log(error);
    }
});
