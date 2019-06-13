import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteCompositionComponent } from './comite-composition.component';

describe('ComiteCompositionComponent', () => {
  let component: ComiteCompositionComponent;
  let fixture: ComponentFixture<ComiteCompositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComiteCompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
