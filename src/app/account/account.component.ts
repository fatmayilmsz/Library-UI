import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import {ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  datas:any=[];
  title:String="";
  city:String="";
  district:String="";
  neighborhood:String="";
  buildingnumber:String="";
  floorNumber:String="";
  apartmentNumber:String="";
  deliveryAddress:String="";
  postCode:String="";
  phoneNumber:String="";

  get form_title(){
    return this.addAddressForm.get('form_title');
  }
  get form_city(){
    return this.addAddressForm.get('form_city');
  }
  get form_district(){
    return this.addAddressForm.get('form_district');
  }
  get form_neighborhood(){
    return this.addAddressForm.get('form_neighborhood');
  }
  get form_buildingnumber(){
    return this.addAddressForm.get('form_buildingnumber');
  }
  get form_floorNumber(){
    return this.addAddressForm.get('form_floorNumber');
  }
  get form_apartmentNumber(){
    return this.addAddressForm.get('form_apartmentNumber');
  }
  get form_deliveryAddress(){
    return this.addAddressForm.get('form_deliveryAddress');
  }
  get form_postCode(){
    return this.addAddressForm.get('form_postCode');
  }

  get form_phoneNumber(){
    return this.addAddressForm.get('form_phoneNumber');
  }
  constructor(private httpService:ServiceService,private modalService: NgbModal,private dialog: MatDialog){}
  totalCards: number = 10;
  color:ThemePalette= 'primary';
  @ViewChild('addressPopup') addressPopup:any;
  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    this.httpService.Get("https://localhost:7191/books","").subscribe((resp)=>{
      this.datas=resp
      this.totalCards = this.datas.length;
    })
  }
  openAddressPopup() {
	const dialogRef = this.dialog.open(this.addressPopup);
	dialogRef.afterClosed().subscribe(result => {
	  // Burada pop-up kapandığında yapılacak işlemleri ekleyebilirsiniz.
	});
  }
  
  closeAddressPopup() {
    this.dialog.closeAll();
  }
 saveAddressButton(){
  this.closeAddressPopup();
  this.addAddress()
  
 }

  getFullName():any{
    return localStorage.getItem("ns");
  }
  addAddress(){
    let params={title:this.title, city:this.city, district:this.district, neighborhood:this.neighborhood, buildingNumber:this.buildingnumber, floorNumber:this.floorNumber, apartmentNumber:this.apartmentNumber,deliveryAddress:this.deliveryAddress, postCode:this.postCode, phoneNumber:this.phoneNumber}
    this.httpService.Post("https://localhost:7191/address/add",params).subscribe((resp)=>{
    console.log(params)   
  }, (err) => {
      alert(err.message)
    })
  }
  addAddressForm = new FormGroup({
    form_title: new FormControl(),
    form_city: new FormControl('',[Validators.required]),
    form_district: new FormControl('',[Validators.required]),
    form_neighborhood: new FormControl('',[Validators.required]),
    form_buildingnumber: new FormControl('',[Validators.required]),
    form_floorNumber: new FormControl(),
    form_apartmentNumber: new FormControl('',[Validators.required]),
    form_deliveryAddress: new FormControl('',[Validators.required]),
    form_postCode: new FormControl('',[Validators.required]),
    form_phoneNumber: new FormControl()
 })
 
}
