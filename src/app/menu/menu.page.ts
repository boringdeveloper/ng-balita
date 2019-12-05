import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage implements OnInit {
  public appPages = [
    {
      title: "Headlines",
      url: "/menu/news/all",
      icon: "paper"
    },
    {
      title: "Business",
      url: "/menu/news/business",
      icon: "business"
    },
    {
      title: "Entertainment",
      url: "/menu/news/entertainment",
      icon: "logo-game-controller-b"
    },
    {
      title: "General",
      url: "/menu/news/general",
      icon: "logo-rss"
    },
    {
      title: "Health",
      url: "/menu/news/health",
      icon: "heart"
    },
    {
      title: "Science",
      url: "/menu/news/science",
      icon: "thermometer"
    },
    {
      title: "Sports",
      url: "/menu/news/sports",
      icon: "bicycle"
    },
    {
      title: "Technology",
      url: "/menu/news/technology",
      icon: "rocket"
    }
  ];

  selectedPath = "";

  constructor(private router: Router, private iab: InAppBrowser) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}

  goToNewsApi() {
    this.iab.create("https://newsapi.org/");
  }
}
