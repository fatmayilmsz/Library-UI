import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-approval-book',
  templateUrl: './approval-book.component.html',
  styleUrls: ['./approval-book.component.scss']
})
export class ApprovalBookComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'kitapGorseli', 'kitapAdi', 'kitapYazari', 'kitapOzeti', 'yayinEvi', 'basim', 'kitapTuru', 'kitabinDurumu'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  position: number;
  kitapGorseli: string;
  kitapAdi: string;
  kitapYazari: string;
  kitapOzeti: string;
  yayinEvi: string;
  basim: string;
  kitapTuru: string;
  kitabinDurumu: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, kitapGorseli: 'Hydrogen', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 2, kitapGorseli: 'Helium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 3, kitapGorseli: 'Lithium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 4, kitapGorseli: 'Beryllium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 5, kitapGorseli: 'Boron', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 6, kitapGorseli: 'Carbon', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 7, kitapGorseli: 'Nitrogen', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 8, kitapGorseli: 'Oxygen', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 9, kitapGorseli: 'Fluorine', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 10, kitapGorseli: 'Neon', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 11, kitapGorseli: 'Sodium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 12, kitapGorseli: 'Magnesium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 13, kitapGorseli: 'Aluminum', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 14, kitapGorseli: 'Silicon', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 15, kitapGorseli: 'Phosphorus', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 16, kitapGorseli: 'Sulfur', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 17, kitapGorseli: 'Chlorine', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 18, kitapGorseli: 'Argon', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 19, kitapGorseli: 'Potassium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
  {position: 20, kitapGorseli: 'Calcium', kitapAdi: 'Milenaya Mektuplar', kitapYazari: 'H', kitapOzeti: 'H', yayinEvi: 'H', basim: 'H', kitapTuru: 'H', kitabinDurumu: 'H'},
];
