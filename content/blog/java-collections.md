---
title: "Collection Framework trong Java"
date: 2025-12-28T10:00:00+07:00
tags: ["Java", "Collections"]
image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
---

## Collection Framework là gì?

Collection Framework cung cấp các cấu trúc dữ liệu và thuật toán để lưu trữ và thao tác với nhóm đối tượng.

## Các interface chính

### List
- Danh sách có thứ tự, cho phép trùng lặp
- Ví dụ: ArrayList, LinkedList

```java
List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");
```

### Set
- Tập hợp không cho phép trùng lặp
- Ví dụ: HashSet, TreeSet

```java
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(1); // Không thêm được vì trùng
```

### Map
- Lưu trữ cặp key-value
- Ví dụ: HashMap, TreeMap

```java
Map<String, Integer> map = new HashMap<>();
map.put("Java", 1);
map.put("Python", 2);
```

## Kết luận

Collection Framework là công cụ quan trọng trong Java để quản lý dữ liệu hiệu quả.
