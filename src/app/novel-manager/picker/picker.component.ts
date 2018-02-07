import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { CreateNovelComponent } from '../create-novel/create-novel.component';
import { DeleteNovelComponent } from '../delete-novel/delete-novel.component';
import { Novel } from '../models/novel';
import { NovelService } from '../services/novel.service';

@Component({
  selector: 'nov-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit {

  get selectedNovel(): Novel | null {
    return this._novelService.currentNovel;
  }

  set selectedNovel(value: Novel | null) {
    this._novelService.currentNovel = value;
  }

  novelList: Observable<Array<Novel>>;

  constructor(private _novelService: NovelService, private _dialogService: MatDialog) {
  }

  ngOnInit() {
    this.novelList = this._novelService.novels;
  }

  deleteCurrentNovel() {
    this._dialogService.open(DeleteNovelComponent, {
      data: this._novelService.currentNovel
    });
  }

  createNewNovel() {
    this._dialogService.open(CreateNovelComponent);
  }
}
