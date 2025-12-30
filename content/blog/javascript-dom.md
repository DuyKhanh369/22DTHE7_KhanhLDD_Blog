---
title: "DOM Manipulation với JavaScript"
date: 2025-12-23T10:00:00+07:00
tags: ["JavaScript", "DOM"]
---

## DOM là gì?

DOM (Document Object Model) là giao diện lập trình cho các tài liệu HTML và XML, cho phép JavaScript thao tác với cấu trúc trang web.

## Selecting Elements

```javascript
// By ID
const element = document.getElementById('myId');

// By Class
const elements = document.getElementsByClassName('myClass');

// Query Selector (khuyên dùng)
const elem = document.querySelector('.myClass');
const elems = document.querySelectorAll('.myClass');
```

## Thay đổi nội dung

```javascript
// Text content
element.textContent = "New text";

// HTML content
element.innerHTML = "<strong>Bold text</strong>";
```

## Thay đổi style

```javascript
element.style.color = "red";
element.style.fontSize = "20px";

// Hoặc thêm class
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
```

## Tạo và thêm elements

```javascript
const newDiv = document.createElement('div');
newDiv.textContent = "Hello";
document.body.appendChild(newDiv);
```

## Event Listeners

```javascript
const button = document.querySelector('button');

button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Arrow function
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

## Event Delegation

```javascript
document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('List item clicked:', e.target.textContent);
    }
});
```

## Kết luận

DOM manipulation là kỹ năng cơ bản để tạo các trang web tương tác.
