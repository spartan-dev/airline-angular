import { Component, Input} from '@angular/core';
import { Passenger } from '../../modules/passenger.interfce'
@Component({
    selector:'passenger-count',
    template:`
     <div>
       <h3>Airline Passengers Count </h3>
       <div>
           Total checked in : {{checkedInCount()}} / {{items?.length}}
       </div>
     </div>
    `
})

export class PassengerCountComponent{
    @Input()
    items:Passenger[];
    checkedInCount(){
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}