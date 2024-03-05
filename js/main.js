// Question 1
/*function displayNumber(){
    var num1 = document.getElementById('inputOne').value
    document.getElementById('demo').innerHTML = num1
}*/



// Question 2 
/*function divison(){
    var num1 = document.getElementById('inputOne').value
    if ((Number(num1) % 3) == 0 && (Number(num1) % 4) == 0){
        var num2 = document.getElementById('demo').innerHTML = "Yes"
    } else{
        var num2 = document.getElementById('demo').innerHTML = "No"
    }
}*/



// Question 3
/*function getMax(){
    var num1 = Number(document.getElementById('inputOne').value)
    var num2 = Number(document.getElementById('inputTwo').value)
    var result;
    if(num1 > num2){
        result = document.getElementById("demo").innerHTML = "The Max is: " + num1
    }else if(num2 > num1) {
        result = document.getElementById("demo").innerHTML = "The Max is: " + num2
    }else if(num1 == num2){
        result = document.getElementById("demo").innerHTML = "Two Numbers Are Equal: " + num1
    }
}*/




// Question 4
/*function positiveOrNegative(){
    var num = Number(document.getElementById('inputOne').value)
    if (num > 0){
        document.getElementById('demo').innerHTML = num + " :" + " is Positive"
    } else if(num < 0){
        document.getElementById('demo').innerHTML = num + " :" + " is Negative"
    } else if(num == 0){
        document.getElementById('demo').innerHTML = num + " :" + " is Zero"
    }
}*/




// Question 5
/*function getMaxAndMin(){
    var num1 = Number(document.getElementById('inputOne').value)
    var num2 = Number(document.getElementById('inputTwo').value)
    var num3 = Number(document.getElementById('inputThree').value)
    var result;
    if((num1) > (num2) && (num1) > (num3)){
        if((num2) > (num3)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num1 + " Min is: " + num3
        }else if((num3) > (num2)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num1 + " Min is: " + num2
        }else if((num2) == (num3)){
        result = document.getElementById("demo").innerHTML = "Max is: " + num1 + " Min are Equal " + num3
        }
    }else if((num1) < (num2) && (num2) == (num3)){
        result = document.getElementById("demo").innerHTML = "Max are Equal: " + num2 + " Min is " + num1

    


    }else if((num2) > (num1)  && (num2) > (num3)) {
        if((num1) > (num3)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num2 + " Min is: " + num3
        }else if((num3) > (num1)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num2 + " Min is: " + num1
        }else if((num1) == (num3)){
        result = document.getElementById("demo").innerHTML = "Max is: " + num2 + " Min are Equal " + num3
        }
    }else if((num2) < (num1) && (num1) == (num3)){
        result = document.getElementById("demo").innerHTML = "Max are Equal: " + num1 + " Min is " + num2



    }else if((num3) > (num1)  && (num3) > (num2)) {
        if((num1) > (num2)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num3 + " Min is: " + num2
        }else if((num2) > (num1)){
            result = document.getElementById("demo").innerHTML = "Max is: " + num3 + " Min is: " + num1
        }else if((num2) == (num1)){
        result = document.getElementById("demo").innerHTML = "Max is: " + num3 + " Min are Equal " + num2
        }
    }else if((num3) < (num2) && (num2) == (num1)){
        result = document.getElementById("demo").innerHTML = "Max are Equal: " + num2 + " Min is " + num3


    }else if((num1) == (num2) && (num1) == (num3)){
        result = document.getElementById("demo").innerHTML = "Numbers Are Equal " + num1
    }
}*/




// Question 6
/*function evenOrOdd(){
    var num = Number(document.getElementById('inputOne').value)
    if ((num % 2) == 0){
        document.getElementById('demo').innerHTML = num + " :" + " is Even"
    } else if((num % 2) != 0){
        document.getElementById('demo').innerHTML = num + " :" + " is Odd"
    }
}*/





// Question 7
/*function vowelOrConsonant(){
    var string = document.getElementById('inputOne').value
    if (string == "a" || string == "e" || string == "i" || string == "o" || string == "u"){
        document.getElementById('demo').innerHTML = string + " :" + " is Vowel"
    } else{
        document.getElementById('demo').innerHTML = string + " :" + " is Consonant"
    }
}*/




// Question 8
/*function displayNumbersFromOne(){
    var num1 = Number(document.getElementById('inputOne').value)
    for(var i = 1 ; i < (num1+1) ; i++){
        document.getElementById('demo').innerHTML += i + " "
    }
}*/




// Question 9
/*function multiplicationTable(){
    var num1 = Number(document.getElementById('inputOne').value)
    for(var i = num1 ; i < (num1*13) ; i+=(num1)){
        document.getElementById('demo').innerHTML += i + " "
    }
}*/





// Question 10
/*function displayEvenNumbers(){
    var num1 = Number(document.getElementById('inputOne').value)
    for(var i = 0 ; i < (num1+1) ; i+=2){
        document.getElementById('demo').innerHTML += i + " "
    }
}*/





// Question 11
/*function power(){
    var base = Number(document.getElementById('inputOne').value)
    var exponent = Number(document.getElementById('inputTwo').value)
    var result = 1;

    for(var i = 0 ; i < exponent ; i++){
        document.getElementById('demo').innerHTML =  result *= base
    }
}*/




