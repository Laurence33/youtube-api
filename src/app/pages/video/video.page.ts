import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  videoId: string;
  videoDetails: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.videoId = this.route.snapshot.params.id;
    console.log(this);
    this.dataService.getVideoDetail(this.videoId).subscribe((res: any) => {
      this.videoDetails = res.items[0].snippet;
      console.log(res.items[0].snippet);
    });
  }
}
