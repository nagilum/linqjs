# linqjs

Some LINQ functionality for JavaScript Array

Supplies the following functions for arrays:

* ```all (predicate)``` Determines whether all elements of a sequence satisfy a condition.
* ```any (predicate)``` Determines whether any element of a sequence satisfies a condition.
* ```distinct ()``` Returns distinct elements from a sequence.
* ```first (predicate)``` Returns the first element of a sequence based on a predicate, or a default value if the sequence contains no elements.
* ```orderBy (key)``` Sorts the elements of a sequence in ascending order according to a key.
* ```orderByDescending (key)``` Sorts the elements of a sequence in descending order.
* ```skip (number)``` Bypasses a specified number of elements in a sequence and then returns the remaining elements.
* ```take (number)``` Returns a specified number of contiguous elements from the start of a sequence.
* ```where (predicate)``` Filters a sequence of values based on a predicate.

Say you have the following array:

```js
let people = [
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
];
```

## all

```js
let allIsAlive = people.all(x => x.isAlive);
```

Will produce:

```js
false
```

## any

```js
let females = people.any(x => x.gender === 'F');
```

Will produce:

```js
true
```

## distinct

```js
let distinctList = people.distinct();
```

Will produce:

```js
[
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
]
```

## first

```js
let khan = people.first(x => x.name.endsWith('Khan'));
```

Will produce:

```js
{ name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' }
```

---

```js
let obama = people.first();
```

Will produce:

```js
{ name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' }
```

---

```js
let nonExisting = people.first(x => x.age === 100);
```

Will produce:

```js
null
```

## orderBy

```js
let alphabetically = people.orderBy('name');
```

Will produce:

```js
[
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' }
]
```

## orderByDescending

```js
let unalphabetically = people.orderByDescending('name');
```

Will produce:

```js
[
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
]
```

## skip

```js
let skipped = people.skip(2);
```

Will produce:

```js
[
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
]
```

## take

```js
let taken = people.take(2);
```

Will produce:

```js
[
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' }
]
```

## where

```js
let wheres = people.where(x => x.age > 50);
```

Will produce:

```js
[
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' }
]
```

## chains

```js
let names = people
  .orderBy('name')
  .skip(2)
  .take(2)
  .where(x => x.age < 40);
```

Will produce:

```js
[
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' }
]
```

---

```js
let otherPerson = people
  .where(x => !x.isAlive &&
              x.gender === 'M')
  .first();
```

Will produce:

```js
{ name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' }
```