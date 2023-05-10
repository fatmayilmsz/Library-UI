import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.scss']
})
export class MyInformationComponent implements OnInit{
  constructor(private httpService:ServiceService){}
  ngOnInit() {
    this.getMyDatas()
  }


  firstName:any=""
  lastName:any=""
  email:any=""
  phoneNo:any=""
  updateMyData(){
    let params={firstName:this.firstName,lastName:this.lastName,email:this.email}
    console.log(params)
    this.httpService.Put("https://localhost:7191/users/update",params).subscribe((resp)=>{},(err)=>{alert(err.message)})
  }


  fullNameForAddress:any=""
  getMyDatas(){
    this.firstName = localStorage.getItem("n")
    this.lastName = localStorage.getItem("s")
    this.fullNameForAddress = this.firstName + " " + this.lastName
    this.email = localStorage.getItem("email");    
  }
  

  datas:any=[];
  getUser(){
    this.httpService.Get("https://localhost:7191/users","").subscribe((resp)=>{
      this.datas=resp
    })
  }


  currentPassword:any=""
  newPassword:any=""
  againNewPassword:any=""
  currentUser:any=""
  updatePassword(){
    if(this.newPassword!=this.againNewPassword || this.newPassword=="" || this.againNewPassword=="" || this.currentPassword==""){
      alert("Hatalı format")
    }
    else{
      this.getUser()
      let currentUserEmail = localStorage.getItem("email")
       this.currentUser = this.datas.find((p:any)=>{return p.email==currentUserEmail})
       console.log(this.currentUser)
       bcrypt.compare(this.currentPassword,this.currentUser.password,(err,result)=>{
        if(result)
        {
          console.log("Başarılı")
          let params={currentpassword:this.currentPassword,newpassword:this.newPassword,againnewpassword:this.againNewPassword}
          this.httpService.Put("https://localhost:7191/users/update",params).subscribe((resp)=>{},(err)=>{alert(err.message)})
        }
        else
        {
        console.log('Hatalı şifre');
        }
       })
    }
  }


}
