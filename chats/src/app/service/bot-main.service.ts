  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BotMainService {

  constructor(private http:HttpClient) { }

  talk(msg) {
    return this.http.post("https://api.dialogflow.com/v1/query?v=20150910",{
      
      "lang": "pt-br",
      "query": msg,
      "sessionId": "12345"
    
    },
    {
       headers:{
      Authorization:'Bearer ' + 'e228c76aa6a54ce9b14a33b0980aacdf'
    }})
  }

 
}