function ques1(a) {
    a>=0?console.log("positive"):console.log("negative");
}


function ques2(x) {
    x%2==0?console.log("even"):console.log("odd");
}

function ques3(x, y) {
    if (x > y) console.log(x + " is greater");
    else if (y > x) console.log(y + " is greater");
    else console.log("Both are equal");
}

function ques4 (a){
    if(a>=90) {
        console.log("A grade");
    }
    else if(a>=80) {
        console.log("B grade");
    }
    else if(a>=70) {
        console.log("C grade");
    }
    else if(a>=30) {
        console.log("D Grade");
    }
    else {
        console.log("Fail");
    }
}

function ques5(age) {
    if(age<12) {
        console.log("Price: 5");
    }
    else if(age<18) {
        console.log("Price: 10");
    }
    else if(age<60) {
        console.log("Price: 20");
    }
    else {
        console.log("Price: 15");
    }
}

function ques6(year) {
    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

function ques7(p) {
    let disc = 0;
    if(p>=100) {
        disc=20;
    }
    else if(p>=50) {
        disc=10;
    }
    console.log("Price after discount : "+(p-(p*disc/100)));
}

function ques8() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        console.log("Morning");
    }
    else if (hour >= 12 && hour < 16) {
        console.log("Good Afternoon");
    }
    else if(hour>=16 && hour<21) {
        console.log("Good Evening");
    }
    else{
        console.log("Good Night");
    }
}

function ques9(height , weight) {
    let BMI = weight / (height * height);
    console.log("BMI: "+BMI);
}

function ques10() {
    let num = Math.floor(Math.random()*100)+1;
    
    while(true) {
        let x = Number(prompt("Enter a guess"));
        if (x==num) {
            console.log("Correct Guess");
            break;
        }
        else if (x<num) {
            console.log("The number is bigger");
        }
        else{
            console.log("The number is smaller");
        }
    }
}

function ques11 (age) {
    if(age>=18) {
        console.log("Adult");
    }
    else{
        console.log("Minor");
    }
}
