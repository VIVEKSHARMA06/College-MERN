// Q1. Square of a number
function ques1(number) {
    return number * number;
}

// Q2. Celsius to Fahrenheit
function ques2(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Q3. Fahrenheit to Celsius
function ques3(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// Q4. Shopping Cart Tax & Total Calculator
function ques4(price, quantity, taxRate) {
    let total = price * quantity;
    return total + (total * taxRate) / 100;
}

// Q5. Grade Assigner
function ques5(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Q6. Age in Days Calculator
function ques6(ageInYears) {
    return ageInYears * 365;
}

// Q7. Simple Password Validator
function ques7(password) {
    return password.length >= 8 && !password.includes(" ");
}
