---
title: "Lập trình Hướng đối tượng trong Java"
date: 2025-12-29T10:00:00+07:00
tags: ["Java", "OOP"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
---

## OOP là gì?

Lập trình hướng đối tượng (OOP - Object-Oriented Programming) là một mô hình lập trình dựa trên khái niệm "đối tượng".

## 4 Tính chất cơ bản của OOP

### 1. Tính đóng gói (Encapsulation)

Ẩn giấu thông tin và chỉ cho phép truy cập thông qua các phương thức công khai.

```java
public class Student {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
}
```

### 2. Tính kế thừa (Inheritance)

Cho phép class con kế thừa các thuộc tính và phương thức từ class cha.

### 3. Tính đa hình (Polymorphism)

Một hành động có thể được thực hiện theo nhiều cách khác nhau.

### 4. Tính trừu tượng (Abstraction)

Ẩn đi các chi tiết cài đặt, chỉ hiển thị các tính năng cần thiết.

## Kết luận

OOP giúp code dễ bảo trì, mở rộng và tái sử dụng.
