import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '../video.model';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit,OnDestroy {

  constructor(private videoService: VideoService) { }

  videos: Video[] = [];
  vsub: Subscription = new Subscription;
  ngOnInit(): void {

    this.videoService.getVideos().subscribe(videos=>{
      this.videos = videos
    })
  }

  ngOnDestroy(): void {
      if(this.vsub)
      {
        this.vsub.unsubscribe()
      }
  }

}
