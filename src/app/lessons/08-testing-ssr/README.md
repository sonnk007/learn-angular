# Bài 8: Testing & SSR (Phần IV.6, IV.7)

## Mục tiêu
- Unit test: Vitest/Jasmine, TestBed; test component/service.
- SSR: build và chạy server render; xem HTML từ server.

---

## Thực hành Bài 8 — File và cách làm

### 1. Unit test (IV.6)
- **File:** `src/app/app.spec.ts` (có sẵn).
- **Cách làm:**
  1. Mở `src/app/app.spec.ts`. Chạy `ng test` (hoặc script test trong package.json). Đảm bảo test hiện tại pass.
  2. Thêm test ví dụ (điều chỉnh theo app thực tế): ví dụ `it('should have title', () => { expect(app.title()).toBe('hello-world'); });` — nếu trong app.ts có `title = signal('hello-world')`. Lưu và chạy lại `ng test`.

### 2. SSR (IV.7)
- **File:** Không sửa code — chỉ chạy lệnh.
- **Cách làm:**
  1. Terminal tại thư mục project: `npm run build` (hoặc `ng build`).
  2. Chạy lệnh serve SSR (xem trong `package.json`, ví dụ `npm run serve:ssr:hello-world` hoặc tương tự).
  3. Mở URL server báo (ví dụ http://localhost:4000). Nhấn Ctrl+U (View Page Source): HTML đã có nội dung render sẵn từ server, không chỉ còn thẻ `<app-root>` trống.

---

Hết chương trình 8 bài. Ôn lại lộ trình trong `LO_TRINH_HOC_ANGULAR.md` và tiếp tục làm dự án thực tế.
