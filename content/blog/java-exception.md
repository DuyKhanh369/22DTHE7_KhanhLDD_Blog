---
title: "Exception Handling trong Java"
date: 2025-12-27T10:00:00+07:00
tags: ["Java", "Exception"]
image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop"
---

## Exception là gì?

Exception là một sự kiện xảy ra trong quá trình thực thi chương trình, làm gián đoạn luồng thực thi bình thường.

## Cách xử lý Exception

### Try-Catch

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Không thể chia cho 0!");
} finally {
    System.out.println("Luôn được thực thi");
}
```

## Các loại Exception

### Checked Exception
- Phải được xử lý tại compile time
- Ví dụ: IOException, SQLException

### Unchecked Exception
- Không bắt buộc xử lý
- Ví dụ: NullPointerException, ArrayIndexOutOfBoundsException

## Throw và Throws

```java
public void validateAge(int age) throws InvalidAgeException {
    if (age < 18) {
        throw new InvalidAgeException("Tuổi phải >= 18");
    }
}
```

## Kết luận

Xử lý exception đúng cách giúp chương trình ổn định và dễ debug hơn.
