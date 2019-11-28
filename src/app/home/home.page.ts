import { Component, OnInit } from "@angular/core";
import { Observable, from } from "rxjs";
import { Category, NewsService } from "../services/news.service";
import { AdMobFree, AdMobFreeBannerConfig } from "@ionic-native/admob-free/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import * as moment from "moment";

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
    initialSlide: 1,
    // autoHeight: true,
    loop: true
  };

  constructor(
    private newsService: NewsService,
    private admob: AdMobFree,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    this.news = this.newsService.searchNews(this.category);

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
