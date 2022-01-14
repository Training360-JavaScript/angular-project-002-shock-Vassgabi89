import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button-group',
  templateUrl: './action-button-group.component.html',
  styleUrls: ['./action-button-group.component.scss']
})
export class ActionButtonGroupComponent implements OnInit {

  @Output() selectClick: EventEmitter<boolean> = new EventEmitter()
  @Output() updateClick: EventEmitter<boolean> = new EventEmitter()
  @Output() deleteClick: EventEmitter<boolean> = new EventEmitter()

  onSelectButtonClick(): void {
    this.selectClick.emit(true)
    // console.log('select')
  }
  onUpdateButtonClick(): void {
    this.updateClick.emit(true)
    // console.log('update')
  }
  onDeleteButtonClick(): void {
    this.deleteClick.emit(true)
    // console.log('delete')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
