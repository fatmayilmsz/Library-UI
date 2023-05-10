import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, OperatorFunction, Subject, debounceTime, distinctUntilChanged, filter, map, merge } from 'rxjs';
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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	firstName:any="";
	lastName:any="";
  constructor(private authService: AuthService) {}
  ngOnInit() {
  }
	model: any;

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

  getFullName():any{
	this.firstName = localStorage.getItem("n")
	this.lastName = localStorage.getItem("s")
    return this.firstName + " " + this.lastName;
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem("isUserLoggedIn")=='true';

  }

  logOut(){
    this.authService.logout();
  }
}
