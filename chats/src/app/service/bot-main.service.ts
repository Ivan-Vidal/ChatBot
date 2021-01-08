  
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MainBotService {

  readonly token = environment.dialogFlow.angularBot;

  constructor(private http:HttpClient) { }

  talk(msg) {
    return this.http.post("https://api.dialogflow.com/v1/query?v=20150910",{
      
      "lang": "pt-br",
      "query": msg,
      "sessionId": "12345"
    
    },
    {
       headers:{
      Authorization:'Bearer ' + environment.dialogFlow.angularBot
    }})
  }

 
}