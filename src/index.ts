import { v4 as uuidv4 } from "uuid"

type Item = {
    id: string,
    name: string,
    price: number,
    description: string
}

type User = {
    id: string,
    name: string,
    age: number,
    cart: Item[]
}

function createUser(name: string, age: number): User {
    let userId = uuidv4()
    return {
        id: userId,
        name, 
        age, 
        cart: []
    }
}

function createItem(name: string, price: number, description: string): Item {
    let itemId = uuidv4()
    return {
        id: itemId, 
        name, 
        price, 
        description
    }
}

function addToCart(item: Item, user: User): void {
    user.cart.push(item)
    console.log(`Added 1 ${item.name} to Cart.`)
}

function removeFromCart(item: Item, user: User): void {
    let countItems: number = 0
    user.cart.forEach(e => e == item ? countItems++ : '')
    for (let i = 0; i < countItems; i++) {
        let idx = user.cart.indexOf(item)
        user.cart.splice(idx, 1)
    }
    console.log(`Removed all (${countItems}) ${item.name} from Cart.`)
}

function removeQuantityFromCart(item: Item, user: User, qtyRemove: number): void {
    for (let i = 0; i < qtyRemove; i++) {
        let idx = user.cart.indexOf(item)
        user.cart.splice(idx, 1)
    }
    console.log(`Removed ${qtyRemove} ${item.name} from Cart.`)
}

const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

function cartTotal(user: User): number {
    let totalCart: number = 0
    for (let item of user.cart) {
        totalCart += item.price
    }
    // Optional: Just to know if totalCart is correct
    console.log(`Cart Total: ${formatterUSD.format(totalCart)}`)
    return totalCart
}

interface idxSign {
    [key: string]: number
}

function printCart(user: User): void {
    let cartItems: idxSign = {}
    for (let cartItem of user.cart) {
        if (cartItem.name in cartItems) {
            cartItems[cartItem.name] += 1
        } else {
            cartItems[cartItem.name] = 1
        }
    }

    console.log("Cart:", cartItems)
}

function driver(): void {
    const user1 = createUser("Gian", 26)
    const item1 = createItem("Apple", 1.25, "Granny Smith Apple")
    const item2 = createItem("Orange", 1.05, "Southwest Tangerine")
    const item3 = createItem("Banana", 0.75, "Peruvian Banana")
    addToCart(item1, user1)
    printCart(user1)
    cartTotal(user1)
    addToCart(item2, user1)
    addToCart(item2, user1)
    addToCart(item2, user1)
    printCart(user1)
    cartTotal(user1)
    addToCart(item3, user1)
    addToCart(item3, user1)
    addToCart(item3, user1)
    printCart(user1)
    cartTotal(user1)
    removeFromCart(item2, user1)
    printCart(user1)
    cartTotal(user1)
    removeQuantityFromCart(item3, user1, 2)
    printCart(user1)
    cartTotal(user1)
}

driver()