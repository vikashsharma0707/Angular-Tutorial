import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templeteform } from './templeteform';

describe('Templeteform', () => {
  let component: Templeteform;
  let fixture: ComponentFixture<Templeteform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templeteform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templeteform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
