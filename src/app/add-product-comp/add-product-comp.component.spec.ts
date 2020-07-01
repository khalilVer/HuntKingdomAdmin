import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCompComponent } from './add-product-comp.component';

describe('AddProductCompComponent', () => {
  let component: AddProductCompComponent;
  let fixture: ComponentFixture<AddProductCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
