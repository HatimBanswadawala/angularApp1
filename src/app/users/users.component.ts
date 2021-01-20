import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { UsersService } from '../users.service';
import { userList } from 'src/userList'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  ELEMENT_DATA: userList[] = [];
  dataSource = new MatTableDataSource<userList>(this.ELEMENT_DATA);
  displayedColumns: string[] = ['id','email','first_name','last_name','avatar'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:UsersService) { }

  ngOnInit(){
    this.dataSource = new MatTableDataSource<userList>(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllReports();
  }
 

public getAllReports(){
  this.service.userData().subscribe((data)=>{
    this.dataSource.data = data.data as userList[]
  })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
