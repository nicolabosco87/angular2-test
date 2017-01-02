import { Component, Input } from "@angular/core";
import { User } from "../shared/models/user"

@Component({
    selector: 'user-profile',
    template: `
    <div class="jumbotron" *ngIf="user">
        <h2>{{user.first_name}} {{user.last_name}}</h2>
        <img src="{{user.avatar}}" alt="" >
    </div>
    `
})
export class UserProfileComponent {
    @Input() user: User;
};