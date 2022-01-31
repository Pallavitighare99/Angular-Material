import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCustomerComponent } from './child-customer.component';

describe('ChildCustomerComponent', () => {
  let component: ChildCustomerComponent;
  let fixture: ComponentFixture<ChildCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
