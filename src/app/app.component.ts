import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component';
import {CommonModule} from '@angular/common';

//   template: `
// <!--    <h1> Hello World </h1>-->
// <!--    <div [ngSwitch]="role">-->
// <!--      <div *ngSwitchCase="'User'">Welcome User</div>-->
// <!--      <div *ngSwitchCase="'Admin'">Welcome Admin</div>-->
// <!--    </div>-->
//
//     <app-rooms></app-rooms>
//   `,
//   styles: ` h1 {color:red}`
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  role = 'Admin';
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
