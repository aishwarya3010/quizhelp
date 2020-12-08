import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
  ques:any=[];
  check1:any;
  answer:any;
  hideme:any;
  constructor(public service:ServiceService,public router:Router) { }
  check(event:any)
  {
    //alert(event.target.value);
    //console.log(event.target.value);
    sessionStorage["checkoption"]=event.target.value;
  }
  myFunction(ans)
  {
    //alert(ans);
    sessionStorage["answer"]=ans;
    let option= sessionStorage['checkoption'];
    console.log(option);
    console.log(ans);
    if(option==ans)
      this.check1="Right Answer";
      else
      this.check1="wrong Answer";

  }
  answerFunction()
  {
     this.answer= sessionStorage['answer'];
     
  }
  public show:boolean = false;
  public buttonName:any = 'Show';
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "View Answer";
  }
 
  ngOnInit(): void {
    let lid= sessionStorage['lid'];
    let tid= sessionStorage['tid'];
    console.log(lid);

    console.log(tid);
    this.service.qlist(tid,lid).subscribe((res)=>{
      this.ques=res;
      console.log(res);


  })
  }
}
