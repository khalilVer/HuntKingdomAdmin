import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCompComponent } from './edit-product-comp.component';

describe('EditProductCompComponent', () => {
  let component: EditProductCompComponent;
  let fixture: ComponentFixture<EditProductCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
