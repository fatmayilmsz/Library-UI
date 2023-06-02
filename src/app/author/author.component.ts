import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject, debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../service.service';
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
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit{
	model: any;
  datas:any=[];
  constructor(private httpService:ServiceService){}
  ngOnInit() {
    this.getAuthors()
  }

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
	focus$ = new Subject<string>();
	click$ = new Subject<string>();

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
  getAuthors(){
    this.httpService.Get("https://localhost:7191/authors","").subscribe((resp)=>{
      this.datas=resp
    })
  }

}