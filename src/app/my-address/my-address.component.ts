import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit{
  datas:any=[];
  cities:string[] = ["Adana","Adıyaman","Afyonkarahisar","Ağrı","Amasya","Ankara","Antalya","Artvin","Aydın","Balıkesir","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli",
  "Diyarbakır","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Isparta","Mersin","İstanbul","İzmir","Kars","Kastamonu","Kayseri","Kırklareli","Kırşehir",
  "Kocaeli","Konya","Kütahya","Malatya","Manisa","Kahramanmaraş","Mardin","Muğla","Muş","Nevşehir","Niğde","Ordu","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Tekirdağ","Tokat",
  "Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman","Kırıkkale","Batman","Şırnak","Bartın","Ardahan","Iğdır	","Yalova","Karabük","Kilis","Osmaniye","Düzce"]
  

  fullName:String="";
  title:String="";
  city:any;
  district:any;
  neighborhood:String="";
  buildingnumber:String="";
  floorNumber:String="";
  apartmentNumber:String="";
  deliveryAddress:String="";
  postCode:String="";
  phoneNumber:String="";
  currentUser:any=""

  get form_fullName(){
    return this.addAddressForm.get('form_fullName');
  }
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

  constructor(private httpService:ServiceService,private dialog: MatDialog,private authService:AuthService){}
  totalCards: number = 10;
  color:ThemePalette= 'primary';
  @ViewChild('addressPopup') addressPopup:any;
  ngOnInit() {
    // this.getBooks()
  }
  // getBooks(){
  //   this.httpService.Get("https://localhost:7191/books","").subscribe((resp)=>{
  //     this.datas=resp
  //     this.totalCards = this.datas.length;
  //   })
  // }

  openAddressPopup() {
	const dialogRef = this.dialog.open(this.addressPopup);
	dialogRef.afterClosed().subscribe(result => {
	  // Burada pop-up kapandığında yapılacak işlemleri ekleyebilirsiniz.
	});
  }
  
  closeAddressPopup() {
    this.dialog.closeAll();
  }
  fullNameForAddress:any=""

   getFullName():any{
     return this.fullNameForAddress
   }
  addAddress(){
    let params={fullName:this.fullName,title:this.title, city:this.city, district:this.district, neighborhood:this.neighborhood, buildingNumber:this.buildingnumber, floorNumber:this.floorNumber, apartmentNumber:this.apartmentNumber,deliveryAddress:this.deliveryAddress, postCode:this.postCode, phoneNumber:this.phoneNumber}
    console.log(this.addAddressForm.get('form_fullName'))
    console.log(this.addAddressForm.get('form_fullName'))

    this.httpService.Post("https://localhost:7191/address/add",params).subscribe((resp)=>{
  }, (err) => {
      alert(err.message)
    })
    this.closeAddressPopup()
  }
  addAddressForm = new FormGroup({
    form_fullName: new FormControl('',[Validators.required]),
    form_title: new FormControl('',[Validators.required]),
    form_city: new FormControl('',[Validators.required]),
    form_district: new FormControl('',[Validators.required]),
    form_neighborhood: new FormControl('',[Validators.required]),
    form_buildingnumber: new FormControl(),
    form_floorNumber: new FormControl(),
    form_apartmentNumber: new FormControl(),
    form_deliveryAddress: new FormControl('',[Validators.required]),
    form_postCode: new FormControl(),
    form_phoneNumber: new FormControl('',[Validators.required])
 })
 onSubmit() {
  console.log(this.addAddressForm.value);
}

}
