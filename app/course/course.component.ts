import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course:any=[];
  subject:any=[];
  constructor(public service:ServiceService,public router:Router) {
    let data=
    {
     // "candidate":{"c_id":sessionStorage.getItem("c_id")},
      "course":{"cid":sessionStorage.getItem("cid")}
    }
   }
   viewsubject(cid)
  {
    //alert(cid);
   sessionStorage['cid']=cid;
   //console.log("ak");
   console.log(cid);
    this.router.navigate(['subject']);

  }
  ngOnInit(): void {
    this.service.clist().subscribe((res)=>{
      console.log(res);
      this.course=res;
    })
  }

}
