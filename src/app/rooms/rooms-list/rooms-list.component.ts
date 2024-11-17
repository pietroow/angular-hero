import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomList} from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() roomsSelected = new EventEmitter<RoomList>();
  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['title']) {
    //   this.title = changes['title'].currentValue.toUpperCase();
    // }
    // console.log(changes);
  }

  selectedRoom(room: RoomList) {
    this.roomsSelected.emit(room);
  }

  ngOnDestroy(): void {
    console.log('on destroy is called')
  }

}
