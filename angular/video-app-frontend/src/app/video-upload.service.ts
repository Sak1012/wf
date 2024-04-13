import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor() { }

  uploadVideo(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('video', file);
    
    return axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}
