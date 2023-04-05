import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'favourite',
    template: `
        <h1>STAR</h1>
        <i (click)="onClick()" [ngClass]="isFavourite ? filled : empty"></i>
    `,
    styles: [
        `
            .bi.bi-star {
                color: red;
            }

            .bi.bi-star-fill {
                color: red;
            }
        `
    ]
}
)
export class FavouriteComponent {
    @Input('isFavourite') isFavourite = false;
    @Output('change') change = new EventEmitter();

    empty = "bi bi-star";
    filled = "bi bi-star-fill";

    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }

}

export interface FavouriteChangeEventArgs {
    newValue: boolean
}