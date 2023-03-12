import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  constructor(private httpService:ServiceService){}
  categories:any=[]
  name : string="";


  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.httpService.Get("https://localhost:7191/categories","").subscribe((resp)=>{this.categories=resp})
  }

}
