import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:ServiceService,private router:Router) { }
  course:any=[];
  subject:any=[];
  topic:any=[]; 
  insert(myForm){

    let data = myForm.form.value;

    this.service.quesInsert(data).subscribe((res)=>{
      //sessionStorage['c_id']=res;
      
    this.router.navigate(['home']);


    
    },(error)=>{

    })
 

  }
  subjectlist(event:any)
{
  console.log(event.target.value);
  // alert(event.target.value);
  this.service.slist(event.target.value).subscribe((res)=>{
    this.subject=res;
    
  })

}
topiclist(event1:any)
{
  console.log(event1.target.value);
  // alert(event1.target.value);
  this.service.tlist(event1.target.value).subscribe((res)=>{
    console.log(res);
    this.topic=res;
    
  })

}
list(event:any)
{
  console.log(event.target.value);
}
level(event)
{
  console.log(event.target.value);
}
  ngOnInit(): void {
    this.service.clist().subscribe((res)=>{
      console.log(res);
      this.course=res;
    })
  }

}
