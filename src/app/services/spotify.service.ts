import { Injectable, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})

export class SpotifyService  {
  client_id:string;
  client_secret:string;
  access_token:string;
  cont:number;
  constructor(private http:HttpClient) {
    this.client_id="3ecbb3a13a424f33bfd6433014d1438a";
    this.client_secret="d80a64919fe24ab8bf3904d5e1ee6f1f";
    this.cont=0;
  
    
  }
 
  async getToken(){
    this.cont++;
    console.log(this.cont);
    const url=`https://spotifytokengenerator.herokuapp.com/token/${this.client_id}/${this.client_secret}`;
     await this.http.post(url,null).toPromise()
      .then((resp:any) => {
        this.access_token=resp.access_token;
      })
      .catch((error:any)=>{
        console.log("Error");
      })
    
      
   }

  //  async getToken2(){
  //   this.cont++;
  //   console.log(this.cont);
  //   const url=`http://localhost:3001/token/${this.client_id}/${this.client_secret}`;
  //    await this.http.post(url,null).toPromise()
  //     .then((resp:any) => {
  //       this.access_token=resp.access_token;
  //     })
  //     .catch((error:any)=>{
  //       console.log("Error");
  //     })
    
      
  //  }
   


   getQuery(query:string){
    const url= `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.access_token}`
    });
    return this.http.get(url,{headers});

   }
   getNewReleases(){
   
    return this.getQuery(`browse/new-releases`)
      .pipe(map(data => data['albums'].items));
    
   } 

   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data =>data['artists'].items));
  
   
   }

   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
      //.pipe(map(data =>data['artists'].items));
  
   
   }

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data =>data['tracks']));
  
   
   }
}
