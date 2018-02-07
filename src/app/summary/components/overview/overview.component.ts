import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Summary } from '../../models/summary';

@Component({
  selector: 'nov-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnChanges {

  @Input() summary: Summary;
  @Output() overviewEmitter: EventEmitter<Summary> = new EventEmitter<Summary>();
  overviewForm: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this._buildForm();
  }

  ngOnChanges() {
    this._buildForm();
  }

  save() {
    if (this.overviewForm.valid) {
      this.overviewEmitter.emit();
    }
  }

  resetForm() {
    this._buildForm();
  }

  _buildForm() {
    this.overviewForm = this._fb.group({
      title: [(this.summary && this.summary.title) || '', Validators.required],
      subtitle: [(this.summary && this.summary.subtitle) || '', Validators.required]
    });
  }

}
