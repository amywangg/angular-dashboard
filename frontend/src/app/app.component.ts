import { Component, OnInit , ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import * as angular from "angular";
import {FileService} from '../app/services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('start') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = true;
  isShowing = true;
  showSubSubMenu: boolean = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    dtTrigger: Subject<any> = new Subject();
    
    constructor(private breakpointObserver: BreakpointObserver, private api: FileService ) {}
    files: File[] = [];

  ngOnInit(): void {
    this.api.getFiles().subscribe(data => {
      this.files = data.name;
      this.dtTrigger.next();
    })
  }

    
    toggleSideNav(start: any) {
      this.sidenav.toggle();
  }
}
