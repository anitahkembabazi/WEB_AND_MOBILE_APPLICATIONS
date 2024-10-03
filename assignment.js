function computation(num1, num2, operation) {
    if (operation === 'add') {
        console.log(`The result after adding${num1} and ${num2} is : ${num1 + num2}`);
    } else if (operation === 'subtract') {
        console.log(`The result of subtracting ${num1} and ${num2} is: ${num1 - num2}`);
    } else if (operation === 'multiply') {
        console.log(`The result of multiplication is: ${num1 * num2}`);
    } else if (operation === 'divide') {
            console.log(`The result of dividing ${num2} by ${num1} is: ${num1 / num2}`);
    
}
}

computation(10, 5, 'add');
computation(10, 5, 'subtract');
computation(10, 5, 'multiply');
computation(10, 5, 'divide');

