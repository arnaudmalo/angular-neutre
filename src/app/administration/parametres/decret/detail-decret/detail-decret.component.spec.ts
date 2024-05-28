import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDecretComponent } from './detail-decret.component';

describe('DetailDecretComponent', () => {
  let component: DetailDecretComponent;
  let fixture: ComponentFixture<DetailDecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
