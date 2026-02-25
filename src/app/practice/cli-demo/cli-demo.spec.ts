import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliDemo } from './cli-demo';

describe('CliDemo', () => {
  let component: CliDemo;
  let fixture: ComponentFixture<CliDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
