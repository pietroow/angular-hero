import {Component, Self} from '@angular/core';
import {RoomsService} from '../service/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  // independent instance only for this component - used with @Self()
  // providers: [RoomsService]
})
export class EmployeeComponent {
  employeeName = 'John Papa';

  constructor(
    // @Self()
    private roomService: RoomsService) {

  }

}
