import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newscard1Component } from './newscard1.component';

describe('Newscard1Component', () => {
  let component: Newscard1Component;
  let fixture: ComponentFixture<Newscard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newscard1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newscard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
