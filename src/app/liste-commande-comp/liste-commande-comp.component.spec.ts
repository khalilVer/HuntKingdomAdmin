import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeCompComponent } from './liste-commande-comp.component';

describe('ListeCommandeCompComponent', () => {
  let component: ListeCommandeCompComponent;
  let fixture: ComponentFixture<ListeCommandeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommandeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
