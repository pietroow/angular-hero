import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Room, RoomList} from './rooms';
import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, AfterViewInit {
  numberOfRooms = 10;
  hideRooms = false;
  roomList: RoomList[] = [];
  selectedRoom!: RoomList;
  title = 'Rooms List';

  @ViewChild(HeaderComponent, { static: true} ) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  }

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.headerChildrenComponent);
    this.roomList = [
      {
        roomType: 'Deluxe Room',
        roomNumber: 1,
        amenities: 'Free Wifi',
        price: 200,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 4.5
      },
      {
        roomType: 'Deluxe Room',
        roomNumber: 2,
        amenities: 'Air conditioner, Free Wifi',
        price: 200,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 444.8
      },
      {
        roomType: 'Deluxe Room',
        roomNumber: 3,
        amenities: 'Air conditioner',
        price: 500,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 8.2
      }
    ];
  }

  ngAfterViewInit(): void {
    this.headerChildrenComponent.first.title = 'John Cena'
    this.headerChildrenComponent.last.title = 'Joe Rogan'

    console.log(this.headerChildrenComponent);
    // console.log(this.headerComponent);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'New Title';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList =
      {
        roomType: 'Deluxe Room 5',
        roomNumber: 5,
        amenities: 'Bed',
        price: 100,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 5
      };
    this.roomList = [...this.roomList, room];
    // this.roomList.push(room);
  }
}
