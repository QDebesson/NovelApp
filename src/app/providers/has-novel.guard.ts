import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import { NovelService } from '../novel-manager/services/novel.service';

@Injectable()
export class HasNovelGuard implements CanActivate {

  constructor(private _novelService: NovelService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return !_.isNil(this._novelService.currentNovel);
  }
}
