import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container/container.component';
import {EmployeeComponent} from './employee/employee.component';

//   template: ``,
//   styles: ` h1 {color:red}`
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', { static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 40;
  // }
}
