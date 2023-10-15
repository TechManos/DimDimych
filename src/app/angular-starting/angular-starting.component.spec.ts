import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularStartingComponent } from './angular-starting.component';

describe('AngularStartingComponent', () => {
  let component: AngularStartingComponent;
  let fixture: ComponentFixture<AngularStartingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularStartingComponent]
    });
    fixture = TestBed.createComponent(AngularStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
