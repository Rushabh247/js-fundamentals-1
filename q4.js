// Function to calculate total price based on viewer type
function calculateTotalPrice(viewerType, numberOfTickets) {
    var ticketPrice;

    // Determine ticket price based on viewer type
    switch(viewerType) {
        case "child":
            ticketPrice = 100;
            break;
        case "adult":
            ticketPrice = 150;
            break;
        case "senior":
            ticketPrice = 120;
            break;
        default:
            console.log("Invalid viewer type");
            return;
    }

    // Calculate total price
    var totalPrice = ticketPrice * numberOfTickets;

    // Print total price
    console.log("Total price to be paid: Rs. " + totalPrice);
}

// Example usage:
// Calculate total price for 3 adult tickets
calculateTotalPrice("adult", 3);

// Calculate total price for 2 child tickets
calculateTotalPrice("child", 2);

// Calculate total price for 1 senior ticket
calculateTotalPrice("senior", 1);
