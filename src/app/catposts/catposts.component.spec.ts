import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatpostsComponent } from './catposts.component';

describe('CatpostsComponent', () => {
  let component: CatpostsComponent;
  let fixture: ComponentFixture<CatpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
