import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDeYumsComponent } from './programa-de-yums.component';

describe('ProgramaDeYumsComponent', () => {
  let component: ProgramaDeYumsComponent;
  let fixture: ComponentFixture<ProgramaDeYumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaDeYumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaDeYumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
