import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent {
  constructor(private httpService:ServiceService){}
  getDatasCategory:any=[];
  ngOnInit() {
    this.getCategories()
  }

  getCategories(){
    this.httpService.Get("https://localhost:7191/categories","").subscribe((resp)=>{
      this.getDatasCategory=resp
    })
  }
}
