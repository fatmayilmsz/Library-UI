import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  datas:any=[];
  constructor(private httpService:ServiceService){}
  totalCards: number = 10;

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.httpService.Get("https://localhost:7191/books","").subscribe((resp)=>{
      this.datas=resp
      this.totalCards = this.datas.length;
    })
  }

}
