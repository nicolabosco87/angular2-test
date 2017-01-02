import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "../shared/models/user"

@Component({
    selector: 'user-form',
    styles: [`
        form   {
          padding: 10px;
          background: #ECF0F1;
          border-radius: 3px;
          margin-bottom: 30px;
        }
      `],
    template: `
        <form #form="ngForm" *ngIf="active == true" (ngSubmit)="onSubmit()" >

            <div class="form-group" [ngClass]="{ 'has-error': first_name.invalid && first_name.touched }" >
                <input type="text" class="form-control" [(ngModel)]="newUser.first_name" placeholder="Name" name="first_name" required #first_name="ngModel" >
                <span *ngIf="first_name.invalid && first_name.touched" >Error!</span>
            </div>

            <div class="form-group" [ngClass]="{ 'has-error': last_name.invalid && last_name.touched }" >
                <input type="text" class="form-control" [(ngModel)]="newUser.last_name" placeholder="Name" name="last_name" required #last_name="ngModel" >
                <span *ngIf="last_name.invalid && last_name.touched" >Error!</span>
            </div>

            <button class="btn btn-primary btn-block" type="submit" [disabled]="form.invalid" >Create</button>

        </form>
    `
})
export class UserFormComponent {
    @Output() userCreated = new EventEmitter();
    newUser: User = new User();
    active: boolean = true;

    onSubmit() {
        this.userCreated.emit({ user: this.newUser });
        this.active = false;
        this.newUser = new User();
        setTimeout(() => this.active = true, 0);
    }
};