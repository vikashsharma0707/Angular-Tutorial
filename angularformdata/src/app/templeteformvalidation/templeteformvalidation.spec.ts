import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templeteformvalidation } from './templeteformvalidation';

describe('Templeteformvalidation', () => {
  let component: Templeteformvalidation;
  let fixture: ComponentFixture<Templeteformvalidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templeteformvalidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templeteformvalidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
