import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularifelse } from './angularifelse';

describe('Angularifelse', () => {
  let component: Angularifelse;
  let fixture: ComponentFixture<Angularifelse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angularifelse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularifelse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
