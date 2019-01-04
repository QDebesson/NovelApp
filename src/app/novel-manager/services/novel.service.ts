import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Novel } from '../models/novel';
import * as _ from 'lodash';

@Injectable()
export class NovelService {
  private _novelsSubject: BehaviorSubject<Array<Novel>> = new BehaviorSubject<Array<Novel>>([]);
  private _novelSubject: BehaviorSubject<Novel | null> = new BehaviorSubject<Novel | null>(null);

  constructor(private _http: HttpClient) {
    this.getNovels();
  }

  get novels() {
    return this._novelsSubject.asObservable();
  }

  get currentNovel() {
    return this._novelSubject.getValue();
  }

  set currentNovel(novel) {
    this._novelSubject.next(novel);
  }

  get currentNovelAsObservable() {
    return this._novelSubject.asObservable();
  }

  getNovels() {
    this._http.get<Array<Novel>>(`${environment.baseUrl}novel`).pipe(
      tap(x => this._novelsSubject.next(x))
    ).subscribe(() => {
    }, () => {
    });
  }

  deleteNovel(id: number): Observable<void> {
    return this._http.delete<void>(`${environment.baseUrl}novel/${id}`).pipe(
      tap(() => {
        const novels = this._novelsSubject.getValue();
        _.remove(novels, novel => novel.id === id);
        this._novelsSubject.next(novels);
        this._novelSubject.next(null);
      })
    );
  }

  createNewNovel(novel: { title: string, subtitle: string }): Observable<Novel> {
    return this._http.post<Novel>(`${environment.baseUrl}novel`, novel).pipe(
      tap((addedNovel) => {
        const novels = this._novelsSubject.getValue();
        novels.push(addedNovel);
        this._novelsSubject.next(novels);
        this._novelSubject.next(addedNovel);
      })
    );
  }
}
