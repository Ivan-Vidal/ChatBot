import { Component, Input, OnInit, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  http: any;
  bot: any;

  constructor() { }

  ngOnInit(): void {
  }
  @Input() ctx:any;
  


  returnData(date): Date{
    return new Date(date);
  }
  @ViewChild("messageContainer") messageContainer: ElementRef;



  disableScrollDown = false

  messages:any[] = [
    
  ]

  inputMsg:string;

  submit(){
    
    if(!this.inputMsg){
      return;
    }
    
    let m = {msg:this.inputMsg,user:"reciever",data:Date.now()}
    
    this.messages.push(m);
    
    this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    
    this.bot.talk(this.inputMsg).subscribe((res:any) => {
  
      console.log(res);
      this.messages.push({user:"sender",msg:res.result.fulfillment.speech,data:new Date(res.timestamp)});
      setTimeout(()=>{ this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight; },1) 

    },error => console.log(error))

    this.inputMsg = "";
  }

  
  talk(msg) {
    return this.http.post("https://api.dialogflow.com/v1/query?v=20150910", {

      "lang": "pt-br",
      "query": msg,
      "sessionId": "12345",

    },
      {
        headers:
        {
          Authorization: 'Bearer ' +  'e228c76aa6a54ce9b14a33b0980aacdf'
        }
      })
  }

}
