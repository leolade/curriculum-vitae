import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticCurriculumVitaeComponent } from './static-curriculum-vitae.component';

describe('StaticCurriculumVitaeComponent', () => {
  let component: StaticCurriculumVitaeComponent;
  let fixture: ComponentFixture<StaticCurriculumVitaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticCurriculumVitaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticCurriculumVitaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
