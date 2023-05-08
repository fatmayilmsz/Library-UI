import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Book } from '../data_interfaces/Book';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.scss']
})
export class DetailbookComponent implements OnInit {
  public book:Book|null = null;

  constructor(private route: ActivatedRoute, private httpService:ServiceService) 
  { 

  }

  ngOnInit(): void {
    this.httpService.Get(`https://localhost:7191/books/${this.route.snapshot.paramMap.get('category')}/${this.route.snapshot.paramMap.get('id')}`, "").subscribe((resp) => {
      this.book = resp as Book;
    });
  }
}