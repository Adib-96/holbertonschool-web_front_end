//it contains the stock
let stock = {
    macbook : 3,
    iphone: 4,
}


function processPayment(itemName) {
    stock[itemName] -=1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    if(stock[itemName] === 0) {
        console.log(`No more ${itemName} in stock`);
        console.log('Payment is not being processed');
    }
}

function processOrder(itemName,callbackPayment,callbackError) {
    if(!Object.keys(stock).includes(itemName)) {
        console.log("This item is out of stock 😑");
        return;
    }
    console.log(`Verifying the stock of ${itemName}`);
    if(stock[itemName.toLowerCase()]) {
        callbackPayment(itemName);
        return;
    }
    callbackError(itemName);
}

let itemToBuy = prompt('Please enter the item you would like to purchase (Macbook, iPhone)')

processOrder(itemToBuy,processPayment,processError)
processOrder(itemToBuy,processPayment,processError)
processOrder(itemToBuy,processPayment,processError)
processOrder(itemToBuy,processPayment,processError)



