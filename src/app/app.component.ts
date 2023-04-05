import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onFavouriteChange() {
    console.log("Favourite changed")
  }

  post = {
    title: "App Component Title",
    isFavourite: true
  }
}
