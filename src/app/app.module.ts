import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CronometerComponent } from './cronometer/cronometer.component';
import { TrackerComponent } from './tracker/tracker.component';

const appRoutes: Routes = [
  { path: 'cronometer', component: CronometerComponent },
  { path: 'tracker', component: TrackerComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CronometerComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
