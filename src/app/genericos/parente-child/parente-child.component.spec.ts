import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteChildComponent } from './parente-child.component';

describe('ParenteChildComponent', () => {
  let component: ParenteChildComponent;
  let fixture: ComponentFixture<ParenteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
