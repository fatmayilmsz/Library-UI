import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.scss']
})
export class DetailbookComponent implements OnInit {
  public book:any = null;

  constructor(
    private route: ActivatedRoute,
    private httpService:ServiceService
  ) 
  { 
    
  }

  ngOnInit(): void {
    this.httpService.Get(`https://localhost:7191/${this.route.snapshot.paramMap.get('category')}/${this.route.snapshot.paramMap.get('id')}`, "").subscribe((resp) => {
      this.book = resp;
    });
  }
}