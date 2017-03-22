/**
 * Module dependencies.
 */
var env = process.env.NODE_ENV || 'development';
var config = require('../../config/config')[env];

/**
 * Directory Schema
 */

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
};
