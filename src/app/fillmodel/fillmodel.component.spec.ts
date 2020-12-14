import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillmodelComponent } from './fillmodel.component';

describe('FillmodelComponent', () => {
  let component: FillmodelComponent;
  let fixture: ComponentFixture<FillmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
