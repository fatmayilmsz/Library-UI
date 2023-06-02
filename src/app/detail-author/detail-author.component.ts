import { Component, OnInit } from '@angular/core';
import { Author } from '../data_interfaces/Author';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail-author',
  templateUrl: './detail-author.component.html',
  styleUrls: ['./detail-author.component.scss']
})
export class DetailAuthorComponent implements OnInit{
  public author:Author|null = null;
  constructor(private route: ActivatedRoute,private httpService:ServiceService) 
  { 
  }
  ngOnInit(): void {
    this.httpService.Get(`https://localhost:7191/authors/${this.route.snapshot.paramMap.get('id')}`, "").subscribe((resp) => {
      this.author = resp as Author;
    });
  }

}
