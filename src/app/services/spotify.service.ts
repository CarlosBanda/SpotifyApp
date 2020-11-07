import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQASfPhab0wFor5OCRFSB25e5oSFrtfpmISUV63qPrXD-zi5vmerE6rgj5niWZK5yUa85QGm3LfoKPjbRb8'
    })

    return this.http.get(url, {headers})
  }

  getNewReleases(){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQA7KFzfBv5fwjiYyANsI6tAOEGJPqlh_Dvru2zTgW4gTPjIWLFXHy4FM2cMDhdsBBarFyy_SJ8pBYZWmLk'
    // })
    return this.getQuery('browse/new-releases')
                    .pipe(map(data=>data['albums'].items ))
  }

  getArtista(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                      .pipe(map(data=>data['artists'].items))
  }
}
