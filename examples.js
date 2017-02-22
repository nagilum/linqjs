'use strict';

require('./linqjs');

let people = [
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
];

//
// original list
//

console.log('');
console.log(' === original list === ');
console.log(people);

//
// all
//

console.log('');
console.log(' === all: is alive === ');

let allIsAlive = people.all(x => x.isAlive);
console.log(allIsAlive);

//
// any
//

console.log('');
console.log(' === any: gender: "F" === ');

let females = people.any(x => x.gender === 'F');
console.log(females);

//
// distinct
//

console.log('');
console.log(' === distinct === ');

let distinctList = people.distinct();
console.log(distinctList);

//
// first
//

console.log('');
console.log(' === first: name endsWoth "Obama" === ');

// Should only produce the Obama object.
let obama = people.first(x => x.name.endsWith('Obama'));
console.log(obama);

//
// orderBy
//

console.log('');
console.log(' === orderBy: "name"  === ');

// Should give an alphabetically list.
let alphabetically = people.orderBy('name');
console.log(alphabetically);

//
// orderByDescending
//

console.log('');
console.log(' === orderByDescending: "name"  === ');

// Should give a reversed alphabetically list.
let unalphabetically = people.orderByDescending('name');
console.log(unalphabetically);

//
// select
//

console.log('');
console.log(' === select: first names  === ');

let firstNames = people.select({
  firstName: x => x.name.substr(0, x.name.indexOf(' ')),
  gender: x => x.gender === 'M' ? 'Male' : 'Female'
});

console.log(firstNames);

//
// skip
//

console.log('');
console.log(' === skip: 2 === ');

// Should give Britney and Ada.
let skipped = people.skip(2);
console.log(skipped);

//
// take
//

console.log('');
console.log(' === take: 2 === ');

// Should give Obama and Khan
let taken = people.take(2);
console.log(taken);

//
// where
//

console.log('');
console.log(' === where: age > 50 === ');

// Should give Obama and Khan
let wheres = people.where(x => x.age > 50);
console.log(wheres);

//
// chains
//

console.log('');
console.log(' === chains: order by "name", skip 1, take 2, age < 40 === ');

// Should give an array with Britney.
let names = people
  .orderBy('name')
  .skip(2)
  .take(2)
  .where(x => x.age < 40);

console.log(names);

console.log('');
console.log(' === chains: is not alive and male === ');

// Should produce Khan.
let otherPerson = people
  .where(x => !x.isAlive &&
              x.gender === 'M')
  .first();

console.log(otherPerson);