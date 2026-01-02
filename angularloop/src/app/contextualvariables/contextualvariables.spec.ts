import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contextualvariables } from './contextualvariables';

describe('Contextualvariables', () => {
  let component: Contextualvariables;
  let fixture: ComponentFixture<Contextualvariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contextualvariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contextualvariables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
