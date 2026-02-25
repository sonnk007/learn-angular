# Bài 5: RxJS (Phần IV.1)

## Mục tiêu
- Operators: `map`, `filter`, `switchMap`, `catchError`, `combineLatest`.
- Subject / BehaviorSubject — chia sẻ state giữa components.

---

## Thực hành Bài 5 — File và cách làm

### 1. Filter/search trên danh sách (dùng RxJS)
- **File:** Dùng component `data-list` từ Bài 4: `src/app/lessons/04-services-http/data-list/data-list.component.ts`, `.html`.
- **Cách làm:**
  1. Trong `data-list.component.ts`: thêm `searchTerm = signal('')`. Tạo observable (hoặc computed) kết hợp `getItems()` với `searchTerm`: filter theo `item.name` chứa chuỗi tìm kiếm. Ví dụ: `items$ = toSignal(combineLatest([this.data.getItems(), this.searchTerm]).pipe(map(([items, term]) => items.filter(i => i.name.toLowerCase().includes(term.toLowerCase())))));` (cần import `toSignal`, `combineLatest`, `map`).
  2. Hoặc đơn giản: trong component có mảng `items`, thêm input `(input)="onSearch($event)"`; method `onSearch(e)` set `searchTerm.set(e.target.value)`; dùng computed hoặc getter trả về `items.filter(...)` theo `searchTerm()`.
  3. Trong template: input search binding vào `searchTerm`, list hiển thị theo kết quả đã filter.

### 2. (Tùy chọn) BehaviorSubject
- Trong `counter.service.ts` (Bài 4): đổi sang `private countSub = new BehaviorSubject(0); count$ = this.countSub.asObservable(); getCount() { return this.countSub.value; } increment() { this.countSub.next(this.countSub.value + 1); }`. Component subscribe `count$` hoặc dùng async pipe để hiển thị.

---

Sau khi xong Bài 5, chuyển sang **Bài 6:** `src/app/lessons/06-advanced-structure/README.md`.
