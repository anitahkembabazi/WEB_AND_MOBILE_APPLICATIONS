let score = 80;
if (score > 90 && score <= 100){
    console.log("A grade");
} else if (score > 75 && score <= 90){
    console.log("B grade");
} else if (score >=50 && score <=75){
    console.log("C grade");
} else{
    console.log("Fail");
}

// The output is B grade
//How can you simplify ths code using a switch statement
let score1 = 80
switch(score1){
    case 100:
        console.log("A grade");
         break;
    case 90:
        console.log("A grade");
        break;
    case 80:
        console.log("B grade");
        break;
    default:
        console.log("Fail");

}




