function sayWelcome(){
    console.log("Welcomeee to Panew");
}

function sayHello(customerName) {
    console.log("Hello " + customerName);
}

function Order(menu) {
    console.log(menu);
}

sayWelcome();
sayWelcome();
sayWelcome();
sayWelcome();

let customerName = "Ple";
Order("Thaitea"); 
let orderReadyMessage = customerName + " ได้แล้วครับ";
console.log(orderReadyMessage);

//ออร์เดอร์ใหม่ 

sayWelcome(); 
sayWelcome();
sayWelcome();
sayWelcome();

customerName = "Guy";
orderReadyMessage = "Blackcoffee คุณ " + customerName + " ได้แล้วครับ";
console.log(orderReadyMessage);

//ออร์เดอร์ใหม่ 

function sayHello(customerName){
    console.log("Hello " +customerName);
}
sayHello("Air");
sayHello("Mon");
