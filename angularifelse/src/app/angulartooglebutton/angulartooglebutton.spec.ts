import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulartooglebutton } from './angulartooglebutton';

describe('Angulartooglebutton', () => {
  let component: Angulartooglebutton;
  let fixture: ComponentFixture<Angulartooglebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angulartooglebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angulartooglebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
