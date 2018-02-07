import { Component } from '@angular/core';
import { NovelService } from './novel-manager/services/novel.service';
import * as _ from 'lodash';

@Component({
  selector: 'nov-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _novelService: NovelService) {
  }

  hasNovelSelected() {
    return !_.isNil(this._novelService.currentNovel);
  }
}
