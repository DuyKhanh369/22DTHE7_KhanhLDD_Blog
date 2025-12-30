# Hướng dẫn thêm ảnh vào blog

## Cách 1: Dùng ảnh từ Unsplash (Miễn phí)
```markdown
---
title: "Tiêu đề bài viết"
image: "https://images.unsplash.com/photo-xxxxx?w=800&h=400&fit=crop"
---
```

## Cách 2: Upload ảnh vào thư mục static/images/posts
1. Đặt ảnh vào: `static/images/posts/ten-anh.jpg`
2. Thêm vào frontmatter:
```markdown
---
title: "Tiêu đề bài viết"
image: "/images/posts/ten-anh.jpg"
---
```

## Kích thước ảnh khuyên dùng
- Tỷ lệ: 2:1 (ví dụ: 800x400px, 1200x600px)
- Format: JPG hoặc PNG
- Dung lượng: < 500KB để load nhanh

## Nguồn ảnh miễn phí
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com
