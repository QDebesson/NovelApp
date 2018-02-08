import { DatePipe } from '@angular/common';
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

  constructor(private _fb: FormBuilder, private _datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this._buildForm();
  }

  save() {
    if (this.overviewForm.valid) {
      this.overviewEmitter.emit(Object.assign({}, this.summary, this.overviewForm.value));
    }
  }

  resetForm() {
    this._buildForm();
  }

  private _buildForm() {
    this.overviewForm = this._fb.group({
      title: [(this.summary && this.summary.title) || '', Validators.required],
      subtitle: [(this.summary && this.summary.subtitle) || ''],
      startDate: [this._formatDate('startDate')],
      targetedEndDate: [this._formatDate('targetedEndDate')],
    });
  }

  private _formatDate(fieldName: string): string | null {
    if (this.summary && this.summary.hasOwnProperty(fieldName)) {
      return this._datePipe.transform(this.summary[fieldName], 'yyyy-MM-dd');
    }
    return null;
  }
}
