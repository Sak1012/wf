import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VideoDisplayService {

  constructor() { }

  getVideos(): Promise<any> {
    return axios.get('http://localhost:3000/uploads')
      .then(response => {
        console.log('Fetched video filenames:', response.data);
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching video filenames:', error);
        throw new Error('Error fetching video filenames');
      });
  }
}
