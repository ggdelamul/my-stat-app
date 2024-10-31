import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { provideHttpClient } from '@angular/common/http';

const routes : Routes = [
  {
    path:'home',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
] 
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
