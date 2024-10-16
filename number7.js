//Describe what an infinite loop is and how it can occur
//an infinite loop is one that has no end and it can occur when the condition provided is always true

//Provide an example of an infinite for loop and explain how to stop it.
//when the condition is always true. To stop the loop the code must eventually become false.

//consider the following Javascript array:
let data = [
    {district: "Kampala", rainfall: 120},
    {district: "Gulu", rainfall: 80},
    {district: "Mbarara", rainfall:  95}
];

//write a for loop that iterates through the array and prints the district names and their rainfall levels
console.log(data[2].district);
console.log(data[0].rainfall);

for(let z =0; z<3 ; z++ ){
    console.log(data[z].district);
    console.log(data[z].rainfall);

}

for(let z =0; z<3 ; z++){
    console.log(data[z].district);
    console.log(data[4].district)
}