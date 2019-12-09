import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
      <div>
          <h1>Not Found</h1>
          <a routerLink="/">Go Home !!</a>
      </div>
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}