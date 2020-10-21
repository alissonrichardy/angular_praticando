import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticandoCssComponent } from './praticando-css.component';

describe('PraticandoCssComponent', () => {
  let component: PraticandoCssComponent;
  let fixture: ComponentFixture<PraticandoCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PraticandoCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PraticandoCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
