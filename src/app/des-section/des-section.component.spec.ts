import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesSectionComponent } from './des-section.component';

describe('DesSectionComponent', () => {
  let component: DesSectionComponent;
  let fixture: ComponentFixture<DesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
