import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private dataservice:ServiceService, private router:Router,private emService:EmtrService) { }
  login(loginForm)
  {
    let data = loginForm.form.value;
   this.dataservice.adminlogin(data).subscribe(res=>{
    sessionStorage['email']=res['email'];
    //sessionStorage['c_id']=res['c_id'];
    
    this.emService.logInBtnSwitch(true);//
    this.router.navigate(['admindash']);

   },(err)=>{

    alert("Something went wrong");
   })
  }
  ngOnInit(): void {
  }

}
