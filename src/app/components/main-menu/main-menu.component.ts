import { Component, OnInit } from '@angular/core';
import {MainMenuItem} from "./main-menu-item";
import {MainMenuService} from "./main-menu.service";

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  providers: [MainMenuService]
})
export class MainMenuComponent implements OnInit {
  mainMenuItems: MainMenuItem[];

  constructor(private mainMenuService: MainMenuService) { }

  getMainMenuItems(): void{
    this.mainMenuService.getMainMenuItems().then(mainMenuItems => this.mainMenuItems = mainMenuItems);
  }

  ngOnInit() {
    this.getMainMenuItems();
  }

}
