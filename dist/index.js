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
}
function removeFromCart(item, user) {
    for (let cartItem of user.cart) {
        if (cartItem == item) {
            let idx = user.cart.indexOf(item);
            user.cart.splice(idx, 1);
        }
    }
}
function removeQuantityFromCart(item, user, qtyRemove) {
    for (let i = 0; i < qtyRemove; i++) {
        let idx = user.cart.indexOf(item);
        user.cart.splice(idx, 1);
    }
}
function cartTotal(user) {
    let totalCart = 0;
    for (let item of user.cart) {
        totalCart += item.price;
    }
    return totalCart;
}
function printCart(user) {
    let cartItems = "";
    for (let cartItem of user.cart) {
        cartItems += cartItem.name + ", ";
    }
    console.log(cartItems);
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