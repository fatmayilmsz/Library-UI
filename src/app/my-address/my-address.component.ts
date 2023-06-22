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
  "Trabzon","Tunceli","Şanlıurfa","Uşak","Van","Yozgat","Zonguldak","Aksaray","Bayburt","Karaman","Kırıkkale","Batman","Şırnak","Bartın","Ardahan","Iğdır","Yalova","Karabük","Kilis","Osmaniye","Düzce"]
  districts: { [key: string]: string[] } = {
    'Adana': ['Aladağ', 'Ceyhan', 'Çukurova','Feke', 'İmamoğlu', 'Karaisalı','Karataş', 'Kozan', 'Pozantı','Saimbeyli', 'Sarıçam', 'Seyhan','Tufanbeyli', 'Yumurtalık', 'Yüreğir'],
    'Adıyaman': ['Besni', 'Çelikhan', 'Gerger','Gölbaşı', 'Kahta', 'Merkez','Samsat', 'Sincik', 'Tut'],
    'Afyonkarahisar': ['Başmakçı', 'Bayat', 'Bolvadin','Çay', 'Çobanlar', 'Dazkırı','Dinar', 'Emirdağ', 'Evciler','Hocalar', 'İhsaniye', 'İscehisar','Kızılören', 'Merkez', 'Sandıklı','Sinanpaşa', 'Şuhut', 'Sultandağı'],
    'Ağrı': ['Diyadin', 'Doğubayazıt', 'Eleşkirt','Hamur', 'Merkez', 'Patnos','Taşlıçay', 'Tutak'],
    'Amasya': ['Göynücek', 'Gümüşhacıköy', 'Hamamözü','Merkez', 'Merzifon', 'Suluova','Taşova'],
    'Ankara': ['Akyurt', 'Altındağ', 'Ayaş','Bala', 'Beypazarı', 'Çamlıdere','Çankaya', 'Çubuk', 'Elmadağ','Etimesgut', 'Evren', 'Gölbaşı','Güdül', 'Haymana', 'Kahramankazan','Kalecik', 'Keçiören', 'Kızılcahamam','Mamak', 'Nallıhan', 'Polatlı','Pursaklar', 'Şereflikoçhisar', 'Sincan','Yenimahalle'],
    'Antalya': ['Akseki', 'Aksu', 'Alanya','Demre', 'Döşemealtı', 'Elmalı','Finike','Gazipaşa', 'Gündoğmuş', 'İbradı','Kaş', 'Kemer', 'Kepez','Konyaaltı', 'Korkuteli', 'Kumluca','Manavgat', 'Muratpaşa', 'Serik'],
    'Artvin': ['Ardanuç', 'Arhavi', 'Borçka','Hopa', 'Kemalpaşa', 'Merkez','Murgul', 'Şavşat', 'Yusufeli'],
    'Aydın': ['Bozdoğan', 'Buharkent', 'Çine','Didim', 'Efeler', 'Germencik','İncirliova', 'Karacasu', 'Karpuzlu','Koçarlı', 'Köşk', 'Kuşadası','Kuyucak', 'Nazilli', 'Söke','Sultanhisar', 'Yenipazar'],
    //İlçeler buradan itibaren formata uygun yazılacak.
    'Balıkesir': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Bilecik': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Bingöl': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Bitlis': ['Konak', 'Bornova', 'Karşıyaka'],
    'Bolu': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Burdur': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Bursa': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Çanakkale': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Çankırı': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Çorum': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Denizli': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Diyarbakır': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Edirne': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Elazığ': ['Konak', 'Bornova', 'Karşıyaka'],
    'Erzincan': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Erzurum': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Eskişehir': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Gaziantep': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Giresun': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Gümüşhane': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Hakkari': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Hatay': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Isparta': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Mersin': ['Konak', 'Bornova', 'Karşıyaka'],
    'İstanbul': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'İzmir': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kars': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kastamonu': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kayseri': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kırklareli': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kırşehir': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kocaeli': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Konya': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Kütahya': ['Konak', 'Bornova', 'Karşıyaka'],
    'Malatya': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Manisa': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kahramanmaraş': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Mardin': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Muğla': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Muş': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Nevşehir': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Niğde': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Ordu': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Rize': ['Konak', 'Bornova', 'Karşıyaka'],
    'Sakarya': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Samsun': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Siirt': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Sinop': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Sivas': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Tekirdağ': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Tokat': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Trabzon': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Tunceli': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Şanlıurfa': ['Konak', 'Bornova', 'Karşıyaka'],
    'Uşak': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Van': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Yozgat': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Zonguldak': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Aksaray': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Bayburt': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Karaman': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kırıkkale': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Batman': ['Çankaya', 'Kızılay', 'Keçiören'],
    'Şırnak': ['Konak', 'Bornova', 'Karşıyaka'],
    'Bartın': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Ardahan': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Iğdır': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Yalova': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Karabük': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Kilis': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Osmaniye': ['Kadıköy', 'Beşiktaş', 'Şişli'],
    'Düzce': ['Kadıköy', 'Beşiktaş', 'Şişli']
  };


  
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
