import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  datas:any=[];
  constructor(private httpService:ServiceService,private modalService: NgbModal){}
  totalCards: number = 10;

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.httpService.Get("https://localhost:7191/books","").subscribe((resp)=>{
      this.datas=resp
      this.totalCards = this.datas.length;
    })
  }
  closeResult = '';

  open(content:any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}


	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
