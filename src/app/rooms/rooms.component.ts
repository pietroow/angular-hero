import {AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Room, RoomList} from './rooms';
import {RoomsListComponent} from './rooms-list/rooms-list.component';
import {HeaderComponent} from '../header/header.component';
import {RoomsService} from '../service/rooms.service';
import {HttpEventType} from '@angular/common/http';

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
  totalBytes = 0;

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  }

  constructor(private roomService: RoomsService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('chamando o onInit rooms-component')
    // console.log(this.headerChildrenComponent);
    this.roomService.getRooms().subscribe((data: RoomList[]) => {
      this.roomList = data;
    })
    this.roomService.getPhotos().subscribe((data) => {
      switch (data.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;

        case HttpEventType.ResponseHeader:
          console.log('Request success!');
          break;

        case HttpEventType.DownloadProgress:
          this.totalBytes += data.loaded;
          break;

        case HttpEventType.Response:
          console.log(data.body);
          break;
      }
    })
  }

  ngAfterViewInit(): void {
    console.log('chamando o afterViewInit rooms-component')
    this.headerChildrenComponent.first.title = 'John Cena'
    this.cdr.detectChanges();
    // this.headerChildrenComponent.last.title = 'Joe Rogan'
    // console.log(this.headerChildrenComponent);
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
        // roomNumber: 5,
        amenities: 'Bed',
        price: 100,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 5
      };
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
    // this.roomList = [...this.roomList, room];
    // this.roomList.push(room);
  }

  editRoom() {
    const editedRoom: RoomList =
      {
        roomType: 'Deluxe Room 1',
        roomNumber: '3',
        amenities: 'Bed + Aircon',
        price: 100,
        photos: '',
        checkInTime: new Date(),
        checkoutTime: new Date(),
        rating: 5
      };
    this.roomService.editRoom(editedRoom, '3').subscribe((data) => this.roomList = data)
  }

  deleteRoom() {
    this.roomService.removeRoom('3').subscribe(data => this.roomList = data);
  }

}
