import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'favourite',
    template: `
        <h1>STAR</h1>
        <i (click)="onClick()" [ngClass]="isFavourite ? filled : empty"></i>
    `
}
)
export class FavouriteComponent {
    @Input("isFavourite") isFavourite = false;
    @Output() change = new EventEmitter();

    empty = "bi bi-star";
    filled = "bi bi-star-fill";

    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit();
    }
}