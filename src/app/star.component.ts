import { Component } from '@angular/core';

@Component({
    selector: 'star',
    template: `
        <h1>STAR</h1>
        <i (click)="onClick()" [ngClass]="isFavourite ? filled : empty"></i>
    `
}
)
export class StarComponent {
    isFavourite = false;
    empty = "bi bi-star";
    filled = "bi bi-star-fill";

    onClick() {
        this.isFavourite = !this.isFavourite;
    }
}