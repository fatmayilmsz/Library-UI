import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Publishing } from '../data_interfaces/Publishing'

@Component({
  selector: 'app-detail-publishing',
  templateUrl: './detail-publishing.component.html',
  styleUrls: ['./detail-publishing.component.scss']
})
export class DetailPublishingComponent implements OnInit{
  public publishing:Publishing|null = null;

  constructor(private route: ActivatedRoute,private httpService:ServiceService) 
  { 
  }

  ngOnInit(): void {
    this.httpService.Get(`https://localhost:7191/publishers/${this.route.snapshot.paramMap.get('id')}`, "").subscribe((resp) => {
      this.publishing = resp as Publishing;
    });
  }

}
