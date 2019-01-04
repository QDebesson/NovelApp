import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { DeleteNovelComponent } from '../delete-novel/delete-novel.component';
import { NovelService } from '../services/novel.service';

@Component({
  selector: 'nov-create-novel',
  templateUrl: './create-novel.component.html',
  styleUrls: ['./create-novel.component.scss']
})
export class CreateNovelComponent implements OnInit {
  errorMessage = '';
  novelForm: FormGroup = this._fb.group({});

  constructor(private _dialogRef: MatDialogRef<DeleteNovelComponent>, private _novelService: NovelService, private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.novelForm = this._fb.group({
      title: ['', Validators.required],
      subtitle: ['']
    });
  }

  createNewNovel() {
    if (this.novelForm.valid) {
      this._novelService.createNewNovel(this.novelForm.value).subscribe(() => this._dialogRef.close(), () => {
        this.errorMessage = 'An error occurred…';
      });
    }
  }
}
