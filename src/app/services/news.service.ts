import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export enum Category {
  all = "",
  business = "business",
  entertainment = "entertainment",
  general = "general",
  health = "health",
  science = "science",
  sports = "sports",
  technology = "technology"
}

@Injectable({
  providedIn: "root"
})
export class NewsService {
  url = "https://newsapi.org/v2/top-headlines?country=ph";
  apiKey = "0baa482bc74f442ebca9ab4ea00fb3df";

  constructor(private http: HttpClient) {}

  searchNews(category: string): Observable<any> {
    category = category == "all" ? "" : category;
    return this.http
      .get(`${this.url}&category=${category}&apiKey=${this.apiKey}`)
      .pipe(
        map(results => {
          return results["articles"];
        })
      );
  }
}
