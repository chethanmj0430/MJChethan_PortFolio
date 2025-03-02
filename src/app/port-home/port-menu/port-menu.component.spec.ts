import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortMenuComponent } from './port-menu.component';

describe('PortMenuComponent', () => {
  let component: PortMenuComponent;
  let fixture: ComponentFixture<PortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
