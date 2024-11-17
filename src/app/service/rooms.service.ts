import { Injectable } from '@angular/core';
import {RoomList} from '../rooms/rooms';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) {
  }

  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList, id: string) {
    return this.http.put<RoomList[]>(`/api/rooms/${id}`, room);
  }

  removeRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const req = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', { reportProgress: true});
    return this.http.request(req);
  }
}
