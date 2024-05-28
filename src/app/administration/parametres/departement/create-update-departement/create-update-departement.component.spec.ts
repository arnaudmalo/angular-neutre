import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateDepartementComponent } from './create-update-departement.component';

describe('CreateUpdateDepartementComponent', () => {
  let component: CreateUpdateDepartementComponent;
  let fixture: ComponentFixture<CreateUpdateDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDepartementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
