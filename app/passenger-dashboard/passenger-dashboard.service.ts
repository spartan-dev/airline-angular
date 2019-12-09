import { Passenger } from './modules/passenger.interfce'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //nos permite agregar el moetodo map de js a esta ifno que vine de la llamda de http
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * La data con dependencias extrnas se llama con el modulo http 
 * @Http permite la llamada a la dependencia externa 
 * @Injectable permiute pasar los atributos a los componentes debajo de este 
 * @Observable se trae para estar al pendiente de la info que se trae y suscrita a los eventos
 * @function getPassengers trae los pasajeros del request http
 * @function updatePassenger actualiza a un solo pasajero 
 */

const PASSENGER_API: string = '/api/passengers'
@Injectable()
export class PassengerDashboardService{
    constructor(private http: Http){}

    getPassengers(): Observable<Passenger[]>{
        return  this.http
        .get(PASSENGER_API)
        .map((response:Response)=> response.json())
        .catch((error: any) => Observable.throw(error.json()));
    }

    getPassenger(id: number): Observable<Passenger>{
        return  this.http
        .get(`${PASSENGER_API}/${id}`)
        .map((response:Response)=> response.json())
        .catch((error: any) => Observable.throw(error.json()));
    }

     updatePassenger(passenger: Passenger):Observable<Passenger>{
         let headers = new Headers({
             'Content-type': 'application/json'
         });

         let options = new RequestOptions({
             headers: headers
         })
        return this.http
        .put(`${PASSENGER_API}/${passenger.id}`,passenger,options)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()));
     }
     removePassenger(passenger: Passenger):Observable<Passenger>{
        return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .map((response: Response) => response.json())
        .catch((error: any) => Observable.throw(error.json()));
     }

}