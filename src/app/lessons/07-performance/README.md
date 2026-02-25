# Bài 7: Performance (Phần IV.5)

## Mục tiêu
- OnPush change detection.
- track trong @for (track item.id).

---

## Thực hành Bài 7 — File và cách làm

### 1. OnPush + track (IV.5)
- **File:** Component có list (ví dụ `data-list` từ Bài 4): `src/app/lessons/04-services-http/data-list/data-list.component.ts`, `.html`.
- **Cách làm:**
  1. Mở `data-list.component.ts`. Trong `@Component`, thêm:
     ```ts
     import { ChangeDetectionStrategy } from '@angular/core';
     changeDetection: ChangeDetectionStrategy.OnPush
     ```
  2. Trong template, đảm bảo `@for` có `track`: ví dụ `@for (item of items(); track item.id) { ... }` (điều chỉnh theo biến list thực tế).
  3. Chạy app, mở trang data list. So sánh (có thể dùng DevTools Performance) khi scroll hoặc khi filter — OnPush + track giúp Angular re-render ít hơn.

---

Sau khi xong Bài 7, chuyển sang **Bài 8:** `src/app/lessons/08-testing-ssr/README.md`.
