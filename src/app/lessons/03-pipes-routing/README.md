# Bài 3: Pipes & Router (Phần III.3, III.4)

## Mục tiêu
- Pipes: built-in và tự tạo pipe; dùng trong template.
- Router: Routes, RouterOutlet, RouterLink; nhiều trang (Home, About).

---

## Thực hành Bài 3 — File và cách làm

### 1. Pipe tự tạo (III.3)
- **File cần tạo:** Pipe bằng CLI trong thư mục bài 3. **File cần sửa:** `src/app/app.ts`, `src/app/app.html`.
- **Cách làm:**
  1. Terminal: `ng g pipe lessons/03-pipes-routing/uppercase-first --standalone`
  2. File: `src/app/lessons/03-pipes-routing/uppercase-first.pipe.ts`. Trong method `transform(value)`: trả về chuỗi với ký tự đầu viết hoa (ví dụ `value.charAt(0).toUpperCase() + value.slice(1)`).
  3. Trong `app.ts`: import `UppercaseFirstPipe`, thêm vào mảng `imports` của `@Component`.
  4. Trong `app.html`: thêm `{{ 'hello' | uppercaseFirst }}` — xem hiển thị "Hello".

### 2. Router — Home, About (III.4)
- **File cần tạo:** Component Home, About (CLI). **File cần sửa:** `src/app/app.routes.ts`, `src/app/app.html`.
- **Cách làm:**
  1. Terminal: `ng g c lessons/03-pipes-routing/home --standalone`, sau đó `ng g c lessons/03-pipes-routing/about --standalone`.
  2. File tạo: `src/app/lessons/03-pipes-routing/home/home.component.ts` (và .html, .scss), tương tự `about/`.
  3. Mở `src/app/app.routes.ts`. Import và khai báo:
     ```ts
     import { Routes } from '@angular/router';
     import { HomeComponent } from './lessons/03-pipes-routing/home/home.component';
     import { AboutComponent } from './lessons/03-pipes-routing/about/about.component';
     export const routes: Routes = [
       { path: '', component: HomeComponent },
       { path: 'about', component: AboutComponent },
     ];
     ```
  4. Mở `src/app/app.html`. Ở vị trí đầu (trước hoặc trong `<main>`): thêm menu `<a routerLink="/">Home</a> | <a routerLink="/about">About</a>`. Đảm bảo có `<router-outlet />` (nơi nội dung route hiển thị).
  5. Trong `app.ts` thêm `RouterLink` vào `imports` nếu chưa có. Mở http://localhost:4200 và /about để kiểm tra.

---

Sau khi xong Bài 3, chuyển sang **Bài 4:** `src/app/lessons/04-services-http/README.md`.
