import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Novel } from '../../../novel-manager/models/novel';
import { NovelService } from '../../../novel-manager/services/novel.service';
import { Premise, Summary } from '../../models/summary';
import { SummaryService } from '../../summary.service';

@Component({
  selector: 'nov-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
  private _summarySubscription: Subscription;
  summary: Summary;

  constructor(private _summaryService: SummaryService, private _novelService: NovelService) {
  }

  ngOnInit() {
    this._summarySubscription = this._novelService.currentNovelAsObservable.pipe(
      switchMap(novel => this._summaryService.getSummary((novel !).id))
    ).subscribe(summary => {
      this.summary = summary;
    }, () => {
    });
  }

  ngOnDestroy() {
    this._summarySubscription.unsubscribe();
  }

  savePremise(premise: Premise) {
    this.summary.premise = premise;
    this._save();
  }

  saveOverview(summary: Summary) {
    this.summary = summary;
    this._save();
  }

  private _save() {
    this._summaryService.saveSummary((this._novelService.currentNovel !).id, this.summary).subscribe(() => {
    }, () => {
    });
  }
}
