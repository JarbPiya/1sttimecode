function sayWelcome() {
    console.log("Welcomeee to Panew Cafe");
}

function address() {
    console.log("Chaingmai, Thailand");
}

function telephoneNumber() {
    console.log("Tel:1111-11444");
}

function orderDone(customerName, drink) {
    console.log("Orders: " + drink + " k." + customerName + " is ready for pickup");
}

function sayThankyou() {
    console.log("Thank you, please come (back) again");
}

sayWelcome();
address();
telephoneNumber();
orderDone("Jarb", "Thai tea");
sayThankyou();

sayWelcome();
address();
telephoneNumber();
orderDone("Ple", "Hot milk");
sayThankyou();
