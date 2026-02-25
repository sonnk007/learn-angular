import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {
  /** Tên hiển thị — dùng signal để template tự cập nhật khi đổi */
  protected readonly name = signal('Sonnk');

  /** Đổi tên khi bấm nút (dùng cho bài học event binding) */
  protected changeName(): void {
    const names = ['Bạn', 'Angular', 'Developer', 'Middle'];
    const current = this.name();
    const nextIndex = (names.indexOf(current) + 1) % names.length;
    this.name.set(names[nextIndex]);
  }
}
