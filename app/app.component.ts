import { Component } from "@angular/core";
import { User } from "./shared/models/user"
import { UserService } from "./shared/services/user.service"

@Component({
    selector: 'main-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']

})
export class AppComponent {
    message: string = "Welcome to the Angular 2 Test App! Meow!";

    users: User[] =  [
        //{ id: 1, name: 'Angi', username: 'angy70'},
        //{ id: 2, name: 'Angi2', username: 'angy71'},
        //{ id: 3, name: 'Angi3', username: 'angy72'}
        ];

    activeUser: User;

    constructor (private userService: UserService) {

    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
                users => this.users = users
        );
    }

    selectUser = function (user: User) {
        this.activeUser = user;
    }

    onUserCreated(event) {
        this.users.push(event.user);
        console.log(this.users);
    }
} ;

