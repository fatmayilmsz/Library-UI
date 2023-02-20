import { Component,HostListener, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cardslider',
  templateUrl: './cardslider.component.html',
  styleUrls: ['./cardslider.component.scss']
})
export class CardsliderComponent {
  cardtatus:boolean=false;
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  totalCards: number = this.arr.length;
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
    this.initializeSlider();
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
