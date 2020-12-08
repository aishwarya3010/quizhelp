import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor(public service:ServiceService,public router:Router) { }
viewques(lid)
{
  console.log(lid);
  if(lid==1)
  sessionStorage['lid']="EASY";
  if(lid==2)
  sessionStorage['lid']="MEDIUM";
  if(lid==3)
  sessionStorage['lid']="HARD";
  
   //console.log("ak");
    this.router.navigate(['ques']);
}
  ngOnInit(): void {

   
  }

}
