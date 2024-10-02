var num = 23;

var num_two = 2;
var sum = num+num_two

var num_three = 40;

var num_four = 4;

var sum_two = num_three+ num_four
console.log("SUM:" ,sum_two)



// Functions without parameters(argumets) 
// this particular function is a void function since it doesnt have the word return
function summation(){
    var num_five = 40;

    var num_six = 90;


    var sum_three = num_five+ num_six;

    console.log("SUM:" ,sum_three);

    
}

summation();

//returning function
function summation_two(){
    var num_five = 40;

    var num_six = 4;


    var sum_four = num_five+ num_six;

    return sum_four;

    
}

//Use it by printing the value directly on thrr terminall
console.log("SUM four:" ,summation_two());

//Assigning the value to a variable 
// storing the value of the variable for other purposes 
var sum_four = summation_two();

// when assigning a void function to a variable it gives an error
//var sum_five = summation();

//console.log(sum_five());


//Functons with Parameters
function summation_three(num_five, num_six){

    var sum_six = num_five + num_six;
    console.log("Sum six: ", sum_six);

}
summation_three(2,2);
summation_three(90,87);

// returning function with parameters
function summation_four( num_five,num_six){
    return num_five + num_six;
}
//printing it directly on the terminal
console.log("Sum five:",summation_four(23,5))

var sum_four = summation_four(23,5);

//writing a function that takes my name and greets me in my local language
function greetme(name){
    var myname = name;
    console.log("Agandi", myname);
}

greetme("Anitah!");