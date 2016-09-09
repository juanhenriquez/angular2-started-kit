import { Component, Input } from "@angular/core";
import { User } from "../../shared/models/user";

@Component({
    selector: 'user-profile',
    templateUrl: './src/app/users/user-profile/user-profile.component.html',
    styleUrls: ['./src/app/users/user-profile/user-profile.component.css']
})
export class UserProfileComponent {
    @Input() user: User;
}
