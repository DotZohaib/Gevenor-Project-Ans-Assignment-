// var __assign = (this && this.__assign) || function () {
//     __assign = Object.assign || function(t) {
//         for (var s, i = 1, n = arguments.length; i < n; i++) {
//             s = arguments[i];
//             for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
//                 t[p] = s[p];
//         }
//         return t;
//     };
//     return __assign.apply(this, arguments);
// };
// var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
//     if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
//         if (ar || !(i in from)) {
//             if (!ar) ar = Array.prototype.slice.call(from, 0, i);
//             ar[i] = from[i];
//         }
//     }
//     return to.concat(ar || Array.prototype.slice.call(from));
// };
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
//     var number = numbers_1[_i];
//     var ordinal = void 0;
//     if (number === 1) {
//         ordinal = "1st";
//     }
//     else if (number === 2) {
//         ordinal = "2nd";
//     }
//     else if (number === 3) {
//         ordinal = "3rd";
//     }
//     else {
//         ordinal = "".concat(number, "th");
//     }
//     console.log(ordinal);
// }


// // Q: 32;


// var color = 'green';
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// }
// else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// }
// else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }
// color = 'yellow'; 
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// }
// else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// }
// else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }
// color = 'red'; 
// if (color === 'green') {
//     console.log("Player earned 5 points.");
// }
// else if (color === 'yellow') {
//     console.log("Player earned 10 points.");
// }
// else if (color === 'red') {
//     console.log("Player earned 15 points.");
// }


// // Q: 20;


// var car1 = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
// };
// var car2 = {
//     make: "Honda",
//     model: "Civic",
//     year: 2021
// };
// var car3 = {
//     make: "Ford",
//     model: "Mustang",
//     year: 2023
// };
// console.log("Car 1:", car1);
// console.log("Car 2:", car2);
// console.log("Car 3:", car3);


// // Q: 32;


// function make_shirt(size, message) {
//     console.log("Shirt size: ".concat(size));
//     console.log("Message: ".concat(message));
// }
// make_shirt('Large', 'I love ');


// // Q: 33;


// function make_shirt(size, message) {
//     if (size === void 0) { size = 'Large'; }
//     if (message === void 0) { message = 'I love '; }
//     console.log("Shirt size: ".concat(size));
//     console.log("Message: ".concat(message));
// }
// make_shirt(); 
// make_shirt('Medium');
// make_shirt('Small', 'This is a custom message');


// // Q: 34;


// function describe_city(city, country) {
//     if (country === void 0) { country = 'Unknown'; }
//     console.log("".concat(city, " is in ").concat(country));
// }
// describe_city('Karachi', 'Pakistan');
// describe_city('Paris', 'France');
// describe_city('Sydney');


// // Q: 35;


// function city_country(city, country) {
//     return "".concat(city, ", ").concat(country);
// }

// var location1 = city_country('Lahore', 'Pakistan');
// var location2 = city_country('New York', 'USA');
// var location3 = city_country('Tokyo', 'Japan');


// console.log(location1);
// console.log(location2);
// console.log(location3);


// // Q: 36;


// function make_album(artist, title, tracks) {
//     var album = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album['tracks'] = tracks;
//     }
//     return album;
// }
// var album1 = make_album('Artist1', 'Album One');
// var album2 = make_album('Artist2', 'Album Two');
// var album3 = make_album('Artist3', 'Album Three');


// console.log(album1);
// console.log(album2);
// console.log(album3);

// var albumWithTracks = make_album('Artist4', 'Album Four', 12);
// console.log(albumWithTracks);


// // Q: 38;


// function show_magicians(magicians) {
//     for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
//         var magician = magicians_1[_i];
//         console.log(magician);
//     }
// }
// var magicianNames = ['Zohaib', 'Anonymous', 'principle', 'berlin', 'profecer'];
// show_magicians(magicianNames);



// // Q: 39;


// function show_magicians(magicians) {
//     for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
//         var magician = magicians_2[_i];
//         console.log(magician);
//     }
// }
// function make_great(magicians) {
//     var greatMagicians = magicians.map(function (magician) { return magician + ' the Great'; });
//     return greatMagicians;
// }
// var magicianNames = ['Zohaib', 'Anonymous', 'principle', 'berlin', 'profecer'];
// var greatMagicians = make_great(magicianNames);
// show_magicians(greatMagicians);


// // Q: 39;


// function show_magicians(magicians) {
//     for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
//         var magician = magicians_3[_i];
//         console.log(magician);
//     }
// }
// function make_great(magicians) {
//     var greatMagicians = magicians.map(function (magician) { return magician + ' the Great'; });
//     return greatMagicians;
// }
// var magicianNamesCopy =['Zohaib', 'Anonymous', 'principle', 'berlin', 'profecer'];
// var greatMagiciansCopy = make_great(__spreadArray([], magicianNamesCopy, true));
// show_magicians(magicianNamesCopy);
// show_magicians(greatMagiciansCopy);


// // Q: 40;


// function makeSandwich() {
//     var toppings = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         toppings[_i] = arguments[_i];
//     }
//     console.log("Making a sandwich with the following toppings:");
//     for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
//         var topping = toppings_1[_a];
//         console.log("- ".concat(topping));
//     }
//     console.log("Sandwich is ready!\n");
// }
// makeSandwich('Ham', 'Cheese', 'Lettuce');
// makeSandwich('Turkey', 'Swiss');
// makeSandwich('Peanut Butter', 'Jelly');


// // Q: 41;



// function createCar(manufacturer, model, options) {
//     if (options === void 0) { options = {}; }
//     var car = __assign({ manufacturer: manufacturer, model: model }, options);
//     return car;
// }
// var myCar = createCar('Toyota', 'Camry', { color: 'Blue', year: 2022, features: ['GPS', 'Sunroof'] });

// console.log(myCar);
