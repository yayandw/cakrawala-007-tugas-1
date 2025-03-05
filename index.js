console.log("Hellow Cakrawala!");

console.log("## Write a code to find area of rectangle");
function getRectangle(length, width) {
    return length * width;
}

let length = 5;
let width = 3;
console.log(getRectangle(length, width));
console.log("\n##\n\n");
////////////////////////////////////////////////////////////

console.log("## Write a code to find diameter, circumference and area of a circle");
const pi = 3.14159;

function getDiameter(radius) {
    return 2 * radius;
}

function getCircumference(radius) {
    return 2 * pi * radius;
}

function getArea(radius) {
    return pi * radius ** 2;
}

let radius = 5;
console.log("diameter = " + getDiameter(radius) + ", circumference = " + getCircumference(radius) + ", area = " + getArea(radius));
console.log("\n##\n\n");
////////////////////////////////////////////////////////////

console.log("## Write a code to find angles of triangle if two angles are given");

const sumTriangle = 180;

function getAngle(a, b) {
    return sumTriangle - (a + b);
}

let a = 80;
let b = 65;
console.log(getAngle(a, b));
console.log("\n##\n\n");
////////////////////////////////////////////////////////////

console.log("## Write a code to get difference between dates in days");
function getDifferenceInDays(date1, date2) {
    return Math.abs(Math.round((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
}

let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
console.log(getDifferenceInDays(date1, date2));
console.log("\n##\n\n");
////////////////////////////////////////////////////////////

console.log("## Write a code to print your name initial in uppercase");
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}

let fullName = "Yayan D Wicaksono";
console.log(getInitials(fullName));
console.log("\n##\n\n");