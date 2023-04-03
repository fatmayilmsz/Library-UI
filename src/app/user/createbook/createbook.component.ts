import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	}
];

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})


export class CreatebookComponent implements OnInit{


  constructor(private httpService:ServiceService){		
    this.alerts = [];
  }
  name:String="";
  author:String="";
  publishing:String="";
  category:String="";
  summary:String="";
  alerts!: Alert[];



	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
 

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
      this.reset()
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
