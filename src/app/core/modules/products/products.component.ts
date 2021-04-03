import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  userIsAuthenticated = true;
  @ViewChild('drawer') public sidenav!: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private commonService: CommonService
  ) {}

  ngAfterViewInit(): void {
    this.commonService.setSidenav(this.sidenav);
  }

  onLogout() {
    //    this.authService.logout();
  }

  ngOnInit(): void {}
}
