import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component'
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'user',
    component: UserListComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
