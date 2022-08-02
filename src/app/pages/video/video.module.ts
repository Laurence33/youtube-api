import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { VideoPage } from './video.page';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule,
    FormsModule,
    IonicModule,
    VideoPageRoutingModule,
  ],
  declarations: [VideoPage],
})
export class VideoPageModule {}
