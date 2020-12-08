import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(public service:ServiceService,public router:Router) { }
  topic:any=[];
  viewques(tid)
  {
    //alert(cid);
   sessionStorage['tid']=tid;
   //console.log("ak");
   console.log(tid);
    this.router.navigate(['level']);

  }
  ngOnInit(): void {
    let sid= sessionStorage['sid'];

    console.log(sid);
    this.service.tlist(sid).subscribe((res)=>{
      this.topic=res;
  })
}
}
