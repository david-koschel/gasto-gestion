import {Component, inject, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private userService  = inject(UserService);

  ngOnInit(): void {
    if (this.userService.userIsLoggedIn()) {
      console.log("logged in");
    }
  }
}
