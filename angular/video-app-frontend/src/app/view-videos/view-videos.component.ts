import { Component, OnInit } from '@angular/core';
import { VideoDisplayService } from '../video-display.service';

@Component({
  selector: 'app-view-videos',
  templateUrl: './view-videos.component.html',
  styleUrls: ['./view-videos.component.css']
})
export class ViewVideosComponent implements OnInit {

  videos: string[] = [
    "video-1712981393688.mp4",
    "video-1712981396019.mp4",
    "video-1712981396184.mp4",
    "video-1712981554263.mp4",
    "video-1712981566352.mp4"
  ];

  constructor(private videoDisplayService: VideoDisplayService) { }

  ngOnInit(): void {
    // Comment out fetchVideos since we are using a manual array
    // this.fetchVideos();
  }

  // Comment out fetchVideos method since we are using a manual array
  // fetchVideos(): void {
  //   this.videoDisplayService.getVideos()
  //     .then(videoFilenames => {
  //       console.log('Video filenames fetched:', videoFilenames);
  //       this.videos = videoFilenames;
  //     })
  //     .catch(error => {
  //       console.error('Error fetching video filenames:', error);
  //     });
  // }
}
