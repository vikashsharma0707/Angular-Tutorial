import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularswitch } from './angularswitch';

describe('Angularswitch', () => {
  let component: Angularswitch;
  let fixture: ComponentFixture<Angularswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angularswitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularswitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
