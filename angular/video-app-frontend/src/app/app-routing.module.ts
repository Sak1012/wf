import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { ViewVideosComponent } from './view-videos/view-videos.component';

const routes: Routes = [
  { path: 'upload', component: UploadVideoComponent },
  { path: 'view', component: ViewVideosComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
