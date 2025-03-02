import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFooterComponent } from './port-footer.component';

describe('PortFooterComponent', () => {
  let component: PortFooterComponent;
  let fixture: ComponentFixture<PortFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
