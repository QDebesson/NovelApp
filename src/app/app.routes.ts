import { Routes } from '@angular/router';
import { HasNovelGuard } from './providers/has-novel.guard';
import { SummaryComponent } from './summary/components/summary/summary.component';

export const ROUTES: Routes = [
  {path: 'summary', component: SummaryComponent, canActivate: [HasNovelGuard]}
];
