import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocreateComponent } from './todocreate.component';

describe('TodocreateComponent', () => {
  let component: TodocreateComponent;
  let fixture: ComponentFixture<TodocreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodocreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
