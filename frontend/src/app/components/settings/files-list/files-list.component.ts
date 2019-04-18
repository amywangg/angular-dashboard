import { Component, OnInit, ViewChild } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { File } from '../file';
import { Router } from '@angular/router';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})
export class FilesListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  MyDataSource: any;
  fileList: File[];
  displayedColumns: string[] = ['name', 'path', 'application', 'server', 'updated_date'];

  constructor(private api: FileService, private router: Router) { }

  ngOnInit() {
    this.getFiles();
  }

  // To Get List Of Employee
  getFiles() {
    this.api
      .getFiles()
      .subscribe((data: File[]) => {
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data;
        this.MyDataSource.paginator = this.paginator;
        this.MyDataSource.sort = this.sort;
      });
  }

  // To Edit Employee
  editFile(id) {
    this.router.navigate([`/files/edit/${id}`]);
  }

  // Search specific result
  filterFile(searchstring: string) {
    searchstring = searchstring.trim();
    searchstring = searchstring.toLowerCase();
    this.MyDataSource.filter = searchstring;
  }
}
