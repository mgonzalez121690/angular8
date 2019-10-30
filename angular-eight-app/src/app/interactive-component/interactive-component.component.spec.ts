import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveComponentComponent } from './interactive-component.component';

describe('InteractiveComponentComponent', () => {
  let component: InteractiveComponentComponent;
  let fixture: ComponentFixture<InteractiveComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractiveComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
