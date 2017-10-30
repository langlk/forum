import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { CategoryComponent } from './category/category.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'categories/:name',
    component: CategoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
