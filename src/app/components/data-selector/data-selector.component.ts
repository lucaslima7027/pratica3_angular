import { Component } from '@angular/core';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})
export class DataSelectorComponent {

  start_date = new Date("11/29/1999");
  end_date = new Date("11/30/1999");

  incrementStartDate() {
    this.start_date.setDate(this.start_date.getDate() + 1);
    this.start_date = new Date(this.start_date);
  }

  incrementEndDate() {
    this.end_date.setDate(this.end_date.getDate() + 1);
    this.end_date = new Date(this.end_date);
  }
}
