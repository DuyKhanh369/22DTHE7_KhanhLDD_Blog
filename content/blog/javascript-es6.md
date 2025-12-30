---
title: "ES6+ Features trong JavaScript"
date: 2025-12-24T10:00:00+07:00
tags: ["JavaScript", "ES6"]
---

## ES6 (ECMAScript 2015)

ES6 mang đến nhiều tính năng mới giúp JavaScript hiện đại và mạnh mẽ hơn.

## Let và Const

```javascript
let variable = "Có thể thay đổi";
const constant = "Không thay đổi";
```

## Template Literals

```javascript
const name = "Khanh";
const greeting = `Xin chào, ${name}!`;
```

## Destructuring

```javascript
// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { name, age } = { name: "Khanh", age: 25 };
```

## Spread Operator

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };
```

## Classes

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
```

## Promises

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));
```

## Async/Await

```javascript
async function fetchData() {
    try {
        const response = await fetch('api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

## Kết luận

ES6+ làm JavaScript trở nên hiện đại và dễ sử dụng hơn rất nhiều.
