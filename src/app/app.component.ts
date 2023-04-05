import { FavouriteChangeEventArgs } from './favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: "App Component Title",
    isFavourite: true
  }

  onFavouriteChange(eventArgs: FavouriteChangeEventArgs) {
    console.log("Favourite changed: " + eventArgs.newValue)
  }

}
