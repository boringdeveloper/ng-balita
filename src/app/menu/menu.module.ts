import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "",
    component: MenuPage,
    children: [
      {
        path: "news/all",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/business",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/entertainment",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/general",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/health",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/science",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/sports",
        loadChildren: "../home/home.module#HomePageModule"
      },
      {
        path: "news/technology",
        loadChildren: "../home/home.module#HomePageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
