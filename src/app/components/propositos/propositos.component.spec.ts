import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositosComponent } from './propositos.component';

describe('PropositosComponent', () => {
  let component: PropositosComponent;
  let fixture: ComponentFixture<PropositosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropositosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
