import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecretComponent } from './decret.component';

describe('DecretComponent', () => {
  let component: DecretComponent;
  let fixture: ComponentFixture<DecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
