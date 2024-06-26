import {Component, inject, OnInit} from '@angular/core';
import {EventType, Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {DataJsonService} from "../../shared/services/data-json.service";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private readonly customHeaderRoutes = [
    {routes: ["/log-in"], header: "log-in"},
    {routes: ["/user-type"], header: "sign-up"}
  ];

  private dataService = inject(DataJsonService);
  protected authService = inject(AuthService);
  private router = inject(Router);

  private currentHeader!: string;
  protected navButtons!: { link: string; name: string; customAction?: () => {} }[];

  ngOnInit(): void {
    this.listenToRoute();
  }

  private listenToRoute() {
    this.router.events.subscribe(res => {
      if (!this.authService.userIsLoggedIn && res.type === EventType.NavigationEnd) {
        const newHeader = this.getHeaderType(res.url);
        if (newHeader != this.currentHeader) {
          this.currentHeader = newHeader;
          this.dataService.fetchDataFromJson("header").subscribe(data => this.navButtons = (data[newHeader]));
        }
      }
    });
    this.authService.userIsLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.dataService.fetchDataFromJson("header").subscribe(data => {
          this.navButtons = (data["user"]).map((button: any) => {
            if (button?.link === "log-out") button.customAction = () => this.logout();
            return button;
          });
        });
      }
    });
  }

  private logout() {
    this.authService.logOutUser();
  }

  private getHeaderType(route: string) {
    if (this.authService.userIsLoggedIn) return "user";
    return this.getCustomHeader(route);
  }

  private getCustomHeader(route: string): string {
    const customHeader = this.customHeaderRoutes.find(customHeader => customHeader.routes.includes(route));
    return customHeader?.header || "public-pages";
  }
}
