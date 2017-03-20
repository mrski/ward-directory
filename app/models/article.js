/**
 * Module dependencies.
 */
var env = process.env.NODE_ENV || 'development';
var config = require('../../config/config')[env];

/**
 * Article Schema
 */

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
};
