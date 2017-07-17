import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislatorInfoComponent } from './legislator-info.component';

describe('LegislatorInfoComponent', () => {
  let component: LegislatorInfoComponent;
  let fixture: ComponentFixture<LegislatorInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegislatorInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislatorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
