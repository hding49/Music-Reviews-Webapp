import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public SongAdded : String;
  public SongAddedPlaylist : String;
  public ownerPlaylist : String;
  public logged : boolean;
  public SongAddedReview : String;
  public god: boolean;
  public SongEditedPlaylist : String;
}
