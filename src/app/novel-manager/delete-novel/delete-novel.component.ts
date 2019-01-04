import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Novel } from '../models/novel';
import { NovelService } from '../services/novel.service';

@Component({
  selector: 'nov-delete-novel',
  templateUrl: './delete-novel.component.html',
  styleUrls: ['./delete-novel.component.scss']
})
export class DeleteNovelComponent {
  errorMessage = '';

  constructor(private _dialogRef: MatDialogRef<DeleteNovelComponent>, private _novelService: NovelService,
              @Inject(MAT_DIALOG_DATA) public novel: Novel, private _router: Router) {
  }

  deleteNovel() {
    this._novelService.deleteNovel(this.novel.id).subscribe(() => {
      this._router.navigate(['']);
      this._dialogRef.close();
    }, () => {
      this.errorMessage = 'An error occurred…';
    });
  }
}
