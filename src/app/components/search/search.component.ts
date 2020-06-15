import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 artistas: any[]=[];

  nuevascanciones: any[]=[];
  loading:boolean;
  errorCount: number;
  error: boolean;
  errorMsg: string;
  constructor(private spotify:SpotifyService){
    this.loading=false;
    this.error = false;
    this.errorMsg = "";
    this.errorCount = 0;
  }

  buscar(termino:string){
    if(!termino){
      this.loading=false;
      this.error=false;
    }else{
      this.loading=true;
    }

    this.getArtistas(termino);
   
    // this.spotify.getArtistas(termino)
    //   .subscribe((data:any)=>{
    //     console.log(data);
    //     this.artistas=data;
    //     this.loading=false;
    //   });
  }

  getArtistas(termino:string){
    
    
    if(!termino){
      this.loading=false;
    }else{
      this.loading=true;
    }

    return this.spotify.getArtistas(termino)
    .subscribe((data:any)=>{
      this.errorCount=0;
      this.artistas=data;
      this.loading=false;
   
    },(error)=>{
      
      this.errorCount++;
      this.errorMsg = error.error.error.message;
      (async () => {
        await this.spotify.getToken().then(() => {
          
          if (this.errorCount < 1) {
            this.getArtistas(termino);//recursividad
            
          } else {
            
            if(this.errorMsg!="No search query"){
              
              this.error=true;
              this.errorMsg =  "Oops! Something Gone Wrong.";
              this.errorMsg = error.error.error.message;
            }else{
              this.error=false;
            }
            
          }


        });
      })()

    });
  }

  

  

}
