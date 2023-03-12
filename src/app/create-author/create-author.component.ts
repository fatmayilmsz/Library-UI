import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'yazarGorseli', 'yazarAdi', 'yazilanTur'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  position: number;
  yazarGorseli: string;
  yazarAdi: string;
  yazilanTur: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, yazarGorseli: 'Hydrogen', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 2, yazarGorseli: 'Helium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 3, yazarGorseli: 'Lithium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 4, yazarGorseli: 'Beryllium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 5, yazarGorseli: 'Boron', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 6, yazarGorseli: 'Carbon', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 7, yazarGorseli: 'Nitrogen', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 8, yazarGorseli: 'Oxygen', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 9, yazarGorseli: 'Fluorine', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 10, yazarGorseli: 'Neon', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 11, yazarGorseli: 'Sodium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 12, yazarGorseli: 'Magnesium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 13, yazarGorseli: 'Aluminum', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 14, yazarGorseli: 'Silicon', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 15, yazarGorseli: 'Phosphorus', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 16, yazarGorseli: 'Sulfur', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 17, yazarGorseli: 'Chlorine', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 18, yazarGorseli: 'Argon', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 19, yazarGorseli: 'Potassium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
  {position: 20, yazarGorseli: 'Calcium', yazarAdi: 'Milenaya Mektuplar', yazilanTur: 'H'},
];