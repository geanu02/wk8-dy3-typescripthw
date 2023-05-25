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
        id: userId, name, age, cart: []
    }
}

