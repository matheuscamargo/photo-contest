import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOrderComponent } from './final-order.component';

describe('FinalOrderComponent', () => {
  let component: FinalOrderComponent;
  let fixture: ComponentFixture<FinalOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
