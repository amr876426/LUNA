import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackjeComponent } from './packje.component';

describe('EditPackjeComponent', () => {
  let component: EditPackjeComponent;
  let fixture: ComponentFixture<EditPackjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPackjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPackjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
