import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionsComponent } from './expansions.component';

describe('ExpansionsComponent', () => {
  let component: ExpansionsComponent;
  let fixture: ComponentFixture<ExpansionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
