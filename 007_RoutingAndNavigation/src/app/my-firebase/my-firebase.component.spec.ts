import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirebaseComponent } from './my-firebase.component';

describe('MyFirebaseComponent', () => {
  let component: MyFirebaseComponent;
  let fixture: ComponentFixture<MyFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
