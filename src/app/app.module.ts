import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideodetailComponent } from './videodetail/videodetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideolistComponent,
    VideodetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
