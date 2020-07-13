import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeThreadCompComponent } from './liste-thread-comp.component';

describe('ListeThreadCompComponent', () => {
  let component: ListeThreadCompComponent;
  let fixture: ComponentFixture<ListeThreadCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeThreadCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeThreadCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
