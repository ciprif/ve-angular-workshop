import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWeeklyMenuComponent } from './article-weekly-menu.component';

describe('ArticleWeeklyMenuComponent', () => {
  let component: ArticleWeeklyMenuComponent;
  let fixture: ComponentFixture<ArticleWeeklyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleWeeklyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWeeklyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
