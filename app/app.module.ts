import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/user-profile.component';
import { UserFormComponent } from './user/user-form.component';
import { UserService } from './shared/services/user.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, UserProfileComponent, UserFormComponent ],
    providers: [ UserService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }