let guestLists: string[] = ["John Smith", "Sarah Johnson", "Michael Davis", "Emily Rodriguez", "David Lee"];

// Function to handle replacement guest
function inviteNewGuest(existingGuests: string[], replacementGuest: string): string[] {
    const indexOfAbsentGuest = Math.floor(Math.random() * existingGuests.length);
    const absentGuest = existingGuests[indexOfAbsentGuest];
    existingGuests.splice(indexOfAbsentGuest, 1, replacementGuest);
    return [absentGuest, ...existingGuests];
}

// Replace a guest who can't make it with a new guest
const newGuestList = inviteNewGuest(guestLists, "Jessica Martinez");

// Print the name of the guest who can't make it
console.log(`Guest who can't make it: ${newGuestList[0]}`);

// Print the updated guest list
console.log("Updated Guest List:", newGuestList);