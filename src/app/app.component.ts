import { Component } from '@angular/core';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';


   public open(modal: any): void {
     this.modalService.open(modal);
   }

	constructor(private modalService: NgbModal) {
    
	}
  
}
