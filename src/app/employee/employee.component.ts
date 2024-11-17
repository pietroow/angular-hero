import { Component } from '@angular/core';
import {RoomsService} from '../service/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  // independent instance only for this component
  providers: [RoomsService]
})
export class EmployeeComponent {
  employeeName = 'John Papa';

  constructor(private roomService: RoomsService) {

  }

}
