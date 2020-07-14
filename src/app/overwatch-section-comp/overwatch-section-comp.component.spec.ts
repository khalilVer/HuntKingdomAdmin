import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwatchSectionCompComponent } from './overwatch-section-comp.component';

describe('OverwatchSectionCompComponent', () => {
  let component: OverwatchSectionCompComponent;
  let fixture: ComponentFixture<OverwatchSectionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwatchSectionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwatchSectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
