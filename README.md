# linqjs

Some LINQ functionality for JavaScript Array

Supplies the following functions for arrays:

* ```first (predicate)``` Returns the first element of a sequence based on a predicate, or a default value if the sequence contains no elements.
* ```orderBy (key)``` Sorts the elements of a sequence in ascending order according to a key.
* ```orderByDescending (key)``` Sorts the elements of a sequence in descending order.
* ```skip``` Bypasses a specified number of elements in a sequence and then returns the remaining elements.
* ```take``` Returns a specified number of contiguous elements from the start of a sequence.
* ```where (predicate)``` Filters a sequence of values based on a predicate.

Say you have the following array:

```js
let people = [
  { name: 'Barack Obama', age: 55, isAlive: true, gender: 'M' },
  { name: 'Genghis Khan', age: 65, isAlive: false, gender: 'M' },
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' },
  { name: 'Ada Lovelace', age: 36, isAlive: false, gender: 'F' }
];
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

## orderBy

```js
let alphabetically = people.orderBy('name');
```

Will produce:

```js
[
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
  .skip(1)
  .take(2)
  .where(x => x.age < 40);
```

Will produce:

```js
[
  { name: 'Britney Spears', age: 35, isAlive: true, gender: 'F' }
]
```