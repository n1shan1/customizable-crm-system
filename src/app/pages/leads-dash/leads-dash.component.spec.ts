import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsDashComponent } from './leads-dash.component';

describe('LeadsDashComponent', () => {
  let component: LeadsDashComponent;
  let fixture: ComponentFixture<LeadsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadsDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
