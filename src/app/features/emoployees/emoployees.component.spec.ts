import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeesComponent } from './emoployees.component';

describe('EmoployeesComponent', () => {
  let component: EmoployeesComponent;
  let fixture: ComponentFixture<EmoployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmoployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
