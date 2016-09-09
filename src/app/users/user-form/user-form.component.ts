import { Component, Output, EventEmitter } from "@angular/core";
import { User } from "../../shared/models/user";

@Component({
    selector: 'user-form',
    templateUrl: "./src/app/users/user-form/user-form.component.html",
    styleUrls: ["./src/app/users/user-form/user-form.component.css"]
})
export class UserFormComponent {

    @Output() userCreated = new EventEmitter();

    newUser: User = new User();
    active: boolean = true;
    onSubmit () {
        // Show the event that the user was created.
        this.userCreated.emit({ user: this.newUser });

        this.newUser = new User();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
