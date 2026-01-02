import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datavariables } from './datavariables';

describe('Datavariables', () => {
  let component: Datavariables;
  let fixture: ComponentFixture<Datavariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datavariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datavariables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
