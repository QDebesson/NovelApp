import { MatCardModule, MatDividerModule, MatListModule, MatSidenavModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { NovelManagerModule } from './novel-manager/novel-manager.module';
import { HasNovelGuard } from './providers/has-novel.guard';
import { SummaryModule } from './summary/summary.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    NovelManagerModule,
    SummaryModule
  ],
  providers: [HasNovelGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
