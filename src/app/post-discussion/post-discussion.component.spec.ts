import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDiscussionComponent } from './post-discussion.component';

describe('PostDiscussionComponent', () => {
  let component: PostDiscussionComponent;
  let fixture: ComponentFixture<PostDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
