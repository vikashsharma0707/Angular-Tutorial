import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computedsignal } from './computedsignal';

describe('Computedsignal', () => {
  let component: Computedsignal;
  let fixture: ComponentFixture<Computedsignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Computedsignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Computedsignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
