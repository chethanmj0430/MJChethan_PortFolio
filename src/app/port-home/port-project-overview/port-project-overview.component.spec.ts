import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortProjectOverviewComponent } from './port-project-overview.component';

describe('PortProjectOverviewComponent', () => {
  let component: PortProjectOverviewComponent;
  let fixture: ComponentFixture<PortProjectOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortProjectOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
