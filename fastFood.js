

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)

    },
    getAllOrders: function() {
        return this.orders
    }
}

const chickenComboMeal1 = {
    name: "chicken combo meal",
    sandwichType: "chicken",
    fries: "true",
    drinkSize: "small"
}

const chickenComboMeal2 = {
    name: "grilled chicken combo",
    sandwichType: "grilled chicken",
    fries: "false",
    drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(chickenComboMeal1)
restaurant.placeOrder(chickenComboMeal2)
console.log(restaurant.orders)
const allOrders = restaurant.getAllOrders();
console.table(allOrders);



// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()