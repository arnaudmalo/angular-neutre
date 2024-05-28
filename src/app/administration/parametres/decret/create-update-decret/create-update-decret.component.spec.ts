import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUpdateDecretComponent } from './create-update-decret.component';


describe('CreateUpdateDecretComponent', () => {
  let component: CreateUpdateDecretComponent;
  let fixture: ComponentFixture<CreateUpdateDecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateDecretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateDecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
