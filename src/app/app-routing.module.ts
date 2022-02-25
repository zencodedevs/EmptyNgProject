/** core imports */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /** on empty route naviage to default page */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  /** welcome module */
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then((m) => m.WelcomeModule)
  },
  /** on 404 redirect to default page */
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true /** use hash location strategy */
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
