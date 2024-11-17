import { Injectable } from '@angular/core';
import {RoomList} from '../rooms/rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
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

  constructor() {
    console.log('Room service initialized')
  }

  getRooms() {
    return this.roomList;
  }
}
