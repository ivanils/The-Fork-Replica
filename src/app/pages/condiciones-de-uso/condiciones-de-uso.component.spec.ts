import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesDeUsoComponent } from './condiciones-de-uso.component';

describe('CondicionesDeUsoComponent', () => {
  let component: CondicionesDeUsoComponent;
  let fixture: ComponentFixture<CondicionesDeUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionesDeUsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesDeUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
