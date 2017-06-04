"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var two_1 = require("./two");
var _ = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/timer");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/take");
require("reflect-metadata");
new two_1.two();
Observable_1.Observable.interval(2000).take(10)
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); }, function () { return console.log('complete'); });
//es6 way of adding decorators
function addAge(age) {
    return function (classHere) {
        var types = Reflect.getMetadata('design:paramtypes', classHere);
        console.log(types);
        return (function () {
            function class_1() {
                this.name = new classHere().name;
                this.age = age;
            }
            return class_1;
        }());
    };
}
var Person = (function () {
    function Person(name, id) {
        this.name = 'mad';
    }
    return Person;
}());
Person = __decorate([
    addAge(32),
    __metadata("design:paramtypes", [String, Number])
], Person);
console.log(new Person('madhuri', 5));
//es5 way of adding decorators
/*const person = {name: 'mad'};

function addAge(age){
    return function(person){
        return {
            age,
            name: person.name
        }
    }
}

console.log(addAge(40)(person));
console.log(person);*/
// class mad{
//     name = "mad";
//     constructor(){
//     }
//     func1(){
//         console.log('hello');
//     }
// }
// let mad1 = new mad();
// mad1.func1();
var Child = (function () {
    function Child() {
    }
    Child.prototype.getStudents = function () {
        return [{ name: "hell" }];
    };
    return Child;
}());
console.log(_.isArray(new Child().getStudents()));
