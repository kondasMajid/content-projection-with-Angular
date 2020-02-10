import { Component, Input } from '@angular/core';


@Component({
    selector: 'simple',
    template: `
    <div class="card card-block">
        <ng-content>
        
        </ng-content>
    </div>
    `,
    styleUrls: ['./simple.component.css']

})

export class SimpleComponent {

}