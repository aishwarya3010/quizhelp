import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject:any=[];
  constructor(public service:ServiceService,public router:Router) { 
    let data=
    {
     // "candidate":{"c_id":sessionStorage.getItem("c_id")},
      "subject":{"sid":sessionStorage.getItem("sid")}
      
    }

  }
  viewtopic(sid)
  {
    //alert(cid);
   sessionStorage['sid']=sid;
   //console.log("ak");
   console.log(sid);
    this.router.navigate(['topic']);

  }
  ngOnInit(): void {

   let cid= sessionStorage['cid'];

    console.log(cid);
    this.service.slist(cid).subscribe((res)=>{
      this.subject=res;
      
    })
  }

}
