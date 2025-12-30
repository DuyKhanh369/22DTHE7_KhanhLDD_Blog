---
title: "Stream API trong Java 8"
date: 2025-12-26T10:00:00+07:00
tags: ["Java", "Java 8", "Stream"]
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
---

## Stream API là gì?

Stream API được giới thiệu trong Java 8, cho phép xử lý dữ liệu theo phong cách functional programming.

## Ưu điểm

- Code ngắn gọn, dễ đọc hơn
- Hỗ trợ xử lý song song
- Lazy evaluation

## Các thao tác cơ bản

### Filter

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
```

### Map

```java
List<String> names = Arrays.asList("Java", "Python", "JavaScript");
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
```

### Reduce

```java
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
```

## Parallel Stream

```java
List<Integer> result = numbers.parallelStream()
    .filter(n -> n > 2)
    .collect(Collectors.toList());
```

## Kết luận

Stream API giúp xử lý collection hiệu quả và code dễ bảo trì hơn.
