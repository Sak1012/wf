import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationPropertyBindingComponent } from './interpolation-property-binding.component';

describe('InterpolationPropertyBindingComponent', () => {
  let component: InterpolationPropertyBindingComponent;
  let fixture: ComponentFixture<InterpolationPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolationPropertyBindingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolationPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
