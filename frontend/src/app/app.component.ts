import { Component, OnInit , ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSidenav} from '@angular/material/sidenav';
import * as angular from "angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('start') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = true;
  isShowing = true;
  showSubSubMenu: boolean = false;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    constructor(private breakpointObserver: BreakpointObserver) {}
    toggleSideNav(start: any) {
      this.sidenav.toggle();
  }
}
