import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NovelService } from '../novel-manager/services/novel.service';
import { Summary } from './models/summary';

@Injectable()
export class SummaryService {

  constructor(private _novelService: NovelService, private _http: HttpClient) { }

  getSummary(novelId: number): Observable<Summary> {
    return this._http.get<Summary>(`${environment.baseUrl}novel/summary/${novelId}`);
  }

  saveSummary(novelId: number, summary: Summary) {
    return this._http.post<Summary>(`${environment.baseUrl}novel/summary/${novelId}`, summary);
  }
}
