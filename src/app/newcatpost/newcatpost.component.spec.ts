import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcatpostComponent } from './newcatpost.component';

describe('NewcatpostComponent', () => {
  let component: NewcatpostComponent;
  let fixture: ComponentFixture<NewcatpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcatpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcatpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
