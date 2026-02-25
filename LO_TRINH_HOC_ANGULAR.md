# 🎯 Lộ trình học Angular: Từ Zero đến Middle

Lộ trình học **có hệ thống**: sơ khai → căn bản → trung cấp → nâng cao. Mỗi phần dựa trên phần trước; học tuần tự để nắm vững.

**Cách dùng phần Thực hành:** Mỗi **bài học** có một thư mục trong `src/app/lessons/` với file **README.md** chứa toàn bộ Thực hành của bài đó (**File(s)** + **Cách làm** từng bước). Trong lộ trình bên dưới, mỗi mục Thực hành chỉ ghi tên bài và đường dẫn README.

---

## 📑 Thực hành theo từng bài học

| Bài | Thư mục | Nội dung thực hành |
|-----|---------|--------------------|
| **Bài 1** | `src/app/lessons/01-component-basic/README.md` | TypeScript (Product), CLI, luồng app, DevTools, title, interpolation, Signals, Count, GreetingComponent |
| **Bài 2** | `src/app/lessons/02-events-forms/README.md` | Nút Giảm (event), trang Liên hệ + form (ngModel, route /contact) |
| **Bài 3** | `src/app/lessons/03-pipes-routing/README.md` | Pipe uppercase-first, Router (Home, About), menu nav |
| **Bài 4** | `src/app/lessons/04-services-http/README.md` | Counter service (DI), Data service + HTTP + data-list + public/data.json |
| **Bài 5** | `src/app/lessons/05-rxjs/README.md` | RxJS: filter/search list, BehaviorSubject (tùy chọn) |
| **Bài 6** | `src/app/lessons/06-advanced-structure/README.md` | Lazy load About, cấu trúc core/shared/features, Standalone |
| **Bài 7** | `src/app/lessons/07-performance/README.md` | OnPush, track trong @for |
| **Bài 8** | `src/app/lessons/08-testing-ssr/README.md` | Unit test (app.spec.ts), build + serve SSR, View Source |

---

## 📑 Mục lục

