// Sample guest list
let guestList1: string[] = ["John Smith", "Sarah Johnson", "Michael Davis", "Emily Rodriguez", "David Lee"];

// Function to handle replacement guest
function inviteNewGuests(existingGuests: string[], replacementGuest: string): string[] {
    const indexOfAbsentGuest = Math.floor(Math.random() * existingGuests.length);
    existingGuests.splice(indexOfAbsentGuest, 1, replacementGuest);
    return existingGuests;
}

// Replace a guest who can't make it with a new guest
const newGuestList1 = inviteNewGuests(guestList, "Jessica Martinez");

console.log("Updated Guest List:", newGuestList1);