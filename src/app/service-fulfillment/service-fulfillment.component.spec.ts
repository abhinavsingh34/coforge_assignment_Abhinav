import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFulfillmentComponent } from './service-fulfillment.component';

describe('ServiceFulfillmentComponent', () => {
  let component: ServiceFulfillmentComponent;
  let fixture: ComponentFixture<ServiceFulfillmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFulfillmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFulfillmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
