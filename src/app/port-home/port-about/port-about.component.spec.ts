import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortAboutComponent } from './port-about.component';

describe('PortAboutComponent', () => {
  let component: PortAboutComponent;
  let fixture: ComponentFixture<PortAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
