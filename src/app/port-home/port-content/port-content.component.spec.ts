import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortContentComponent } from './port-content.component';

describe('PortContentComponent', () => {
  let component: PortContentComponent;
  let fixture: ComponentFixture<PortContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
