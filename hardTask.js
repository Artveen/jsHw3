// Load the file system library
const fs = require('fs');

// Function declaration for reading a JSON file
function readJsonFile(number, callback) {
    const filename = 'unique_users.json'; // Визначте ім'я файлу тут
    fs.readFile(filename, 'utf8', (error, data) => {
        if (error) {
            console.error("Error reading file:", error);
            return;
        }

        try {
            const jsonObject = JSON.parse(data);
            callback(null, jsonObject, number);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
}

// Function declaration for finding a user by number
function findUserByNumber(number, users) {
    return users.find((user) => user.number === number);
}

// Function declaration for printing information about a user
function printUserInfo(user) {
    console.log("User Information:");
    console.log(user);
    console.log("Last hobby:", user.hobbies[user.hobbies.length - 1]);
    console.log("Address:", user.address.city, user.address.street);
}

// Read the unique_users.json file and find the user with number '0069'
readJsonFile('0069', (error, users, number) => {
    if (error) {
        console.error("Error reading JSON file:", error);
        return;
    }

    const user = findUserByNumber(number, users);
    if (user) {
        printUserInfo(user);
    } else {
        console.log("User with such number not found.");
    }
});

