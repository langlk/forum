import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CategoryComponent } from './category/category.component';
import { PostDiscussionComponent } from './post-discussion/post-discussion.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories/:name',
    component: CategoryComponent
  },
  {
    path: 'posts/:category/:id',
    component: PostDiscussionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
