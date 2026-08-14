// Product details
let name = "Laptop";
let basePrice = 60000;
let discountPercent = 10;
let taxRate = 18;
let stockStatus = "in_stock";


//Calculate discounted price
function calculateDiscountedPrice(price, discount) {
    return price - (price * discount / 100);
}

// Calculate tax amount
function calculateTax(price, taxRate) {
    return price * taxRate / 100;
}

//Calculate final price
function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let taxAmount = calculateTax(discountedPrice, taxRate);

    return discountedPrice + taxAmount;
}

//Check free shipping
function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

//Get stock message
function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else if (status === "out_of_stock") {
        return "Out of Stock";
    } else {
        return "Unknown Stock Status";
    }
}

// Calling the functions
let discountedPrice = calculateDiscountedPrice(basePrice,discountPercent);

let taxAmount = calculateTax(discountedPrice, taxRate);

let finalPrice = calculateFinalPrice(basePrice, discountPercent,taxRate);

let shipping = isFreeShipping(finalPrice);

let stockMessage = getStockMessage(stockStatus);

//Console Output
console.log("PRODUCT PRICE SUMMARY");
console.log("Product Name:", name);
console.log("Base Price: Rs." + basePrice);
console.log("Discount:", discountPercent + "%");
console.log("Discounted Price: Rs." + discountedPrice);
console.log("Tax:", taxRate + "%");
console.log("Tax Amount: Rs." + taxAmount);
console.log("Final Price: Rs." + finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);