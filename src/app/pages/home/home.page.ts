import { ItemResult } from './../../models/item.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  searchString = '';
  results: ItemResult[];
  resultsDetails: Array<any>;
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  search() {
    this.dataService
      .searchByKeyword(this.searchString)
      .subscribe((data: any) => {
        console.log(data.items);
        this.results = data.items as ItemResult[];
        this.resultsDetails = [];
        this.results.forEach((item) => {
          this.dataService
            .getVideoDetail(item.id.videoId)
            .subscribe((res: any) => {
              this.resultsDetails.push(res.items[0]);
              console.log(res.items[0]);
              console.log(this.resultsDetails.length);
            });
        });
      });
  }
}
