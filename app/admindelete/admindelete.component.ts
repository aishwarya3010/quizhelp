import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindelete',
  templateUrl: './admindelete.component.html',
  styleUrls: ['./admindelete.component.css']
})
export class AdmindeleteComponent implements OnInit {

  ques:any=[];
  constructor(public service:ServiceService,public router:Router) { }

  delete(qid)
  {
    this.service.deleteques(qid).subscribe((res)=>{
      this.ques=res;
      console.log(res);


  })
  }
  ngOnInit(): void {
    this.service.allQueslist().subscribe((res)=>{
      this.ques=res;
      console.log(res);


  })
  }

}
