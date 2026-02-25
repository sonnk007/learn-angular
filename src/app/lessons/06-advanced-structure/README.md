# Bài 6: Lazy load, Cấu trúc thư mục, Standalone (Phần IV.2, IV.3, IV.4)

## Mục tiêu
- Lazy loading route: `loadComponent: () => import(...).then(m => m.X)`.
- Cấu trúc: core/, shared/, features/.
- Standalone: component tự khai báo `imports`.

---

## Thực hành Bài 6 — File và cách làm

### 1. Lazy load route About (IV.2)
- **File:** `src/app/app.routes.ts`
- **Cách làm:**
  1. Đổi route `about` từ `component: AboutComponent` sang:
     ```ts
     { path: 'about', loadComponent: () => import('./lessons/03-pipes-routing/about/about.component').then(m => m.AboutComponent) }
     ```
  2. Xóa import `AboutComponent` ở đầu file (nếu có).
  3. Chạy app, mở /about. F12 → Network: lần đầu vào /about sẽ thấy thêm request file .js (bundle của About).

### 2. Cấu trúc thư mục (IV.3)
- **File:** Tạo thư mục (không bắt buộc đổi hết project).
- **Cách làm:** Tạo thư mục `src/app/core/` (services singleton), `src/app/shared/` (pipes, components dùng chung), `src/app/features/` (từng feature). Có thể di chuyển `counter.service.ts` vào `core/`, pipe `uppercase-first` vào `shared/`, và các trang Home/About/Contact vào `features/home`, `features/about`, `features/contact` — sau đó cập nhật đường dẫn import trong `app.routes.ts`.

### 3. Standalone (IV.4)
- Project đã dùng standalone. Kiểm tra: mỗi component có `standalone: true` và mảng `imports` trong `@Component`. Không cần NgModule.

---

Sau khi xong Bài 6, chuyển sang **Bài 7:** `src/app/lessons/07-performance/README.md`.
