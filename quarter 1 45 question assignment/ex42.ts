function makeGreat(magician: string[]): void {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = `the Great ${magician[i]}`;
    }
}

function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Initial list of magicians
const magician: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette"];

// Modify the list of magicians
makeGreat(magician);

// Show the modified list
showMagicians(magician);
