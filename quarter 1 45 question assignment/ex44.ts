function orderSandwich(...items: string[]): void {
    console.log("Order Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        items.forEach(item => {
            console.log(`- ${item}`);
        });
    }
    console.log("\n");
}

// Call the function with different number of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss", "Mayo");
orderSandwich("Roast Beef", "Onion", "Mustard", "Pickles");