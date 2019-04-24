import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { Observable, of,Subject } from 'rxjs';

import { File } from '../file'; //gets the File class structure
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:4000/files';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.css']
})

export class FilesListComponent implements OnDestroy, OnInit {


  dtOptions: DataTables.Settings = {};
  files: File[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private api : FileService) {}
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.api.getFiles().subscribe(data => {
      this.files = data;
      this.dtTrigger.next();
    })

  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
