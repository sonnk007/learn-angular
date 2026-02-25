# Bài 2: Events & Forms (Phần III.1, III.2)

## Mục tiêu
- Event binding: `(click)`, `(input)`; two-way binding `[(ngModel)]`.
- Forms: Template-driven hoặc Reactive (FormGroup, FormControl).

---

## Thực hành Bài 2 — File và cách làm

### 1. Nút “Giảm” (event binding — III.1)
- **File:** `src/app/app.ts`, `src/app/app.html`
- **Cách làm:** (Làm sau khi đã có count + nút Tăng ở Bài 1.)
  1. Trong `app.ts` thêm method: `protected decrement(): void { this.count.update(c => c - 1); }`
  2. Trong `app.html` thêm nút: `<button type="button" (click)="decrement()">Giảm</button>` (cạnh nút Tăng).
  3. Lưu và kiểm tra Count tăng/giảm.

### 2. Trang Liên hệ + form (III.2)
- **File cần tạo:** Component `contact-form` (CLI). **File cần sửa:** `src/app/app.routes.ts`, `src/app/app.html`.
- **Cách làm:**
  1. Terminal: `ng g c lessons/02-events-forms/contact-form --standalone`
  2. File tạo ra: `src/app/lessons/02-events-forms/contact-form/contact-form.component.ts`, `.html`, `.scss`.
  3. Trong `contact-form.component.ts`: thêm vào `imports` mảng — `NgIf`, và `NgModel` từ `@angular/forms` (hoặc `ReactiveFormsModule` nếu dùng Reactive). Khai báo property `name = ''`, `email = ''`, `message = ''` (hoặc FormGroup).
  4. Trong `contact-form.component.html`: form với 3 field (tên, email, nội dung). Dùng `[(ngModel)]="name"` (và email, message) cho từng input; cần thêm `name="..."` cho mỗi input. Nút Submit (click) log ra console hoặc hiển thị tạm.
  5. Trong `src/app/app.routes.ts` thêm route:
     ```ts
     { path: 'contact', loadComponent: () => import('./lessons/02-events-forms/contact-form/contact-form.component').then(m => m.ContactFormComponent) }
     ```
  6. Trong `src/app/app.html` thêm link: `<a routerLink="/contact">Liên hệ</a>` (và đảm bảo có `RouterLink` trong imports của App nếu chưa).
  7. Mở http://localhost:4200/contact để kiểm tra.

---

Sau khi xong Bài 2, chuyển sang **Bài 3:** `src/app/lessons/03-pipes-routing/README.md`.
