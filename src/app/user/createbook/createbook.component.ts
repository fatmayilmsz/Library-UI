import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit{
  constructor(private httpService:ServiceService){}
  name:String="";
  author:String="";
  publishing:String="";
  category:String="";
  summary:String="";
  get form_name(){
    return this.createBookForm.get('form_name');
  }
  get form_author(){
    return this.createBookForm.get('form_author');
  }
  get form_publishing(){
    return this.createBookForm.get('form_publishing');
  }
  get form_category(){
    return this.createBookForm.get('form_category');
  }
  get form_summary(){
    return this.createBookForm.get('form_summary');
  }
          

  ngOnInit(): void {
  }
  createBook(){
    let params={name:this.name,author:this.author,publishing:this.publishing,category:this.category,summary:this.summary}
     this.httpService.Post("https://localhost:7191/books",params).subscribe((resp)=>{
     }, (err) => {
      alert(err.message)
    });
  }
  createBookForm = new FormGroup({
    form_name: new FormControl('',[Validators.required]),
    form_author: new FormControl('',[Validators.required]),
    form_publishing: new FormControl('',[Validators.required]),
    form_category: new FormControl('',[Validators.required]),
    form_summary: new FormControl('',[Validators.required]),
 })
 

}
