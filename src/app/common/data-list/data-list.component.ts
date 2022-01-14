import { User } from './../../model/user';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  @Input() dataList: User[] = []

  @Output() selectClick: EventEmitter<User> = new EventEmitter()
  @Output() updateClick: EventEmitter<User> = new EventEmitter()
  @Output() deleteClick: EventEmitter<User> = new EventEmitter()

  dataRow!: User

  onSelectClick(user: User): void {
    this.dataRow = user
    this.selectClick.emit(this.dataRow)
  }
  onUpdateClick(user: User): void {
    this.dataRow = user
    this.updateClick.emit(this.dataRow)
  }
  onDeleteClick(user: User): void {
    this.dataRow = user
    this.deleteClick.emit(this.dataRow)
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
