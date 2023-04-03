import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let  course of courses">
                {{course}}
            </li>
        </ul>
        <div (click)="onDivClick()">
            <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>
        </div>
        <!-- two way binding - input to field -->
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <br>
        <h1>Titlecase example</h1>
        <input [(ngModel)]="someText"/>
        <h2>{{someText | titlecase}}</h2>
    `
})
export class CoursesComponent {
    title = "List of courses";
    isActive = true;
    courses;
    email = "default@mail.com";
    someText = "the science of happier spending"

    onDivClick() {
        console.log("Div was clicked!");
    }

    onSave($event : MouseEvent) {
        $event.stopPropagation();
        console.log("Button was clicked", event);
    }

    onKeyUp() {
        console.log(this.email);
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}