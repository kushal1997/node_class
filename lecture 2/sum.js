const readline = require("readline");

const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rlInterface.question("Enter first No.", num1 => {
    rlInterface.question("Enter second no.", num2 => {
        // Convert num1 and num2 to numbers
        const sum = Number(num1) + Number(num2);
        console.log("Sum is ", sum);

        // Close the interface when done
        rlInterface.close();
    });
});
