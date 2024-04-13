import { Component } from '@angular/core';
import { VideoUploadService } from '../video-upload.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {

  selectedFile: File | null = null;

  constructor(private videoUploadService: VideoUploadService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.videoUploadService.uploadVideo(this.selectedFile)
        .then(response => {
          console.log(response.data.message);
          // Reset the file input
          this.selectedFile = null;
        })
        .catch(error => {
          console.error('Error uploading video:', error);
        });
    }
  }
}
