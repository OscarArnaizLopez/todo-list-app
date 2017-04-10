import { Component, ViewChild } from '@angular/core';
import * as _ from "lodash"; 

interface Item {
    name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'A checklist';
  itemList: Item[] = [];


  logCheckbox(item) {
    //console.log('ITEM =>', JSON.stringify(item))
  }
  removeItem(name) {
    const index = _.findIndex(this.itemList, { 'name': name });
    this.itemList.splice(index, 1);
  }
  addItem(name) {
    this.itemList.push({name})
  }
}
