import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

const API_KEY = environment.youtubeApiKey;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  urlString =
    'https://www.googleapis.com/youtube/v3/search?key=' + API_KEY + '&';
  constructor(private http: HttpClient) {}

  searchByKeyword(keyword: string) {
    return this.http.get(`${this.urlString}q=${keyword}`).pipe(take(1));
  }

  getVideoDetail(videoId: string) {
    // eslint-disable-next-line max-len
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCRNb-m0KjVXkI_cScCEymLI0h6SzAEyiA&q`;
    return this.http.get(`${url}videoId`).pipe(take(1));
  }
}
