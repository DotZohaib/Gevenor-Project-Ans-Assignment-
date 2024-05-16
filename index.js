// let numbers  = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//     let ordinal: ;
//     if (number === 1) {
//         ordinal = "1st";
//     } else if (number === 2) {
//         ordinal = "2nd";
//     } else if (number === 3) {
//         ordinal = "3rd";
//     } else {
//         ordinal = `${number}th`;
//     }
//     console.log(ordinal);
// }
// Q:32
// let color = 'green';
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// } else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }
// let color  = 'yellow';
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// } else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }
// let color = 'red';
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// } else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// } else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }
// Q:20
// let car1: { make: string, model: string, year: number } = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
// };
// let car2: { make: string, model: string, year: number } = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021
// };
// let car3: { make: string, model: string, year: number } = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2023
// };
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);
// console.log("Car 3:", car3);
// Q:32
// function make_shirt(size: string, message: string): void {
//     console.log(`Shirt size: ${size}`);
//     console.log(`Message: ${message}`);
// }
// // Call the function
// make_shirt('Large', 'I love TypeScript');
// Q:33
// function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
//     console.log(`Shirt size: ${size}`);
//     console.log(`Message: ${message}`);
// }
// // Call the function with default values
// make_shirt(); // Large shirt with default message
// // Call the function with medium size and default message
// make_shirt('Medium');
// // Call the function with a custom size and message
// make_shirt('Small', 'This is a custom message');
// Q:34
// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}`);
// }
// // Call the function for three different cities
// describe_city('Karachi', 'Pakistan');
// describe_city('Paris', 'France');
// describe_city('Sydney'); // Sydney is in the default country (Unknown)
// Q:35
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Call the function with at least three city-country pairs
// const location1 = city_country('Lahore', 'Pakistan');
// const location2 = city_country('New York', 'USA');
// const location3 = city_country('Tokyo', 'Japan');
// // Print the values returned
// console.log(location1);
// console.log(location2);
// console.log(location3);
// Q:36
// function make_album(artist: string, title: string, tracks?: number): object {
//     const album = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }
// // Make three dictionaries representing different albums
// const album1 = make_album('Artist1', 'Album One');
// const album2 = make_album('Artist2', 'Album Two');
// const album3 = make_album('Artist3', 'Album Three');
// // Print each return value to show that Objects are storing the album information correctly
// console.log(album1);
// console.log(album2);
// console.log(album3);
// // Make a new function call with the number of tracks
// const albumWithTracks = make_album('Artist4', 'Album Four', 12);
// console.log(albumWithTracks);
// Q:38
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// // Array of magician names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];
// // Call the function to show magicians
// show_magicians(magicianNames);
// Q:39
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     // Modify the array by adding "the Great" to each magician's name
//     const greatMagicians: string[] = magicians.map(magician => magician + ' the Great');
//     return greatMagicians;
// }
// // Array of magician names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];
// // Call the function to make magicians great
// const greatMagicians = make_great(magicianNames);
// // Call the function to show magicians
// show_magicians(greatMagicians);
// Q:39
// function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians: string[]): string[] {
//     // Modify the array by adding "the Great" to each magician's name
//     const greatMagicians: string[] = magicians.map(magician => magician + ' the Great');
//     return greatMagicians;
// }
// // Array of magician names
// const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn', 'Teller'];
// // Call the function to make magicians great and store the result in a new array
// const greatMagiciansCopy = make_great([...magicianNames]);
// // Call the function to show the original magicians
// show_magicians(magicianNames);
// // Call the function to show the magicians with "the Great" added
// show_magicians(greatMagiciansCopy);
// Q:40
// function makeSandwich(...toppings: string[]): void {
//     console.log("Making a sandwich with the following toppings:");
//     for (const topping of toppings) {
//         console.log(`- ${topping}`);
//     }
//     console.log("Sandwich is ready!\n");
// }
// // Call the function three times with different numbers of arguments
// makeSandwich('Ham', 'Cheese', 'Lettuce');
// makeSandwich('Turkey', 'Swiss');
// makeSandwich('Peanut Butter', 'Jelly');
// Q:41
// interface Car {
//     manufacturer: string;
//     model: string;
//     color?: string;
//     year?: number;
//     features?: string[];
// }
// function createCar(manufacturer: string, model: string, options: Car = {}): Car {
//     const car: Car = {
//         manufacturer,
//         model,
//         ...options
//     };
//     return car;
// }
// // Call the function with the required information and additional options
// const myCar = createCar('Toyota', 'Camry', { color: 'Blue', year: 2022, features: ['GPS', 'Sunroof'] });
// // Print the object to verify the information
// console.log(myCar);
// Q:42
