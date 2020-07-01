import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProductCompComponent } from './liste-product-comp.component';

describe('ListeProductCompComponent', () => {
  let component: ListeProductCompComponent;
  let fixture: ComponentFixture<ListeProductCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProductCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
