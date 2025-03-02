import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortSkillsComponent } from './port-skills.component';

describe('PortSkillsComponent', () => {
  let component: PortSkillsComponent;
  let fixture: ComponentFixture<PortSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