| Phần | Nội dung | Mức độ |
|------|----------|--------|
| **I** | [Kiến thức sơ khai](#phần-i-kiến-thức-sơ-khai) — TypeScript, CLI, cấu trúc project | Bắt buộc trước khi code |
| **II** | [Căn bản Angular](#phần-ii-căn-bản-angular) — Chạy app, kiến trúc, Component, Template, Signals | Nền tảng |
| **III** | [Trung cấp](#phần-iii-trung-cấp) — Events, Forms, Pipes, Router, Services, HTTP | Xây dựng tính năng |
| **IV** | [Nâng cao](#phần-iv-nâng-cao) — RxJS, lazy load, performance, Testing, SSR | Chuẩn middle |
| — | [Kế hoạch tuần & Bài học trong project](#kế-hoạch-tuần--bài-học-trong-project) | Tham chiếu nhanh |

---

# Phần I: Kiến thức sơ khai

*Mục tiêu: Biết dùng TypeScript tối thiểu, chạy project bằng CLI, và hiểu “bản đồ” thư mục/file trước khi đụng vào code.*

---

## I.1 TypeScript cơ bản

Angular viết bằng TypeScript. Cần nắm tối thiểu:

| Khái niệm | Ý nghĩa ngắn | Ví dụ |
|-----------|----------------|--------|
| **Types** | Khai báo kiểu dữ liệu cho biến/tham số | `let name: string`, `id: number`, `active: boolean` |
| **Interfaces** | Định nghĩa “hình dạng” object, dùng cho model/API | `interface User { id: number; name: string; }` |
| **Classes** | Component và Service trong Angular đều là class | `class App { title = '...'; }` — có thuộc tính, method, constructor |

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 1. Interface Product).

---

## I.2 Angular CLI

Dùng terminal để tạo project, chạy app, sinh code:

| Lệnh | Công dụng |
|------|------------|
| `ng new tên-project` | Tạo project mới (bạn đã có hello-world). |
| `ng serve` hoặc `npm start` | Chạy dev server (mặc định http://localhost:4200), có hot reload. |
| `ng generate component tên` hoặc `ng g c tên` | Tạo component mới (.ts, .html, .scss, spec). Thêm `--standalone` cho standalone component. |

Ví dụ: `ng g c shared/button --standalone` → tạo component trong thư mục `shared/button`.

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 2. Angular CLI).

---

## I.3 Cấu trúc project và công dụng các file

Hiểu “file nào làm gì” giúp bạn biết sửa đâu khi làm bài tập.

### Thư mục gốc (root)

| File / thư mục | Công dụng |
|----------------|-----------|
| **angular.json** | Cấu hình CLI: tên project, source, lệnh build/serve/test, SCSS, SSR, assets. |
| **package.json** | Dependencies và scripts (`npm start`, `npm run build`). Chạy `npm install` để cài đúng phiên bản. |
| **tsconfig.json** | Cấu hình TypeScript chung (strict, target, decorators). Tham chiếu tsconfig.app.json và tsconfig.spec.json. |
| **tsconfig.app.json** | Cấu hình TS cho **app** (include src, exclude spec). |
| **tsconfig.spec.json** | Cấu hình TS cho **test**. |
| **node_modules/** | Thư viện (npm install). Không sửa, không commit. |
| **public/** | File tĩnh copy vào build (favicon, ảnh). |

### Thư mục `src/`

| File | Công dụng |
|------|-----------|
| **index.html** | Trang HTML duy nhất; chỉ có `<app-root></app-root>`. Angular render toàn bộ app vào đây. |
| **main.ts** | **Điểm vào (browser):** `bootstrapApplication(App, appConfig)` — chạy khi user mở app. |
| **main.server.ts** | Điểm vào khi **SSR** — bootstrap app với cấu hình server. |
| **styles.scss** | Style **global** (áp dụng toàn app). |
| **server.ts** | Server Express cho SSR: phục vụ file tĩnh + render Angular. |

### Thư mục `src/app/`

| File | Công dụng |
|------|-----------|
| **app.ts** | **Root component** (selector `app-root`). Class + template + style = component gốc. |
| **app.html** | Template của root — layout, nội dung, `<router-outlet />`. |
| **app.scss** | Style chỉ cho root component. |
| **app.config.ts** | Cấu hình app (browser): Router, Hydration, providers. |
| **app.config.server.ts** | Cấu hình app cho server (SSR). |
| **app.routes.ts** | Định nghĩa **routes** (path → component). |
| **app.routes.server.ts** | Cấu hình SSR theo từng route. |
| **app.spec.ts** | Unit test cho App. |

### Thư mục `src/app/lessons/`

Chứa bài học (Bài 1, 2, …): component mẫu + README hướng dẫn. Có thể thêm `02-forms`, `03-routing`, ...

### Luồng chạy app (nên nhớ)

1. **Browser:** `index.html` → load script → `main.ts` → `bootstrapApplication(App, appConfig)` → render `App` vào `<app-root>`.
2. **SSR:** Request → `server.ts` → render bằng `main.server.ts` + config server → trả HTML; client “hydration”.

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 3. Luồng app).

---

# Phần II: Căn bản Angular

*Mục tiêu: Hiểu app chạy thế nào, kiến trúc Components/Services, và biết viết component + template + state (signals) cơ bản.*

---

## II.1 Cách Angular chạy

- **index.html** chỉ có `<app-root>`.
- **main.ts** gọi `bootstrapApplication(App, appConfig)` → khởi động app.
- **app.config.ts** đăng ký Router, Hydration, v.v. (providers toàn cục).
- Angular render component `App` (app.ts) vào `<app-root>`; template lấy từ **app.html**.

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 4. DevTools).

---

## II.2 Kiến trúc Angular (Components, Modules, Services)

| Khối | Vai trò |
|------|---------|
| **Components** | Đơn vị giao diện: Class + Template + Style. Màn hình = cây nhiều component. |
| **Modules (NgModule)** | Cách tổ chức cũ: gom components/directives/pipes. **Angular 16+** khuyến nghị **Standalone**: không bắt buộc NgModule; mỗi component tự khai báo `imports`. Project hello-world dùng standalone. |
| **Services** | Class chứa logic dùng chung (API, auth, state). Được **inject** vào component (Dependency Injection). Component dùng service; service không biết component. |

Luồng: **Template** → **Component** (class) → **Services** (data/logic).

---

## II.3 Component là gì?

Một component = **Class (TypeScript)** + **Template (HTML)** + **Style (CSS/SCSS)**.

- Trong **app.ts**: decorator `@Component` với `selector`, `templateUrl`, `styleUrl`, `imports`.
- `selector: 'app-root'` → thẻ `<app-root>` trong HTML chính là component này.

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 5. Đổi title).

---

## II.4 Template cơ bản

Cú pháp thường dùng trong file .html của component:

| Cú pháp | Ví dụ | Ý nghĩa |
|--------|--------|--------|
| **Interpolation** | `{{ title() }}` | Hiển thị giá trị. Signal phải gọi `()`. |
| **Property binding** | `[href]="item.link"` | Gán thuộc tính từ biến. |
| **Control flow** | `@for (item of items; track item.id) { ... }` | Lặp danh sách. |
| | `@if (condition) { ... }` | Render có điều kiện. |

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 6. Interpolation).

---

## II.5 Signals (state phản ứng)

- `signal('giá trị')` — tạo state reactive.
- Trong template: đọc bằng `title()` (gọi hàm).
- Trong class: đổi bằng `title.set('mới')` hoặc `title.update(v => v + '!')`.

**Thực hành:** → Làm theo **Bài 1** — `src/app/lessons/01-component-basic/README.md` (mục 7. Signals + event, mục 8. Component con).

---

# Phần III: Trung cấp

*Mục tiêu: Tương tác người dùng (events, forms), hiển thị dữ liệu (pipes), điều hướng (router), và lấy dữ liệu (services, HTTP).*

---

## III.1 Event binding & Two-way binding

- **Event:** `(click)="onClick()"`, `(input)="onInput($event)"` — gắn sự kiện với method trong component.
- **Two-way binding:** `[(ngModel)]="name"` — vừa hiển thị vừa cập nhật khi user nhập (cần FormsModule hoặc NgModel standalone).

**Thực hành:** → Làm theo **Bài 2** — `src/app/lessons/02-events-forms/README.md` (mục 1. Nút Giảm).

---

## III.2 Forms

| Cách | Khi nào dùng |
|------|--------------|
| **Template-driven** | `ngModel`, `ngForm` — form đơn giản, ít field. |
| **Reactive (FormBuilder)** | `FormGroup`, `FormControl`, `formControlName` — form nhiều field, validation phức tạp, chuẩn app lớn. |

**Thực hành:** → Làm theo **Bài 2** — `src/app/lessons/02-events-forms/README.md` (mục 2. Trang Liên hệ + form).

---

## III.3 Pipes

Chuyển đổi hiển thị trong template: `{{ date \| date:'short' }}`, `{{ text \| uppercase }}`. Tự tạo: `ng generate pipe tên-pipe`.

**Thực hành:** → Làm theo **Bài 3** — `src/app/lessons/03-pipes-routing/README.md` (mục 1. Pipe uppercase-first).

---

## III.4 Router (điều hướng)

- **app.routes.ts:** Định nghĩa `Routes` (path → component).
- **RouterOutlet:** `<router-outlet />` — vị trí component của route được render.
- **RouterLink:** `<a routerLink="/path">` — link điều hướng không reload trang.

**Thực hành:** → Làm theo **Bài 3** — `src/app/lessons/03-pipes-routing/README.md` (mục 2. Router Home, About).

---

## III.5 Services & Dependency Injection

- Service: class có `@Injectable()`; thường `providedIn: 'root'` (dùng chung toàn app).
- Inject vào component: `constructor(private api: ApiService) {}`.
- Component gọi method của service để lấy/cập nhật dữ liệu.

**Thực hành:** → Làm theo **Bài 4** — `src/app/lessons/04-services-http/README.md` (mục 1. Service Counter).

---

## III.6 HTTP Client & Observable

- `HttpClient.get/post/put/delete` — gọi API.
- Trả về **Observable** — trong component: `subscribe()` hoặc trong template dùng **async** pipe.

**Thực hành:** → Làm theo **Bài 4** — `src/app/lessons/04-services-http/README.md` (mục 2. HTTP + danh sách).

---

# Phần IV: Nâng cao

*Mục tiêu: Reactive nâng cao (RxJS), tối ưu (lazy load, performance), testing và SSR — chuẩn middle.*

---

## IV.1 RxJS cơ bản (cần cho middle)

- Operators: `map`, `filter`, `switchMap`, `catchError`, `combineLatest`.
- **Subject / BehaviorSubject** — chia sẻ stream/state giữa nhiều component.

**Thực hành:** → Làm theo **Bài 5** — `src/app/lessons/05-rxjs/README.md`.

---

## IV.2 Lazy loading

- Route load component khi cần: `loadComponent: () => import('...').then(m => m.X)` — giảm kích thước bundle ban đầu.

**Thực hành:** → Làm theo **Bài 6** — `src/app/lessons/06-advanced-structure/README.md` (mục 1. Lazy load About).

---

## IV.3 Cấu trúc thư mục (chuẩn middle)

- **core/** — services singleton (auth, api).
- **shared/** — components, pipes dùng chung.
- **features/** — từng feature (auth, products, …) có component/routes riêng.

**Thực hành:** → Làm theo **Bài 6** — `src/app/lessons/06-advanced-structure/README.md` (mục 2. Cấu trúc thư mục, mục 3. Standalone).

---

## IV.4 Standalone components (chi tiết)

- Không dùng NgModule; component tự khai báo `imports: [RouterOutlet, NgIf, ...]`.
- Project hello-world đã dùng standalone.

**Thực hành:** → Làm theo **Bài 6** — `src/app/lessons/06-advanced-structure/README.md` (mục 3. Standalone).

---

## IV.5 Performance

- **OnPush** change detection — giảm số lần kiểm tra thay đổi.
- **trackBy** trong `@for`/`ngFor` — tối ưu render list.
- Lazy load routes và components.

**Thực hành:** → Làm theo **Bài 7** — `src/app/lessons/07-performance/README.md`.

---

## IV.6 Testing

- **Unit test:** Vitest/Jasmine + TestBed — test component/service.
- **E2E:** Cypress/Playwright — test luồng người dùng.

**Thực hành:** → Làm theo **Bài 8** — `src/app/lessons/08-testing-ssr/README.md` (mục 1. Unit test).

---

## IV.7 SSR (Server-Side Rendering)

- Render HTML trên server (SEO, first paint nhanh). Project có `@angular/ssr`; cấu hình trong `app.config.server.ts`, `server.ts`.

**Thực hành:** → Làm theo **Bài 8** — `src/app/lessons/08-testing-ssr/README.md` (mục 2. SSR).

---

# Kế hoạch tuần & Bài học trong project

## Bảng kế hoạch (8–10 tuần)

| Tuần | Nội dung (theo phần) | Deliverable |
|------|----------------------|-------------|
| 1 | Phần I + II (sơ khai + căn bản) | Đọc cấu trúc project; CLI; Component, Template, Signals; sửa Home, nút đổi title; interface/class |
| 2 | III.1, III.2 (Events, Forms) | Trang Liên hệ + form |
| 3 | III.3, III.4 (Pipes, Router) | Home, About, menu nav |
| 4 | III.5, III.6 (Services, HTTP) | Service gọi API giả, hiển thị list |
| 5 | IV.1 (RxJS) | Danh sách + filter/search |
| 6 | IV.2, IV.3, IV.4 (Lazy load, cấu trúc, Standalone) | Tách feature, lazy route |
| 7 | IV.5 (Performance) | Tối ưu list lớn |
| 8 | IV.6, IV.7 (Testing, SSR) | 1–2 unit test, build SSR |

## Bài học trong project

Mỗi bài có **một thư mục** trong `src/app/lessons/` với **README.md** chứa toàn bộ Thực hành (File + Cách làm) của bài đó:

| Bài | Thư mục | Nội dung |
|-----|---------|----------|
| 1 | `lessons/01-component-basic/` | Component, Template, Signals (Phần I + II) |
| 2 | `lessons/02-events-forms/` | Events, Forms |
| 3 | `lessons/03-pipes-routing/` | Pipes, Router |
| 4 | `lessons/04-services-http/` | Services, HTTP |
| 5 | `lessons/05-rxjs/` | RxJS |
| 6 | `lessons/06-advanced-structure/` | Lazy load, cấu trúc, Standalone |
| 7 | `lessons/07-performance/` | Performance |
| 8 | `lessons/08-testing-ssr/` | Testing, SSR |

Trong lộ trình, mỗi mục **Thực hành** chỉ ghi “→ Làm theo **Bài N** — đường dẫn README”. Mở đúng file README của bài để xem **File(s)** và **Cách làm** chi tiết.

---

Chúc bạn học có hệ thống và nhanh đạt trình độ middle. 🚀
