import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimychHeaderComponent } from './dimych-header.component';

describe('DimychHeaderComponent', () => {
  let component: DimychHeaderComponent;
  let fixture: ComponentFixture<DimychHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DimychHeaderComponent]
    });
    fixture = TestBed.createComponent(DimychHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
