import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../people.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['flag','name', 'age', 'balance', 'email', 'address'];
  dataSourceTab;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {

    this.peopleService.getPeople().subscribe((data) => {      
      this.dataSourceTab = new MatTableDataSource<any>(data);
      this.dataSourceTab.paginator = this.paginator;
    });

  }

  changeFlag(people){
    this.peopleService.alter(people).toPromise().then((data) => {
    });
  }

}
