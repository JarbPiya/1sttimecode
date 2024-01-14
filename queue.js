function queue(queueN, couter) {
    console.log("Queue:" + queueN + " Please use the couter " + couter);
}

queue("230", "3");

function queueAorB(number, queueAB) {
    console.log(number + "person" +" queue " + queueAB);
}

function queueAInfo() {
    console.log("!!!1-4 person take queue A!!!");
}

function queueBInfo() {
    console.log("!!!More than 4 person take queue B!!!");
}

function queueAorB(numberOfCustomer, queueAB, numberOfQueue) {
    console.log(numberOfCustomer + " person " + " queue: " + numberOfQueue + queueAB);
}


queue("230", "3");
queueAInfo();
queueBInfo();
queueAorB("5", "4", "B");