import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDashComponent } from './pipeline-dash.component';

describe('PipelineDashComponent', () => {
  let component: PipelineDashComponent;
  let fixture: ComponentFixture<PipelineDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipelineDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
