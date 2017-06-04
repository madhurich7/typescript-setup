import {two} from './two';
import {Student} from './network';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'reflect-metadata';
new two()

Observable.interval(2000).take(10)
		.subscribe(x => console.log(x),
			err => console.log(err),
			() => console.log('complete'));

//es6 way of adding decorators


function addAge(age){
	return function(classHere){
		const types = Reflect.getMetadata('design:paramtypes', classHere)
		console.log(types);
		return class{
			name = new classHere().name;
			age = age;
		}
	}
}

@addAge(32)
class Person {
	name = 'mad';
	constructor(name: string, id:number){

	}
}


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

class Child implements Student{
    getStudents(){
        return [{name: "hell"}];
    }
}

console.log(_.isArray(new Child().getStudents()));