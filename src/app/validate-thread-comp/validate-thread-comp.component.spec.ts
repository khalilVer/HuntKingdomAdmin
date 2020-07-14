import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateThreadCompComponent } from './validate-thread-comp.component';

describe('ValidateThreadCompComponent', () => {
  let component: ValidateThreadCompComponent;
  let fixture: ComponentFixture<ValidateThreadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateThreadCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateThreadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
