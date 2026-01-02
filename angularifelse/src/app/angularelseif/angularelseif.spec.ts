import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularelseif } from './angularelseif';

describe('Angularelseif', () => {
  let component: Angularelseif;
  let fixture: ComponentFixture<Angularelseif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angularelseif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angularelseif);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
