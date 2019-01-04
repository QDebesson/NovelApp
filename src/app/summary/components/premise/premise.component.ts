import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Premise } from '../../models/summary';

@Component({
  selector: 'nov-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.scss']
})
export class PremiseComponent implements OnInit, OnChanges {

  @Input() premise!: Premise;
  @Output() premiseEmitter: EventEmitter<Premise> = new EventEmitter<Premise>();
  premiseForm!: FormGroup;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this._buildForm();
  }

  save() {
    this.premiseEmitter.emit(this.premiseForm.value);
  }

  resetForm() {
    this._buildForm();
  }

  private _buildForm() {
    this.premiseForm = this._fb.group({
      character: [this._getValueOfPremise('character')],
      situation: [this._getValueOfPremise('situation')],
      objective: [this._getValueOfPremise('objective')],
      opponent: [this._getValueOfPremise('opponent')],
      disaster: [this._getValueOfPremise('disaster')],
      fullPremise: [this._getValueOfPremise('fullPremise')],
    });
  }

  private _getValueOfPremise(fieldName: string): string {
    if (this.premise && this.premise.hasOwnProperty(fieldName)) {
      return this.premise[fieldName];
    }
    return '';
  }
}
