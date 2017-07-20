import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRecipeComponent } from './article-recipe.component';

describe('ArticleRecipeComponent', () => {
  let component: ArticleRecipeComponent;
  let fixture: ComponentFixture<ArticleRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
