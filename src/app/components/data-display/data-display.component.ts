import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit, OnChanges {

  @Input() start_date = new Date("10/31/1999");
  @Input() end_date = new Date("11/30/1999");

  dates_list: Date[] = [];

  ngOnInit(): void {
    this.createDates();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['start_date'] || changes['end_date']) {
      this.createDates();
    }
  }

  createDates() {
    this.dates_list = [];
    for (let index = new Date(this.start_date); index <= this.end_date; index.setDate(index.getDate() + 1)) {
      this.dates_list.push(new Date(index));
    }
  }
}
