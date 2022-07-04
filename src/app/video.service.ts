import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private getUrl = "/api/videos"
  private insertUrl = "/api/insertVideo"
  private updateVideoUrl = "/api/updateVideo"
  private deleteUrl = "/api/Delete"
  constructor(private http:HttpClient) { }

  getVideos()
  {
    return this.http.get<any>(this.getUrl).pipe(
      map(data=>{
        return data.json()
      })
    )
  }

  getVideo(id:string)
  {

  }

  insertVideo(video: Video)
  {
    return this.http.post<any>(this.insertUrl,video).pipe(
      map(data=>{
        return data.json()
      })
    )
  }

  updateVideo(video: Video)
  {
    return this.http.put<any>(this.updateVideoUrl + video._id,video)
  }

  deleteVideo(video: Video)
  {
    return this.http.delete<any>(this.deleteUrl + video._id)

  }

}
