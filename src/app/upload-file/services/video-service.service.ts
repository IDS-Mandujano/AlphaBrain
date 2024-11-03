import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVideo } from '../models/ivideo';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {
  private apiUrl = 'http://localhost:3000/api/videos';

  constructor(private http: HttpClient) { }

  uploadVideo(videoData: IVideo): Observable<any> {
    const formData = new FormData();
    formData.append('title', videoData.title);
    formData.append('description', videoData.description);
    formData.append('video', videoData.video);

    const currentDate = new Date().toISOString();
    formData.append('created_at', currentDate);
  
    return this.http.post(`${this.apiUrl}/upload`, formData);
  }  
}