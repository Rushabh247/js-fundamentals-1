// Function to calculate estimated delivery time based on package type
function calculateDeliveryTime(packageType) {
    var deliveryTime;

    // Determine estimated delivery time based on package type
    switch(packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            console.log("Invalid package type");
            return;
    }

    // Print estimated delivery time
    console.log("Estimated delivery time for " + packageType + " package: " + deliveryTime);
}

// Example usage:

calculateDeliveryTime("standard");


calculateDeliveryTime("express");


calculateDeliveryTime("overnight");
