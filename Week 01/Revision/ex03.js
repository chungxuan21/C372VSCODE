const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

// a) Display Mochi's payment status (Mochi is at index 1 of the array)
console.log(`Mochi's payment status: ${payments[1].status}`);

// b) Use a loop to display the payment details for each pet
for (let i = 0; i < payments.length; i++) {
    const pet = payments[i];

    if (pet.status === "APPROVED") {
        console.log(`Pet-care service for ${pet.petName} confirmed`);
    } else if (pet.status === "PENDING") {
        console.log(`Payment for ${pet.petName} is being processed`);
    } else if (pet.status === "DECLINED") {
        console.log(`Payment for ${pet.petName} unsuccessful`);
    }
}
