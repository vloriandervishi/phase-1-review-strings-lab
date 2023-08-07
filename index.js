// Write your code in this file!
/**
 * Represents the current user.
 * @type {string}
 */
/**
 * Updates the welcome message to include the current user's name.
 * @param {string} currentUser - The name of the current user.
 * @param {string} welcomeMessage - The initial welcome message.
 * @returns The updated welcome message with the current user's name.
 */
const currentUser = "Grace Hopper";

let welcomeMessage = "Welcome to Flatbook, ";

welcomeMessage = welcomeMessage + currentUser + "!";

/**
 * Creates an excited welcome message by concatenating the "WELCOME TO FLATBOOK, " string
 * with the uppercase value of the currentUser variable.
 * @param {string} currentUser - the current user's name
 * @returns {string} - the excited welcome message
 */
let excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";
excitedWelcomeMessage = excitedWelcomeMessage + currentUser.toUpperCase() + "!";

/**
 * Updates the `shortGreeting` variable by appending the first character of the `currentUser`
 * string to it.
 * @param {string} shortGreeting - The initial greeting string.
 * @param {string} currentUser - The current user's name.
 * @returns The updated `shortGreeting` string.
 */
let shortGreeting = "Welcome, ";
shortGreeting = `${shortGreeting} ${currentUser.charAt(0)} !`;