// Question 12
/*function fiveSubjects(){
    var subject1 = Number(document.getElementById('inputOne').value)
    var subject2 = Number(document.getElementById('inputTwo').value)
    var subject3 = Number(document.getElementById('inputThree').value)
    var subject4 = Number(document.getElementById('inputFour').value)
    var subject5 = Number(document.getElementById('inputFive').value)

    var total = (subject1 + subject2 + subject3 + subject4 + subject5)
    var avg = (total / 5)
    var precentage = (total/500)*(100)

    document.getElementById('demo').innerHTML = "Total : " + total + "  Average: " + avg + "  Precentage: " + precentage + "%"
}*/




// Question 13
/*function knowMonth(){
    var month = Number(document.getElementById('inputOne').value)
    if(month == 2){
        document.getElementById('demo').innerHTML = "Days in Month: 28"
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        document.getElementById('demo').innerHTML = "Days in Month: 30"
    }else{
        document.getElementById('demo').innerHTML = "Days in Month: 31"
    }
}*/





// Question 14
/*function gradeAndPrecentage(){
    var subject1 = Number(document.getElementById('inputOne').value)
    var subject2 = Number(document.getElementById('inputTwo').value)
    var subject3 = Number(document.getElementById('inputThree').value)
    var subject4 = Number(document.getElementById('inputFour').value)
    var subject5 = Number(document.getElementById('inputFive').value)

    var total = (subject1 + subject2 + subject3 + subject4 + subject5)
    var precentage = (total/500)*(100)

    if(precentage >= 90){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : A" 
    }else if(precentage >= 80 && precentage < 90){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : B" 
    }else if(precentage >= 70 && precentage < 80){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : C" 
    }else if(precentage >= 60 && precentage < 70){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : D" 
    }else if(precentage >= 40 && precentage < 60){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : E" 
    }else if(precentage < 40){
        document.getElementById('demo').innerHTML = "Precentage is : " + precentage + "%" + " Grade : F" 
    }
}*/




// Using Switch Case:
// Question 15
/*function knowMonthSwitch(){
    var month = Number(document.getElementById('inputOne').value)
    switch(month){
        case 2:
            document.getElementById('demo').innerHTML = "Days in Month: 28"
        break;
        case 4:
            document.getElementById('demo').innerHTML = "Days in Month: 30"
        break;
        case 6:
            document.getElementById('demo').innerHTML = "Days in Month: 30"
        break;
        case 9:
            document.getElementById('demo').innerHTML = "Days in Month: 30"
        break;
        case 11:
            document.getElementById('demo').innerHTML = "Days in Month: 30"
        break;
        default:
            document.getElementById('demo').innerHTML = "Days in Month: 31"
    }
}*/





// Question 16
/*function vowelOrConsonantSwitch(){
    var alphabet = document.getElementById('inputOne').value
    switch(alphabet){
        case "a":
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Vowel"
        break;
        case "e":
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Vowel"
        break;
        case "i":
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Vowel"
        break;
        case "o":
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Vowel"
        break;
        case "u":
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Vowel"
        break;
        default:
            document.getElementById('demo').innerHTML = alphabet + " :" + " is Consonant"
    }
}*/





// Question 17
/*function getMaxSwitch(){
    var num1 = document.getElementById('inputOne').value
    var num2 = document.getElementById('inputTwo').value
    var result = num1 > num2;
    switch(result){
        case true:
            result = document.getElementById("demo").innerHTML = "The Max is: " + num1
        break;
        case false:
            result = document.getElementById("demo").innerHTML = "The Max is: " + num2
        break;
    }
}*/




// Question 18
/*function evenOrOddSwitch(){
    var num = Number(document.getElementById('inputOne').value) 
    var result = num % 2
    switch(result){
        case 0:
            document.getElementById('demo').innerHTML = num + " :" + " is EVEN"
        break;
        case 1:
            document.getElementById('demo').innerHTML = num + " :" + " is ODD"
        break;
    }
}*/





// Question 19
/*function positiveOrNegativeSwitch(){
    var num = Number(document.getElementById('inputOne').value)   
    switch(num > 0){
        case true:
            document.getElementById('demo').innerHTML = num + " :" + " is Positive"
        break;
        case false:
            switch (num < 0){
                case true:
                    document.getElementById('demo').innerHTML = num + " :" + " is Negative"
                break;
                case false:
                    document.getElementById('demo').innerHTML = num + " :" + " is Zero"
            }
    }
}*/





// Question 20
/*function simpleCalculator(){
    var num1 = Number(document.getElementById('inputOne').value)   
    var operator = document.getElementById('inputTwo').value
    var num2 = Number(document.getElementById('inputThree').value)   
    switch(operator){
        case "+":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 + num2)
        break;
        case "-":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 - num2)
        break;
        case "*":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 * num2)
        break;
        case "/":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 / num2)
        break;
        case "%":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 % num2)
        break;
        case "^":
            document.getElementById('demo').innerHTML = num1 + " " + operator + " " + num2 + " = " + (num1 ** num2)
        break;
    }
}*/
