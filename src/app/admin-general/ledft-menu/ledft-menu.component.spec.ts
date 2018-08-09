import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedftMenuComponent } from './ledft-menu.component';

describe('LedftMenuComponent', () => {
  let component: LedftMenuComponent;
  let fixture: ComponentFixture<LedftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
