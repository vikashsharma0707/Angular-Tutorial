import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulareffect } from './angulareffect';

describe('Angulareffect', () => {
  let component: Angulareffect;
  let fixture: ComponentFixture<Angulareffect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angulareffect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angulareffect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
