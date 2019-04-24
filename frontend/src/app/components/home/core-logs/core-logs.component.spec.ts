import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLogsComponent } from './core-logs.component';

describe('CoreLogsComponent', () => {
  let component: CoreLogsComponent;
  let fixture: ComponentFixture<CoreLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
