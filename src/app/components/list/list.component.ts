import { Component, Input , EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() aptList;

  @Output() deleteEvent =  new EventEmitter();

  handleDelete(theApt: object){
    this.deleteEvent.emit(theApt);
  }
}
