import { Component, OnInit } from '@angular/core';
//Activa el router ya que es un componente contenedor nos lo permite no se debe hacr en dumb!
import { Router, Params, ActivatedRoute } from '@angular/router';
//nos permite usar el switchMap
import 'rxjs/add/operator/switchMap';
//service de las llamadas a la api o backend
import { PassengerDashboardService } from '../../passenger-dashboard.service';
// importa el mini modelo para asegurar la integridad de los datos de passenger 
import { Passenger } from '../../modules/passenger.interfce'
@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
     <div>
     <button (click)="goBack()">
     &lsaquo; Go Back</button>
       <passenger-form
       [detail]="passenger"
       (update)="onUpdatePassenger($event)"
       >
       
       </passenger-form>
     </div>
   `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) { }
  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data)
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event))
  }

  goBack() {
    this.router.navigate(['/passengers'])
  }
}