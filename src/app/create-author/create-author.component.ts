import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../service.service';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject, debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Author } from '../data_interfaces/Author';
import { FormControl, FormGroup, Validators } from '@angular/forms';
const states = [
  'Romantik',
  'Dram',
  'Yeni Çıkanlar',
  'Aksiyon',
  'Macera',
  'Ders Kitapları',
  'Yazarlar',
  'Kitaplar',
  'Romanlar',
  'Halit Ziya Uşaklıgil',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent  implements OnInit{
  constructor(private httpService:ServiceService,private dialog: MatDialog){}
  public author:Author|null = {
    id: 0,
    name: "",
    lastName: "",
    category: {
      id: 0,
      name: ""
    },
  image: ""
  };

  displayedColumns: string[] = ['position', 'yazarGorseli', 'yazarAdi', 'yazilanTur'];
  datas:any=[];
  model: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
    this.getAuthors()
  }
  @ViewChild('addressPopup') addressPopup:any;
  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

  get form_authorName(){
    return this.addAuthorForm.get('form_authorName');
  }
  get form_authorLastName(){
    return this.addAuthorForm.get('form_authorLastName');
  }
  get form_authorCategory(){
    return this.addAuthorForm.get('form_authorCategory');
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
	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
		const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
		const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
		const inputFocus$ = this.focus$;

		return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
			map((term) =>
				(term === '' ? states : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 5),
			),
		);
	};
  name:String="";
  lastname:String="";
  category:any;

  getAuthors(){
    this.httpService.Get("https://localhost:7191/authors","").subscribe((resp)=>{
      this.datas=resp
    })
  }
  addAuthor(){
    let params={name:this.name,lastname:this.lastname, category:this.category}
    this.httpService.Post("https://localhost:7191/authors/add", params).subscribe((resp)=>{
  }, (err) => {
      alert(err.message)
    })
    this.closeAddressPopup()
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.author!.image = btoa(e.target.result);;
       };
       reader.readAsBinaryString(file);
    }
 }
 addAuthorForm = new FormGroup({
  form_authorName: new FormControl('',[Validators.required]),
  form_authorLastName: new FormControl('',[Validators.required]),
  form_authorCategory: new FormControl(''),
})

}