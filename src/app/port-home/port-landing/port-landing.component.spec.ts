import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortLandingComponent } from './port-landing.component';

describe('PortLandingComponent', () => {
  let component: PortLandingComponent;
  let fixture: ComponentFixture<PortLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
