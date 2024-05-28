import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActeTableComponent } from './acte-table.component';

describe('IfuTableComponent', () => {
  let component: ActeTableComponent;
  let fixture: ComponentFixture<ActeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
