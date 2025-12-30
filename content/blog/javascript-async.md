---
title: "Asynchronous JavaScript: Promises và Async/Await"
date: 2025-12-22T10:00:00+07:00
tags: ["JavaScript", "Async", "Promises"]
---

## Lập trình bất đồng bộ là gì?

Lập trình bất đồng bộ cho phép code tiếp tục thực thi trong khi chờ đợi các thao tác mất thời gian (API calls, file I/O...).

## Callback (Cách cũ)

```javascript
function getData(callback) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

getData((data) => {
    console.log(data);
});
```

### Vấn đề: Callback Hell

```javascript
getData1((data1) => {
    getData2(data1, (data2) => {
        getData3(data2, (data3) => {
            // Quá nhiều nested callbacks
        });
    });
});
```

## Promises

```javascript
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data loaded');
        }, 1000);
    });
}

getData()
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Promise Chaining

```javascript
getData1()
    .then(data1 => getData2(data1))
    .then(data2 => getData3(data2))
    .then(data3 => console.log(data3))
    .catch(error => console.error(error));
```

## Async/Await (Khuyên dùng)

```javascript
async function fetchData() {
    try {
        const data1 = await getData1();
        const data2 = await getData2(data1);
        const data3 = await getData3(data2);
        console.log(data3);
    } catch (error) {
        console.error(error);
    }
}
```

## Promise.all()

```javascript
async function getAllData() {
    const [users, posts, comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ]);
    
    return { users, posts, comments };
}
```

## Kết luận

Async/await làm code bất đồng bộ dễ đọc và dễ bảo trì hơn nhiều so với callbacks.
