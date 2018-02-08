import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { SummaryService } from './summary.service';
import { SummaryComponent } from './components/summary/summary.component';
import { PremiseComponent } from './components/premise/premise.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [SummaryService, DatePipe],
  declarations: [SummaryComponent, PremiseComponent, OverviewComponent]
})
export class SummaryModule { }
