# Bài 1: Component & Template cơ bản (Phần I + II)

## Mục tiêu
- TypeScript: Types, Interfaces, Classes; Angular CLI; cấu trúc project.
- Hiểu app chạy thế nào; kiến trúc Components/Services.
- Component = Class + Template + Style; Template (interpolation, binding, control flow); Signals.

---

## Thực hành Bài 1 — File và cách làm

Tất cả thực hành dưới đây dùng **file cụ thể** trong project.

### 1. Interface Product (TypeScript — I.1)
- **File:** `src/app/practice/models/product.model.ts` (đã tạo sẵn), `src/app/app.ts`, `src/app/app.html`.
- **Cách làm:**
  1. Mở `src/app/app.ts`. Thêm import: `import { Product } from './practice/models/product.model';`
  2. Trong class `App`, thêm: `protected readonly product: Product = { id: 1, name: 'Sản phẩm mẫu', price: 100 };`
  3. Trong `src/app/app.html`, dưới `<p>Congratulations!...</p>` thêm: `<p>Sản phẩm: {{ product.name }}, giá: {{ product.price }}</p>`
  4. Lưu và mở http://localhost:4200.

### 2. Angular CLI (I.2)
- **File:** Terminal; component tạo ra: `src/app/practice/cli-demo/` (có thể xóa sau).
- **Cách làm:**
  1. Terminal tại thư mục gốc project. Chạy `npm start`, mở http://localhost:4200.
  2. Chạy `ng g c practice/cli-demo --standalone`. Xem file: `src/app/practice/cli-demo/*.ts|html|scss`.

### 3. Luồng app — đọc file (I.3)
- **File (mở theo thứ tự):** `src/index.html` → `src/main.ts` → `src/app/app.config.ts` → `src/app/app.ts` → `src/app/app.html`
- **Cách làm:** Chỉ đọc từng file để nắm luồng từ `<app-root>` đến nội dung hiển thị.

### 4. DevTools — cây DOM (II.1)
- **File:** Trình duyệt.
- **Cách làm:** F12 → tab Elements. Tìm `<app-root>` — toàn bộ nội dung nằm trong đó.

### 5. Đổi title (II.3)
- **File:** `src/app/app.ts`
- **Cách làm:** Tìm `signal('hello-world')`, đổi thành `signal('Tên của tôi')`. Lưu — hot reload.

### 6. Interpolation trong template (II.4)
- **File:** `src/app/app.html`
- **Cách làm:** Tìm `{{ title() }}`, thử đổi thành `{{ title() + ' - Bài 1' }}`. Thêm dòng: `<p>Thử toán: {{ 1 + 1 }}</p>`. Lưu.

### 7. Signals + event (II.5)
- **File:** `src/app/app.ts`, `src/app/app.html`
- **Cách làm:**
  1. Trong `app.ts`, class `App`: thêm `protected readonly count = signal(0);` và method:
     ```ts
     protected increment(): void { this.count.update(c => c + 1); }
     ```
  2. Trong `app.html`, thêm: `<p>Count: {{ count() }}</p>` và `<button type="button" (click)="increment()">Tăng</button>`
  3. Lưu, bấm nút — count tăng.

### 8. Component con (GreetingComponent)
- **File:** `src/app/lessons/01-component-basic/greeting.component.ts`, `.html`, `.scss`; `src/app/app.ts`, `src/app/app.html`.
- **Cách làm:** Trong `app.html` thêm `<app-greeting />`. Trong `app.ts` thêm `GreetingComponent` vào `imports` (và import từ `./lessons/01-component-basic/greeting.component`). Sửa text trong `greeting.component.html` — xem thay đổi trên trang.

---

Sau khi xong Bài 1, chuyển sang **Bài 2:** `src/app/lessons/02-events-forms/README.md`.
