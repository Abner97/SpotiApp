import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  nuevascanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;
  errorCount: number;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.errorMsg = "";
    this.errorCount = 0;
    this.getNewReleases();

  }


  getNewReleases() {
    this.error = false;

    return this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.errorCount = 0;
        this.nuevascanciones = data;
        this.loading = false;
      }, (error) => {
        this.errorCount++;
        this.error = true;
        this.errorMsg = error.error.error.message;

        (async () => {
          await this.spotify.getToken().then(() => {
            
            if (this.errorCount < 1) {
              this.getNewReleases();
            } else {
              this.error = true;
              this.errorMsg = "Oops! Something Gone Wrong.";
            }


          });
        })()



      });

  }

  ngOnInit(): void {
  }

}
