import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {DataJsonService} from "../../shared/data-json.service";
import {EventType, Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

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
    {routes: ["/login"], header: "log-in"},
    {routes: ["/user-type"], header: "sign-up"}
  ];

  private dataService = inject(DataJsonService);
  private authService = inject(AuthService);
  private router = inject(Router);

  private currentHeader!: string;
  protected navButtons!: { link: string; name: string }[];

  ngOnInit(): void {
    this.listenToRoute();
  }

  private listenToRoute() {
    this.router.events.subscribe(res => {
      if (res.type === EventType.NavigationEnd) {
        const newHeader = this.getHeaderType(res.url);
        if (newHeader != this.currentHeader) {
          this.currentHeader = newHeader;
          this.dataService.fetchDataFromJson("header").subscribe(data => this.navButtons = (data[newHeader]));
        }
      }
    });
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
