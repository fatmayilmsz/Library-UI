import { Component,HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.scss']
})
export class CardsliderComponent implements OnInit{
  constructor(private httpService:ServiceService){}
  datas:any=[];

  private _name : string="";
  private _author : string="";
  private _publishing : string="";
  private _category : string="";

  public serializeData(data: any): string {
    const result: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (typeof data[key] !== 'function') {
          result[key] = data[key];
        }
      }
    }
    return JSON.stringify(result);
  }

  get name():string{
    return this._name;
  }
  set name(val:string){
    this._name=val;
  }
  get publishing():string{
    return this._publishing;
  }
  set publishing(val:string){
    this._publishing=val;
  } 
   
  get author():string{
    return this._author;
  }
  set author(val:string){
    this._author=val;
  }
    
  get category():string{
    return this._category;
  }
  set category(val:string){
    this._category=val;
  }

  cardtatus:boolean=false;
  totalCards: number = 10;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number=0;
  totalPages: number=0;
  overflowWidth: string="";
  cardWidth: string="";
  containerWidth: number=0;
  @ViewChild("container", { static: true, read: ElementRef })
  container!: ElementRef;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.getBooks();
  }
  getBooks(){
    this.httpService.Get("https://localhost:7191/books","").subscribe((resp)=>{
      this.datas=resp
      this.totalCards = this.datas.length;
      this.initializeSlider();
    })
  }
  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor:any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

}
