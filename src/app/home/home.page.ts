import { Component, OnInit } from "@angular/core";
import { Observable, from } from "rxjs";
import { Category, NewsService } from "../services/news.service";
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import * as moment from "moment";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  news: Observable<any>;
  category: Category = Category.all;

  sliderConfig = {
    zoom: false,
    centeredSlides: true,
    initialSlide: 0,
    // autoHeight: true,
    loop: true
  };

  constructor(
    private newsService: NewsService,
    private admob: AdMobFree,
    private iab: InAppBrowser,
    private router: Router
  ) {}

  ngOnInit() {
    let route = this.router.url.split("/");

    console.log("route", route[3]);
    this.news = this.newsService.searchNews(route[3]);

    let bannerConfig: AdMobFreeBannerConfig = {
      autoShow: true,
      id: "ca-app-pub-8223517584037932/6055771107"
    };

    this.admob.banner.config(bannerConfig);

    this.admob.banner
      .prepare()
      .then(() => {
        // success
      })
      .catch(e => console.log(e));
  }

  openBrowser(url: string) {
    this.iab.create(url);
  }

  getWhenPublished(datetime: string) {
    return moment(datetime || moment.now()).fromNow();
  }
}
