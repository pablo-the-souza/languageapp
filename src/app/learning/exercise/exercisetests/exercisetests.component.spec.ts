import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisetestsComponent } from './exercisetests.component';

describe('ExercisetestsComponent', () => {
  let component: ExercisetestsComponent;
  let fixture: ComponentFixture<ExercisetestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisetestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
