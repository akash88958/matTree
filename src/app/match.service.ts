import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http:HttpClient) { }
  getStanding(){
    let matchStanding=new HttpHeaders()
      .set('X-RapidAPI-Key', '06f6d5656emshf1d1cab2d266687p1aff20jsn0e5ca98a4c18')
      .set('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com')

      return this.http.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',{'headers':matchStanding})
  }
}
