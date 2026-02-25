# Bài 4: Services & HTTP (Phần III.5, III.6)

## Mục tiêu
- Services & Dependency Injection: `@Injectable()`, `providedIn: 'root'`, inject trong component.
- HTTP Client: `HttpClient`, Observable, async pipe; gọi API / file JSON.

---

## Thực hành Bài 4 — File và cách làm

### 1. Service Counter (III.5)
- **File cần tạo:** Service bằng CLI. **File cần sửa:** `src/app/app.ts`, `src/app/app.html`.
- **Cách làm:**
  1. Terminal: `ng g s lessons/04-services-http/counter --standalone`
  2. File: `src/app/lessons/04-services-http/counter.service.ts`. Thêm `private count = 0;`, method `getCount(): number { return this.count; }`, `increment(): void { this.count++; }`.
  3. Trong `app.ts`: import `CounterService`, inject `constructor(private counter: CounterService) {}`. Thêm method (ví dụ `incrementService()`) gọi `this.counter.increment()`. Trong class thêm getter hoặc method trả về `this.counter.getCount()`.
  4. Trong `app.html`: hiển thị `{{ counter.getCount() }}` và nút `(click)="incrementService()"`. Kiểm tra: count trong service tăng và hiển thị đúng.

### 2. HTTP + danh sách (III.6)
- **File cần tạo:** Service `data`, component `data-list`; file JSON. **File cần sửa:** `src/app/app.config.ts`, `app.routes.ts` hoặc `app.html`.
- **Cách làm:**
  1. Terminal: `ng g s lessons/04-services-http/data --standalone`, `ng g c lessons/04-services-http/data-list --standalone`
  2. Trong `app.config.ts`: `import { provideHttpClient } from '@angular/common/http';` và thêm `provideHttpClient()` vào mảng `providers`.
  3. Tạo file `public/data.json`: nội dung `[{"id":1,"name":"Item 1"},{"id":2,"name":"Item 2"}]`.
  4. Trong `data.service.ts`: inject `HttpClient`. Định nghĩa interface `Item { id: number; name: string; }`. Method `getItems()` trả về `this.http.get<Item[]>('/data.json')`.
  5. Trong `data-list.component.ts`: inject `DataService`. Property `items = this.data.getItems()` (Observable) hoặc subscribe và lưu vào array. Template: `@for (item of items; track item.id) { ... }` (nếu dùng async pipe: `items = data.getItems();` và `@for (item of items(); track item.id)` với `items` là signal nhận từ async pipe — hoặc đơn giản dùng `items$ | async` trong @for qua signal). Cách đơn giản: `items$ = this.data.getItems();` trong class, template: `@for (item of (items$ | async) ?? []; track item.id) { {{ item.name }} }`.
  6. Thêm route `{ path: 'data', loadComponent: () => import('./lessons/04-services-http/data-list/data-list.component').then(m => m.DataListComponent) }` và link `<a routerLink="/data">Data</a>` trong app.html; hoặc đặt `<app-data-list>` trong app.html và import component trong app.ts.

---

Sau khi xong Bài 4, chuyển sang **Bài 5:** `src/app/lessons/05-rxjs/README.md`.
