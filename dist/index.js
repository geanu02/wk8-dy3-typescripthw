"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    let userId = (0, uuid_1.v4)();
    return {
        id: userId,
        name,
        age,
        cart: []
    };
}
function createItem(name, price, description) {
    let itemId = (0, uuid_1.v4)();
    return {
        id: itemId,
        name,
        price,
        description
    };
}
function addToCart(item, user) {
    user.cart.push(item);
    console.log(`Added 1 ${item.name} to Cart.`);
}
function removeFromCart(item, user) {
    let countItems = 0;
    user.cart.forEach(e => e == item ? countItems++ : '');
    for (let i = 0; i < countItems; i++) {
        let idx = user.cart.indexOf(item);
        user.cart.splice(idx, 1);
    }
    console.log(`Removed all (${countItems}) ${item.name} from Cart.`);
}
function removeQuantityFromCart(item, user, qtyRemove) {
    for (let i = 0; i < qtyRemove; i++) {
        let idx = user.cart.indexOf(item);
        user.cart.splice(idx, 1);
    }
    console.log(`Removed ${qtyRemove} ${item.name} from Cart.`);
}
const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
function cartTotal(user) {
    let totalCart = 0;
    for (let item of user.cart) {
        totalCart += item.price;
    }
    // Optional: Just to know if totalCart is correct
    console.log(`Cart Total: ${formatterUSD.format(totalCart)}`);
    return totalCart;
}
function printCart(user) {
    let cartItems = {};
    for (let cartItem of user.cart) {
        if (cartItem.name in cartItems) {
            cartItems[cartItem.name] += 1;
        }
        else {
            cartItems[cartItem.name] = 1;
        }
    }
    console.log("Cart:", cartItems);
}
function driver() {
    const user1 = createUser("Gian", 26);
    const item1 = createItem("Apple", 1.25, "Granny Smith Apple");
    const item2 = createItem("Orange", 1.05, "Southwest Tangerine");
    const item3 = createItem("Banana", 0.75, "Peruvian Banana");
    addToCart(item1, user1);
    printCart(user1);
    cartTotal(user1);
    addToCart(item2, user1);
    addToCart(item2, user1);
    addToCart(item2, user1);
    printCart(user1);
    cartTotal(user1);
    addToCart(item3, user1);
    addToCart(item3, user1);
    addToCart(item3, user1);
    printCart(user1);
    cartTotal(user1);
    removeFromCart(item2, user1);
    printCart(user1);
    cartTotal(user1);
    removeQuantityFromCart(item3, user1, 2);
    printCart(user1);
    cartTotal(user1);
}
driver();
//# sourceMappingURL=index.js.map