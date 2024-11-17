export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomType: string;
  roomNumber?: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkoutTime: Date;
  rating: number;
}
