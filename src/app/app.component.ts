import { Component } from "@angular/core";
import { User } from './shared/models/user';


@Component({
    selector: 'my-app',
    templateUrl: "./src/app/app.component.html",
    styles: ["./src/app/app.component.css"]
})
export class AppComponent {

    message: string = "Hello!"
    users: User[] = [
        { _id: 26, name: 'Juan', username: 'juanhenriquez' },
        { _id: 10, name: 'Michel', username: 'michimore' },
        { _id: 2, name: 'Gustavo', username: 'gustato09' }
    ];
    activeUser: User;

    selectUser(user) {
        if(this.activeUser === user) {
            this.activeUser = undefined;
        } else {
            this.activeUser = user;
            console.log(this.activeUser);
        }
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }

}
